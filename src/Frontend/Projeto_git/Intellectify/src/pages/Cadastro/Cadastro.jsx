import "./Cadastro.css"
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx"
import FormContainer from "../../components/Form/FormContainer/FormContainer.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import { Link } from "react-router-dom"

const Cadastro = () => {
  return (<div>
    <BackgroundImage/>
    <div className="card-login">
      <FormContainer>
        <h1 id="title">Cadastro</h1>
        <div className="fullname">
          <Input className="texte" type="text" name="nome" placeholder="Nome"/>
          <Input className="texte" type="text" name="sobrenome" placeholder="Sobrenome"/>
        </div>
        <Input type="text" name="email" placeholder="Email"/>
        <Input type="text" name="senha" placeholder="Senha"/>
        <Input type="text" name="confirmar-senha" placeholder="Confirmar senha"/>
        <Button to="/feed">Registrar</Button>
      </FormContainer>
    </div>
    <div className="logar">
      <FormContainer>
        <h1>Ja tem uma conta? <Link to="/" className="link">Logar!</Link></h1>
      </FormContainer>
    </div>
  </div>
  )
}

export default Cadastro


// <div className="general">
{/* <div className="container">
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
</div> */}