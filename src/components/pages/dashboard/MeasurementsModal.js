import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function MeasurementsModal({
    editMeasurement,
    updateMeasurement,
    showAddMeasurements,
    setShowAddMeasurements,
    addMeasurements,
    armsSize,
    quadsSize,
    chestSize,
    waistSize,
    setChestSize,
    setArmsSize,
    setWaistSize,
    setQuadsSize
}) {
    return (
        <Modal
            show={showAddMeasurements}
            //   onHide={handleCloseAddMeasurements}
            backdrop="static"
        >
            <Modal.Header style={{ backgroundColor: '#0d6efd' }}>
                <Modal.Title style={{ margin: 'auto', color: 'white' }}>
                    Add measurements
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                                onChange={(e) => setWaistSize(e.target.value)}
                                type="number"
                                min="0"
                            />
                        </div>
                        <div>
                            <InputGroup.Text>Quads size (cm)</InputGroup.Text>
                            <FormControl
                                value={quadsSize}
                                onChange={(e) => setQuadsSize(e.target.value)}
                                type="number"
                                min="0"
                            />
                        </div>
                        <div>
                            <InputGroup.Text>Chest size (cm)</InputGroup.Text>
                            <FormControl
                                value={chestSize}
                                onChange={(e) => setChestSize(e.target.value)}
                                type="number"
                                min="0"
                            />
                        </div>
                        <div>
                            <InputGroup.Text>Arms size (cm)</InputGroup.Text>
                            <FormControl
                                value={armsSize}
                                onChange={(e) => setArmsSize(e.target.value)}
                                type="number"
                                min="0"
                            />
                        </div>
                    </InputGroup.Prepend>
                </InputGroup>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShowAddMeasurements(false)}>
                        Close
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => {
                            if (editMeasurement) {
                                updateMeasurement()
                            } else {
                                addMeasurements()
                            }
                        }}
                    >
                        Save info
                    </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    )
}
