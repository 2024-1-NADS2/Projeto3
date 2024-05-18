import "./Login.css"
import FormContainer from "../../components/Form/FormContainer/FormContainer.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import {Link, useNavigate} from "react-router-dom"
import RootContainer from "../../components/RootContainer/RootContainer.jsx"
import autenticacaoUsuario from "../../ApiFunctions/UsuarioFunctions.jsx"

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    try {
      // Chama a função para autenticar o usuário
      const usuarioEmail = await autenticacaoUsuario(email, senha);
      console.log(email, senha)
      // Se autenticação for bem-sucedida, redireciona para a página de feed
      navigate("/feed");
    } catch (error) {
      // Se houver erro na autenticação, trata o erro, como exibir uma mensagem para o usuário
      console.error("Erro ao autenticar usuário:", error);
      // Aqui você pode exibir uma mensagem de erro para o usuário informando que as credenciais estão incorretas
    }
  };

  return (  
    <div>
      <RootContainer>
        <div className="pageContainer">
          <FormContainer>
            <h1 id="title">Login</h1>
            <Input type="text" name="email" placeholder="Email"/>
            <Input type="text" name="senha" placeholder="Senha"/>
            <Button onClick={(handleLogin)}>Entrar</Button>
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