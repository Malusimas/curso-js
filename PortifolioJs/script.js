alert('Olá, sejá bem vindo(a) ao mundo das mamães 2022!')
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
msg.innerHTML= `Agora são ${hora} horas`
if (hora>=0 && hora < 12){
    //Bom dia!
    img.src ='foto manhã.jpg'
} else if (hora>=12 && hora <18){
    // Boa Tarde!
    img.src ='foto tarde.jpg'
}else {
    //Boa Noite!
    img.src ='foto noite.jpg'
}