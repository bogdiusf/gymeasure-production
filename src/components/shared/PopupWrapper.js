import React from 'react'
import Modal from 'react-bootstrap/Modal'

const PopupWrapper = ({
    highlightHeader,
    showPopup,
    title,
    children,
    footer
}) => (
    <Modal
        show={showPopup}
        backdrop="static"
    >
        <Modal.Header style={highlightHeader && { backgroundColor: '#0d6efd' }}>
            <Modal.Title style={highlightHeader && { margin: 'auto', color: 'white' }}>{title}</Modal.Title>
        </Modal.Header>
        {children &&
            (<Modal.Body>
                {children}
            </Modal.Body>)}
        <Modal.Footer>
            {footer}
        </Modal.Footer>
    </Modal>
)


export default PopupWrapper