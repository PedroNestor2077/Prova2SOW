import React,{useState} from "react"
import {ListRowS} from "../style"
import EditPage from "../generic/editPage"
import {sendToast} from "../functions"
function ListRow(props){
    const [ShowEditPage,setEditPages]=useState('')
    function del(evt){
        let id =(evt.target.id)
        fetch('http://localhost:5000/usuarios/' + id, {
            method: 'DELETE'
        })
        .then((response)=>{
            if(response.ok){
                sendToast("Usuário deletado!",'success')
            }else{
                sendToast("Falha ao deletar.","warn")
            }
        })
        .catch((error)=>{
            sendToast('Falha ao deletar',"error")
        })
    }
    function edit(evt) {
        setEditPages(
            /* Passar dados do usuario como props para serem usadas pelo "userForm" nas caixas de input */
            <EditPage 
                nome={props.nome} cpf={props.cpf} email={props.email} action="PUT"
                cidade={props.cidade} userID={props.userID} rua={props.rua} 
                numero={props.numero} bairro={props.bairro} cep={props.cep} >
            </EditPage>
        )
    }
    return(   
        <ListRowS>
            <span >{props.nome}</span>
            <span >{props.cpf}</span>
            <span >{props.email}</span>
            <span >{props.cidade}</span>
            <span >
                <button 
                    id={props.userID} onClick={del}>
                    <img
                        id={props.userID} width="20px" alt=""
                        src="images/icons/ico_delete.png">  
                    </img>
                </button>
                <button
                    id={props.userID} onClick={edit}>
                    <img 
                        id={props.userID} width="20px" alt="" 
                        src="images/icons/ico_edit.png">
                    </img>
                </button>
            </span>
            {/* State que retorna a página "EditPage*/}
            {ShowEditPage}
        </ListRowS>
    )
};
export default ListRow