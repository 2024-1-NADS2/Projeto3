import "../styles/Login.css"
import BackgroundImage from "./BackgroundImage.jsx"

const Login = () => {
  return (
    <div className="login-container">
      <BackgroundImage/>
      <h1>Login</h1>
      <input type="text" placeholder="Email ou telefone" />
      <input type="password" placeholder="Senha" />
      <button className="btn-login">Entrar</button>
      <hr />
      <button className="btn-signup" onclick="criarConta()">Criar Nova Conta</button>

      <a className="linkReset" href="reset.html">
        <p className="forgot-password">Esqueceu a senha?</p>
      </a>
  </div>
  )
}

export default Login