let cambioH1 = document.querySelector('h1');
cambioH1.innerHTML = "Hora del Desafío";    

const sumar=()=>{
    const valor1 = Number(prompt('Dime el primer número: '));
    const valor2 = Number(prompt('Dime el segundo número: '));
    return alert(valor1 + valor2);
}


//Ejercicios propuestos

//Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion
// por separado.
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

//Crea una función que muestre en la consola todos los elementos de la lista 
//lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

//Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

//Crea una función que muestre en la consola el número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

}

//Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}


//Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; 
    }
  }
  return -1; 
}


//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
//altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(peso, altura) {
    return (peso / (altura ** 2));
}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero ===1) {
        return 1;   
    } else {
        return numero *  calcularFactorial(numero - 1);
    }
}

//Crea una función que convierta un valor en dólares, pasado como parámetro, y 
//devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.
function convertirADolares(cantidadReales, cotizacionDolar) {
    return cantidadReales * cotizacionDolar;
}


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaMultiplicar(numero) {
    for (let index = 0; index < 11; index++) {
        console.log(`${numero} * ${index} = ${index * numero}`);
        
    }
}


//Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
    console.log("¡Hola, mundo!");
  }

//Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }

//Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
  function calcularDobleNumero(numero) {
    return numero * 2;
  }

//Crear una función que recibe tres números como parámetros y devuelve su promedio.
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }


//Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
  function devolverNumeroMayor(a, b) {
    return a > b ? a : b;
  }
  
 //Crear una función que recibe un número como parámetro y 
// devuelve el resultado de multiplicar ese número por sí mismo. 

function calcularCuadrado(numero) {
    return numero * numero;
  }

//Ver si aprobó o no
function aprobarCurso(nota){
    return nota >= 5 ? "aprobò"
                    : "reprobò";
}