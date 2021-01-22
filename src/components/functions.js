import Reat from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter,Switch,Route} from "react-router-dom"
toast.configure()
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
export function doLogin(){
  let email=document.getElementById("email")
  
  if (checkEmail(email) && checkPassword()){
    console.log("login!")
    localStorage.setItem("logged",true)
    toast.info("Entrando...")
    setTimeout(()=>{window.location.href="/users"},2000)
  }
  else{
    toast.error("Dados inválidos!")
  }
}