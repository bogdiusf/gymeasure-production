import React from 'react'
import { Link } from 'react-router-dom'

const FormFooter = ({ value1, value2, path }) => (
    <div className="w-100 text-center mt-2">
        <span style={{ color: 'black' }}>{value1}</span> <Link to={path}>{value2}</Link>
    </div>
)

export default FormFooter
