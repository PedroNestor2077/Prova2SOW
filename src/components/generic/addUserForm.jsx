import {UserForm} from "../style"
import UserInput from "./userInput"
function AddUserForm() {
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
          let endereco={
            cep:cep.value,
            rua:rua.value,
            numero:numero.value,
            bairro:bairro.value,
            cidade:cidade.value,
            }

          POST(nome.value,cpf.value,email.value,rua.value,bairro.value,cidade.value,cep.value,numero.value)
        }else{
          window.alert("Dados inválidos!")
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
  return (
    <UserForm>
      <div>
        <UserInput 
          id_img="img-nome" placeholder="Username" src="/images/icons/ico_home.png" width="100" id="nome" Blur={dinamicNome} value="pedro"
        />
        <UserInput 
          id_img="img-cpf" placeholder="CPF" src="/images/icons/ico_home.png" width="100" id="cpf"  func={checkCPF} size={14} Blur={dinamicCPF} value="100.321.336.77"
        />
        <UserInput 
          id_img="img-email" placeholder="Email" src="/images/icons/ico_home.png" width="100" id="email" Blur={dinamicEmail}  value="contato.pedronestor@gmail.com"
        />
        <UserInput 
          id_img="img-cep"  placeholder="CEP" src="/images/icons/ico_home.png" width="100" id="cep" Blur={ViaCEP} value="37970000"
        />
        <UserInput 
          id_img="img-cidade"  placeholder="Cidade" src="/images/icons/ico_home.png" width="100" id="cidade" Blur={dinamicCidade} 
        />
        <UserInput 
          id_img="img-bairro"  placeholder="Bairro" src="/images/icons/ico_home.png" width="100" id="bairro" Blur={dinamicBairro}value="moca"
        />
        <UserInput 
          id_img="img-rua"  placeholder="Rua" src="/images/icons/ico_home.png" width="100" id="rua" Blur={dinamicRua} value="rua2"
        />
        <UserInput 
          id_img="img-numero"  placeholder="Número" src="/images/icons/ico_home.png" width="100" id="numero" type="number" Blur={dinamicNumero} value="2"
        />
        
        

        <button onClick={doSubmit}>ADD User</button>
      </div>
    </UserForm>
  );
}
export default AddUserForm;