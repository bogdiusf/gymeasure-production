import React from 'react'
import { Card, Alert, Container } from 'react-bootstrap'

const FormContainer = ({ children, title, error, message, footer }) => (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">{title}</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    {children}
                </Card.Body>
            </Card>
            {footer}
        </div>
    </Container>
)

export default FormContainer
