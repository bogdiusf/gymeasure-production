import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'
import styled from 'styled-components'

export default function Signup() {
    const history = useHistory()
    const { signup } = useAuth()
    const [email, setEmail] = useState('')
    const [passwords, setPasswords] = useState({
        mainPassword: '',
        confirmationPassword: ''
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (passwords.mainPassword !== passwords.confirmationPassword) {
            return setError('Passwords do not match!')
        }
        try {
            setLoading(true)
            await signup(email, passwords.mainPassword)
            history.push('/login')
        } catch (e) {
            setLoading(false)
            setError(`Failed to create an account! ${e}`)
        }
    }

    return (
        <FormContainer
            title="Sign up"
            error={error}
            footer={<FormFooter value1="Already have an account?" value2="Log in" path="/login" />}
            loginType="Sign up"
            forgotPassword={false}
        >
            <StyledForm onSubmit={handleSignUp}>
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

                <Form.Group id="password" className="mt-2">
                    <StyledLabel>Password*</StyledLabel>
                    <StyledInput
                        type="password"
                        required
                        value={passwords.mainPassword}
                        onChange={(e) => setPasswords({ mainPassword: e.target.value })}
                        placeholder="Please enter the desired password"
                    ></StyledInput>
                </Form.Group>

                <Form.Group id="passwordConfirmation" className="mt-2">
                    <StyledLabel>Password confirmation*</StyledLabel>
                    <StyledInput
                        type="password"
                        required
                        value={passwords.confirmationPassword}
                        onChange={(e) => setPasswords({ ...passwords, confirmationPassword: e.target.value })}
                        placeholder="Please repeat your password"
                    ></StyledInput>
                </Form.Group>

                <StyledButton type="submit" className="text-center w-100 mt-4" disabled={loading}>
                    Sign up
                </StyledButton>
            </StyledForm>
        </FormContainer>
    )
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const StyledLabel = styled(Form.Label)`
    font-weight: 500;
`
const StyledInput = styled(Form.Control)`
    height: 50px;
    border-radius: 30px;
    text-align: left;
    padding-left: 30px;
`
const StyledButton = styled.button`
    background: #5138ee;
    height: 50px;
    border-radius: 30px;
    border: none;
    color: white;
    font-weight: 600;
    transition: 0.5s all;
    &:hover {
        transition: 0.5s all;
        background: red;
    }
`
