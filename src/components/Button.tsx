import { S } from "../setters/stls/styles";

export type BtnType = {
    name: string;
    callBack: () => void;
    disabled?: boolean;
};

export const Button = (p: BtnType) => {

    return (
        <div>
            <S.Button disabled={p.disabled} onClick={p.callBack}>{p.name}</S.Button>
        </div>
    );
};
