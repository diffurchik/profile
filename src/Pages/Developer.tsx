import * as React from "react";

type Props = {
    positionTop: number
}

export const Developer: React.FC<Props> = ({positionTop}: Props) => {
    return (
        <ul style={{
            listStylePosition: 'outside',
            textAlign: "left",
            listStyleType: 'circle',
            fontSize: 24,
            position: 'absolute',
            top: positionTop,
            left: 0,
            width: '100%'
        }}>
            <li>ex-Fronted Engineer in Miro</li>
            <li>SDET</li>
            <li>Telegram bots as hobbies</li>
        </ul>)
}