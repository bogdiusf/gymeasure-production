import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
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
            <FormContainer title="Sign in" error={error} footer={<FormFooter value1="Don't have an account?" value2="Sign up" path="/signup" />}>
                <Form onSubmit={handleLogin}>
                    <Form.Group id="email" className="mt-2">
                        <Form.Label>Email</Form.Label>
                        <StyledInput
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Please enter your e-mail"
                        />
                    </Form.Group>

                    <Form.Group id="password" className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <StyledInput
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Please enter your password"
                        />
                    </Form.Group>
                    <StyledButton type="submit" className="text-center w-100 mt-4" disabled={loading}>
                        Log in
                    </StyledButton>
                </Form>

                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
            </FormContainer>
        </>
    )
}

const StyledInput = styled(Form.Control)`
    height: 60px;
    border-radius: 30px;
    text-align: center;
`

const StyledButton = styled(Button)`
    background: red;
`
