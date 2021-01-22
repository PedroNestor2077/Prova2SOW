import {UserForm} from "../style"
import UserInput from "./userInput"
import {checkEmail} from "../functions.js"
import {toast} from 'react-toastify'
toast.configure()
function AddUserForm(props) {

  function checkCPF(){
    const input=document.getElementById("cpf")
    const cpf=input.value
    if(cpf.length==3 || cpf.length==7){
      input.value=(cpf+".")
    }
    if(cpf.length==11){
      input.value=(cpf+"-")
    }
    if(cpf.length>14){
      let _cpf=cpf.split(([0, 2]))
      console.log(_cpf[0])
    }
  };
  function isEmpty(iten,ico){
    if (iten != ""){
      return true
    }else{
      return false
    }
  }
  function ViaCEP(){
    let cep=document.getElementById('cep').value
    if(cep.length==8){
      fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((RespostaDoServer)=>{
          return RespostaDoServer.json();
        })
        .then((DadosDoCep)=>{        
          if (DadosDoCep.logadouro!=undefined){
            let rua=document.getElementById('rua')
            rua.value=DadosDoCep.logadouro
          }
          if (DadosDoCep.bairro!=undefined){
            let bairro=document.getElementById('bairro')
            bairro.value=DadosDoCep.bairro 
          }
          if (DadosDoCep.localidade!=undefined){
            let cidade=document.getElementById('cidade')
            cidade.value=DadosDoCep.localidade
          }
          let err_img=document.getElementById("img-cep")
          err_img.src="/images/icons/ico_valid.png"
        })
          

    }else{
      let err_img=document.getElementById("img-cep")
      err_img.src="/images/icons/ico_invalid.png"
    }

  }
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
          console.log(props.action)
          if(props.action=="PUT"){
            console.log("PUT")
            PUT(
              nome.value,cpf.value,email.value,rua.value,
              bairro.value,cidade.value,cep.value,numero.value
            )}else{
            console.log("POST")
            POST(
              nome.value,cpf.value,email.value,rua.value,
              bairro.value,cidade.value,cep.value,numero.value
              )}
          }
        else{
          toast.error("Dados inválidos!")
        }
      
  };
  async function POST(nome,cpf,email,rua,bairro,cidade,cep,numero){
    console.log("passei no post")
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
    .then(toast.success("Usuário adicionado!"))
  }
  async function PUT(nome,cpf,email,rua,bairro,cidade,cep,numero){
    console.log("passei no post")
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
  }
  /* --------------------------------VALIDAÇÃO DINÂMICA-------------- */
  function dinamicEmail(){
    const email=document.getElementById("email")
    let err_img=document.getElementById("img-email")
    if (checkEmail(email)){
      err_img.src="/images/icons/ico_valid.png"
    }else{
      err_img.src="/images/icons/ico_invalid.png"
    }
  }
  function dinamicNome(){
    const nome=document.getElementById("nome")
    let err_img=document.getElementById("img-nome")
    if (nome.value==""){
      err_img.src="/images/icons/ico_invalid.png"
    }else{
      err_img.src="/images/icons/ico_valid.png"
    }
  }
  function dinamicCPF(){
    const cpf=document.getElementById("cpf")
    let err_img=document.getElementById("img-cpf")
    if (cpf.value.length==14){
      err_img.src="/images/icons/ico_valid.png"
    }else{
      err_img.src="/images/icons/ico_invalid.png"
    }
  }
  function dinamicCidade(){
    const cidade=document.getElementById("cidade")
    let err_img=document.getElementById("img-cidade")
    if (cidade.value==""){
      err_img.src="/images/icons/ico_invalid.png"
    }else{
      err_img.src="/images/icons/ico_valid.png"
    }
  }
  function dinamicBairro(){
    const bairro=document.getElementById("bairro")
    let err_img=document.getElementById("img-bairro")
    if (bairro.value==""){
      err_img.src="/images/icons/ico_invalid.png"
    }else{
      err_img.src="/images/icons/ico_valid.png"
    }
  }
  function dinamicRua(){
    const rua=document.getElementById("rua")
    let err_img=document.getElementById("img-rua")
    if (rua.value==""){
      err_img.src="/images/icons/ico_invalid.png"
    }else{
      err_img.src="/images/icons/ico_valid.png"
    }
  }
  function dinamicNumero(){
    const numero=document.getElementById("numero")
    let err_img=document.getElementById("img-numero")
    if (numero.value==""){
      err_img.src="/images/icons/ico_invalid.png"
    }else{
      err_img.src="/images/icons/ico_valid.png"
    }
  }
  if (localStorage.getItem("logged")=="true"){
  return (
    <UserForm>
      <div>
        <UserInput 
          id_img="img-nome" placeholder="Username" src="/images/icons/ico_home.png" width="100" id="nome" Blur={dinamicNome} value={props.nome}
        />
        <UserInput 
          id_img="img-cpf" placeholder="CPF" src="/images/icons/ico_home.png" width="100" id="cpf"  func={checkCPF} size={14} Blur={dinamicCPF} value={props.cpf}
        />
        <UserInput 
          id_img="img-email" placeholder="Email" src="/images/icons/ico_home.png" width="100" id="email" Blur={dinamicEmail}  value={props.email}
        />
        <UserInput 
          id_img="img-cep"  placeholder="CEP" src="/images/icons/ico_home.png" width="100" id="cep" Blur={ViaCEP} value={props.cep}
        />
        <UserInput 
          id_img="img-cidade"  placeholder="Cidade" src="/images/icons/ico_home.png" width="100" id="cidade" Blur={dinamicCidade} value={props.cidade}
        />
        <UserInput 
          id_img="img-bairro"  placeholder="Bairro" src="/images/icons/ico_home.png" width="100" id="bairro" Blur={dinamicBairro} value={props.bairro}
        />
        <UserInput 
          id_img="img-rua"  placeholder="Rua" src="/images/icons/ico_home.png" width="100" id="rua" Blur={dinamicRua} value={props.rua}
        />
        <UserInput 
          id_img="img-numero"  placeholder="Número" src="/images/icons/ico_home.png" width="100" id="numero" type="number" Blur={dinamicNumero} value={props.numero}
        />
        
        

        <button onClick={doSubmit}>Confirmar</button>
      </div>
    </UserForm>
  );}
  else{
    return <h1>Not logged! <a href="/">-Click here to login</a></h1>
  }
}
export default AddUserForm;