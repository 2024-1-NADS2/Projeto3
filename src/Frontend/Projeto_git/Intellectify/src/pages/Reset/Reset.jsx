import "../Reset.css"

const Reset = () => {
  return (
    <div className="reset-container">
      <h1>Esqueci minha senha</h1>
      <p style="color: #858585;">Insira seu e-mail, telefone ou nome de usuário para enviarmos um código para modificar sua senha</p>
      <input type="text" placeholder="Email ou telefone" />
      <button className="btn-reset" onclick="Codigo()">Receber Código</button>
      <hr />
      <button className="btn-login" onclick="Entrar()">Retornar ao Login</button>
    </div>
  )
}

export default Reset