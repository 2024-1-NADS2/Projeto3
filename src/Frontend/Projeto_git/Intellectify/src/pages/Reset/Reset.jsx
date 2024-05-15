import React from 'react'
import RootContainer from '../../components/RootContainer/RootContainer'
import FormContainer from '../../components/Form/FormContainer/FormContainer'
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import {Link} from "react-router-dom"
import "./Reset.css"

const Reset = () => {
  return (
    <div>
        <RootContainer>
            <div>
                <FormContainer>
                    <h1 className="title">Esqueci minha senha</h1>
                    <p>Insira seu e-mail ou telefone ou nome de usuário para enviarmos um código para modificar sua senha</p>
                    <Input type="text" name="email" placeholder="Email"/>
                    <Input type="text" name="novasenha" placeholder="Nova Senha"/>
                    <Input type="text" name="confirmar" placeholder="Confirmar Senha"/>
                    <Button><Link to="/">Alterar Senha</Link></Button>
                </FormContainer>
            </div>
        </RootContainer>
    </div>
  )
}

export default Reset