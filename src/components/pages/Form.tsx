import { useRef } from "react"
import Input from "../Input"
import { useInputsContext, useInputsDispatchContext } from "../../InfosProvider"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { setResult, resetResult } from "../../features/formResult/formResult";



export default function Form() {
    const inputs = useInputsContext();
    const dispatch = useInputsDispatchContext();

    const formResult = useSelector((store: RootState) => store.formResult);
    const storeDispatch = useDispatch();

    const myRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)

    function handleReset() {
        dispatch({type: "reset"});
        storeDispatch(resetResult());
        myRef.current.style.visibility = "hidden";
    }
    
    function handleSubmit(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        e.preventDefault();
        dispatch({type: "submit"});
        storeDispatch(setResult(inputs));
        myRef.current.style.visibility = "visible";
    }    

    return (
        <>
        <h1 style={{position: "absolute", width: "100%"}}>form page</h1>
        <div className="form">
            <form>
                <div>
                    <Input prop="firstName" value={inputs.firstName} dispatch={dispatch} />
                    <Input prop="lastName" value={inputs.lastName} dispatch={dispatch} />
                    <Input prop="age" value={inputs.age} dispatch={dispatch} />
                </div>
                <div></div>
                <div> <input type="submit" onClick={e => handleSubmit(e)} /> </div>
                <div> <input type="button" value="reset" onClick={handleReset}/> </div>
                <div ref={myRef} className="result">
                    hello <span>{formResult.firstName} {formResult.lastName}</span><br />
                    your age is: <span>{formResult.age}</span>
                </div>
            </form>

        </div>
        </>
    )
}

