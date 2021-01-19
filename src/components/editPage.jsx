import NavBar from "./generic/navBar"
import {EditBody} from "./style"
import UserInput from "./generic/userInput"
import EditUser from "./generic/editUser"
function EditPage() {
  return (
    <EditBody>
      <NavBar />
      <EditUser />
    </EditBody>
  );
}
export default EditPage;