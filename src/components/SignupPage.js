import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'
import FormContainer from './shared/FormContainer'
import FormFooter from './shared/FormFooter'

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
        >
            <Alert variant="info">
                After signing up, please check your e-mail inbox for further instructions on how to
                activate your account!
            </Alert>

            <Form onSubmit={handleSignUp}>
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

                <Form.Group id="password" className="mt-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        required
                        value={passwords.mainPassword}
                        onChange={(e) => setPasswords({ mainPassword: e.target.value })}
                        placeholder="Please enter the desired password"
                    ></Form.Control>
                </Form.Group>

                <Form.Group id="passwordConfirmation" className="mt-2">
                    <Form.Label>Password confirmation</Form.Label>
                    <Form.Control
                        type="password"
                        required
                        value={passwords.confirmationPassword}
                        onChange={(e) =>
                            setPasswords({ ...passwords, confirmationPassword: e.target.value })
                        }
                        placeholder="Please repeat your password"
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" className="text-center w-100 mt-4" disabled={loading}>
                    Sign up
                </Button>
            </Form>
        </FormContainer>
    )
}
