const azureUrl = "intellectifyapi.azurewebsites.net/api/"

export const autenticacaoUsuario = async(email, senha) => {
  try{
    const res = await fetch(+ "usuario/autenticacaoUsuario", {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, senha})
    })
    console.log("Enviando solicitação para: ", azureUrl + "usuario/autenticacaoUsuario");
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

// export const alterarSenha = async(email, senha) => {
//   try{
//     const res = await fetch(+ `usuario/${email}`, {
//       method: 'Put',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({senha})
//     })
//     console.log("Enviando solicitação para: ", azureUrl + "usuario/autenticacaoUsuario");
//     if(!res.ok){
//       throw new Error("Email ou senha estão incorretos")
//     }
//     const usuarioEmail = await res.text()
//     return usuarioEmail
//   }
//   catch (e){
//     throw e
//   }
// }
