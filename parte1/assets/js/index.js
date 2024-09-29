fotoGatito = document.querySelector('#fotoGatito')

fotoGatito.addEventListener('click', function(){
    if(fotoGatito.style.border===''){
        fotoGatito.style.border = '2px solid red';
    } else{
        fotoGatito.style.border = '';
    }
})