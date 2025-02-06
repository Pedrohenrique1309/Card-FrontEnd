"use script"

const disciplinas = [
    {nome:'PPDM', icon:'android.png', cor:'yellow'},
    {nome:'PRO', icon:'projetos.png', cor: 'tomato'},
    {nome:'PWBE', icon:'web.png', cor:'pink'},
    {nome:'PWFE', icon:'dominio.png', cor:'plum'}
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
    novoItem.style = `--cor-hover: ${disciplina.cor}`

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)

const produtos = [
    {titulo: 'Mobile',
    descricao: 'Curso especializado em desenvolver aplicações Mobile, sendo elas Android e IOS',
    imagem:'desenvolvimento-mobile.png',
    preco:'550.00'
},
    {titulo: 'Projetos',
    descricao: 'Especialização em comandar projetos de relacionados a T.I, usando metodologias clássicas e ágeis',
    imagem:'projetos-ti.png',
    preco:'400.00'
},
    {titulo: 'Back-End',
    descricao: 'Aprenda a desenvolver aplicações Back-end, que podem ser integradas a Bancos de Dados e aplicações Front-End',
    imagem:'backend.png',
    preco:'650.00'
},
    {titulo: 'Front-End',
    descricao: 'Desenvolva aplicações Front-End, integrando-as com aplicações Back-En',
    imagem:'front-End.png',
    preco:'800.00'
},
]

function criarCards(produto){

    const titulo = document.createElement('h1')
    const descricao = document.createElement('p')
    const imagem = document.createElement('img')
    const preco = document.createElement('h1')
    const duracao = document.createElement('h2')
    const tempoDuracao = document.createElement('p')
    const adicionar = document.createElement('h1')

}

produtos.forEach(criarCard)