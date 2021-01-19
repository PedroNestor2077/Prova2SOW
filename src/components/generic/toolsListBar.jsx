import React from "react"
import {ToolsListBarS,SearchBar,Pages} from "../style"
import ListRow from "../generic/listRow"
function ToolsListBar(){
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

            </Pages>
        </ToolsListBarS>
    )
};

export default ToolsListBar