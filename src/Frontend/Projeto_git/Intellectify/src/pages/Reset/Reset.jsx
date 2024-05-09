import "./Reset.css"
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx"
import FormContainer from "../../components/Form/FormContainer/FormContainer.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"

const Reset = () => {
  return (
    <div>
      <BackgroundImage/>
      <FormContainer>
        <h1>Esqueci minha senha</h1>
        <p>Insira seu e-mail ou telefone ou nome de <br/> usuário para enviarmos um código para<br/> modificar sua senha</p>
        <Input type="text" name="email" placeholder="Email"/>
        <Button to="/feed">Solicitar Código</Button>
      </FormContainer>
    </div>
  )
}


export default Reset