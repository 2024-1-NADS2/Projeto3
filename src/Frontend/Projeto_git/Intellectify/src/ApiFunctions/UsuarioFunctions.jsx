const azureUrl = "intellectifyapi.azurewebsites.net/api/"

const cadastroUsuario = async(email, senha) => {
  try{
    const res = await fetch(azureUrl + "usuario/autenticacaoUsuario", {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, senha})
    })
    if(!res.ok){
      throw new Error("Email ou senha estão incorretos")
    }
    const usuarioEmail = await res.text()
    return usuarioEmail
  }
  catch (e){
    throw e
  }
}

export default cadastroUsuario