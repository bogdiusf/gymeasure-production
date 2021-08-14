import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/not-logged-pic.jpg'

const FormContainer = ({ children, title, error, message, footer }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic} />

        <CredentialsWrapper>
            <div>
                <h2 className="text-center mb-4">{title}</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                {children}
                {footer}
            </div>
        </CredentialsWrapper>
    </StyledBody>
)

export default FormContainer

const StyledBody = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`
const BackgroundImage = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.img});
    background-size: cover;
    flex: 1.5;

    @media screen and (max-width: 450px) {
        display: none;
    }
`
const CredentialsWrapper = styled.div`
    background: white;
    height: '100vh';
    flex: 1;
    width: 100%;
    min-width: 375px;
    padding: 35px;
    border: 2px solid red;
    display grid;
    place-items: center;

    > div{
        border: 1px solid blue;
    }
`
