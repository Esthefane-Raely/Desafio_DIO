var heroi=String(prompt("Qual o seu nome?"));
    var xp_heroi=parseFloat(prompt("Quantos XP já coletou?"));
    var nivel;
    
if(xp_heroi < 1000){
    nivel = "Ferro" ;
}
else if (1001 <= xp_heroi <= 2000){
    nivel = "Bronze";
}
else if (2001 <= xp_heroi <= 5000){
    nivel = "Prata";
}
else if (5001 <= xp_heroi <= 7000){
    nivel = "Ouro";
}
else if (7001 <= xp_heroi <= 8000){
    nivel = "Platina";
}
else if (8001 <= xp_heroi <= 9000){
   nivel = "Ascendente";
}
else if (9001 <= xp_heroi <= 10000){
    nivel = "Imortal";
}
else{
    nivel = "Radiante";
}
 document.write(" O Herói de nome"+ heroi +"está no nível de" + nivel);
