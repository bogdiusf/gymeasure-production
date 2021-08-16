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
            <FormWrapper>
                <img src={icon} alt="" className="power-logo" />
                <div className="wrapper-header">
                    <h1 className="title">{title}</h1>
                    <div className="description">Sweat now, enjoy later!</div>
                </div>
                {forgotPassword === true ? (
                    ''
                ) : (
                    <LoginWithGoogleButton>
                        <img alt="" src={googleIcon} />
                        {loginType} with Google
                    </LoginWithGoogleButton>
                )}

                <div className="wrapper-body">
                    {children}
                    {footer}
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <FooterWrapper>2020 Filip All rights reserved.</FooterWrapper>
            </FormWrapper>
        </Wrapper>
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
    }
    .wrapper-header {
        margin-top: 35px;
    }
    .wrapper-body {
        margin-top: 50px;
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
    min-width: 375px;
    color: gray;
    position: fixed;
    bottom: 50px;
`
