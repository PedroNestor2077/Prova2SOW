import React from "react"
import {UserInputS} from "../style"
function UserInput(props){
    return(
        <UserInputS width={props.width} >
            <img 
                src={props.src} width="25px">
            </img>

            <input 
                type={props.type} placeholder={props.placeholder} id={props.id}  
                onChange={props.func} maxLength={props.size} onBlur={props.Blur} 
                type={props.type} defaultValue={props.value} >
            </input>

            <img 
                width="20px" allt="" id={props.id_img}>
            </img>
        </UserInputS>
    )
};
export default UserInput