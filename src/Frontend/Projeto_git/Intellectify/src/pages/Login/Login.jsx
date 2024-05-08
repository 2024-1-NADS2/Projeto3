import "./Login.css"
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"

const Login = () => {
  return (
    <div>
      <BackgroundImage/>
      <div className="login-container">
        <h1>Login</h1>
        <Input type="text" name="name" placeholder="Email ou telefone"/>
        <Input type="text" name="name" placeholder="Senha"/>
      </div>
    </div>
  )
}

export default Login