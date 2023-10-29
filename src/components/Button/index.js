import React from "react";

import {ButtonContainer} from './styles'

export const Button = (onClick) => {
    return (
    <ButtonContainer onClick={onClick}>
        <span>Buscar</span>
    </ButtonContainer>
    )
}