import React from 'react'
import { Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import PopupWrapper from '../../shared/PopupWrapper'

const MeasurementsPopup = ({
    resetMeasurementForEditing,
    editMeasurement,
    updateMeasurement,
    showAddMeasurementsPopup,
    setShowAddMeasurementsPopup,
    addMeasurements,
    measurementsSizes: { measurementId, armsSize, waistSize, chestSize, quadsSize },
    setMeasurementsSizes
}) => (
    <PopupWrapper
        highlightHeader={true}
        showPopup={showAddMeasurementsPopup}
        title={(editMeasurement ? 'Edit' : 'Add') + ' measurements'}
        footer={
            <>
                <Button
                    variant="danger"
                    onClick={() => {
                        setShowAddMeasurementsPopup(false)
                        resetMeasurementForEditing()
                    }}
                >
                    Close
                </Button>
                <Button
                    variant="success"
                    onClick={() => {
                        if (editMeasurement) {
                            updateMeasurement().then(resetMeasurementForEditing())
                        } else {
                            addMeasurements()
                        }
                    }}
                >
                    Save info
                </Button>
            </>
        }
    >
        <InputGroup className="mb-3">
            <InputGroup.Prepend
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    margin: 'auto',
                    gap: '20px',
                    padding: '10px'
                }}
            >
                <div>
                    <InputGroup.Text>Waist size (cm)</InputGroup.Text>
                    <FormControl
                        value={waistSize}
                        onChange={(e) =>
                            setMeasurementsSizes({
                                measurementId,
                                armsSize,
                                chestSize,
                                quadsSize,
                                waistSize: e.target.value
                            })
                        }
                        type="number"
                        min="0"
                    />
                </div>
                <div>
                    <InputGroup.Text>Quads size (cm)</InputGroup.Text>
                    <FormControl
                        value={quadsSize}
                        onChange={(e) =>
                            setMeasurementsSizes({
                                measurementId,
                                armsSize,
                                chestSize,
                                waistSize,
                                quadsSize: e.target.value
                            })
                        }
                        type="number"
                        min="0"
                    />
                </div>
                <div>
                    <InputGroup.Text>Chest size (cm)</InputGroup.Text>
                    <FormControl
                        value={chestSize}
                        onChange={(e) =>
                            setMeasurementsSizes({
                                measurementId,
                                armsSize,
                                quadsSize,
                                waistSize,
                                chestSize: e.target.value
                            })
                        }
                        type="number"
                        min="0"
                    />
                </div>
                <div>
                    <InputGroup.Text>Arms size (cm)</InputGroup.Text>
                    <FormControl
                        value={armsSize}
                        onChange={(e) =>
                            setMeasurementsSizes({
                                measurementId,
                                chestSize,
                                quadsSize,
                                waistSize,
                                armsSize: e.target.value
                            })
                        }
                        type="number"
                        min="0"
                    />
                </div>
            </InputGroup.Prepend>
        </InputGroup>
    </PopupWrapper>
)

export default MeasurementsPopup
