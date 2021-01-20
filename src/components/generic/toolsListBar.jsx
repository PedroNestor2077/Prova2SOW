import React,{userState} from "react"
import {ToolsListBarS,SearchBar,Pages} from "../style"
import ListRow from "../generic/listRow"
import { useState } from "react"
function ToolsListBar(){
    const [Page,setPage]=useState("1")
    
    return(
        <ToolsListBarS>
            <SearchBar>
                <form>
                <button>
                        <img src="/images/icons/ico_find.png" width="40px"></img>
                    </button>
                    <input></input>
                </form>
            </SearchBar>
            <Pages>
                <span>
                    <button> ≺ </button>
                    <p>{Page}</p>
                    <button> ≻ </button>
                </span>
            </Pages>
        </ToolsListBarS>
    )
};

export default ToolsListBar