"use script"

const disciplinas = [
    {nome:'PPDM', icon:'android.png'},
    {nome:'PRO', icon:'projetos.png'},
    {nome:'PWBE', icon:'web.png'},
    {nome:'PWFE', icon:'dominio.png'}
]

function criarMenu(disciplina){

    //criando tags
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    //adionando conteúdo
    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    //adicionando conteúdo na tag
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)  

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)