import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { useHistory } from 'react-router'
import '../../../style.css'
import ConfirmationPopup from '../../shared/ConfirmationPopup'
import styled from 'styled-components'
import EditLogo from '../../../images/Pencil-icon.png'
import AddLogo from '../../../images/Iconsmind-Outline-Add.ico'
import LogoutLogo from '../../../images/log-out.svg'

export default function DisplayNavbar({ setEditMeasurement, currentUser, setShowAddMeasurementsPopup, setShowPersInfoPopup, firstName, lastName }) {
    const { logout } = useAuth()
    const history = useHistory()
    const [showPopup, setShowPopup] = useState(false)
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false)
    const userLogoUrl = currentUser?.photoURL

    return (
        <>
            <StyledNavbar expand="lg">
                <StyledNavbarBrand>
                    <img src={userLogoUrl} alt="" />
                    <div className="user-info">
                        <div className="user-name">
                            {firstName} {lastName}
                        </div>
                        <div className="user-email">{currentUser?.email}</div>
                    </div>
                </StyledNavbarBrand>

                <StyledNavbarToggle
                    isnavbarcollapsed={`${isNavbarCollapsed}`}
                    aria-controls="basic-navbar-nav"
                    onClick={() => {
                        if (isNavbarCollapsed === false) {
                            setIsNavbarCollapsed(true)
                        } else {
                            setIsNavbarCollapsed(false)
                        }
                    }}
                />
                <StyledNavbarCollapse className="basic-navbar-nav" isnavbarcollapsed={`${isNavbarCollapsed}`}>
                    <StyledButton
                        onClick={() => {
                            setEditMeasurement(false)
                            setShowAddMeasurementsPopup(true)
                        }}
                    >
                        <img src={AddLogo} alt="add-logo" height="20px" width="20px" />
                        Add today's measurements
                    </StyledButton>

                    <StyledButton
                        onClick={() => {
                            setShowPersInfoPopup(true)
                        }}
                    >
                        <img src={EditLogo} alt="edit-logo" height="20px" width="20px" />
                        Edit personal info
                    </StyledButton>

                    <StyledButton onClick={() => setShowPopup(true)}>
                        <img src={LogoutLogo} alt="logout-logo" height="20px" width="20px" />
                        Log out
                    </StyledButton>
                </StyledNavbarCollapse>
            </StyledNavbar>

            <ConfirmationPopup
                showPopup={showPopup}
                title="Are you sure you want to log out?"
                isUserFeedbackRequired={true}
                onYes={async () => {
                    try {
                        logout()
                        history.push('/login')
                    } catch (e) {
                        console.log(e)
                    }
                }}
                onNo={() => setShowPopup(false)}
            />
        </>
    )
}
const StyledNavbar = styled(Navbar)`
    display: flex;
    flex-direction: row;
    padding: 10px;
    background: #5138ee;
`
const StyledNavbarBrand = styled(Navbar.Brand)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-left: 50px;

    img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 1px solid white;
    }
    .user-name {
        font-size: 20px;
        color: white;
    }
    .user-email {
        font-size: 15px;
        color: white;
    }

    @media screen and (max-width: 1000px) {
        margin-left: 0;
        img {
            height: 40px;
            width: 40px;
        }
        .user-name {
            font-size: 15px;
        }
        .user-email {
            font-size: 10px;
        }
    }
`
const StyledNavbarToggle = styled(Navbar.Toggle)`
    filter: ${(props) => (props.isnavbarcollapsed === 'true' ? 'brightness(0) invert(1);' : 'brightness(1) invert(0);')};
`
const StyledNavbarCollapse = styled(Navbar.Collapse)`
    display: flex;
    text-align: center;
    margin-right: 2.5%;
    font-size: 1.2vw;
    justify-content: flex-end;
    gap: 40px;

    transition: all 0.5s;

    @media screen and (max-width: 1000px) {
        gap: 0px;
        flex-direction: column;
        justify-content: center;
        height: ${(props) => (props.isnavbarcollapsed === 'true' ? '200px;' : '')};
        font-size: 4vw;
    }
`
const StyledButton = styled.button`
    background: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    height: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.5s all;
    border-radius: 20px;

    > img {
        filter: brightness(0) invert(1);
    }

    &:hover {
        transition: 0.5s all ease-in-out;
        background: white;
        color: #5138ee;
        > img {
            filter: brightness(1) invert(0);
        }
    }
`
