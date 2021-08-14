import React from 'react'
import { Card, Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/not-logged-pic.jpg'

const FormContainer = ({ children, title, error, message, footer }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic} />
        <Container>
            <CredentialsWrapper style={{ height: '100vh' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">{title}</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    {children}
                    {footer}
                </Card.Body>
            </CredentialsWrapper>
        </Container>
    </StyledBody>
)

export default FormContainer

const StyledBody = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const Container = styled.div`
    flex: 1;
    min-width: 400px;
`
const BackgroundImage = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.img});
    background-size: cover;
    flex: 1.5;
`
const CredentialsWrapper = styled.div`
    background: white;
`
