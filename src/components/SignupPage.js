import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'
import { signInWithGoogle } from '../contexts/AuthContext'
import { StyledButton, StyledLabel, StyledForm, StyledInput } from './shared/styled-components/StyledComponents'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Signup() {
    const history = useHistory()
    const { signup } = useAuth()
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
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
            setMessage('An email has been sent to your inbox. Please check it for further information on how to activate your account!')
        } catch (e) {
            setLoading(false)
            setError(`Failed to create an account! ${e}`)
        }
    }

    const handleSignInWithGoogle = async () => {
        try {
            const user = await signInWithGoogle()
            if (user.user.emailVerified) {
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <FormContainer
            title="Sign up"
            error={error}
            message={message}
            footer={<FormFooter value1="Already have an account?" value2="Log in" path="/login" />}
            loginType="Sign up"
            forgotPassword={false}
            handleSignInWithGoogle={handleSignInWithGoogle}
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
                        onChange={(e) => setPasswords({ mainPassword: e.target.value })}
                        placeholder="Please enter the desired password"
                    ></StyledInput>
                </Form.Group>

                <Form.Group id="passwordConfirmation" className="mt-2">
                    <StyledLabel>Password confirmation*</StyledLabel>
                    <StyledInput
                        type="password"
                        required
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
