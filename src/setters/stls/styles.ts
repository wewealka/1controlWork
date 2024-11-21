
import styled from "styled-components";
import { DisplayProps } from "../counter/Counter";

const MainContainer = styled.div`
    display: flex;
    outline: 3px solid aqua;
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
    height: 54%;
    outline: 3px solid aqua;
    border-radius: 5px;
    margin: 0 auto;  
    margin-top: 20px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
    font-size:50px;
    font-weight: bold;
    align-items:center;
    justify-content: center;
    color: ${props => (props.isRed ? 'red' : 'aqua')};
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    border-radius: 30px;
    border: 3px solid aqua;
    width: 90%;
    height: 30%;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 30px;
    padding: 20px; // Добавляем padding для улучшения внешнего вида
    gap: 20px; // Добавляем промежуток между кнопками
`;


const Button = styled.button`
    width: 200px;
    height: 70px;
    outline: 3px solid aqua;
    border-radius: 5px;
    background-color: aqua;
    color: #303846;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
`;


const Input = styled.input`
    width: 50%; /* Увеличим ширину инпута для лучшей читаемости */
    padding: 5px; /* Добавим немного внутреннего отступа */
    font-size: 16px;
    border: 2px solid aqua;
    border-radius: 5px;
    background-color: #303846;
    color: aqua;
`;

const InputContainer = styled.div`
    display: flex;
    height: 60%;
    width: 99%;
    border-radius: 5px;
    outline: 3px solid aqua;
    flex-direction: column; 
   
    margin: 20px auto; 
    align-items: center; 
    justify-content: center;
`;

const InputRow = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    width: 100%; 
    margin-bottom: 15px; 
`;

const Label = styled.label`
    font-size: 38px;
    font-weight: bold;
    color: aqua;
    margin-right: 10px; 
    width: 40%; 
    text-align: right; 
`;


export const S = {
    MainContainer,
    Display,
    Button,
    ButtonContainer,
    InputContainer,
    Input,
    InputRow,
    Label

}