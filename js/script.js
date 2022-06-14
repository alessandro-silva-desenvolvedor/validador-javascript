function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {

        alert('[erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - parseInt(fano.value)
        //res.innerHTML= `Idade calculada: ${idade}`
        var radius = document.querySelectorAll("input[type='radio']")
        var gen = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radius[0].checked) {
            gen = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-homem.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'adolescente-homem.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-adulto.jpg')
            }

        } else {
            gen = 'Feminino'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança-mulher.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'adolescente-mulher.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher_adulta.jpg')

            }else{
                //Idoso
                img.setAttribute('src', 'idosa-adulta.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)


    }
}