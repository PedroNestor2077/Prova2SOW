import NavBar from "./generic/navBar"
import {LoginBody} from "./style"
import LoginForm from "./generic/loginForm"
import AlreadyLogged from "./generic/alreadyLogged"
function LoginPage() {
  if(localStorage.getItem("logged")==="false"){
  return (
    <LoginBody>
      <NavBar />
      <LoginForm />
    </LoginBody>
  );}else{
    return (
      <LoginBody>
        <NavBar />
        <AlreadyLogged/>
      </LoginBody>
    );}
}
export default LoginPage;