import React from "react"
import {PopUpDelS,PopUpButton} from "../style"
function PopUpDel(){
    return(   
        <PopUpDelS >   
            <div>
                <h3>Are you sure?</h3>
                <span>
                    <PopUpButton color={"rgba(65, 99, 194)"}>
                        Yes
                    </PopUpButton>
                    <PopUpButton color={"rgba(194, 65, 65)"}>
                        Cancel
                    </PopUpButton>
                </span>
            </div>
        </PopUpDelS>
    )
};

export default PopUpDel