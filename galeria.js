"use strict"

const imagens = [
    "img/"
]

// MAP - FILTER - REDUCE -> Declarativa

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`

    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()
