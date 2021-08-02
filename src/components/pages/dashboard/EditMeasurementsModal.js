import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function EditMeasurementsModal({
    showEditMeasurements,
    handleCloseEditPersonalInfo,
    setIsSaveMeasurementChangesEnabled,
    editWaistRef,
    waistEdited,
    editChestRef,
    chestEdited,
    editArmsRef,
    armsEdited,
    editQuadsRef,
    quadsEdited,
    handleCloseEditMeasurements,
    updateMeasurements,
    tempDocId
}) {
    return (
        <Modal show={showEditMeasurements} onHide={handleCloseEditPersonalInfo} backdrop="static">
            <Modal.Header style={{ backgroundColor: '#0d6efd' }}>
                <Modal.Title style={{ margin: 'auto', color: 'white' }}>
                    Edit measurements
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3" style={{ justifyContent: 'center' }}>
                    <InputGroup.Prepend
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '0.5fr 2.5fr',
                            margin: 'auto'
                        }}
                    >
                        <InputGroup.Text>Waist</InputGroup.Text>
                        <FormControl
                            ref={editWaistRef}
                            defaultValue={waistEdited}
                            onChange={() => {
                                setIsSaveMeasurementChangesEnabled(true)
                            }}
                            type="number"
                        />
                        <InputGroup.Text>Chest</InputGroup.Text>
                        <FormControl
                            ref={editChestRef}
                            defaultValue={chestEdited}
                            onChange={() => {
                                setIsSaveMeasurementChangesEnabled(true)
                            }}
                            type="number"
                        />
                        <InputGroup.Text>Arms</InputGroup.Text>
                        <FormControl
                            ref={editArmsRef}
                            defaultValue={armsEdited}
                            onChange={() => {
                                props.setIsSaveMeasurementChangesEnabled(true)
                            }}
                            type="number"
                        />
                        <InputGroup.Text>Quads</InputGroup.Text>
                        <FormControl
                            ref={editQuadsRef}
                            defaultValue={quadsEdited}
                            onChange={() => {
                                setIsSaveMeasurementChangesEnabled(true)
                            }}
                            type="number"
                        />
                    </InputGroup.Prepend>
                </InputGroup>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseEditMeasurements}>
                        Close
                    </Button>
                    <Button
                        disabled={!isSaveMeasurementChangesEnabled}
                        variant="success"
                        onClick={() => {
                            updateMeasurements(tempDocId)
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    )
}
