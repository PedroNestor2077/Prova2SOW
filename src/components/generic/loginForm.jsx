import { render } from "@testing-library/react"
import React from "react"
import {LoginFormS} from "../style"
import UserInput from "./userInput" 
import {checkEmail,dinamicEmail,checkPassword,doLogin} from "../functions"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function LoginForm(){
    return(
        <LoginFormS>
            <span>
                <img src="/images/icons/ico_user_default.png" width="50px"></img>
                <h3> Sing in</h3>
            </span>
            <div>
            <UserInput 
                id_img="img-email" placeholder="Email" src="/images/icons/ico_home.png" width="100" id="email" Blur={dinamicEmail}
        />
                <UserInput id_img="img-password" placeholder="Password" type="password" src="/images/icons/ico_home.png" width="100" id="password" Blur={checkPassword}></UserInput>
                <button onClick={doLogin}>Login</button>
            </div>
        </LoginFormS>
    )
};

export default LoginForm