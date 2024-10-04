let contador = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    correImg();
}, 4500 /*A cada 5000 milisegundos (5 segundos) tal coisa acontece*/ )


function correImg(){
    contador++; //vai pegar o let contador e somar 1
    
    if (contador > 4) {
        contador = 1;
    }
    document.getElementById('radio' + contador).checked = true; //texto + variavel == concatenação

}