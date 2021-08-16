import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory } from 'react-router-dom'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'
import styled from 'styled-components'

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

    return (
        <>
            <FormContainer title="Login" error={error} footer={<FormFooter value1="Not registered yet?" value2="Create an Account" path="/signup" />}>
                <Form onSubmit={handleLogin}>
                    <Form.Group id="email" className="mt-2">
                        <Form.Label>Email*</Form.Label>
                        <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="mail@website.com" />
                    </Form.Group>

                    <Form.Group id="password" className="mt-2">
                        <Form.Label>Password*</Form.Label>
                        <StyledInput
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min. 6 charactes"
                        />
                    </Form.Group>
                    <ForgotPassword>
                        <StyledLink to="/forgot-password">Forgot password?</StyledLink>
                    </ForgotPassword>
                    <StyledButton type="submit" className="text-center w-100 mt-4" disabled={loading}>
                        Log in
                    </StyledButton>
                </Form>
            </FormContainer>
        </>
    )
}

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
const ForgotPassword = styled.div`
    width: 100%;
    text-align: right;
    margin-top: 15px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
