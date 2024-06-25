const llavesEncriptacion = {
    'a' : 'ai',
    'b' : 'b',
    'c' : 'c',
    'd' : 'd',
    'e' : 'enter',
    'f' : 'f',
    'g' : 'g',
    'h' : 'h',
    'i' : 'imes',
    'j' : 'j',
    'k' : 'k',
    'l' : 'l',
    'm' : 'm',
    'n' : 'n',
    'o' : 'ober',
    'p' : 'p',
    'q' : 'q',
    'r' : 'r',
    's' : 's',
    't' : 't',
    'u' : 'ufat',
    'v' : 'v',
    'w' : 'w',
    'x' : 'x',
    'y' : 'y',
    'z' : 'z',
    ' ' : ' '
}

const campoTexto = document.getElementById('campoTexto');
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const botonCopiar = document.getElementById('botonCopiar');
const mensajeFinal = document.getElementById('mensajeFinal');
const mensajeInfo = document.getElementById('mensajeInfo');
const muñeco = document.getElementById('muñeco');
const encriptadorDesencriptador = document.getElementById('encriptadorDesencriptador')

const remplazar =(valorNuevo)=>{
    mensajeFinal.innerHTML = valorNuevo;

    muñeco.style.display = "none";
    mensajeInfo.style.display = "none";
    botonCopiar.style.display = "block";
    encriptadorDesencriptador.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    campoTexto.value = "";
}

function encriptarTexto(texto) {
    const letrasTexto = texto.split("");
    const textoEncriptado = [];

    for (const letra of letrasTexto){
        const encriptado = llavesEncriptacion[letra];
        textoEncriptado.push(encriptado);
    }

    return textoEncriptado.join("");
}

function desencriptarTexto(texto) {
    const tempText = Object.entries(llavesEncriptacion);
    let textoDesencriptado = "";
    let temp = "";

    for (const char of texto) {
        temp += char;
        const match = tempText.filter(e => e[1] === temp)[0];
        if (match) {
            textoDesencriptado += match[0]; 
            temp = ""; 
        }
    }

    return textoDesencriptado;
}


botonEncriptar.addEventListener("click", () => {
    const texto = campoTexto.value.toLowerCase();
    remplazar(encriptarTexto(texto));
})

botonDesencriptar.addEventListener("click", () => {
    const texto = campoTexto.value.toLowerCase();
    remplazar(desencriptarTexto(texto));
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    document.getElementById("mensajeFinal").select();
})




