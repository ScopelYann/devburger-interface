import styled from "styled-components";
import { standardTheme } from "../../../styles/themes/standard";



export const Container = styled.div``
export const EditButton = styled.button`
border: none;
background: ${standardTheme.darkWhite};
height: 32px;
width: 32px;
border-radius: 8px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;

svg{
    width: 18px;
    height: 18px;
}

&:hover{
    background-color: ${standardTheme.purple};


    svg{
        fill: ${standardTheme.white};
    }
}

`
export const ProductseImage = styled.img`
height: 80px;
padding: 12px;
border-radius: 20px;

`