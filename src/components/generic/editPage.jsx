import React from "react"
import {EditPageS,FormEdit} from "../style"
import AddUserForm from "../generic/addUserForm"
function EditPage(props){
    return(  
        <EditPageS >   
            <div>
                <h3>Edit user- {props.username}</h3>
                <FormEdit>
                    <AddUserForm nome={props.nome} cpf={props.cpf} email={props.email} cep={props.cep} userID={props.userID}
                    cidade={props.cidade} bairro={props.bairro} rua={props.rua} numero={props.numero} action="PUT" >
                    </AddUserForm>
                </FormEdit>
            </div>
        </EditPageS>
    )
};

export default EditPage