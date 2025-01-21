import styled from "styled-components";
import ReactSelect from 'react-select'
import { standardTheme } from "../../../styles/themes/standard";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: poppins;
`
export const Form = styled.form`
    border-radius: 20px;
    background: ${standardTheme.black};
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const Label = styled.label`
    color: ${standardTheme.white};
    font-size: 14px;
    margin: 10px 0;

`
export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 0 12px;
    border: none;
`
export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${standardTheme.white};
    border-radius: 5px;
    padding: 10px;
    display: flex;
    color: ${standardTheme.white};
    align-items: center;
    margin: 10px 0;

    >svg{
        width: 30px;
        height: 30px;
        fill: ${standardTheme.white};
        margin-right: 4px;
    }

    input{
        display: none;
    }

`
export const Select = styled(ReactSelect)`
`
export const SubmitButton = styled.button`
    color: ${standardTheme.white};
    background-color: ${standardTheme.purple};
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 5px;
    font-size: 35px;
    font-weight: 400;
    margin-top: 40px;
    font-family: ${(props) => (props.theme ? 'Road Rage' : 'poppins')};

    &:hover {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 5px;
        background-color: ${standardTheme.darkPurple};

    }
`

export const ErrorMensage = styled.span`
    color: ${standardTheme.darkRed};
    font-size: 14px;
    line-height: 80%;
    font-weight: 800;


`


export const CheckOffer = styled.div`
    display: flex;
    gap:10px;

    input{
        cursor: pointer;
    }
`