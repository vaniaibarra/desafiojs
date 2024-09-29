button.addEventListener('click', sumar) 
function sumar(){
    const cantUno = parseInt(document.querySelector('#cantUno').value) || 0
    const cantDos = parseInt(document.querySelector('#cantDos').value) || 0
    const cantTres = parseInt(document.querySelector('#cantTres').value) || 0

    const totalStickers = cantUno + cantDos + cantTres;

    const mnsje = document.querySelector('#mnsje');

    if(totalStickers>10){
        mnsje.textContent='Llevas demasiados stickers'
    }else{
        mnsje.textContent='Llevas ' + totalStickers + ' stickers'
    }
}