"use script"

const disciplinas = [
    'PPDM',
    'PRO',
    'PWBE',
    'PWFE'
]

function criarMenu(disciplina){

    //criando tags
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    //adionando conteúdo
    novaImagem.src = "./img/android.png"
    novoSpan.textContent = disciplina

    //adicionando conteúdo na tag
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)  

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)