import React,{useState} from "react"
import {ListRow} from "../style"
import PopUpDel from "../generic/popUpDel"
function ListUser(props){
    const [PopUp,setPopUp]=useState('')
    return(   
        <ListRow>
            <span >{props.name}</span>
            <span >{props.cpf}</span>
            <span >{props.email}</span>
            <span >{props.city}</span>
            <span >
                <button onClick={()=>setPopUp(<PopUpDel></PopUpDel>)}>delete</button>
                <button>edit</button>
            </span>
            {PopUp}
        </ListRow>
    )
};

export default ListUser