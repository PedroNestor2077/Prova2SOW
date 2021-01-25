import React from "react"
import {TopBar} from "../style"
import {Link} from "react-router-dom"
function NavBar(){
    if (localStorage.getItem("logged")==="true"){
        return( 
            <TopBar >
                <span>
                    <img 
                        src="/images/icons/ico_give_up.png" alt="" width="150px">
                    </img>
                </span>
                <div>
                    <button >
                        <img src="/images/icons/ico_add.png" alt="" width="35px"></img>
                        <Link to="/add">Add</Link>
                    </button>
                    <button>
                        <img src="/images/icons/ico_list.png" alt="" width="23px"></img>
                        <Link to="/users">Usuários</Link>
                    </button>
                </div>
                <form>
                    <Link to="/" onClick={()=>
                        localStorage.setItem('logged',false)}>Singout
                    </Link>
                </form>
        </TopBar>
        );}
        else{
            return( 
                <TopBar >
                    <span>
                        <img alt="" src="/images/icons/ico_give_up.png" width="150px"></img>
                    </span>
                    <div>
                        <button>
                            <img alt="" src="/images/icons/ico_add.png" width="35px"></img>
                            <Link to="/add">Add</Link>
                        </button>
                        <button>
                            <img alt="" src="/images/icons/ico_list.png" width="23px"></img>
                            <Link to="/users">Users</Link>
                        </button>
                    </div>
                </TopBar>
            );}
    
};
export default NavBar