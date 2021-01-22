import React,{useState} from "react"
import {ListRow} from "../style"
import PopUpDel from "../generic/popUpDel"
import EditPage from "../generic/editPage"
import {toast} from 'react-toastify'
toast.configure()
function ListUser(props){
    const [PopUp,setPopUp]=useState('')
    const [EditPages,setEditPages]=useState('')
    function del(evt){
        let id =(evt.target.id)
        fetch('http://localhost:5000/usuarios/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => toast.success('Usuário deletado!'))
    }
    function edit(evt) {
        let id =(evt.target.id)
        setEditPages(
            <EditPage nome={props.nome} cpf={props.cpf} email={props.email} cidade={props.cidade} userID={parseInt(id)}
            numero={props.numero} bairro={props.bairro} cep={props.cep} rua={props.rua} action="PUT"/>
        )
        
    }
    return(   
        <ListRow>
            <span >{props.nome}</span>
            <span >{props.cpf}</span>
            <span >{props.email}</span>
            <span >{props.cidade}</span>
            <span >
                <button key={props.id} id={props.id} onClick={del}>delete</button>
                <button  id={props.id} onClick={edit}>edit</button>
            </span>
            {PopUp}
            {EditPages}
        </ListRow>
    )
};
export default ListUser