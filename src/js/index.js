const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';


btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        
        profileResults.innerHTML = '<span>Carregando...</span>';

        try {
        // Aqui você pode adicionar a lógica para buscar o valor do input
        const response = await fetch(`${BASE_URL}/users/${userName}`);
        
        if (!response.ok) {
            alert('Usuário não encontrado!');
            return;
        }

        const userData = await response.json();
        console.log(userData); // apenas verificar se os dados foram obtidos corretamente

        profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                <h2>${userData.name || 'Nome não disponível'}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😞.'}</p>
        
                </div>
                </div>`


    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        alert('Ocorreu um erro ao buscar os dados do usuário.');
    }


    } else {
        alert('Por favor, insira um nome de usuário do GitHub.');
    }
});


// inputSearch.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         getUserData();
//     }
// });
