import {UserForm} from "../style"
import UserInput from "./userInput"
function AddUserForm() {
  return (
    <UserForm>
      <form>
        <UserInput placeholder="Username" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="CPF" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="Email" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="CEP" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="Rua" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="Number" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="Bairro" src="/images/icons/ico_home.png" width="100"></UserInput>
        <UserInput placeholder="City" src="/images/icons/ico_home.png" width="100"></UserInput>
        <button type="submit">ADD User</button>
      </form>
    </UserForm>
  );
}
export default AddUserForm;