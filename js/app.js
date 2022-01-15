let moneys = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let result = 0;
let resultOne = 0;
let entr = document.querySelector('#input');
let button = document.getElementById('button');
let moneysSelectOne = document.querySelector('#optionOne');
let moneysSelectTwo = document.querySelector('#optionTwo');
let resultSelect = document.getElementById('result');
let fragment = document.createDocumentFragment();
let form = document.getElementById('form');


moneys.forEach((valor) => {
    const option = document.createElement('option');
    option.value = valor;
    option.textContent = valor;
    moneysSelectOne.appendChild(option);  
    let cloneOption = option.cloneNode(true)
    fragment.appendChild(cloneOption);
});

moneysSelectTwo.appendChild(fragment);

function mostrarAlerta(mensaje) {
    const divMensaje = document.createElement('div');
    divMensaje.setAttribute('class', 'error');
    divMensaje.textContent = mensaje;
    form.appendChild(divMensaje);
    setTimeout( () => {
        divMensaje.remove();
    }, 5000);
}


button.addEventListener('click', calculator);

function addValue(){

}

function calculator(e) {
    e.preventDefault();   
    let valueEntry = Number(entr.value);    
   
    if( valueEntry === '' || isNaN(valueEntry) || valueEntry <= 0 || moneysSelectOne  === moneysSelectTwo ) {
        result =  mostrarAlerta('El valor no es valido');
    }  else { 
        moneysSelectOne = moneysSelectOne.value;
        moneysSelectTwo = moneysSelectTwo.value;

        if(moneysSelectOne === 'Dolar') {
            if(moneysSelectTwo === 'Euro') return resultOne = valueEntry  * 0.88;
            if(moneysSelectTwo === 'Peso Mexicano') return resultOne = valueEntry * 20.56;
            if(moneysSelectTwo === 'Libra Esterlina') return resultOne = valueEntry * 0.74;
            if(moneysSelectTwo === 'Peso Colombiano') return resultOne = valueEntry * 4037.87;     
        }
        if(moneysSelectOne === 'Libra Esterlina') {
            if(moneysSelectTwo === 'Euro') return resultOne = valueEntry * 1.19;
            if(moneysSelectTwo === 'Peso Mexicano') return resultOne = valueEntry * 27.73;
            if(moneysSelectTwo === 'Dolar') return resultOne = valueEntry * 1.35;
            if(moneysSelectTwo === 'Peso Colombiano') return resultOne = valueEntry * 5445.33;     
        }
        if(moneysSelectOne === 'Peso Mexicano') {
            if(moneysSelectTwo === 'Euro') return resultOne = valueEntry * 0.043;
            if(moneysSelectTwo === 'Libra Esterlina') return resultOne = valueEntry * 0.036;
            if(moneysSelectTwo === 'Dolar') return resultOne = valueEntry * 0.049;
            if(moneysSelectTwo === 'Peso Colombiano') return resultOne = valueEntry * 196.31;     
        }
        if(moneysSelectOne === 'Peso Colombiano') {
            if(moneysSelectTwo === 'Euro') return resultOne = valueEntry * 0.00022;
            if(moneysSelectTwo === 'Libra Esterlina') return resultOne = valueEntry * 0.00019;
            if(moneysSelectTwo === 'Dolar') return resultOne = valueEntry * 0.00025;
            if(moneysSelectTwo === 'Peso Mexicano') return resultOne = valueEntry * 0.0052;     
        }
        if(moneysSelectOne === 'Euro') {
            if(moneysSelectTwo === 'Peso Mexicano') return  resultOne = valueEntry * 23.33;
            if(moneysSelectTwo === 'Libra Esterlina') return resultOne = valueEntry * 0.84;
            if(moneysSelectTwo === 'Dolar') return  resultOne = valueEntry * 1.13;
            if(moneysSelectTwo === 'Peso Colombiano') return  resultOne = valueEntry * 4581.57;     
        }
        result = document.createElement('p');
        result.value = resultOne;
        result.textContent = `El resultado de la conversión es : ${resultOne.toFixed(2)}`;
        console.log(resultOne);
        resultSelect.appendChild(result);
        
        if(resultOne === 0) {
            document.querySelector('p').style.display = 'none';
        }  

   form.reset();
   setTimeout( () => resultSelect.remove(), 2000);
   } 
} 