import "./NavBar.css"
import logo from '../../assets/logo.png';
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import ProfileMold from "../ImagemMold/ProfileMold";
import { Link } from "react-router-dom"

const NavBar = ({userImage}) => {
  return (
    <div className="navbar-container">
        <div className="navbar-components"> 
        <Link to="/feed"><img src={logo} alt="Logo" className="logo"/></Link>
        </div>

        <div className="navbar-components"> 
          <Link to="/feed"><GoHomeFill className="icones"/></Link>
          <Link to="/feed"><h1>Página Inicial</h1></Link>
        </div>
        
        <div className="navbar-components"> 
          <CiSearch className="icones"/>
          <h1>Explorar </h1>
        </div>

        <div className="navbar-components"> 
          <MdOutlineBarChart className="icones"/>
          <h1>Rank Universitário</h1> 
        </div>

        <div className="navbar-components"> 
          <MdOutlineMenuBook className="icones"/>
          <h1>Cursos</h1> 
        </div>

        <div className="navbar-components"> 
          <Link to="/perfil"><MdOutlinePerson className="icones"/></Link>
          <Link to="/perfil"><h1>Perfil</h1> </Link>
        </div>

        <div className="navbar-components">
          <ProfileMold src={userImage}/>
        </div>

        
    </div>
  )
}

export default NavBar

