var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {

    // Bloqueia o refresh da página
    e.preventDefault()

    // Url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    // Valor do inpt Name
    let nome = document.getElementById("name")

    // Concatena a url com o inputname
    urlForm = urlForm + this.name.value

    // Transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    // ID Content
    let resposta = document.getElementById('content')

    // Id ImgPokemon
    let imagem = document.querySelector('.pokemon')

    // Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            
            html = 'Nome: ' + maiuscula(data.name) + ' // '
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            console.log(data)
        })
        .catch(function (err) {
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! 😒'
            } else {
                html = 'Por favor insira um nome de Pokemon ou número existentes'
            }
            resposta.innerHTML = html
        })
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}


