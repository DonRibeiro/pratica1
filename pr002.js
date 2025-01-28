function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro]')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'imagens/noite1.png')
            } else if (idade > 21) {
            //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
        }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade > 21) {
            //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
        }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}