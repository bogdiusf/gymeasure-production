import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/not-logged-pic.jpg'
import logo from '../../images/gymeasure-logo.svg'

const FormContainer = ({ children, title, error, message, footer }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic}>
            <img src={logo} height="200px" width="800px" alt="logo" />
        </BackgroundImage>

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
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    flex: 2;
    display: grid;
    justify-content: center;

    @media screen and (max-width: 600px) {
        display: none;
    }
`
const CredentialsWrapper = styled.div`
    background: white;
    height: '100vh';
    flex: 1;
    width: 100em;
    min-width: 375px;
    padding: 20px;
    display grid;
    place-items: center;
    
    > div{
        width: 100%;
    }
`
