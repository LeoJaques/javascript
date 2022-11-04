function carregar() { 

  var msg = document.getElementById('msg')
  var foto = document.getElementById('foto')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12) { // bom dia
    foto.src = 'foto-amanha.png'
    document.body.style.background = '#e2cd9f'
  }else if (hora >= 12 && hora < 18) { // boa tarde
    foto.src = 'foto-tarde.png'
    document.body.style.background = '#b9846f'
  } else { // boa noite
    foto.src = 'foto-noite.png'
    document.body.style.background = '#515154'
  }
// 13:38 adicionando os backgrounds
}