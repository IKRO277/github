import React from "react";

import {InputContainer} from './styles'

export const Input = (value, onChange) => {
    return (
    <InputContainer value={value} onChange={onChange}>
        <input />
    </InputContainer>
    )
}