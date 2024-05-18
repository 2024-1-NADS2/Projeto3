const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

const autenticacaoUsuario = async (email, senha) => {
  try {
    const url = azureUrl + "usuario/autenticacaoUsuario";
    console.log("Enviando solicitação para:", url);
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    if (!res.ok) {
      throw new Error("Email ou senha estão incorretos");
    }
    
    const usuarioEmail = await res.text();
  
    return usuarioEmail;
  } catch (e) {
    throw e;
  }
};

export default autenticacaoUsuario;
