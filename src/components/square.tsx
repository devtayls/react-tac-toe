import * as React from "react";

type Square = (string|null)[]

interface SquareProps {
    value: string | null,
    position: number,
    onClick: () => void
}

function Square(props : SquareProps): JSX.Element {
    return (
        <button className={'square'} onClick={props.onClick} data-cy={'board_position_' + props.position}>
            {props.value}
        </button>
    )
}


export default Square