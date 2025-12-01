# Visualizador de Perfil do GitHub

Projeto simples que busca e exibe informações de perfis do GitHub (avatar, nome, bio, seguidores, seguindo) e lista repositórios.

Status: em desenvolvimento

---

## Recursos

- Busca de usuário pelo nome (input) e exibição do perfil.
- Lista de repositórios do usuário (links abrem em nova aba).
- Layout responsivo básico e estilização com CSS puro.
- Implementação em ES Modules (arquivos em `src/js/`).

---

## Estrutura do projeto

```
visualizador-perfil-github/
├─ index.html
├─ README.md
├─ src/
│  ├─ css/
│  │  ├─ styles.css
│  │  ├─ reset.css
│  │  ├─ animations.css
│  │  └─ responsive.css
│  └─ js/
│     ├─ api.js        # chamadas à API do GitHub
│     ├─ dom.js        # renderização e manipulação do DOM
│     └─ main.js       # entrypoint: orquestra eventos
└─ ...
```

---

## Requisitos

- Navegador moderno com suporte a ES Modules (Chrome, Edge, Firefox, etc.).
- Servir os arquivos via HTTP (os módulos ES não funcionam corretamente via `file://`).

---

## Execução local (opções)

Abra um terminal na pasta do projeto (`visualizador-perfil-github`) e use uma das opções abaixo.

- Usando Python (se instalado):

```powershell
python -m http.server 8000
# abra no navegador: http://localhost:8000
```

- Usando Node (http-server via npx):

```powershell
npx http-server . -p 8000
# abra no navegador: http://localhost:8000
```

- Usando a extensão Live Server do VS Code (recomendado para desenvolvimento rápido):

1. Abra a pasta no VS Code.
2. Clique com o botão direito em `index.html` → `Open with Live Server`.

---

## Observações importantes

- Como o projeto usa `type="module"` em `index.html`, é necessário abrir via servidor HTTP. Se abrir o `index.html` diretamente pelo sistema de arquivos, os imports podem falhar.
- A API usada é a pública do GitHub (`https://api.github.com`). Limites de rate limit podem ser aplicados para muitos pedidos sem autenticação.

---

## Contribuições

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue primeiro descrevendo a proposta.

---

## Licença

Este repositório está aberto — adicione a licença que preferir (ex.: MIT) caso queira publicar.# visualizador-perfil-github