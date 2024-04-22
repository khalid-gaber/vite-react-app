export type change = {
    type: "changed";
    
}

export interface inputs{
    firstName: string;
    lastName: string;
    age: string;
}

// export interface infosType {
//     inputs: infoType
//     results: infoType
// }

export interface inputType {
    type: "input";
    prop: string;
    playload: string;
}

export interface resetType {
    type: "reset";
}

export interface submitType {
    type: "submit";
}

export type actionType = inputType | resetType | submitType

export type InputProps = {
    prop: "firstName" | "lastName" | "age";
    value: string;
    dispatch: React.Dispatch<actionType>;
}

export interface slidesProps {
    act: number;
    mathBonus: ()=> void;
}

export interface subjects {
    act: number
}

export type data = {
    id: string,
    name: string,
    email: string
}

export interface users {
    loading: boolean;
    data: data[];
    error: string;
}

