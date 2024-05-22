const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

// Função para pegar todos os posts + usuários atrelados aos posts 
// export const pegarTodosPosts = async () => {
//   try {
//     const url = azureUrl + `post`;
  
//     const res = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });

//     if (!res.ok) {
//       console.log("Post não encontrado!")
//       throw new Error("Post não encontrado!");
//     }
    
//     const response = await res.json();
//     return response;
//   } catch (e) {
//     throw e;
//   }
// }

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

const fetchPostsData = async (savedEmail) => {
  try {
    const postsData = await pegarPostsPerfil(savedEmail);
    return postsData;
  } catch (error) {
    console.error("Erro ao buscar os posts:", error);
  }
};
const posts = fetchPostsData("gui@testes.com");

console.log(posts)

