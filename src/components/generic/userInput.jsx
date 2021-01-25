import React from "react"
import {UserInputS} from "../style"
function UserInput(props){
    return(
        <UserInputS width={props.width} >
            <img 
                src={props.src} alt="" width="25px">
            </img>

            <input 
                type={props.type} placeholder={props.placeholder} id={props.id}  
                onChange={props.func} maxLength={props.size} onBlur={props.Blur} 
                defaultValue={props.value} >
            </input>
            <img 
                width="25px" alt="" id={props.id_img}>
            </img>
        </UserInputS>
    )
};
export default UserInput