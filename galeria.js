"use strict"

const imagens = [
    "img/",
]


const limparId = (url) => url.replace("./img/","").split(".")[0].replace(" ", "-")

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`

    container.appendChild(novoLink)
}

const carregarGaleria = () => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, array) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <= 0 ? array.length - 1 : indice - 1
    const idAnterior = limparId (array[indiceAnterior])

    const indiceProximo = indice >= array.length - 1 ? 0 : indice + 1
    const idProximo = limparId (array [indiceProximo])

    novoDiv.innerHTML = `
        <div class="slide" id="demon-slayer">
            <div class="imagem-container">
                  <a href="" class="icones fechar">&#10006;</a>
                  <a href="${imagemAnterior}" class="icones anterior">&#171;</a>
                  <img src="${urlImagem}" alt="">
                  <a href="${imagemProximo}" class="icones proximo">&#187;</a>
                </div>
            </div>`        
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)
