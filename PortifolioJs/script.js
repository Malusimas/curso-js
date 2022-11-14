alert('Olá, sejá bem vindo(a) ao mundo das mamães 2022!')
var msg = document.getElementById('msg')
var data= new Date()
var hora= data.getHours()
msg.innerHTML= `Agora são ${hora} horas`
if (hora>=0 && hora < 12){
    document.body.style.backgroun = 'green'
}