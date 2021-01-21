import {UserForm} from "../style"
import UserInput from "./userInput"
function AddUserForm() {
  function isEmpty(iten){
    if (iten != ""){
      return true
    }else{
      return false
    }
  }
  function checkEmail(input){
      let usuario = input.value.substring(0, input.value.indexOf("@"));
      let dominio = input.value.substring(input.value.indexOf("@")+ 1, input.value.length);
      
      if ((usuario.length >=1) &&
          (dominio.length >=3) &&
          (usuario.search("@")==-1) &&
          (dominio.search("@")==-1) &&
          (usuario.search(" ")==-1) &&
          (dominio.search(" ")==-1) &&
          (dominio.search(".")!=-1) &&
          (dominio.indexOf(".") >=1)&&
          (dominio.lastIndexOf(".") < dominio.length - 1)) 
          {
            return true
          }else{
            return false
          }
  };
  function doSubmit(){
      const nome=document.getElementById("nome")
      const cpf=document.getElementById("cpf")
      const email=document.getElementById("email")
      const cep=document.getElementById("cep")
      const rua=document.getElementById("rua")
      const numero=document.getElementById("numero")
      const bairro=document.getElementById("bairro")
      const cidade=document.getElementById("cidade")
      /* ---------Validação------- */
      if (
        isEmpty(nome.value)&&
        isEmpty(cpf.value)&&
        isEmpty(email.value)&&
        isEmpty(cep.value)&&
        isEmpty(rua.value)&&
        isEmpty(numero.value)&&
        isEmpty(bairro.value)&&
        isEmpty(cidade.value)&&
        checkEmail(email)
      )
        {
          console.log("ok")
        }else{
          window.alert("Dados inválidos!")
        }
      
  };
  async function POST(nome,cpf,email,endereco){
    console.log("passei no post")
    const Mydb="http://localhost:5000/usuarios"
    var data={
      nome: 'foo bar',
      cpf: '213.123.123-45',
      email: 'foo_bar@email.com',
      endereco: {
        cep: 13454000,
        rua: 'rua talvez',
        numero: 785,
        bairro: 'bairro azul',
        cidade: 'cidade eterna',
      }
      }
    const options={
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    }
    fetch(Mydb,options)
  }
  return (
    <UserForm>
      <div>
        <UserInput placeholder="Username" src="/images/icons/ico_home.png" width="100" id="nome" ></UserInput>
        <UserInput placeholder="CPF" src="/images/icons/ico_home.png" width="100" id="cpf" ></UserInput>
        <UserInput placeholder="Email" src="/images/icons/ico_home.png" width="100" id="email" ></UserInput>
        <UserInput placeholder="CEP" src="/images/icons/ico_home.png" width="100" id="cep" ></UserInput>
        <UserInput placeholder="Rua" src="/images/icons/ico_home.png" width="100" id="rua" ></UserInput>
        <UserInput placeholder="Number" src="/images/icons/ico_home.png" width="100" id="numero" ></UserInput>
        <UserInput placeholder="Bairro" src="/images/icons/ico_home.png" width="100" id="bairro" ></UserInput>
        <UserInput placeholder="City" src="/images/icons/ico_home.png" width="100" id="cidade" ></UserInput>
        <button onClick={doSubmit}>ADD User</button>
        </div>
    </UserForm>
  );
}
export default AddUserForm;