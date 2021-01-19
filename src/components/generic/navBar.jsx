import React,{useState} from "react"
import {TopBar} from "../style"
function NavBar(){
    return(
        <TopBar >
            <span>
                <img src="/images/icons/ico_give_up.png" width="150px"></img>
            </span>
            <div>
                <button>
                    <img src="/images/icons/ico_edit.png" width="48px"></img>
                    EDIT
                </button>
                <button>
                    <img src="/images/icons/ico_list.png" width="30px"></img>
                    LIST
                </button>
            </div>
            <a href="#">Singout</a>
        </TopBar>
    );
};
export default NavBar