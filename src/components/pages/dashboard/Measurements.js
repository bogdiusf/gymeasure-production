import React from 'react'
import '../../../style.css'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../services/firebase'
import Measurement from './Measurement'

export default function Measurements({
    setError,
    setConfirmationModal,
    filterMeasurements,
    measurements,
    setMeasurementForEditing,
    setDeleteDocId,
    setShowDeleteMeasurementConfirmationModal,
    showDeleteMeasurementConfirmationModal,
    deleteDocId,
    closeDeleteMeasurementConfirmation
}) {
    const { currentUser } = useAuth()

    // function that deletes measurements from firestore
    const deleteMeasurement = async (id) => {
        await db
            .collection('users')
            .doc(currentUser.uid)
            .collection('measurements')
            .doc(id)
            .delete()
        try {
            setShowDeleteMeasurementConfirmationModal(true)
            setError('Your measurement has been successfully deleted!')
            setConfirmationModal(true)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <React.Fragment>
            <div
                style={{
                    color: 'white',
                    textAlign: 'center',
                    width: '80%',
                    margin: 'auto',
                    marginTop: '30px',
                    padding: '0'
                }}
            >
                <InputGroup className="mb-3 searchInputGroup">
                    <InputGroup.Text>Search by date</InputGroup.Text>
                    <FormControl
                        placeholder="DD/MM/YYYY"
                        style={{ textAlign: 'center', fontWeight: '500' }}
                        onChange={(e) => filterMeasurements(e.target.value)}
                    />
                </InputGroup>
            </div>
            <div className="measurementsWrapper">
                {measurements.length === 0 ? (
                    <h1 style={{ color: 'white', marginTop: '50px', textAlign: 'center' }}>
                        No measurements
                    </h1>
                ) : (
                    measurements.map((item) => (
                        <Measurement
                            key={item.docuemnt_id}
                            measurement={item}
                            deleteMeasurement={deleteMeasurement}
                            setMeasurementForEditing={setMeasurementForEditing}
                            setDeleteDocId={setDeleteDocId}
                            setShowDeleteMeasurementConfirmationModal={
                                setShowDeleteMeasurementConfirmationModal
                            }
                            showDeleteMeasurementConfirmationModal={
                                showDeleteMeasurementConfirmationModal
                            }
                            deleteDocId={deleteDocId}
                            closeDeleteMeasurementConfirmation={closeDeleteMeasurementConfirmation}
                        />
                    ))
                )}
            </div>
        </React.Fragment>
    )
}
