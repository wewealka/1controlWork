import { Button } from "../../components/Button";
import { S } from "../stls/styles";

export type DisplayProps = {
    isRed: boolean
}
export type CounterType = {
    startFallBack: number
    isEditing: boolean
    maxValue: number
    startValue: number
    incHandler: () => void
    resetHandler: () => void
    setValue: (number: number) => void
};

export const Counter = (p: CounterType) => {

    return (
        <S.MainContainer>
            <S.Display isRed={p.startValue === p.maxValue}>
                {!p.isEditing && p.startValue !== 0 ?
                    <div>
                        {p.startValue}
                    </div> :
                    <div style={{ color: "aqua" }}>
                        enter values and press "set"
                    </div>}
            </S.Display>
            <S.ButtonContainer>
                <Button name={"inc"} disabled={p.isEditing || p.startValue === p.maxValue} callBack={p.incHandler} />
                <Button name={"res"} disabled={p.isEditing || p.startValue === 0 || p.startValue === p.startFallBack} callBack={p.resetHandler} />
            </S.ButtonContainer>
        </S.MainContainer>
    )
};
