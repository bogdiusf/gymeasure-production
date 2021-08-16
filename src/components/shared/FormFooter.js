import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormFooter = ({ value1, value2, path }) => (
    <FooterWrapper className="w-100 mt-2">
        <span style={{ color: 'black' }}>{value1}</span> <StyledLink to={path}>{value2}</StyledLink>
    </FooterWrapper>
)

export default FormFooter

const FooterWrapper = styled.div`
    display: flex;
    padding: 15px 0;
    gap: 10px;
    > span {
        font-weight: 500;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #5138ee;
    font-weight: 600;
`
