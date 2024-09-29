const button = document.getElementById('button')

button.addEventListener('click', sumar)
function sumar(){
    const numUno = document.getElementById('numUno').value
    const numDos = document.getElementById('numDos').value
    const numTres = document.getElementById('numTres').value

    const passwordSelected = numUno + numDos + numTres

    const mnsje = document.getElementById('mnsje')
    if(passwordSelected==911){
        mnsje.textContent='Password 1 correcta'
    } else if(passwordSelected==='714'){
        mnsje.textContent='Password 2 correcta'
    } else{
        mnsje.textContent='Password incorrecta'
    }
}