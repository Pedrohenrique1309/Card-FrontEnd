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
    duracao: ['1M', '3M', '6M', '9M' ,'1Y'],
    preco:'550.00'
},
    {titulo: 'Projetos',
    descricao: 'Especialização em comandar projetos de relacionados a T.I, usando metodologias clássicas e ágeis',
    imagem:'projetos-ti.png',
    duracao: ['1M', '3M', '6M', '9M' ,'1Y'],
    preco:'400.00'
},
    {titulo: 'Back-End',
    descricao: 'Aprenda a desenvolver aplicações Back-end, que podem ser integradas a Bancos de Dados e aplicações Front-End',
    imagem:'backend.png',
    duracao: ['1M', '3M', '6M', '9M' ,'1Y'],
    preco:'650.00'
},
    {titulo: 'Front-End',
    descricao: 'Desenvolva aplicações Front-End, integrando-as com aplicações Back-En',
    imagem:'front-End.png',
    duracao: ['1M', '3M', '6M', '9M' ,'1Y'],
    preco:'800.00'
},
]

function criarCards(produto){
    
    //criando tags

    const container = document.getElementById('container')
    container.className = 'container'

    const card = document.createElement('div')
    card.className = 'card'

    const titulo = document.createElement('div')
    titulo.className = 'titulo'

    const tituloH1 = document.createElement('h1')

    const descricao = document.createElement('div')
    descricao.className = 'descricao'

    const descricaoP = document.createElement('p')

    const imagem = document.createElement('div')
    imagem.className = 'imagem'
    
    const imagemImg = document.createElement('img')

    const preco = document.createElement('div')
    preco.className = 'imagem'

    const precoH1 = document.createElement('h1')

    const tituloDuracao = document.createElement('div')
    tituloDuracao.className = 'tituloDuracao'

    const tituloDuracaoH2 = document.createElement('h2')

    const duracao = document.createElement('div')
    duracao.className = 'duracao'

    const duracaoP = document.createElement('p')

    // //produto.duracao.forEach(function(item){
    //     const div = document.createElement('div')
    //     const p = document.createElement('p')

    //     p.textContent = item

    // })

    const adicionar = document.createElement('div')
    adicionar.className = 'adicionar'

    const adicionarH1 = document.createElement('h1')

    //adicionando conteúdo na tag
    tituloH1.textContent = produto.titulo
    descricaoP.textContent = produto.descricao
    imagemImg.src = `./img2/${produto.imagem}`
    precoH1.textContent = `R$${produto.preco}`
    tituloDuracaoH2.textContent = 'Duração'
    duracaoP.textContent = produto.duracao
    adicionarH1.textContent = 'ADD TO CARD'

    //adicionando a tag a classe
    titulo.appendChild(tituloH1)
    descricao.appendChild(descricaoP)
    imagem.appendChild(imagemImg)
    preco.appendChild(precoH1)
    tituloDuracao.appendChild(tituloDuracaoH2)
    duracao.appendChild(duracaoP)
    adicionar.appendChild(adicionarH1)

    //adicionando no pai
    card.appendChild(titulo)
    card.appendChild(descricao)
    card.appendChild(imagem)
    card.appendChild(preco)
    card.appendChild(tituloDuracao)
    card.appendChild(duracao)
    card.appendChild(adicionar)
    container.appendChild(card)

}

produtos.forEach(criarCards)