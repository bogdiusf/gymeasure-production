import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import { db } from '../services/firebase'
import { generate } from 'shortid'
import ConfirmationModal from './pages/dashboard/ConfirmationModal'
import Measurements from './pages/dashboard/Measurements'
import LogoutModal from './pages/dashboard/LogoutModal'
import PersonalInfoModal from './pages/dashboard/PersonalInfoModal'
import DisplayNavbar from './pages/dashboard/DisplayNavbar'
import MeasurementsModal from './pages/dashboard/MeasurementsModal'

export default function Dashboard() {
    // getting the current user context
    const { currentUser } = useAuth()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')

    const [measurements, setMeasurements] = useState([])

    const [editMeasurement, setEditMeasurement] = useState(false)
    const [measurementId, setMeasurementId] = useState(null)
    const [armsSize, setArmsSize] = useState('')
    const [quadsSize, setQuadsSize] = useState('')
    const [chestSize, setChestSize] = useState('')
    const [waistSize, setWaistSize] = useState('')

    // modals
    const [showPersInfoModal, setShowPersInfoModal] = useState(false)
    const [showAddMeasurements, setShowAddMeasurements] = useState(false)

    // initializing needed states  -----------
    const [copyOfMeasurements, setCopyOfMeasurements] = useState()
    const [isSaveMeasurementChangesEnabled, setIsSaveMeasurementChangesEnabled] = useState(false)
    const [showLoggedOut, setShowLoggedOut] = useState(false)
    const [confirmationModal, setConfirmationModal] = useState(false)
    const [showDeleteMeasurementConfirmationModal, setShowDeleteMeasurementConfirmationModal] =
        useState(false)

    const [error, setError] = useState('')
    const [deleteDocId, setDeleteDocId] = useState(null)
    // ---------------------

    const handleCloseEditPersonalInfo = () => { }
    const handleShowLoggedOut = () => setShowLoggedOut(true)
    const handleCloseLoggedOut = () => setShowLoggedOut(false)
    const handleCloseConfirmationModal = () => {
        setConfirmationModal(false)
    }
    const handleCloseEditMeasurements = () => {
        setIsSaveMeasurementChangesEnabled(false)
    }
    const closeDeleteMeasurementConfirmation = () =>
        setShowDeleteMeasurementConfirmationModal(false)

    // calling fetchData once, as soon as component loads
    useEffect(() => {
        const fetchMeasurements = () => {
            // fetchData()
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
                    setCopyOfMeasurements(tempArray)
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
                    setFirstName(personalInfo?.firstName)
                    setLastName(personalInfo?.lastName)
                    setAge(personalInfo?.age)
                    setSex(personalInfo?.sex)
                })
        }

        fetchMeasurements()
        fecthUserInformation()
    }, [currentUser.uid])

    // function that updates personal info data in firestore
    const updatePersonalInfo = async () => {
        try {
            await db
                .collection('users')
                .doc(currentUser.uid)
                .collection('personal-info')
                .doc('Informatii personale')
                .update({ firstName, lastName, age, sex })

            setError('Your info has been successfully updated!')
            setShowPersInfoModal(false)
            setConfirmationModal(true)
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

    // adding measurements from inputs straight to firestore
    const addMeasurements = async () => {
        try {
            await db.collection('users').doc(currentUser.uid).collection('measurements').doc().set({
                arms: armsSize,
                quads: quadsSize,
                waist: waistSize,
                chest: chestSize,
                measured_on_day: getCurrentDateAndTime().date,
                measured_at_time: getCurrentDateAndTime().time,
                measured_on: new Date()
            })

            setError('Your info has been successfully added!')
            setShowAddMeasurements(false)
            setConfirmationModal(true)
            setWaistSize('')
            setArmsSize('')
            setQuadsSize('')
            setChestSize('')
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
                .doc(measurementId)
                .update({
                    waist: waistSize,
                    arms: armsSize,
                    chest: chestSize,
                    quads: quadsSize
                })

            setMeasurements(measurements.map(item => {
                if (item.document_id === measurementId) {
                    return {
                        ...item,
                        waist: waistSize,
                        arm: armsSize,
                        chest: chestSize,
                        quads: quadsSize
                    }
                }

                return item
            }))

            setError('Your info has been successfully updated!')
            setShowAddMeasurements(false)
            setConfirmationModal(true)
        } catch (e) {
            alert(e)
        }
    }

    const setMeasurementForEditing = (id, arms, quads, waist, chest) => {
        setEditMeasurement(true)
        setMeasurementId(id)
        setArmsSize(arms)
        setQuadsSize(quads)
        setWaistSize(waist)
        setChestSize(chest)
        setShowAddMeasurements(true)
    }

    const filterMeasurements = (text) => {
        if (text !== '') {
            // const tempText = text
            let newArr = measurements.filter((item) => item.measured_on_day.includes(text))
            setMeasurements(newArr)
            newArr = copyOfMeasurements.filter((item) => item.measured_on_day.includes(text))
            if (text !== '' && newArr.length > 0) {
                setMeasurements(newArr)
            }
        } else if (text === '') {
            setMeasurements(copyOfMeasurements)
        }
    }

    return (
        <React.Fragment>
            <DisplayNavbar
                setEditMeasurement={setEditMeasurement}
                firstName={firstName}
                lastName={lastName}
                currentUser={currentUser}
                setShowPersInfoModal={setShowPersInfoModal}
                handleShowLoggedOut={handleShowLoggedOut}
                setShowAddMeasurements={setShowAddMeasurements}
            />

            <MeasurementsModal
                editMeasurement={editMeasurement}
                updateMeasurement={updateMeasurement}
                showAddMeasurements={showAddMeasurements}
                setShowAddMeasurements={setShowAddMeasurements}
                addMeasurements={addMeasurements}
                armsSize={armsSize}
                quadsSize={quadsSize}
                chestSize={chestSize}
                waistSize={waistSize}
                setChestSize={setChestSize}
                setArmsSize={setArmsSize}
                setWaistSize={setWaistSize}
                setQuadsSize={setQuadsSize}
            />

            {/* render logout modal */}
            <LogoutModal
                showLoggedOut={showLoggedOut}
                handleCloseLoggedOut={handleCloseLoggedOut}
            />

            {/* confirmation modal thats being rendered on errors or succeded actions */}
            <ConfirmationModal
                confirmationModal={confirmationModal}
                handleCloseConfirmationModal={handleCloseConfirmationModal}
                error={error}
                handleCloseEditPersonalInfo={handleCloseEditPersonalInfo}
            />

            {/* displays all available measurements */}
            <Measurements
                setError={setError}
                setConfirmationModal={setConfirmationModal}
                measurements={measurements}
                filterMeasurements={filterMeasurements}
                setMeasurementForEditing={setMeasurementForEditing}
                setDeleteDocId={setDeleteDocId}
                deleteDocId={deleteDocId}
                setShowDeleteMeasurementConfirmationModal={
                    setShowDeleteMeasurementConfirmationModal
                }
                showDeleteMeasurementConfirmationModal={showDeleteMeasurementConfirmationModal}
                closeDeleteMeasurementConfirmation={closeDeleteMeasurementConfirmation}
            />

            {/* MODALS */}
            {/* <EditMeasurementsModal
                showEditMeasurements={showEditMeasurements}
                isSaveMeasurementChangesEnabled={isSaveMeasurementChangesEnabled}
                setIsSaveMeasurementChangesEnabled={setIsSaveMeasurementChangesEnabled}
                handleCloseEditMeasurements={handleCloseEditMeasurements}
                tempDocId={tempDocId}
                updateMeasurements={updateMeasurements}
            /> */}

            <PersonalInfoModal
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                age={age}
                setAge={setAge}
                sex={sex}
                setSex={setSex}
                showPersInfoModal={showPersInfoModal}
                setShowPersInfoModal={setShowPersInfoModal}
                updatePersonalInfo={updatePersonalInfo}
                setError={setError}
                setConfirmationModal={setConfirmationModal}
            />
        </React.Fragment>
    )
}
