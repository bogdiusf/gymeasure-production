import React from 'react'
import { Nav, Button, Navbar } from 'react-bootstrap'
import '../../../style.css'

export default function DisplayNavbar({
    personalInfo,
    setEditMeasurement,
    currentUser,
    setShowAddMeasurements,
    setShowPersInfoModal,
    handleShowLoggedOut,
    firstName,
    lastName
}) {
    return (
        <Navbar
            expand="lg"
            className="d-flex flex-row"
            style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.2)' }}
        >
            {firstName && lastName && (
                <div id="navbarBrand">
                    <span id="navbarBrand-name">
                        <Navbar.Brand style={{ fontWeight: '500', color: 'rgba(255,255,255,1)' }}>
                            <span>
                                {firstName} {lastName}
                            </span>
                        </Navbar.Brand>
                    </span>
                    <br />
                    <span id="navbarBrand-email">
                        <Navbar.Brand
                            style={{ fontWeight: '400', color: 'rgba(255,255,255,0.75)' }}
                        >
                            {currentUser.email}
                        </Navbar.Brand>
                    </span>
                </div>
            )}
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            />
            <Navbar.Collapse id="basic-navbar-nav" style={{ textAlign: 'center' }}>
                <Nav className="d-flex gap-4" style={{ marginLeft: 'auto' }}>
                    <br />
                    <Button id="addMeasurementsButton" onClick={() => {
                        setEditMeasurement(false)
                        setShowAddMeasurements(true)
                    }
                    }>
                        Add today's measurements
                    </Button>

                    {/* <Button
              id="addInfoButton"
              onClick={() => setShowPersInfoModal(true)}
              style={{ padding: "10px" }}
            >
              Add personal info
            </Button> */}

                    <Button
                        id="editPersInfoButton"
                        onClick={() => {
                            setShowPersInfoModal(true)
                            console.log('asdf')
                        }}
                        style={{ padding: '10px' }}
                    >
                        Edit personal info
                    </Button>

                    <Nav.Link id="logOutButton" onClick={handleShowLoggedOut}>
                        <span id="test">Log out</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
