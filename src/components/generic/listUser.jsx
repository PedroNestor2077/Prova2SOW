import React,{useEffect,useState} from "react"
import {ListContainer,ListHeader,List, PopUpButton} from "../style"
import ListRow from "../generic/listRow"
import ToolsListBar from "../generic/toolsListBar"
import PopUpDel from "../generic/popUpDel"
import {getUsers,ExportUsers,UsersList} from "../data"
function ListUser(){
    const Mydb="http://localhost:5000/usuarios"
    const [Lista,setLista]=useState()
    async function update(){
        setLista(<h1>loading...</h1>)
        const UsersResponse=await fetch(Mydb);
        const MyUsers=await UsersResponse.json()
        /* buscar uma fonte de usuarios */
        const RowList=[]
        for (var user in MyUsers){
            RowList.push(<ListRow 
                key={MyUsers[user].id} name={MyUsers[user].nome} cpf={MyUsers[user].cpf}
                email={MyUsers[user].email} city={MyUsers[user].endereco.cidade}
                    />)
        }
        setLista(RowList)
    }
    useEffect(()=>update(),[])
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
                    {Lista}
                </List>
                <button onClick={update}></button>
        </ListContainer>
        
    )
};
export default ListUser