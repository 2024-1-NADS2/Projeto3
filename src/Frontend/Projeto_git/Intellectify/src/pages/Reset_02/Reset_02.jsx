import "../styles/Reset_02.css"

const Reset_02 = () => {
  return (
    <div className="reset02-container">
      <h1>Código enviado</h1>
      <p>Foi enviado um código para você alterar a senha da sua conta</p>
      <input type="text" placeholder="Digite o código" />
      <button className="btn-continue">Continuar</button>
      <hr />
      <button className="btn-login" onclick="Entrar()">Retornar ao Login</button>
  </div>
  )
}

export default Reset_02