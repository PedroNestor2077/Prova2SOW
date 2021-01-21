import {UserForm} from "../style"
import UserInput from "./userInput"
function AddUserForm() {
  
  async function POST(){
    console.log("passei no post")
    const Mydb="http://localhost:5000/usuarios"
    var data="new FormData(document.getElementById('form'))"
    fetch(Mydb,{
      method:'POST',
      body:{
        }
    )
  }
  return (
    <UserForm>
      <form id="form">
        <UserInput placeholder="Username" src="/images/icons/ico_home.png" width="100" name="nome" ></UserInput>
        <UserInput placeholder="CPF" src="/images/icons/ico_home.png" width="100" name="cpf" ></UserInput>
        <UserInput placeholder="Email" src="/images/icons/ico_home.png" width="100" name="email" ></UserInput>
        <UserInput placeholder="CEP" src="/images/icons/ico_home.png" width="100" name="cep" ></UserInput>
        <UserInput placeholder="Rua" src="/images/icons/ico_home.png" width="100" name="rua" ></UserInput>
        <UserInput placeholder="Number" src="/images/icons/ico_home.png" width="100" name="numero" ></UserInput>
        <UserInput placeholder="Bairro" src="/images/icons/ico_home.png" width="100" name="bairro" ></UserInput>
        <UserInput placeholder="City" src="/images/icons/ico_home.png" width="100" name="cidade" ></UserInput>
        <button onClick={POST}>ADD User</button>
        </form>
    </UserForm>
  );
}
export default AddUserForm;