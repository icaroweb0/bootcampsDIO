import React, { Children } from "react";

function ComponenteA(props) {
    return (
        <div> Componente A ;D
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteA