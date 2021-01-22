import React,{useEffect,useState} from "react"
import {ListContainer,ListHeader,List} from "../style"
import ListRow from "../generic/listRow"
import {ToolsListBarS,SearchBar,Pages} from "../style"
function ListUser(){
    const options={
        method:'GET',
        headers:{
            "Content-Type":"application/json"
          }
        }
    const [Lista,setLista]=useState()
    async function update(url){
        setLista(<h1>loading...</h1>)
        const UsersResponse=await fetch(url,options);
        const MyUsers=await UsersResponse.json()
        /* Criar lista de elementos react para a listagem */
        const RowList=[]
        for (var user in MyUsers){
            RowList.push(<ListRow 
                key={MyUsers[user].id} 
                id={MyUsers[user].id} 
                nome={MyUsers[user].nome} 
                cpf={MyUsers[user].cpf}
                email={MyUsers[user].email} 
                cidade={MyUsers[user].endereco.cidade} 
                bairro={MyUsers[user].endereco.bairro}
                numero={MyUsers[user].endereco.numero} 
                cep={MyUsers[user].endereco.cep} 
                rua={MyUsers[user].endereco.rua}
                    />)
        };
        setLista(RowList)
    };
    function doSearch() {
        let text=document.getElementById("search").value
        let url=`http://localhost:5000/usuarios?q=${text}&attr=nome`
        update(url)
    };

    /* Atualizar a lista sempre que a lista for renderizada */
    useEffect(()=>update("http://localhost:5000/usuarios"),[])

    if (localStorage.getItem("logged")=="true"){
        return(
        <ListContainer>
                    <ToolsListBarS>
                        <SearchBar>
                            <div>
                                <button onClick={doSearch}>
                                    <img src="/images/icons/ico_find.png" width="40px"></img>
                                </button>
                                <input id='search'></input>
                            </div>
                        </SearchBar>
                        <Pages>
                            <span>
                                <button> ≺ </button>
                                <p>1</p>
                                <button> ≻ </button>
                            </span>
                        </Pages>
                    </ToolsListBarS>
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
        );
    }else{
        return <a href="/">Click here to login</a>
    }
};
export default ListUser