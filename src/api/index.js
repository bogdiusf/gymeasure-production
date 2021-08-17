import { db } from '../services/firebase'

export const getMeasurements = (userId, setMeasurements, setFilteredMeasurements) => {
    db.collection('users')
        .doc(userId)
        .collection('measurements')
        .orderBy('measured_on', 'desc')
        .onSnapshot((response) => {
            const tempArray = []
            response.forEach((item) => {
                const objToBeAdded = {
                    document_id: item.id,
                    measured_on_day: item.measured_on_day,
                    measured_at_time: item.measured_at_time,
                    ...item.data()
                }
                tempArray.push(objToBeAdded)
            })

            setMeasurements(tempArray)
            setFilteredMeasurements(tempArray)
        })
}

export const getUserInformation = async (userId, setPersonalInfo) => {
    db.collection('users')
        .doc(userId)
        .collection('personal-info')
        .onSnapshot((response) => {
            let personalInfo = {}
            response.forEach((item) => {
                personalInfo = { ...item.data() }
            })

            setPersonalInfo({
                firstName: personalInfo?.firstName,
                lastName: personalInfo?.lastName,
                age: personalInfo?.age,
                sex: personalInfo?.sex
            })
        })
}

export const updateUserInformation = async (userId, personalInfo) => {
    await db
        .collection('users')
        .doc(userId)
        .collection('personal-info')
        .doc('Informatii personale')
        .set({ firstName: personalInfo?.firstName, lastName: personalInfo?.lastName, age: personalInfo?.age, sex: personalInfo?.sex })
}
