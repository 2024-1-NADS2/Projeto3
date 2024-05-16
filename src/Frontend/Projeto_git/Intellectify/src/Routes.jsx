import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import Reset from "./pages/Reset/Reset";

const Routes_APP = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
};

export default Routes_APP;