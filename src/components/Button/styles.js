import styled from "styled-components";

export const ButtonContainer = styled.div`
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 20px;
    color: black;
    height: 62px;
    width: 80%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px;


    span {
        align-self: center;
    }
    
    &: hover {
        background-color: #fafafa60;
        cursor: pointer;
    }
`