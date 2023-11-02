import moment from 'moment'

export const getCurrentDateAndTime = () => ({ time: moment().format('hh:mm:ss'), date: moment().format('DD/MM/YYYY') })
