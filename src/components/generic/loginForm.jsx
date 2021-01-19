import { render } from "@testing-library/react"
import React from "react"
import {LoginFormS} from "../style"
import UserInput from "./userInput"
function LoginForm(){
    return(
        <LoginFormS>
            <span>
                <img src="/images/icons/ico_user_default.png" width="50px"></img>
                <h3> Sing in</h3>
            </span>
            <form>
                <UserInput placeholder="Username" src="/images/icons/ico_home.png" width="100"></UserInput>
                <UserInput placeholder="Password" type="password" src="/images/icons/ico_home.png" width="100"></UserInput>
                <button type="submit">Login</button>
            </form>
        </LoginFormS>
    )
};

export default LoginForm