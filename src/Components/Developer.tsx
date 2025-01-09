import * as React from "react";
import {CustomParagraph} from "./styles/developerStyles.tsx";

type Props = {
    positionTop: number,
}

export const Developer: React.FC<Props> = ({positionTop}: Props) => {
    return (
        <CustomParagraph $positionTop={positionTop} style = {{right: 0}}>
            <li>Passionate about solving technical challenges and scripting away manual work.</li>
            <li>Always ready to improve my skills, additionally in DevOps.</li>
            <li>Former Frontend Engineer at Miro</li>
            <li>Hobby: creating Telegram bots for fun!</li>
            <li>Skilled in TypeScript, React, and Node.js but open to exploring new tech stacks.</li>
        </CustomParagraph>)
}