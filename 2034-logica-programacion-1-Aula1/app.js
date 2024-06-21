// Juego para adivinar el número secreto
const numeroMaximoPosible = 100;
const numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
const maximosIntentos = 6;


while (numeroUsuario != numeroSecreto && intentos != maximosIntentos) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
        }

    }
}

//Actividades propuestas por desarrollar

//Desafíos finales
console.log("Bienvenidos!!");

const miNombre = 'Josè Miguel';
console.log( `¡Hola, ${miNombre}!`);
alert(`¡Hola, ${miNombre}!`);

const lenguajeElegido = prompt('Cuál es el lenguaje de programacón qué más te gusta?');
console.log(lenguajeElegido);

const valor1 = 4;
const valor2 = 7;

let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

resultado = valor1 - valor2;
console.log(`La diferecia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

edadUsuario = parseInt(prompt("Ingrese su edad por favor: "));
console.log(`la persona es ${edadUsuario >= 18 ? "mayor de edad" : "menor de edad"}`);

console.log(Math.floor(Math.random()*1000)+1);

/*Crea un programa de cuenta progresiva. Pide un número
y cuenta desde 0 hasta ese número utilizando un bucle 'while'
en la consola del navegador.
*/
let contador3 = 0;
const numeroIngresado2 = prompt('Ingresa un número: ');
while (contador3 <= numeroIngresado2) {
    console.log(contador3);
    contador3++;
}

//Realmente para este caso es mejor un for
const numeroObjetivo = parseInt(prompt('Ingresa un número:'));
for (let i = 0; i <= numeroObjetivo; i++) {
    console.log(i);
}


/*Crea un contador que comience en 10 y vaya hasta 0 usando
un bucle 'while'. Muestra cada número.
*/ 

let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--; 
}

//Realmente para este caso es mejor un for

for (let i = 10; i >= 0; i--) {
    console.log(i);
}


/* Crea un contador que comience en 1 y vaya hasta 10 usando 
un bucle 'while'. 
Muestra cada número.*/
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++; 
}

//Realmente para este caso es mejor un for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* 
Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, 
muestra "¡Buena semana!".
*/
const diaSemana = prompt("¿Qué día de la semana es hoy?");
if (diaSemana.toLowerCase() === 'sábado' || diaSemana.toLowerCase() === 'domingo') {
    alert("¡Que tengas un buen fin de semana!");
} else {
    alert("¡Que tengas una buena semana!");
}

/*Verifica si un número ingresado por el usuario es positivo 
o negativo. Muestra una alerta informativa. */

const numeroIngresado = parseFloat(prompt('Ingresa un número:'));
const mensaje = numeroIngresado < 0 ? `El número ${numeroIngresado} es negativo.` 
                                    : `El número ${numeroIngresado} es positivo.`;
                                    alert(mensaje);

/* Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". En caso contrario, 
muestra "Intentalo nuevamente para ganar.".*/

const puntuacion = parseFloat(prompt("Ingresa la puntuación del usuario:"));
const resultado2 = puntuacion >= 100 ? "¡Felicidades, has ganado!" 
                                    : "Inténtalo nuevamente para ganar.";
                                    alert(resultado2);

/*Crea un mensaje que informe al usuario sobre el 
saldo de su cuenta, utilizando un template string para 
incluir el valor del saldo.
*/

let saldoCuenta = prompt("Ingrese el saldo de la cuenta: ");
alert(`el saldo de la cuenta es de ${saldoCuenta}$`);

/*Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.
 */

const nombreUsuario = prompt("Ingrese el nombre de usuario: ");
alert(`¡Bienvenido ${nombreUsuario}`);

