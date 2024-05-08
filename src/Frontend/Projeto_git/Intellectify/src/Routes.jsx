import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "../src/pages/Login/Login"
import Cadastro from "../src/pages/Cadastro/Cadastro"
import Reset from "../src/pages/Reset/Reset"

const Routes_APP = () => {
  return (
    <Router>
      <ul>  
        <li><link to="/">Login</link></li>
        <li><link to="/Cadastro">Cadastro</link></li>
        <li><link to="/Reset">Reset</link></li>  
      </ul>
      <Routes>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Cadastro">
          <Cadastro/>
        </Route>
        <Route path="/Reset">
          <Reset/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Routes_APP