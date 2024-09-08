import { useState } from "react";
import { S } from "./ControlWorkStyles";
export interface DisplayProps {
    isRed: boolean;
}


export const ControlWork = () => {

    let InitionalDisplayContent = 0;
    let [CurrentDisplayContent, setCurrentDisplayContent] = useState (InitionalDisplayContent)

const MyFunction = () => {
    setCurrentDisplayContent(++CurrentDisplayContent)
}
const MyFunction1 = () => {
    setCurrentDisplayContent(CurrentDisplayContent=0)
}

    return (
        <S.MainContainer>
            <S.Display isRed={CurrentDisplayContent === 5}>{CurrentDisplayContent}</S.Display>
            <S.ButtonContainer>
                <S.Button onClick={MyFunction} disabled={CurrentDisplayContent >= 5}>inc</S.Button>
                <S.Button2 onClick={MyFunction1} disabled={CurrentDisplayContent === 0}>res</S.Button2>
            </S.ButtonContainer>
        </S.MainContainer>
    );
};


