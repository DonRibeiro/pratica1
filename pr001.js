
function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours() // Para utilizar as horas do sistema
     msg.innerHTML = `Nesse momento são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E6D1A5' // Para mudar a cor de fundo do site

    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f89f48'

    } else {
        //Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#563E5A'
    }    
}
