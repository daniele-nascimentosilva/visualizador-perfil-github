const BASE_URL = 'https://api.github.com';

export async function fetchUser(userName) {
  if (!userName) throw new Error('Username is required');

  const response = await fetch(`${BASE_URL}/users/${userName}`);

  if (!response.ok) {
    const err = new Error('Usuário não encontrado');
    err.status = response.status;
    throw err;
  }

  return await response.json();
}
