const profileResults = () => document.querySelector('.profile-results');

export function setContent(html) {
  const root = profileResults();
  if (root) root.innerHTML = html;
}

export function renderLoading() {
  setContent('<span>Carregando...</span>');
}

export function renderError(message) {
  setContent(`<div class="profile-error">${message}</div>`);
  // mantém também um alerta para feedback imediato
  alert(message);
}

export function renderUser(userData) {
  const html = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name || 'Nome não disponível'}</h2>
        <p>${userData.bio || 'Não possui bio cadastrada 😞.'}</p>
      </div>
    </div>

    <div class="profile-counters">  
      <div class="followers">
        <h4>👤Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👤Seguindo</h4>
        <span>${userData.following}</span>
      </div>        
    </div>
  `;

  setContent(html);
}

export function renderRepos(repos) {
  if (!Array.isArray(repos)) {
    console.warn('[renderRepos] esperado array, recebido:', repos);
    return;
  }

  const root = profileResults();
  if (!root) return;

  if (repos.length === 0) {
    root.innerHTML += `
      <div class="profile-repos">
        <h3>Repositórios</h3>
        <p>Nenhum repositório encontrado.</p>
      </div>
    `;
    return;
  }

  const list = repos.map(r => `<li><a href="${r.html_url}" target="_blank" rel="noopener noreferrer">${r.name}</a></li>`).join('');

  // Anexa a lista de repositórios abaixo do conteúdo existente
  root.innerHTML += `
    <div class="profile-repos">
      <h3>Repositórios</h3>
      <ul>${list}</ul>
    </div>
  `;
}
