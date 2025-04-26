import { useDispatch, useSelector } from "react-redux"
import { setEmail } from "./slice";

export const Email=()=>{
    const email=useSelector((state)=>state.userDetails.email);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setEmail(e.target.value));
    }
    return(
        <>
        <label>Email</label>
        <input type="email" placeholder="enter email" value={email} onChange={handleChange}></input>
        </>
    )
}