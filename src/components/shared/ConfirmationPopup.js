import React from 'react'
import { Button } from 'react-bootstrap'
import PopupWrapper from './PopupWrapper'

const ConfirmationPopup = ({
    showPopup,
    title,
    isUserFeedbackRequired,
    onYes,
    onNo
}) => (
    <PopupWrapper title={title}
        showPopup={showPopup}
        footer={
            isUserFeedbackRequired ?
                <UserPromptButtons onYes={onYes} onNo={onNo} />
                :
                <CloseButton title={title} onYes={onYes} />
        }
    />
)

const CloseButton = ({ title, onYes }) => (<Button
    variant="danger"
    onClick={() => {
        if (
            title === 'Your info has been successfully added!' ||
            title === 'Your info has been successfully updated!' ||
            title === 'Your measurement has been successfully deleted!'
        ) {
            onYes()
        }
    }}
>
    Close
</Button>
)

const UserPromptButtons = ({ onYes, onNo }) => (
    <>
        <Button
            variant="success"
            style={{ width: '80px' }}
            onClick={onYes} >
            Yes
        </Button>

        <Button
            variant="danger"
            style={{ width: '80px' }}
            onClick={onNo} >
            No
        </Button>
    </>
)

export default ConfirmationPopup