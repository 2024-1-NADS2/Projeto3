import "../styles/Cadastro.css"

const Cadastro = () => {
  return (
    <div className="general">
      <div className="container">
        <h1>Cadastro</h1>
        <input type="text" className="name" placeholder="Nome" />
        <input type="text" className="name" placeholder="Sobrenome" />
        <input type="text" className="others-inputs" placeholder="Email ou telefone" />
        <input type="password" className="others-inputs" placeholder="Senha" />
        <input type="password" className="others-inputs" placeholder="Confirmar senha" />
        <button className="btn-register">Registrar</button>
        <a className="linkTermo" href="#">
          <p className="termoscad">Com este registro, aceitas os nossos Termos, a Política de Privacidade e a Política de Cookies.</p>
        </a>
      </div>
      <div className="account-CT">
        <p>Ja tem conta? <a href="login.html">Faça Login</a></p>
      </div>
  </div>
  )
}

export default Cadastro