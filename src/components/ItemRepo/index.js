import React from "react";

import { ItemContainer } from './styles'

export const ItemRepo = ({repo}) => {
    return (
    <ItemContainer>
        <h3>
            {repo.name}
        </h3>
        <p>
            {repo.full_name}
        </p>
        <a href={repo.html_url} className="remover">Ver repositório</a>
        <br />
        <a href="#" className="remover">Remover</a>
        <hr />
    </ItemContainer>
    )
}