import "./Login.css"
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx"
import FormContainer from "../../components/Form/FormContainer/FormContainer.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import {Link} from "react-router-dom"


const Login = () => {
  return (
    <div>
      <BackgroundImage/>
      <FormContainer>
        <h1>Login</h1>
        <Input type="text" name="email" placeholder="Email"/>
        <Input type="text" name="senha" placeholder="Senha"/>
        <Button to="/feed">Entrar</Button>
      </FormContainer>
      <div className="cadastre-se">
        <FormContainer>
          <h1>Não tem conta? <span><Link to="/cadastro">Cadastre-se!</Link></span></h1>
        </FormContainer>
      </div>
    </div>
  )
}

export default Login