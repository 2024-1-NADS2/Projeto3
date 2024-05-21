const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

export const pegarTodosPosts = async () => {
  try {
    const url = azureUrl + `post`;
  
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      console.log("Post não encontrado!")
      throw new Error("Post não encontrado!");
    }
    
    const response = await res.json();
    return response;
  } catch (e) {
    throw e;
  }
}

(async () => {
  try {
    const posts = await pegarTodosPosts();

    for (let i = 0; i < posts.length; i++) {
      console.log("entrei no for");
      console.log(posts[i].id);
    }
  } catch (error) {
    console.error("Erro ao buscar os posts:", error);
  }
})();



console.log("gui")

// export const pegarPostsPerfil = async (email) => {
//   try {
//     const url = azureUrl + `post/${email}`;
  
//     const res = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });

//     if (!res.ok) {
//       throw new Error("Post não encontrado!");
//     }
    
//     const response = await res.json();
  
//     return response;
//   } catch (e) {
//     throw e;
//   }
// }