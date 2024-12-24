import * as React from "react";

type Props = {
    positionTop: number
}

export const QA: React.FC<Props> = ({positionTop}: Props) => {
    return (
        <ul style={{
            listStylePosition: 'outside',
            textAlign: "left",
            listStyleType: 'circle',
            fontSize: 24,
            position: 'absolute',
            top: positionTop,
            left: 0,
            width: '100%',
            color: '#2c3e50'
        }}>
            <li>ex-QA Leader</li>
            <li>Senior QA</li>
            <li>SDET</li>
        </ul>)
}