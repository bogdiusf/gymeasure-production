import React from 'react'
import Signup from '../components/SignupPage'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/DashboardPage'
import Login from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from '../components/ForgotPasswordPage'

const Routes = () => (
    <AuthProvider>
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
            </Switch>
        </Router>
    </AuthProvider>
)

export default Routes
