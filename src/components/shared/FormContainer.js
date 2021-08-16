import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import welcomePic from '../../images/not-logged-pic.jpg'
import icon from '../../images/Sonya-Swarm-Mayor-Gym.ico'

const FormContainer = ({ children, title, error, message, footer }) => (
    <StyledBody>
        <BackgroundImage img={welcomePic} />

        <CredentialsWrapper>
            <Wrapper>
                <img src={icon} alt="" height="40px" width="40px" />
                <div className="wrapper-header">
                    <Title className="title">{title}</Title>
                    <div className="description">Sweat now, enjoy later!</div>
                </div>
                <div>
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
    flex: 1;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
