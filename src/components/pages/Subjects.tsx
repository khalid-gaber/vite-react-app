import Math from "../../features/subjects/math/Math"
import English from "../../features/subjects/english/English"
import { useState } from "react"

export function Subjects() {

    const [state, setState] = useState({component: <Math/>, compName: "math"}, )

    function handleMathClick() {
        setState({
            component: <Math/>,
            compName: "math"
        })
    }

    function handleEnglishClick() {
        setState({
            component: <English/>,
            compName: "english"
        })
    }

    return(
        <>
            <h1>subjects page</h1>
            
            <div style={{
                width: "50%",
                margin: "auto",
                textAlign: 'center',
                padding: '10px',
                backgroundColor: 'black'
            }}>
                <div className="naving">
                    <div style={{
                        backgroundColor: state.compName === 'math'?'#222':'#111',
                        marginRight: "20px"
                    }} onClick={handleMathClick}
                    >
                        Math
                    </div>
                    <div style={{
                        backgroundColor: state.compName === 'english'?'#222':'#111'
                    }} onClick={handleEnglishClick}
                    >
                        English
                    </div>
                </div>
                <div style={{padding: '2px', backgroundColor: '#222', }}>
                {state.component}
                </div>
            </div>
        </>
    )
}