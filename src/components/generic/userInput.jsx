import React,{userState, useState} from "react"
import {UserInputS} from "../style"
function UserInput(props){
    const [Valid,setValid]=useState("")

    return(
        <UserInputS width={props.width}>
            <img src={props.src} alt={props.alt} width="20px" value=""></img>
            <input type={props.type} placeholder={props.placeholder} name={props.name}>
            </input>
            <img src={Valid} width="20px" allt=""></img>
        </UserInputS>
    )
};
export default UserInput