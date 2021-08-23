import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'
import { StyledButton, StyledLabel, StyledLink, StyledForm, StyledInput } from './shared/styled-components/StyledComponents'
import styled from 'styled-components'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const { forgotPassword } = useAuth()
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleResetPassword = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await forgotPassword(email)
            setMessage('An email has been sent to your inbox. Please check it for further information on how to reset your password!')
        } catch (e) {
            setError('Email does not exist!')
        }
        setLoading(false)
    }

    return (
        <FormContainer
            title="Reset password"
            error={error}
            message={message}
            footer={<FormFooter value1="Don't have an account?" value2="Sign up" path="/signup" />}
            forgotPassword={true}
        >
            <StyledForm onSubmit={handleResetPassword}>
                <Form.Group id="email" className="mt-2">
                    <StyledLabel>Email*</StyledLabel>
                    <StyledInput
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Please enter your e-mail"
                    ></StyledInput>
                </Form.Group>
                <BackToLogin>
                    <span>Successfully reseted password?</span> <StyledLink to="/login">Log in</StyledLink>
                </BackToLogin>
                <StyledButton type="submit" disabled={loading}>
                    Reset password
                </StyledButton>
            </StyledForm>
        </FormContainer>
    )
}

const BackToLogin = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 5px;
    justify-content: flex-end;
    > span {
        font-weight: 500;
    }

    @media screen and (max-width: 450px) {
        justify-content: center;
    }
`
