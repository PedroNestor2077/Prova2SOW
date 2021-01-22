import React,{useState} from "react"
import {ListRow} from "../style"
import PopUpDel from "../generic/popUpDel"
function ListUser(props){
    const [PopUp,setPopUp]=useState('')
    function del(evt){
        let id =(evt.target.id)
        fetch('http://localhost:5000/usuarios/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => console.log("item",id,"deletado" ))
    }
    return(   
        <ListRow>
            <span >{props.name}</span>
            <span >{props.cpf}</span>
            <span >{props.email}</span>
            <span >{props.city}</span>
            <span >
                <button key={props.id} id={props.id} onClick={del}>delete</button>
                <button>edit</button>
            </span>
            {PopUp}
        </ListRow>
    )
};

export default ListUser