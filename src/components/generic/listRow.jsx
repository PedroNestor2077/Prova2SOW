import React,{useState} from "react"
import {ListRow} from "../style"
import EditPage from "../generic/editPage"
import {sendToast} from "../functions"
function ListUser(props){
    const [ShowEditPage,setEditPages]=useState('')
    function del(evt){
        let id =(evt.target.id)
        fetch('http://localhost:5000/usuarios/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => sendToast('Usuário deletado!',"success"))
    }
    function edit(evt) {
        let id =(evt.target.id)
        setEditPages(
            /* Passardados do usuario como props para serem usadas pelo "userForm" nas caixas de input */
            <EditPage 
                nome={props.nome} cpf={props.cpf} email={props.email} 
                cidade={props.cidade} userID={id} rua={props.rua} action="PUT"
                numero={props.numero} bairro={props.bairro} cep={props.cep} >
            </EditPage>
        )
    }
    return(   
        <ListRow>
            <span >{props.nome}</span>
            <span >{props.cpf}</span>
            <span >{props.email}</span>
            <span >{props.cidade}</span>
            <span >
                <button 
                    id={props.id} onClick={del}>
                    <img width="20px" src="images/icons/ico_delete.png"></img>
                </button>
                <button
                    id={props.id} onClick={edit}>
                    <img width="20px" src="images/icons/ico_edit.png"></img>
                </button>
            </span>
            {/* State que retorna a página "EditPage*/}
            {ShowEditPage}
        </ListRow>
    )
};
export default ListUser