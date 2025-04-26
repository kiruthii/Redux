import { useDispatch, useSelector } from "react-redux"
import { setAge } from "./slice";

export const Age=()=>{
    const age=useSelector((state)=>state.userDetails.age);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setAge(e.target.value));
    }
    return(
        <>
            <label>Age</label>
            <input type="Number" placeholder="enter age" value={age} onChange={handleChange}></input>
        </>
    )
}