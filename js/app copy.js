let moneys = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let resultado = 0;
let resultado1 = 0;
let entrada = document.querySelector('.input');
let button = document.getElementById('button');
let moneysSelectOne = document.querySelector('#optionOne');
let moneysSelectTwo = document.querySelector('#optionTwo');
let moneysSelect = document.querySelectorAll('.money')
let resultSelect = document.getElementById('resultado');
let resultadosSelect = document.getElementById('resultados');
let fragment = document.createDocumentFragment();
let formulario = document.getElementById('formulario');

moneys.forEach((valor) => {
    const option = document.createElement('option');
    option.value = valor;
    option.textContent = valor;
    fragment.appendChild(option);  
  
});
//money[0].appendChild(fragment);
moneysSelect[1].appendChild(fragment);

moneys.forEach((valor) => {
    const option = document.createElement('option');
    option.value = valor;
    option.textContent = valor;
    moneysSelectOne.appendChild(option);  
  
});
function mostrarAlerta(mensaje) {
    const divMensaje = document.createElement('div');
    divMensaje.setAttribute('class', 'error');
    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);
    setTimeout( () => {
        divMensaje.remove();
    }, 5000);
}

eventListeners();
function eventListeners() {
    button.addEventListener('click', addValue);
}

function addValue(e) {
    e.preventDefault();   
    let valueEntry = Number(entrada.value);    
 
    if( valueEntry === '' || isNaN(valueEntry) || valueEntry <= 0 ) {
       resultado =  mostrarAlerta('El valor no es valido');
   } 
     moneysSelectOne = moneysSelectOne.value;
     moneysSelectTwo = moneysSelectTwo.value;

    if(moneysSelectOne === 'Dolar') {
        if(moneysSelectTwo === 'Euro') return resultado1 = valueEntry / (1 * 0.88);
        if(moneysSelectTwo === 'Peso Mexicano') return resultado1 = valueEntry /(1 * 20.56);
        if(moneysSelectTwo === 'Libra Esterlina') return resultado1 = valueEntry /(1 * 0.74);
        if(moneysSelectTwo === 'Peso Colombiano') return resultado1 = valueEntry /(1 * 4037.87);     
    }
    if(moneysSelectOne === 'Libra Esterlina') {
        if(moneysSelectTwo === 'Euro') return resultado1 = valueEntry /(1 * 1.19);
        if(moneysSelectTwo === 'Peso Mexicano') return resultado1 = valueEntry /(1 * 27.73);
        if(moneysSelectTwo === 'Dolar') return resultado1 = valueEntry /(1 * 1.35);
        if(moneysSelectTwo === 'Peso Colombiano') return resultado1 = valueEntry /( 1 * 5445.33);     
    }
    if(moneysSelectOne === 'Peso Mexicano') {
        if(moneysSelectTwo === 'Euro') return resultado1 = valueEntry /(1 * 0.043);
        if(moneysSelectTwo === 'Libra Esterlina') return resultado1 = valueEntry /( 1 * 0.036);
        if(moneysSelectTwo === 'Dolar') return resultado1 = valueEntry /(1 * 0.049);
        if(moneysSelectTwo === 'Peso Colombiano') return resultado1 = valueEntry /(1 * 196.31);     
    }
    if(moneysSelectOne === 'Peso Colombiano') {
        if(moneysSelectTwo === 'Euro') return resultado1 = valueEntry /(1 * 0.00022);
        if(moneysSelectTwo === 'Libra Esterlina') return resultado1 = valueEntry /(1 * 0.00019);
        if(moneysSelectTwo === 'Dolar') return resultado1 = valueEntry /(1 * 0.00025);
        if(moneysSelectTwo === 'Peso Mexicano') return resultado1 = valueEntry /( 1 * 0.0052);     
    }
    if(moneysSelectOne === 'Euro') {
        if(moneysSelectTwo === 'Peso Mexicano') return  resultado1 = valueEntry / (1 * 23.33);
        if(moneysSelectTwo === 'Libra Esterlina') return resultado1 = valueEntry /( 1 * 0.84);
        if(moneysSelectTwo === 'Dolar') return  resultado1 = valueEntry /(1 * 1.13);
        if(moneysSelectTwo === 'Peso Colombiano') return  resultado1 = valueEntry / (1 * 4581.57);     
    }
    resultado = document.createElement('p');
    resultado.value = resultado1;
    resultado.textContent = resultado1;
    console.log(resultado);
    resultadosSelect.appendChild(resultado);
    //resultadosSelect.appendChild(`${valueEntry} ${moneysSelectOne} es en ${resultado} ${moneysSelectTwo} `);  
   
}  
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
  }
