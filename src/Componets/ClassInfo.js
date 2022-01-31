import React from "react";

function ClassInfo(props)  {
    const basePath= 'imagens/'
    return(
        <div className="ClassSlot">
            <img src={basePath+props.img}></img>
            <p className="nome">{props.nome}</p>
            <p>{props.grupo}</p>
        </div>
    )
}

export default ClassInfo;