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
            fontSize: 20,
            position: 'absolute',
            top: positionTop,
            left: 0,
            width: '400px',
            color: '#2c3e50'
        }}>
            <li>Former Head of QA</li>
            <li>Passionate about delivering excellent quality efficiently, using modern tools and crafting solutions when none exist.</li>
            <li>Career highlights include leading QA efforts at a major bank, implementing efficient processes, training manual testers in coding, and raising testing standards.</li>
            <li>Experienced in manual testing, automation, and process optimization across various industries.</li>
        </ul>)
}