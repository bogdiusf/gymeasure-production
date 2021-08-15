import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import { db } from '../services/firebase'
import ConfirmationPopup from './shared/ConfirmationPopup'
import Measurements from './pages/dashboard/Measurements'
import PersonalInfoPopup from './pages/dashboard/PersonalInfoPopup'
import DisplayNavbar from './pages/dashboard/DisplayNavbar'
import MeasurementsPopup from './pages/dashboard/MeasurementsPopup'
import { getCurrentDateAndTime } from '../utils'
import { getMeasurements, getUserInformation, updateUserInformation } from '../api'

export default function Dashboard() {
    const { currentUser } = useAuth()
    const [measurements, setMeasurements] = useState([])
    const [filteredMeasurements, setFilteredMeasurements] = useState()
    const [editMeasurement, setEditMeasurement] = useState(false)
    const [deleteDocId, setDeleteDocId] = useState(null)
    const [error, setError] = useState('')
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        age: '',
        sex: ''
    })
    const [measurementsSizes, setMeasurementsSizes] = useState({
        measurementId: '',
        armsSize: '',
        quadsSize: '',
        chestSize: '',
        waistSize: ''
    })

    // modals
    const [showPopup, setShowPopup] = useState(false)
    const [showPersInfoPopup, setShowPersInfoPopup] = useState(false)
    const [showAddMeasurementsPopup, setShowAddMeasurementsPopup] = useState(false)

    useEffect(() => {
        try {
            getMeasurements(currentUser.uid, setMeasurements, setFilteredMeasurements)
            getUserInformation(currentUser.uid, setPersonalInfo)
        } catch (e) {
            alert(e)
        }
    }, [currentUser.uid])

    const updatePersonalInfo = async () => {
        try {
            updateUserInformation(currentUser.uid, personalInfo)
            setError('Your info has been successfully updated!')
            setShowPersInfoPopup(false)
            setShowPopup(true)
        } catch (e) {
            alert(e)
        }
    }

    const addMeasurements = async () => {
        // TODO: move in api.js
        try {
            await db.collection('users').doc(currentUser.uid).collection('measurements').doc().set({
                arms: measurementsSizes.armsSize,
                quads: measurementsSizes.quadsSize,
                waist: measurementsSizes.waistSize,
                chest: measurementsSizes.chestSize,
                measured_on_day: getCurrentDateAndTime().date,
                measured_at_time: getCurrentDateAndTime().time,
                measured_on: new Date()
            })

            setError('Your info has been successfully added!')
            setShowAddMeasurementsPopup(false)
            setShowPopup(true)
            setMeasurementsSizes({
                ...measurementsSizes,
                armsSize: '',
                quadsSize: '',
                chestSize: '',
                waistSize: ''
            })
        } catch (e) {
            alert(e)
        }
    }

    const updateMeasurement = async () => {
        // TODO: move in api.js
        try {
            await db.collection('users').doc(currentUser.uid).collection('measurements').doc(measurementsSizes.measurementId).update({
                waist: measurementsSizes.waistSize,
                arms: measurementsSizes.armsSize,
                chest: measurementsSizes.chestSize,
                quads: measurementsSizes.quadsSize
            })

            setMeasurements(
                measurements.map((item) => {
                    if (item.document_id === measurementsSizes.measurementId) {
                        return {
                            ...item,
                            waist: measurementsSizes.waistSize,
                            arms: measurementsSizes.armsSize,
                            chest: measurementsSizes.chestSize,
                            quads: measurementsSizes.quadsSize
                        }
                    }
                    return item
                })
            )
            setError('Your info has been successfully updated!')
            setShowAddMeasurementsPopup(false)
            setShowPopup(true)
        } catch (e) {
            console.log(e)
        }
    }

    const setMeasurementForEditing = (id, arms, quads, waist, chest) => {
        setEditMeasurement(true)
        setMeasurementsSizes({
            measurementId: id,
            armsSize: arms,
            quadsSize: quads,
            waistSize: waist,
            chestSize: chest
        })
        setShowAddMeasurementsPopup(true)
    }

    const resetMeasurementForEditing = () => {
        setMeasurementsSizes({
            measurementId: '',
            armsSize: '',
            quadsSize: '',
            waistSize: '',
            chestSize: ''
        })
    }

    const filterMeasurements = (text) => {
        if (text !== '') {
            let newArr = measurements.filter((item) => item.measured_on_day.includes(text))
            setMeasurements(newArr)
            newArr = filteredMeasurements.filter((item) => item.measured_on_day.includes(text))
            if (text !== '' && newArr.length > 0) {
                setMeasurements(newArr)
            }
        } else if (text === '') {
            setMeasurements(filteredMeasurements)
        }
    }

    return (
        <React.Fragment>
            <DisplayNavbar
                setEditMeasurement={setEditMeasurement}
                firstName={personalInfo.firstName}
                lastName={personalInfo.lastName}
                currentUser={currentUser}
                setShowPersInfoPopup={setShowPersInfoPopup}
                setShowAddMeasurementsPopup={setShowAddMeasurementsPopup}
            />

            <MeasurementsPopup
                editMeasurement={editMeasurement}
                resetMeasurementForEditing={resetMeasurementForEditing}
                updateMeasurement={updateMeasurement}
                showAddMeasurementsPopup={showAddMeasurementsPopup}
                setShowAddMeasurementsPopup={setShowAddMeasurementsPopup}
                addMeasurements={addMeasurements}
                measurementsSizes={measurementsSizes}
                setMeasurementsSizes={setMeasurementsSizes}
            />

            <Measurements
                setError={setError}
                setConfirmationModal={setShowPopup}
                measurements={measurements}
                filterMeasurements={filterMeasurements}
                setMeasurementForEditing={setMeasurementForEditing}
                setDeleteDocId={setDeleteDocId}
                deleteDocId={deleteDocId}
            />

            <ConfirmationPopup isUserFeedbackRequired={false} title={error} showPopup={showPopup} onYes={() => setShowPopup(false)} />

            <PersonalInfoPopup
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
                showPersInfoPopup={showPersInfoPopup}
                setShowPersInfoPopup={setShowPersInfoPopup}
                updatePersonalInfo={updatePersonalInfo}
                setError={setError}
                setConfirmationModal={setShowPopup}
            />
        </React.Fragment>
    )
}
