import NavBar from "./generic/navBar"
import {AddBody} from "./style"
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