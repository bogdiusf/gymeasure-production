import React from 'react'
import '../../../style.css'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../services/firebase'
import Measurement from './Measurement'
import styled from 'styled-components'
import 'date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'

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

    const [selectedDate, setSelectedDate] = React.useState(new Date())

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <StyledBody className="body">
            <MeasurementsWrapper>
                <Header>
                    <h2>Measurements</h2>
                    {/* <StyledInput placeholder=" &#9781;  Filter measurements" onChange={(e) => filterMeasurements(e.target.value)} /> */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <StyledGrid container>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Filter measurements"
                                format="dd/MM/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                            />
                        </StyledGrid>
                    </MuiPickersUtilsProvider>
                </Header>

                {measurements.length === 0 ? (
                    <h2>No measurements</h2>
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
    min-height: 90vh;
    background: linear-gradient(#5138ee, #24bdf0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    position: relative;
    @media screen and (max-width: 450px) {
        padding: 0 0 50px 0;
    }
`
const MeasurementsWrapper = styled.div`
    width: 60vw;
    min-width: 360px;
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
    @media screen and (max-width: 450px) {
        width: 90vw;
        margin-top: 50px;
        border-radius: 10px;
    }
`
const Header = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    gap: 5px;
    @media screen and (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
    }
`

const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 920px) {
        justify-content: center;
    }
`
