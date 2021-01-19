import NavBar from "./generic/navBar"
import {AddBody} from "./style"
import UserInput from "./generic/userInput"
import AddUserForm from "./generic/addUserForm"
function AddPage() {
  return (
    <AddBody>
      <NavBar />
      <AddUserForm />
    </AddBody>
  );
}
export default AddPage;