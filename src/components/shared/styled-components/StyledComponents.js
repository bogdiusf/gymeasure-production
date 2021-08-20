import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

export const StyledButton = styled.button`
    background: #5138ee;
    height: 50px;
    border-radius: 30px;
    border: none;
    color: white;
    font-weight: 600;
    transition: 0.5s all;
    &:hover {
        transition: 0.5s all;
        background: rgba(0, 0, 0, 1);
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #5138ee;
    font-weight: 600;
`
export const StyledLabel = styled(Form.Label)`
    font-weight: 500;
`
export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const StyledInput = styled(Form.Control)`
    height: 50px;
    border-radius: 30px;
    text-align: left;
    padding-left: 30px;
`
