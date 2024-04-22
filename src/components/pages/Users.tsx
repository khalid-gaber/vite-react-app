import { useEffect } from "react"
import { AppDispatch, RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users/users";
import { data, users } from "../../interfaces";

export default function Users() {
    const state = useSelector((store: RootState) => store.users);
    const dispatch: AppDispatch = useDispatch();
 
    useEffect(()=> {
            !state.data.length && dispatch(fetchUsers());
    }, [])

    function Result() {
        if (state.loading) {
            return <Loading />
        } else if(state.data.length) {
            return <Data data={state.data}/>
        } else {
            return <Error error={state.error}/>
        }    
    }
    
    return(
        <div style={{textAlign: "center"}}>
            <h1>Users page</h1>
            <Result />
        </div>
    )
}

function Data({data}: {data: users['data']}) {
    return (
        <>
        <table style={{width: "60%", margin: "auto"}}>
            <tr>
                <td><h2>user name</h2></td>
                <td><h2>e-mail</h2></td>
            </tr>
            {data.map((d: data) => (
                <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                </tr>
            ))}
        </table>
        </>
    )
}

function Loading() {    
    return <h2>Loading ...</h2>
}

function Error({error}: {error?: string}) {
    return <h2>ERROR: {error}</h2>
}