import {AddBody} from "../style"
function AlreadyLogged() {
    return (
      <div>
          <h2>Você já está logado!</h2>
          <a
            href="/" onClick={()=>
            localStorage.setItem('logged',false)}>
            Singout</a>
      </div>
    );
}
export default AlreadyLogged