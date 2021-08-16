import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/not-logged-pic.jpg'
import icon from '../../images/Sonya-Swarm-Mayor-Gym.ico'
import googleIcon from '../../images/icons8-google-48.png'

const FormContainer = ({ children, title, error, message, footer, loginType, forgotPassword }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic} />
        <Wrapper>
            <FormWrapper forgotPassword={forgotPassword}>
                <img src={icon} alt="" className="power-logo" />
                <div className="wrapper-header">
                    <h1 className="title">{title}</h1>
                    <div className="description">Sweat now, enjoy later!</div>
                </div>
                {forgotPassword === true ? (
                    ''
                ) : (
                    <>
                        <LoginWithGoogleButton>
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
                    {children}
                    {footer}
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <FooterWrapper forgotPassword={forgotPassword} g>
                    @ Filip 2021. All rights reserved.
                </FooterWrapper>
            </FormWrapper>
        </Wrapper>
    </StyledBody>
)
export default FormContainer

const StyledBody = styled.div`
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
const Wrapper = styled.div`
    background: white;
    height: '100vh';
    min-width: 375px;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
`
const FormWrapper = styled.div`
    width: 60%;
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
        margin-top: 50px;

        @media screen and (max-width: 450px) {
            display: none;
        }
    }
    .wrapper-header {
        margin-top: 35px;
    }
    .wrapper-body {
        margin-top: ${(props) => (props.forgotPassword ? '100px' : '15px')};
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
        transition: 0.5s all;
        background: rgba(0, 0, 0, 0.4);
    }
`
const FooterWrapper = styled.div`
    min-width: 450px;
    color: gray;
    position: fixed;
    top: 90vh;
    @media screen and (max-width: 450px) {
        position: fixed;
        top: 90vh;
        left: 50%;
        transform: translateX(-30%);
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
