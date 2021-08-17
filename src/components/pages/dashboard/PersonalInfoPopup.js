import React from 'react'
import { Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import PopupWrapper from '../../shared/PopupWrapper'

const PersonalInfoPopup = ({
    setError,
    setConfirmationModal,
    showPersInfoPopup,
    setShowPersInfoPopup,
    personalInfo: { firstName, lastName, age, sex },
    setPersonalInfo,
    updatePersonalInfo
}) => {
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
        setShowPersInfoPopup(false)
    }
    const onSave = () => {
        if (!isValidPersInfo()) return
        updatePersonalInfo()
    }

    return (
        <PopupWrapper
            highlightHeader={true}
            showPopup={showPersInfoPopup}
            title="Personal info"
            footer={
                <>
                    <Button variant="danger" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onSave}>
                        Save
                    </Button>
                </>
            }
        >
            <InputGroup className="mb-3">
                <InputGroup.Prepend
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '0.5fr 2.5fr',
                        margin: 'auto'
                    }}
                >
                    <InputGroup.Text>First name</InputGroup.Text>
                    <FormControl
                        value={firstName ? firstName : ''}
                        onChange={(e) => setPersonalInfo({ lastName, age, sex, firstName: e.target.value })}
                    />
                    <InputGroup.Text>Last name</InputGroup.Text>
                    <FormControl
                        value={lastName ? lastName : ''}
                        onChange={(e) => setPersonalInfo({ firstName, age, sex, lastName: e.target.value })}
                    />
                    <InputGroup.Text>Age</InputGroup.Text>
                    <FormControl value={age ? age : ''} onChange={(e) => setPersonalInfo({ firstName, lastName, sex, age: e.target.value })} />
                    <InputGroup.Text>Sex</InputGroup.Text>
                    <FormControl value={sex ? sex : ''} onChange={(e) => setPersonalInfo({ firstName, lastName, age, sex: e.target.value })} />
                </InputGroup.Prepend>
            </InputGroup>
        </PopupWrapper>
    )
}

export default PersonalInfoPopup
