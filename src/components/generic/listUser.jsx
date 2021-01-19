import React from "react"
import {ListContainer,ListHeader,List} from "../style"
import ListRow from "../generic/listRow"
import ToolsListBar from "../generic/toolsListBar"
function ListUser(){
    const myUsers=[
        {
            name:"Pedro Nestor",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:2
        },
        {
            name:"Nestor Pedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:3
        },
        {
            name:"Ana Helena",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:43
        },
        {
            name:"Pedro NPedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:27
        },
        {
            name:"Pedro NPedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:24
        },
        {
            name:"Pedro NPedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:45
        },
        {
            name:"Pedro NPedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:21
        },
        {
            name:"Pedro NPedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:22
        },
        {
            name:"Pedro NPedro",
            cpf:"100321336-77",
            email:"contato.pedronestor@gmail.com",
            city:"Pratápolis-MG",
            id:23
        }
    ]
    const UsersRender = myUsers.map(user => {
        return <ListRow key={user.id}
        name={user.name} 
        cpf={user.cpf}
        email={user.email}
        city={user.city}/>
    })
    return(
        <ListContainer>
            <ToolsListBar/>
            <List>
                <ListHeader>
                    <h2>Nome</h2>
                    <h2>CPF</h2>
                    <h2>Email</h2>
                    <h2>Cidade</h2>
                    <h2>tools</h2>
                </ListHeader>
                {UsersRender}
            </List>

        </ListContainer>
    )
};

export default ListUser