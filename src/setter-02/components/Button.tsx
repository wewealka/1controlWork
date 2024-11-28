import { S } from "../stls/styles";


export type BtnType = {
    name: string;
    callBack: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    width?: string
};

export const Button = (p: BtnType) => {

    return (
        <div>
            <S.Button style={{ width: p.width, ...p.style }} disabled={p.disabled} onClick={p.callBack}>{p.name}</S.Button>
        </div>
    );
};
