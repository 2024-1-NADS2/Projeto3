import "./Login.css"
import FormContainer from "../../components/Form/FormContainer/FormContainer.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import {Link} from "react-router-dom"
import RootContainer from "../../components/RootContainer/RootContainer.jsx"

const Login = () => {
  return (
    <div>
      <RootContainer>
        <div className="pageContainer">
          <FormContainer>
            <h1 id="title">Login</h1>
            <Input type="text" name="email" placeholder="Email"/>
            <Input type="text" name="senha" placeholder="Senha"/>
            <Button><Link to="/feed">Entrar</Link></Button>
            <p><Link to="/reset" className="link">Esqueceu sua senha?</Link></p>
          </FormContainer>
          <div className="cadastre-se">
            <FormContainer>
              <h1>Não tem uma conta? <Link to="/cadastro" className="link">Cadastre-se!</Link></h1>
            </FormContainer>
          </div>
        </div>
      </RootContainer>
    </div>
  )
}

export default Login