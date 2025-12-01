import { fetchUser, fetchRepos } from './api.js';
import { renderLoading, renderUser, renderError, renderRepos } from './dom.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

async function handleSearch() {
  const userName = inputSearch.value.trim();

  if (!userName) {
    alert('Por favor, insira um nome de usuário do GitHub.');
    return;
  }

  try {
    renderLoading();
    const userData = await fetchUser(userName);
    renderUser(userData);
    // buscar repositórios logo após renderizar o usuário
    try {
      const repos = await fetchRepos(userName);
      renderRepos(repos);
    } catch (err) {
      console.error('Erro ao buscar repositórios dentro do handleSearch:', err);
    }
  } catch (err) {
    console.error('Erro ao buscar dados do usuário:', err);
    if (err.status === 404) renderError('Usuário não encontrado!');
    else renderError('Ocorreu um erro ao buscar os dados do usuário.');
  }
}

btnSearch.addEventListener('click', handleSearch);

inputSearch.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') handleSearch();
});
