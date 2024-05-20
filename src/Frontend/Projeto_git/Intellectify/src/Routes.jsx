import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import Reset from "./pages/Reset/Reset";
import Feed from "./pages/Feed/Feed";
import Perfil from "./pages/Perfil/Perfil";
import RankFacul from "./pages/RankFacul/RankFacul";


const Routes_APP = () => {
  return (
    <Router>
      <Routes>
        
      
              <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default Routes_APP;