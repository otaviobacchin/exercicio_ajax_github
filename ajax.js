document.addEventListener('DOMContentLoaded', function() {
    const elementoNome = document.querySelector('#nome');
    const elementoUsername = document.querySelector('#username');
    const elementoFoto = document.querySelector('#foto')
    const elementoRepositorios = document.querySelector('#repositorios');
    const elementoSeguidores = document.querySelector('#seguidores');
    const elementoSeguindo = document.querySelector('#seguindo');
    const elementoGithubLink = document.querySelector('#github-link');

    fetch ('https://api.github.com/users/otaviobacchin')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        elementoNome.innerText = json.name;
        elementoUsername.innerText = json.login;
        elementoFoto.src = json.avatar_url;
        elementoRepositorios.innerText = json.public_repos  ;
        elementoSeguidores.innerText = json.followers;
        elementoSeguindo.innerText = json.following;
        elementoGithubLink.href = json.html_url;
    })
})