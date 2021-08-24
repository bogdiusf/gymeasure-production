import React from 'react'
import '../../../style.css'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../services/firebase'
import Measurement from './Measurement'
import styled from 'styled-components'

export default function Measurements({
    setError,
    setConfirmationModal,
    filterMeasurements,
    measurements,
    setMeasurementForEditing,
    setDeleteDocId,
    deleteDocId
}) {
    const { currentUser } = useAuth()

    const deleteMeasurement = async (id) => {
        try {
            await db.collection('users').doc(currentUser.uid).collection('measurements').doc(id).delete()
            setError('Your measurement has been successfully deleted!')
            setConfirmationModal(true)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <StyledBody className="body">
            <MeasurementsWrapper>
                <Header>
                    <h2>Measurements</h2>
                    <StyledInput placeholder=" &#9781;  Filter measurements" onChange={(e) => filterMeasurements(e.target.value)} />
                </Header>

                {measurements.length === 0 ? (
                    <h1>No measurements</h1>
                ) : (
                    measurements.map((item) => (
                        <Measurement
                            key={item.document_id}
                            measurement={item}
                            deleteMeasurement={deleteMeasurement}
                            setMeasurementForEditing={setMeasurementForEditing}
                            setDeleteDocId={setDeleteDocId}
                            deleteDocId={deleteDocId}
                        />
                    ))
                )}
            </MeasurementsWrapper>
        </StyledBody>
    )
}

const StyledBody = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#5138ee, #24bdf0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`

const MeasurementsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    h1 {
        margin-top: 50px;
        text-align: center;
    }
`
const Header = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    color: black;
    width: 59vw;
`

const StyledInput = styled.input`
    padding: 15px;
    height: 40px;
    width: 20%;
    font-weight: 500;
    border: 1px solid lightgrey;
    display: flex;
    border-radius: 30px;
    :focus {
        outline: none;
    }
`
