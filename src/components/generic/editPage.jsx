import React from "react"
import {EditPageS,FormEdit} from "../style"
import AddUserForm from "../generic/addUserForm"
function EditPage(props){
    return(  
        <EditPageS >   
            <div>
                <a href="/users"><img src="/images/icons/ico_close.png" width="40px"></img></a>
                <h1>Editar usuário- {props.nome}</h1>
                    {/* Passar props para setar os dados do usuario nas caixas de input */}
                    <AddUserForm 
                        nome={props.nome} cpf={props.cpf} email={props.email} cep={props.cep} 
                        userID={props.userID} cidade={props.cidade}
                        bairro={props.bairro} rua={props.rua} numero={props.numero} action="PUT" >
                    </AddUserForm>
            </div>
        </EditPageS>
    )
};

export default EditPage