import React from 'react'
import { Button } from 'react-bootstrap'
import '../../../style.css'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import ConfirmationPopup from '../../shared/ConfirmationPopup'

const Measurement = ({
    measurement,
    setMeasurementForEditing,
    deleteMeasurement,
    setDeleteDocId,
    setShowDeleteMeasurementConfirmationModal,
    showDeleteMeasurementConfirmationModal,
    deleteDocId
}) => {
    const deleteMeasurementForThisDocId = () => {
        deleteMeasurement(deleteDocId)
    }

    return (
        <div className="measurementDataWrapper" key={measurement.document_id}>
            <h4>Measured on: {measurement.measured_on_day} </h4>
            <h4>Measured at: {measurement.measured_at_time} </h4>
            <InputGroup className="mb-3">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 1fr 0.4fr',
                        width: '100%',
                        marginTop: '10px'
                    }}
                >
                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Body part
                    </InputGroup.Text>
                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Value
                    </InputGroup.Text>
                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Unit
                    </InputGroup.Text>
                </div>
                <InputGroup.Prepend
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 1fr 0.4fr',
                        margin: 'auto',
                        marginTop: '10px',
                        width: '100%'
                    }}
                >
                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Waist
                    </InputGroup.Text>
                    <FormControl
                        value={measurement.waist}
                        style={{ textAlign: 'center', fontWeight: '500' }}
                        disabled={true}
                    />
                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        cm
                    </InputGroup.Text>

                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Chest
                    </InputGroup.Text>
                    <FormControl
                        value={measurement.chest}
                        style={{ textAlign: 'center', fontWeight: '500' }}
                        disabled={true}
                    />
                    <InputGroup.Text
                        style={{ fontWeight: '700', justifyContent: 'center' }}
                        disabled={true}
                    >
                        cm
                    </InputGroup.Text>

                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Arms
                    </InputGroup.Text>
                    <FormControl
                        value={measurement.arms}
                        style={{ textAlign: 'center', fontWeight: '500' }}
                        disabled={true}
                    />
                    <InputGroup.Text
                        style={{ fontWeight: '700', justifyContent: 'center' }}
                        disabled={true}
                    >
                        cm
                    </InputGroup.Text>

                    <InputGroup.Text style={{ fontWeight: '700', justifyContent: 'center' }}>
                        Quads
                    </InputGroup.Text>
                    <FormControl
                        value={measurement.quads}
                        style={{ textAlign: 'center', fontWeight: '500' }}
                        disabled={true}
                    />
                    <InputGroup.Text
                        style={{ fontWeight: '700', justifyContent: 'center' }}
                        disabled={true}
                    >
                        cm
                    </InputGroup.Text>
                </InputGroup.Prepend>
            </InputGroup>
            <div
                className="measurementsButtonsWrapper"
                style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '10px',
                    justifyContent: 'space-evenly'
                }}
            >
                <Button
                    onClick={() => {
                        setMeasurementForEditing(
                            measurement.document_id,
                            measurement.arms,
                            measurement.quads,
                            measurement.waist,
                            measurement.chest
                        )
                    }}
                >
                    Edit
                </Button>
                <Button
                    onClick={() => {
                        setShowDeleteMeasurementConfirmationModal(true)
                        setDeleteDocId(measurement.document_id)
                    }}
                    variant="danger"
                >
                    Delete
                </Button>
            </div>
            <ConfirmationPopup
                isUserFeedbackRequired={true}
                title="Are you sure you want to delete this measurement?"
                showPopup={showDeleteMeasurementConfirmationModal}
                onYes={deleteMeasurementForThisDocId}
                onNo={() => setShowDeleteMeasurementConfirmationModal(false)}
            />
        </div>
    )
}

export default Measurement
