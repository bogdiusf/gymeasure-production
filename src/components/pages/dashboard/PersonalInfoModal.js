import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function PersonalInfoModal({
    setError,
    setConfirmationModal,
    showPersInfoModal,
    setShowPersInfoModal,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    sex,
    setSex,
    handleCloseAddPersonalInfo,
    updatePersonalInfo
}) {
    const isValidPersInfo = () => {
        let message = ''
        let valid = true
        if (!firstName && !lastName) {
            message = 'Attention! Both first name and last name must be typed in order to continue!'
            valid = false
        }

        if (!firstName) {
            message = 'Attention! Type your last name in order to continue!'
            valid = false
        }

        if (!lastName) {
            message = 'Attention! Type your first name in order to continue!'
            valid = false
        }

        if (!valid) {
            setError(message)
            setConfirmationModal(true)
        }

        return valid
    }

    const onClose = () => {
        if (!isValidPersInfo()) return
        setShowPersInfoModal(false)
    }
    const onSave = () => {
        if (!isValidPersInfo()) return
        updatePersonalInfo()
    }

    return (
        <Modal show={showPersInfoModal} onHide={handleCloseAddPersonalInfo} backdrop="static">
            <Modal.Header style={{ backgroundColor: '#0d6efd' }}>
                <Modal.Title style={{ margin: 'auto', color: 'white' }}>Personal info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend style={{ display: 'grid', gridTemplateColumns: '0.5fr 2.5fr', margin: 'auto' }}>
                        <InputGroup.Text>First name</InputGroup.Text>
                        <FormControl value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <InputGroup.Text>Last name</InputGroup.Text>
                        <FormControl value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <InputGroup.Text>Age</InputGroup.Text>
                        <FormControl value={age} onChange={(e) => setAge(e.target.value)} />
                        <InputGroup.Text>Sex</InputGroup.Text>
                        <FormControl value={sex} onChange={(e) => setSex(e.target.value)} />
                    </InputGroup.Prepend>
                </InputGroup>
                <Modal.Footer>
                    <Button variant="danger" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    )
}
