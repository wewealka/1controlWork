import { useState } from "react";
import styled from "styled-components";

interface DisplayProps {
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
        <MainContainer>
            <Display isRed={CurrentDisplayContent === 5}>{CurrentDisplayContent}</Display>
            <ButtonContainer>
                <Button onClick={MyFunction} disabled={CurrentDisplayContent >= 5}>inc</Button>
                <Button2 onClick={MyFunction1} disabled={CurrentDisplayContent === 0}>res</Button2>
            </ButtonContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    outline: 2px solid aqua;
    border-radius: 5px;
    margin: 0 auto;  
    max-width: 500px; 
    width: 100%; 
    height: 400px; 
    padding: 0 15px;
    margin-top: 200px;
    align-items: center;
    flex-direction: column; 
`;

const Display = styled.div<DisplayProps>`
    display: flex;
    width: 100%;
    height: 50%;
    outline: 2px solid aqua;
    border-radius: 5px;
    margin: 0 auto;  
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    font-size:70px;
    font-weight: bold;
    align-items:center;
    justify-content: center;
    color: ${props => (props.isRed ? 'red' : 'black')};
`;

const ButtonContainer = styled.div`
    display: flex; 
    width: 100%;
    height: 50%;
    justify-content: space-between; 
    margin: 0 auto;
`;

const Button = styled.button`
    flex: 1; 
    width:40%;
    height:60px;
    outline: 2px solid aqua;
    border-radius: 5px;
    margin: 0 10px; 
    background-color:#303846;
    margin-top: 70px;
    color:black;
    font-size:40px;
    font-weight: bold;
    text-align: center;
    opacity: ${props => (props.disabled ? 0.5 : 1)};

`;

const Button2 = styled.button`
    flex: 1; 
    width:40%;
    height:60px;
    outline: 2px solid aqua;
    border-radius: 5px;
    margin: 0 10px; 
    background-color:#303846;
    margin-top: 70px;
    color:black;
    font-size:40px;
    font-weight: bold;
    text-align: center;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
`