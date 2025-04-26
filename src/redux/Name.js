import {useDispatch, useSelector} from "react-redux";
import { setName } from "./slice";
export const Name=()=>{
    const name=useSelector((state)=>state.userDetails.name);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setName(e.target.value))
    }
    return(
        <>
        <label>Name</label>
        <input type='text' placeholder="enter name" value={name} onChange={handleChange} ></input>

        </>
    )
}