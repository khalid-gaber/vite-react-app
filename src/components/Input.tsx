import { InputProps } from "../interfaces"

export default function Input({prop, value, dispatch}: InputProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "input", prop: prop, playload: e.target.value})
    }
    return <label> <div>{prop}:</div> <input type="txt" value={value} onChange={(e) => handleChange(e)}/> </label>
}