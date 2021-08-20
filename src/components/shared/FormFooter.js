import React from 'react'
import { StyledLink } from './styled-components/StyledComponents'
import styled from 'styled-components'

const FormFooter = ({ value1, value2, path }) => (
    <FooterWrapper>
        <span style={{ color: 'black' }}>{value1}</span> <StyledLink to={path}>{value2}</StyledLink>
    </FooterWrapper>
)

export default FormFooter

const FooterWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    > span {
        font-weight: 500;
    }

    @media screen and (max-width: 450px) {
        justify-content: center;
    }
`
