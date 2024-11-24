import { useState, useEffect, useRef } from "react";
import { Counter } from "./counter/Counter";
import { S } from "./stls/styles";
import { Button } from "../components/Button";

export const Setter = () => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0);
    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const initialStartValueRef = useRef<number | null>(null);

    const resetHandler = () => {
        setStartValue(inputStartValue);
    };

    const incHandler = () => {
        setStartValue(temp => temp + 1);
    };

    const setMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(parseInt(e.currentTarget.value) || 0);
        setIsEditing(true);
    };

    const setInputStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputStartValue(parseInt(e.currentTarget.value) || 0);
        setIsEditing(true);
    };

    const setHandler = () => {
        if (inputStartValue < 0 || inputStartValue >= inputMaxValue) {
            alert("Start value must be less than Max value and cannot be negative!");
            return;
        }
        setMaxValue(inputMaxValue);
        setStartValue(inputStartValue);
        if (initialStartValueRef.current === null) {
            initialStartValueRef.current = inputStartValue;
        }
        localStorage.setItem('maxValue', JSON.stringify(inputMaxValue));
        localStorage.setItem('startValue', JSON.stringify(inputStartValue));
        setIsEditing(false);
    };

    useEffect(() => {
        const savedMaxValue = localStorage.getItem('maxValue');
        const savedStartValue = localStorage.getItem('startValue');
        if (savedMaxValue) {
            const parsedMaxValue = JSON.parse(savedMaxValue);
            setMaxValue(parsedMaxValue);
            setInputMaxValue(parsedMaxValue); 
        }
        if (savedStartValue) {
            const parsedStartValue = JSON.parse(savedStartValue);
            setStartValue(parsedStartValue);
            setInputStartValue(parsedStartValue); 
        }
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <S.MainContainer>
                <S.InputContainer>
                    <S.InputRow>
                        <S.Label>Max Value</S.Label>
                        <S.Input
                            value={inputMaxValue}
                            onChange={setMaxValueHandler}
                            step={1}
                            type="number"
                        />
                    </S.InputRow>
                    <S.InputRow>
                        <S.Label>Start Value</S.Label>
                        <S.Input
                            value={inputStartValue}
                            onChange={setInputStartValueHandler}
                            step={1}
                            type="number"
                        />
                    </S.InputRow>
                </S.InputContainer>
                <S.ButtonContainer>
                    <Button name={"set"} callBack={setHandler} disabled={!isEditing} />
                </S.ButtonContainer>
            </S.MainContainer>
            <Counter
                startFallBack={inputStartValue}
                isEditing={isEditing}
                maxValue={maxValue}
                startValue={startValue}
                incHandler={incHandler}
                resetHandler={resetHandler}
                setValue={setStartValue}
            />
        </div>
    );
};
