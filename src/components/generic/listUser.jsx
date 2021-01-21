import React,{useEffect,useState} from "react"
import {ListContainer,ListHeader,List, PopUpButton} from "../style"
import ListRow from "../generic/listRow"
import ToolsListBar from "../generic/toolsListBar"
import PopUpDel from "../generic/popUpDel"
import {getUsers,ExportUsers,UsersList} from "../data"
function ListUser(){
    const USERS=UsersList
    const [Lista,setLista]=useState()
    function update(){
        /* buscar uma fonte de usuarios */
        const RowList=[]
        for (var user in USERS){
            RowList.push(<ListRow key={USERS[user].name} name={USERS[user].nome}/>)
        }
        setLista(RowList)
    }
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