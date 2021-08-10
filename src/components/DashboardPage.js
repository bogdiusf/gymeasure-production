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

export default function Dashboard() {
    // getting the current user context
    const { currentUser } = useAuth()

    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        age: '',
        sex: ''
    })

    const [measurements, setMeasurements] = useState([])

    const [editMeasurement, setEditMeasurement] = useState(false)

    const [measurementsSizes, setMeasurementsSizes] = useState({
        measurementId: '',
        armsSize: '',
        quadsSize: '',
        chestSize: '',
        waistSize: ''
    })

    // const [measurementId, setMeasurementId] = useState(null)
    // const [armsSize, setArmsSize] = useState('')
    // const [quadsSize, setQuadsSize] = useState('')
    // const [chestSize, setChestSize] = useState('')
    // const [waistSize, setWaistSize] = useState('')

    // modals
    const [showPopup, setShowPopup] = useState(false)
    const [showPersInfoPopup, setShowPersInfoPopup] = useState(false)
    const [showAddMeasurementsPopup, setShowAddMeasurementsPopup] = useState(false)
    const [showDeleteMeasurementConfirmationModal, setShowDeleteMeasurementConfirmationModal] =
        useState(false)

    // initializing needed states  -----------
    const [filteredMeasurements, setFilteredMeasurements] = useState()
    const [error, setError] = useState('')
    const [deleteDocId, setDeleteDocId] = useState(null)

    useEffect(() => {
        const fetchMeasurements = () => {
            db.collection('users')
                .doc(currentUser.uid)
                .collection('measurements')
                .orderBy('measured_on', 'desc')
                .onSnapshot((response) => {
                    const tempArray = []
                    response.forEach((item) => {
                        const objToBeAdded = {
                            document_id: item.id,
                            measured_on_day: item.measured_on_day,
                            measured_at_time: item.measured_at_time,
                            ...item.data()
                        }
                        tempArray.push(objToBeAdded)
                    })
                    setMeasurements(tempArray)
                    setFilteredMeasurements(tempArray)
                })
        }

        const fecthUserInformation = () => {
            db.collection('users')
                .doc(currentUser.uid)
                .collection('personal-info')
                .onSnapshot((response) => {
                    let personalInfo = {}
                    response.forEach((item) => {
                        personalInfo = { ...item.data() }
                    })
                    setPersonalInfo({
                        firstName: personalInfo?.firstName,
                        lastName: personalInfo?.lastName,
                        age: personalInfo?.age,
                        sex: personalInfo?.sex
                    })
                })
        }

        fetchMeasurements()
        fecthUserInformation()
    }, [currentUser.uid])

    const updatePersonalInfo = async () => {
        try {
            await db
                .collection('users')
                .doc(currentUser.uid)
                .collection('personal-info')
                .doc('Informatii personale')
                .update({ ...personalInfo })

            setError('Your info has been successfully updated!')
            setShowPersInfoPopup(false)
            setShowPopup(true)
        } catch (e) {
            alert(e)
        }
    }

    // function that returns a formatted date 'dd/mm/yyyy' and time 'hh:mm:ss'
    const getCurrentDateAndTime = () => {
        const completeDate = new Date()
        const day =
            completeDate.getDate() < 10 ? '0' + completeDate.getDate() : completeDate.getDate()
        let month = completeDate.getMonth() + 1
        if (month < 10) {
            month = '0' + month
        }
        const year = completeDate.getFullYear()
        const time =
            (completeDate.getHours() < 10
                ? '0' + completeDate.getHours()
                : completeDate.getHours()) +
            ':' +
            (completeDate.getMinutes() < 10
                ? '0' + completeDate.getMinutes()
                : completeDate.getMinutes()) +
            ':' +
            (completeDate.getSeconds() < 10
                ? '0' + completeDate.getSeconds()
                : completeDate.getSeconds())
        const date = day + '/' + month + '/' + year

        return { time, date }
    }

    const addMeasurements = async () => {
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
            console.log(measurementsSizes)
            // setWaistSize('')
            // setArmsSize('')
            // setQuadsSize('')
            // setChestSize('')
        } catch (e) {
            alert(e)
        }
    }

    const updateMeasurement = async () => {
        try {
            await db
                .collection('users')
                .doc(currentUser.uid)
                .collection('measurements')
                .doc(measurementsSizes.measurementId)
                .update({
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
            alert(e)
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

            <ConfirmationPopup
                isUserFeedbackRequired={false}
                title={error}
                showPopup={showPopup}
                onYes={() => setShowPopup(false)}
            />

            <Measurements
                setError={setError}
                setConfirmationModal={setShowPopup}
                measurements={measurements}
                filterMeasurements={filterMeasurements}
                setMeasurementForEditing={setMeasurementForEditing}
                setDeleteDocId={setDeleteDocId}
                deleteDocId={deleteDocId}
                setShowDeleteMeasurementConfirmationModal={
                    setShowDeleteMeasurementConfirmationModal
                }
                showDeleteMeasurementConfirmationModal={showDeleteMeasurementConfirmationModal}
            />

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
