import * as React from "react";

type Props = {
    positionTop: number
}

export const Developer: React.FC<Props> = ({positionTop}: Props) => {
    return (
        <p style={{
            listStylePosition: 'outside',
            textAlign: "left",
            listStyleType: 'circle',
            fontSize: 20,
            position: 'absolute',
            top: positionTop,
            right: 0,
            color: '#2c3e50',
            width: '400px'
        }}>
            {/*<li>ex-Fronted Engineer in Miro</li>*/}
            {/*<li>SDET</li>*/}
            {/*<li>Telegram bots as hobbies</li>*/}
            <li>Passionate about solving technical challenges and scripting away manual work.</li>
            <li>Always ready to improve my skills, additionally in DevOps.</li>
            <li>Former Frontend Engineer at Miro</li>
            <li>Hobby: creating Telegram bots for fun!</li>
            <li>Skilled in TypeScript, React, and Node.js but open to exploring new tech stacks.</li>
        </p>)
}