import React from "react"
import {ListRow} from "../style"
function ListUser(props){
    return(   
        <ListRow>
            <span>{props.name}</span>
            <span>{props.cpf}</span>
            <span>{props.email}</span>
            <span>{props.city}</span>
            <span>
                <button>delete</button>
                <button>edit</button>
            </span>
        </ListRow>
    )
};

export default ListUser