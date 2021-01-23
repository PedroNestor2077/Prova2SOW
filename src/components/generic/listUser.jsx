import React,{useEffect,useState} from "react"
import {ListContainer,ListHeader,List} from "../style"
import ListRow from "../generic/listRow"
import {ToolsListBarS,SearchBar,Pages} from "../style"
import NotLogged from "../generic/notLogged"
function ListUser(){
    const options={
        method:'GET',
        headers:{
            "Content-Type":"application/json"
          }
        }
    const [Lista,setLista]=useState()
    const [Page,setPage]=useState(1)
    async function update(url){
        setLista(<h1>loading...</h1>)
        const UsersResponse=await fetch(url,options);
        const MyUsers=await UsersResponse.json()
        /* Criar lista de elementos react para a listagem */
        const RowList=[]
        for (var user in MyUsers){
            let nome=MyUsers[user].nome
            nome=nome.charAt(0).toUpperCase() + nome.slice(1)
            RowList.push(<ListRow 
                key={MyUsers[user].id} 
                id={MyUsers[user].id} 
                nome={nome}
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
        let url=`http://localhost:5000/usuarios?q=${text}&_limit=11`
        update(url)
    };
    /* Atualizar a lista sempre que a lista for renderizada */
    useEffect(()=>update(`http://localhost:5000/usuarios?_page=${Page}&_limit=11`),[Page])
    if (localStorage.getItem("logged")=="true"){
        return(
        <ListContainer>
                    <ToolsListBarS>
                        <SearchBar>
                            <div>
                                <button onClick={doSearch}>
                                    <img src="/images/icons/ico_find.png" width="40px"></img>
                                </button>
                                <input id='search' placeholder="Buscar..."></input>
                            </div>
                        </SearchBar>
                        <Pages>
                            <span>
                                <button onClick={()=>setPage(Page-1)}> ≺ </button>
                                <p>{Page}</p>
                                <button onClick={()=>setPage(Page+1)}> ≻ </button>
                                <button onClick={()=>update(`http://localhost:5000/usuarios?_page=${Page}&_limit=11`)}><img width="20px" src="images/icons/ico_reload.png"></img></button>
                            </span>
                        </Pages>
                    </ToolsListBarS>
                    <List>
                        <ListHeader>
                            <h2>Nome</h2>
                            <h2>CPF</h2>
                            <h2>Email</h2>
                            <h2>Cidade</h2>
                            <h2>Opções</h2>
                        </ListHeader>
                        {Lista}
                    </List>
            </ListContainer> 
        );
    }else{
        return <NotLogged/>
    }
};
export default ListUser