import './App.css';
import ListPage from "./components/listPage"
import LoginPage from "./components/loginPage"
import AddPage from "./components/addPage"
import {BrowserRouter,Switch,Route} from "react-router-dom"
function App() {
  return (
     <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact/>
          <Route path="/users" component={ListPage} />
          <Route patch="/add" component={AddPage} />
        </Switch>
     </BrowserRouter>
  );
}
export default App;
