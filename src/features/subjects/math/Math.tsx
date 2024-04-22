import { RootState } from "../../../app/store";
import { bonus as mathBonus, minus as mathMinus } from "./mathSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Math() {
    const act = useSelector((store: RootState) => store.math.act);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Math</h1>
            <div style={{textAlign: "center", padding: "10% 2px"}}>
                <p>student activities of math subject: {act}</p>
                <button onClick={()=>dispatch(mathBonus())}>Bonus+</button>
                <button onClick={()=>dispatch(mathMinus())}>Minus-</button>
            </div>
        </>
    )
}

