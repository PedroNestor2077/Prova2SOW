import {UserForm} from "../style"
import UserInput from "./userInput"
import NotLogged from "../generic/notLogged"
import {checkEmail,checkCPF,sendToast,isEmpty,ViaCEP,
      dinamicEmail,dinamicNome,dinamicCPF,dinamicCidade,
      dinamicBairro,dinamicRua,dinamicNumero
    } 
from "../functions.js"
function AddUserForm(props) {
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
          if(props.action==="PUT"){
            PUT(
              nome.value,cpf.value,email.value,rua.value,
              bairro.value,cidade.value,cep.value,numero.value
            )}else{
            POST(
              nome.value,cpf.value,email.value,rua.value,
              bairro.value,cidade.value,cep.value,numero.value
              )}
          }
        else{
          sendToast("Dados inválidos!","error")
        }
      
  };
  async function POST(
    nome,cpf,email,rua,bairro,cidade,cep,numero
    ){
    const Mydb="http://localhost:5000/usuarios"
     const data={
       id:"",
      nome:nome,
      cpf:cpf,
      email:email,
      endereco: {
        cep:cep,
        rua:rua,
        numero:numero,
        bairro:bairro,
        cidade:cidade,
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
    .then((response)=>{
      if (response.ok){
        let nome=document.getElementById("nome")
        let cpf=document.getElementById("cpf")
        let email=document.getElementById("email")
        let cep=document.getElementById("cep")
        let rua=document.getElementById("rua")
        let numero=document.getElementById("numero")
        let bairro=document.getElementById("bairro")
        let cidade=document.getElementById("cidade")
        let img_nome=document.getElementById("img-nome")
        let img_cpf=document.getElementById("img-cpf")
        let img_email=document.getElementById("img-email")
        let img_cep=document.getElementById("img-cep")
        let img_rua=document.getElementById("img-rua")
        let img_numero=document.getElementById("img-numero")
        let img_bairro=document.getElementById("img-bairro")
        let img_cidade=document.getElementById("img-cidade") 
        nome.value=""
        cpf.value=""
        email.value=''
        cep.value=""
        rua.value=""
        numero.value=""
        bairro.value=""
        cidade.value=""
        img_nome.src=""
        img_cpf.src=""
        img_cpf.src=""
        img_email.src=""
        img_cep.src=""
        img_rua.src=""
        img_numero.src=""
        img_bairro.src=""
        img_cidade.src=""
        sendToast("Usuário adicionado!","success")
      }else{
        sendToast("Não foi possivel se conectar.","warn")
      }
    })
    .catch((error)=>{
      sendToast("Não foi possivel adicionar o usuário.","error")
    })
  }
  async function PUT(
    nome,cpf,email,rua,bairro,cidade,cep,numero
    ){
    const Mydb=`http://localhost:5000/usuarios/${props.userID}`
     const data={
       id:"",
      nome:nome,
      cpf:cpf,
      email:email,
      endereco: {
        cep:cep,
        rua:rua,
        numero:numero,
        bairro:bairro,
        cidade:cidade,
        }   
      }
    const options={
      method:'PUT',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    }
    fetch(Mydb,options)
    .then((response)=>{
      if (response.ok){
        sendToast("Usuario editado!","success")
      }else{
        sendToast("Erro ao editar.","warn")
      }
    })
    .catch((error)=>{
      sendToast("Erro ao editar.","error")
    })
  }
  if (localStorage.getItem("logged")==="true"){
  return (
    <UserForm>
      <div>
        <UserInput 
          id_img="img-nome" placeholder="Username" src="/images/icons/ico_user_default.png" 
           id="nome" Blur={dinamicNome} value={props.nome}
        />
        <UserInput 
          id_img="img-cpf" placeholder="CPF" src="/images/icons/ico_cpf.png" 
           id="cpf"  func={checkCPF} size={14} Blur={dinamicCPF} value={props.cpf}
        />
        <UserInput 
          id_img="img-email" placeholder="Email" src="/images/icons/ico_email.png" 
           id="email" Blur={dinamicEmail}  value={props.email}
        />
        <UserInput 
          id_img="img-cep"  placeholder="CEP" src="/images/icons/ico_endereco.png" 
           id="cep" Blur={ViaCEP} value={props.cep}
        />
        <UserInput 
          id_img="img-cidade"  placeholder="Cidade" src="/images/icons/ico_cidade.png" 
           id="cidade" Blur={dinamicCidade} value={props.cidade}
        />
        <UserInput 
          id_img="img-bairro"  placeholder="Bairro" src="/images/icons/ico_endereco.png" 
           id="bairro" Blur={dinamicBairro} value={props.bairro}
        />
        <UserInput 
          id_img="img-rua"  placeholder="Rua" src="/images/icons/ico_endereco.png" 
           id="rua" Blur={dinamicRua} value={props.rua}
        />
        <UserInput 
          id_img="img-numero"  placeholder="Número" src="/images/icons/ico_home.png" 
           id="numero" type="number" Blur={dinamicNumero} value={props.numero}
        />
        <button onClick={doSubmit}>Confirmar</button>
      </div>
    </UserForm>
  );}
  else{
    return <NotLogged/>
  }
}
export default AddUserForm;