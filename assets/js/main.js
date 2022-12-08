const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0
let relogio;
function iniciaRelogio(){
     relogio = setInterval(function(){ //usar a variavel relogio é o mesmo que iniciar a função  
        segundos ++;
        timer.innerHTML = Criahora(segundos);
    }, 1000);
}
function Criahora(segundo){ 
    const data = new Date(segundo*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC',
    });
}

document.addEventListener('click', function (e) {
    el = e.target;
    if (el.classList.contains('iniciar')) { //iniciar
        timer.classList.remove('pausado');
        clearInterval(relogio);
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) { //pausar
        clearInterval(relogio);
        timer.classList.add('pausado');
    }
    if (el.classList.contains('zerar')) { //zerar
        clearInterval(relogio);
        timer.innerHTML = '00:00:00';
        segundos = 0;
    }

});

pausar.addEventListener('click', function(event){ //PAUSAR
    clearInterval(relogio);
    timer.classList.add('pausado');
});
zerar.addEventListener('click', function(event){ //ZERAR
    clearInterval(relogio);
    timer.innerHTML = '00:00:00';
    segundos = 0;
});




