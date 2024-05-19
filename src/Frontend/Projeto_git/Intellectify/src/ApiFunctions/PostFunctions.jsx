const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

export const pegarTodosPosts = async () => {
  try {
    const url = azureUrl + `post/`;
  
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error("Post não encontrado!");
    }
    
    const response = await res.json();
  
    return response;
  } catch (e) {
    throw e;
  }
}

export const pegarPostsPerfil = async (email) => {
  try {
    const url = azureUrl + `post/${email}`;
  
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error("Post não encontrado!");
    }
    
    const response = await res.json();
  
    return response;
  } catch (e) {
    throw e;
  }
}