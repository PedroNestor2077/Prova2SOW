import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
/* -------------------------FUNÇOES DIVERÇAS----------------- */
export function sendToast(msg,mode){
  if (mode=="error"){
    return toast.error(msg)
  }
  else if(mode=="success"){
    return toast.success(msg)
  }
  else if(mode=="warn"){
  return toast.warn(msg)
  }
  else{
    return toast.info(msg)
  }
}
/* ----------------Validação de inputs---------- */
export function checkPassword(){
  const password=document.getElementById("password")
  let err_img=document.getElementById("img-password")
  if (password.value.length>4){
    err_img.src="/images/icons/ico_valid.png"
    return true
  }else{
    err_img.src="/images/icons/ico_invalid.png"
    return false
  }
}
export function checkEmail(input){
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
export function dinamicEmail(){
  const email=document.getElementById("email")
  let err_img=document.getElementById("img-email")
  if (checkEmail(email)){
    err_img.src="/images/icons/ico_valid.png"
  }else{
    err_img.src="/images/icons/ico_invalid.png"
  }
}
export function checkCPF(){
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
export function isEmpty(iten){
  if (iten != ""){
    return true
  }else{
    return false
  }
}
export function ViaCEP(){
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
export function dinamicNome(){
  const nome=document.getElementById("nome")
  let err_img=document.getElementById("img-nome")
  if (nome.value==""){
    err_img.src="/images/icons/ico_invalid.png"
  }else{
    err_img.src="/images/icons/ico_valid.png"
  }
}
export function dinamicCPF(){
  const cpf=document.getElementById("cpf")
  let err_img=document.getElementById("img-cpf")
  if (cpf.value.length==14){
    err_img.src="/images/icons/ico_valid.png"
  }else{
    err_img.src="/images/icons/ico_invalid.png"
  }
}
export function dinamicCidade(){
  const cidade=document.getElementById("cidade")
  let err_img=document.getElementById("img-cidade")
  if (cidade.value==""){
    err_img.src="/images/icons/ico_invalid.png"
  }else{
    err_img.src="/images/icons/ico_valid.png"
  }
}
export function dinamicRua(){
  const rua=document.getElementById("rua")
  let err_img=document.getElementById("img-rua")
  if (rua.value==""){
    err_img.src="/images/icons/ico_invalid.png"
  }else{
    err_img.src="/images/icons/ico_valid.png"
  }
}
export function dinamicNumero(){
  const numero=document.getElementById("numero")
  let err_img=document.getElementById("img-numero")
  if (numero.value==""){
    err_img.src="/images/icons/ico_invalid.png"
  }else{
    err_img.src="/images/icons/ico_valid.png"
  }
}
export function dinamicBairro(){
  const bairro=document.getElementById("bairro")
  let err_img=document.getElementById("img-bairro")
  if (bairro.value==""){
    err_img.src="/images/icons/ico_invalid.png"
  }else{
    err_img.src="/images/icons/ico_valid.png"
  }
}
/* ----------------------Envio de formulários-------------- */
export function doLogin(){
  let email=document.getElementById("email")
  if (checkEmail(email) && checkPassword()){
    console.log("login!")
    localStorage.setItem("logged",true)
    sendToast("Entrando")
    setTimeout(()=>{window.location.href="/users"},2000)
  }
  else{
    sendToast("Dados inválidos!","error")
  }
}
