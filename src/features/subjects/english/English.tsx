import { RootState } from "../../../app/store";
// import { englishBonus } from "../../redux/english/englishActions";
import { bonus as englishBonus, minus as englishMinus } from "./englishSlice";
import { useSelector, useDispatch } from "react-redux";

export default function English() {
    const act = useSelector((store: RootState) => store.english.act);

    const dispatch = useDispatch();
    return (
        <>
            <h1>English</h1>
            <div style={{textAlign: "center", padding: "10% 2px"}}>
                <p>student activities of english subject: {act}</p>
                <button onClick={()=>dispatch(englishBonus())}>Bonus+</button>
                <button onClick={()=>dispatch(englishMinus())}>Minus-</button>
            </div>
        </>
    )
}

