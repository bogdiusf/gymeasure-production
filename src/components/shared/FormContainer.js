import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/gym-barbell.png'
import icon from '../../images/Sonya-Swarm-Mayor-Gym.ico'
import googleIcon from '../../images/icons8-google-48.png'

const FormContainer = ({ children, title, error, message, footer, loginType, forgotPassword, handleSignInWithGoogle }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic} />
        <Wrapper>
            <FormWrapper forgotPassword={forgotPassword}>
                <img src={icon} alt="" className="power-logo" />
                <div className="wrapper-header">
                    <h1 className="title">{title}</h1>
                    <div className="description">Sweat now, enjoy later!</div>
                </div>
                {forgotPassword !== true && (
                    <>
                        <LoginWithGoogleButton onClick={handleSignInWithGoogle}>
                            <img alt="" src={googleIcon} />
                            {loginType} with Google
                        </LoginWithGoogleButton>
                        <LoginWithEmailText>
                            <span className="left-line"></span>
                            <span className="login-type">or {loginType} with email</span>
                            <span className="right-line"></span>
                        </LoginWithEmailText>
                    </>
                )}

                <div className="wrapper-body">
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    {children}
                    {footer}
                </div>
            </FormWrapper>
        </Wrapper>
    </StyledBody>
)
export default FormContainer

const StyledBody = styled.div`
    width: 100vw;
    display: flex;
    overflow: hidden;
`
const BackgroundImage = styled.div`
    background-image: url(${(props) => props.img});
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: darken;
    flex: 1.5;

    @media screen and (max-width: 600px) {
        display: none;
    }
`
const Wrapper = styled.div`
    background: white;
    height: 100vh;
    min-width: 375px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    @media screen and (max-width: 450px) {
        justify-content: flex-start;
    }
`
const FormWrapper = styled.div`
    width: 80%;
    min-width: 375px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .title {
        font-weight: 600;
    }
    .description {
        color: gray;
    }
    .power-logo {
        height: 50px;
        width: 50px;
    }
    .wrapper-header {
        margin-top: 40px;
    }
    .wrapper-body {
        margin-top: ${(props) => (props.forgotPassword ? '75px' : '15px')};
    }
    @media screen and (max-width: 450px) {
        width: 100%;
        .power-logo {
            display: none;
        }
        .wrapper-header {
            margin-top: ${(props) => (props.forgotPassword ? '125px' : '50px')};
        }
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
    > img {
        height: 30px;
        width: 30px;
    }
    &:hover {
        color: white;
        transition: 0.5s all;
        background: rgba(0, 0, 0, 1);
    }
`
const LoginWithEmailText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 30px;
    .left-line,
    .right-line {
        width: 30%;
        border: solid rgba(0, 0, 0, 0.1);
        border-width: thin;
    }
    .login-type {
        color: rgba(0, 0, 0, 0.3);
        min-width: fit-content;
    }
`
