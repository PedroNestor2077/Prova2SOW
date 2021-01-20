import React,{useState} from "react"
import {TopBar} from "../style"
import {Link} from "react-router-dom"
function NavBar(){
    return(
        <TopBar >
            <span>
                <img src="/images/icons/ico_give_up.png" width="150px"></img>
            </span>
            <div>
                <button>
                    <img src="/images/icons/ico_add.png" width="35px"></img>
                    <Link to="/add">Add</Link>
                </button>
                <button>
                    <img src="/images/icons/ico_list.png" width="23px"></img>
                    <Link to="/users">Users</Link>
                </button>
            </div>
            <Link to="/">Singout</Link>
        </TopBar>
    );
};
export default NavBar