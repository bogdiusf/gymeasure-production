import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'

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
            setMessage(
                'An email has been sent to your inbox. Please check it for further information on how to reset your password!'
            )
        } catch (e) {
            setError('Email does not exist!')
        }
        setLoading(false)
    }

    return (
        <FormContainer
            title="Sign in"
            error={error}
            message={message}
            footer={<FormFooter value1="Don't have an account?" value2="Sign up" path="/signup" />}
        >
            <Form onSubmit={handleResetPassword}>
                <Form.Group id="email" className="mt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Please enter your e-mail"
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" className="text-center w-100 mt-4" disabled={loading}>
                    Reset password
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
                Successfully reseted password? <Link to="/login">Log in</Link>
            </div>
        </FormContainer>
    )
}
