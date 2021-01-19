import NavBar from "./generic/navBar"
import {LoginBody} from "./style"
import LoginForm from "./generic/loginForm"
function LoginPage() {
  return (
    <LoginBody>
      <NavBar />
      <LoginForm />
    </LoginBody>
  );
}
export default LoginPage;