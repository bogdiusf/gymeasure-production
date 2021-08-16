import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/not-logged-pic.jpg'
import icon from '../../images/Sonya-Swarm-Mayor-Gym.ico'
import googleIcon from '../../images/icons8-google-48.png'

const FormContainer = ({ children, title, error, message, footer, loginType }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic} />
        <CredentialsWrapper>
            <Wrapper>
                <img src={icon} alt="" className="power-logo" />
                <div className="wrapper-header">
                    <Title className="title">{title}</Title>
                    <div className="description">Sweat now, enjoy later!</div>
                </div>
                <LoginWithGoogleButton>
                    <img height="30px" width="30px" alt="" src={googleIcon} />
                    {loginType} with Google
                </LoginWithGoogleButton>
                <div className="wrapper-body">
                    {children}
                    {footer}
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
            </Wrapper>
        </CredentialsWrapper>
    </StyledBody>
)

export default FormContainer

const CredentialsWrapper = styled.div`
    background: white;
    height: '100vh';
    min-width: 375px;
    flex: 1;
`
const Wrapper = styled.div`
    width: 60%;
    min-width: 375px;
    padding-left: 30px;
    padding-right: 30px;
    margin: auto;
    display: flex;
    flex-direction: column;
    .description {
        color: gray;
    }
    .power-logo {
        height: 50px;
        width: 50px;
        margin-top: 50px;
    }
    .wrapper-header {
        margin-top: 50px;
    }
    .wrapper-body {
        margin-top: 50px;
    }
`

const Title = styled.h1`
    font-weight: 600;
`

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
    flex: 1;
    display: grid;
    justify-content: center;

    @media screen and (max-width: 600px) {
        display: none;
    }
`

const LoginWithGoogleButton = styled.button`
    background: #ffffff;
    height: 50px;
    border-radius: 30px;
    border: 1px solid lightgrey;
    color: black;
    font-weight: 600;
    transition: 0.5s all;
    margin-top: 50px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    &:hover {
        transition: 0.5s all;
        background: rgba(0, 0, 0, 0.4);
    }
`
