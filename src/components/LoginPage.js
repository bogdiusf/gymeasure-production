import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'
import { signInWithGoogle } from '../contexts/AuthContext'
import { StyledButton, StyledLink, StyledLabel, StyledForm, StyledInput } from './shared/styled-components/StyledComponents'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    const history = useHistory()
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            const userInfo = await login(email, password)
            if (userInfo.user.emailVerified) {
                history.push('/')
            } else {
                setError('Please verify your email!')
            }
        } catch (e) {
            setLoading(false)
            setError(
                e.code === 'auth/user-not-found'
                    ? 'User does not exist or wrong email! Sign up or check email credential!'
                    : e.code === 'auth/wrong-password'
                    ? 'Invalid password!'
                    : 'Failed to sign in!'
            )
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
        return true
    }

    return (
        <FormContainer
            title="Login"
            error={error}
            footer={<FormFooter value1="Not registered yet?" value2="Create an Account" path="/signup" />}
            loginType="Sign in"
            forgotPassword={false}
            handleSignInWithGoogle={handleSignInWithGoogle}
        >
            <StyledForm onSubmit={handleLogin}>
                <Form.Group id="email" className="mt-2">
                    <StyledLabel>Email*</StyledLabel>
                    <StyledInput
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Please type your email"
                    />
                </Form.Group>

                <Form.Group id="password" className="mt-2">
                    <StyledLabel>Password*</StyledLabel>
                    <StyledInput type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <ForgotPassword>
                    <StyledLink to="/forgot-password">Forgot password?</StyledLink>
                </ForgotPassword>
                <StyledButton type="submit" disabled={loading}>
                    Log in
                </StyledButton>
            </StyledForm>
        </FormContainer>
    )
}

const ForgotPassword = styled.div`
    width: 100%;
    text-align: right;
    margin-top: 5px;
`
