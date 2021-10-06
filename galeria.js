"use strict"

const limparElemento = (elemento) => {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.lastChild)
    }
}

const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)

const pesquisarImagens = async (evento) => {

    if (evento.key === 'Enter') {
        const raca = evento.target.value
        const imagensResponse = await pegarImagens(raca)
        const imagens = await imagensResponse.json()

        limparElemento(document.querySelector(".galeria-container"))
        limparElemento(document.querySelector(".slide-container"))
        
        carregarGaleria(imagens.message)
        carregarSlide(imagens.message)
    }
}

const limparId = (url) => {
    const ultimaBarra = url.lastIndexOf("/") + 1
    const ultimoPonto = url.lastIndexOf(".")
    return url.substring(ultimaBarra, ultimoPonto).replace(" ", "-")
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`

    container.appendChild(novoLink)
}

const carregarGaleria = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const iDAnterior = limparId(arr[indiceAnterior])

    const indicePosterior = indice >= arr.length - 1 ? 0 : indice + 1
    const iDPosterior = limparId(arr[indicePosterior])

    novoDiv.innerHTML = `
            <div class="imagem-container">
                <a href="" class="icones fechar">&#128473;</a>
                <a href="#${iDAnterior}" class="icones anterior">&#129168;</a>
                <img src="${urlImagem}" alt="">
                <a href="#${iDPosterior}" class="icones proximo">&#129170;</a>
            </div>`

    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

document.querySelector(".pesquisa-container").addEventListener("keypress", pesquisarImagens)