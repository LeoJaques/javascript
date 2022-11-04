function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var formyear = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  
  if (formyear.value.length == 0 || Number(formyear.value) > ano) {
    alert('[ERROR] Verifique os dados e tente novamente!!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formyear.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {//criança
      img.setAttribute('src', 'bebehomem.png')
      }else if (idade < 22) { //jovem
      img.setAttribute('src', 'adolecentehomem.png')
      }else if (idade < 50) { //adulto
      img.serAttribute('src', 'adultohomem.png')
      }else { //idoso
      img.setAttribute('src', 'idodo.png')
      }

    } else {
      genero = "Mulher"
      if (10 > idade > 0) {//criança
      img.setAttribute('src', 'bebemulher.png')
      }else if (idade < 22) { //jovem
        img.setAttribute('src', 'adolecentemulher.png')
      }else if (idade < 50) { //adulto
        img.setAttribute('src', 'mulheradulta.png')
      }else { //idoso
        img.setAttribute('src', 'idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
    res.appendChild(img)
  }
// VERIFICAR ERROR NA VAR DATA; TEMPO DO VIDEO-10:59




}