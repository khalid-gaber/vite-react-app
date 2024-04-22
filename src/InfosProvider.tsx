import { createContext, useContext, useReducer } from "react";
import { actionType, inputs } from "./interfaces";

const initialInputs = {
    firstName: "",
    lastName: "",
    age: ""
}

const InputsContext = createContext<inputs>(initialInputs);
const InputsDispatchContext = createContext<React.Dispatch<actionType>>(null as unknown as React.Dispatch<actionType>);

export function InfosProvider({children}:{children: JSX.Element}) {
    const [infos, dispatch]= useReducer(valueReducer, initialInputs)
    return (
        <InputsContext.Provider value={infos}>
            <InputsDispatchContext.Provider value={dispatch}>
                {children}
            </InputsDispatchContext.Provider>
        </InputsContext.Provider>
    )
}

export function useInputsContext() {
    return useContext(InputsContext)
}

export function useInputsDispatchContext() {
    return useContext(InputsDispatchContext)
}

function valueReducer(inputs: inputs, action: actionType): inputs {
    switch (action.type) {
        case "input": {
            return {...inputs, [action.prop]: action.playload}
        }
        case "reset": {
            return {...initialInputs}
        }
        case "submit": {
            return {...initialInputs}
        }
    }
}


