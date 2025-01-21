import styled from "styled-components";
import Select from 'react-select'
import { standardTheme } from '../../../styles/themes/standard'

export const ProductImage = styled.img`
    height: 75px;
    padding: 12px;
    border-radius: 16px;

`

export const SelectStatus = styled(Select)`
    width: 240px;

`
export const Filter = styled.div`
    display: flex;
    justify-content:center;
    margin: 28px 0;
    gap: 50px;
`
export const FilterOption = styled.button`
    
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props => props.$isActiveStatus ? `2px solid ${standardTheme.purple}` : 'none'};
    color: ${props => props.$isActiveStatus ? standardTheme.purple : standardTheme.darkGray};
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 5px;
`