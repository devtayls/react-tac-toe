import * as React from "react";

type Square = (string|null)[]

interface SquareProps {
    value: string | null,
    onClick: () => void
}

function Square(props : SquareProps): JSX.Element {
    return (
        <button className={'square'} onClick={props.onClick}>
            {props.value}
        </button>
    )
}


export default Square