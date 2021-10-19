let puntero = 0;
let Palabra = [];

function ValidateKeypress( keypress ) {
    
    if ( Palabra[puntero] === keypress ) {
        document.getElementById(`random-${puntero}`).classList.remove("actual");
        puntero++;

        if (puntero === Palabra.length ) {
            document.getElementById('game').innerHTML = generateRandomWord();
            puntero = 0;
            document.getElementById(`random-${puntero}`).classList.add("actual");
        }

        document.getElementById(`random-${puntero}`).classList.add("actual");
    }
}

/** GENERACIÓN DE LA PALABRA ALEATORIA */
const PosiblesLetras = ['|', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '?', '¿', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '´', '+', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', '{', '}', '>', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];

function generateRandomWord (){

    let PalabraHTML = `
    `

    for (let i = 0; i < 20; i++) {
        let LetraAleatoria = Math.floor(Math.random() * (PosiblesLetras.length-1 - 0 + 1) + 0);
        Palabra[i] = PosiblesLetras[LetraAleatoria];
        PalabraHTML += `<span id="random-${i}">${PosiblesLetras[LetraAleatoria]}</span>`
    }
    
    return PalabraHTML;
}

document.getElementById('game').innerHTML = generateRandomWord();
document.getElementById(`random-${puntero}`).classList.add("actual");

/** DETECCIÓN DE LETRA PRESIONADA Y RENDERIZADO EN EL TECLADO */

function Render( keypress ) {
    
    ValidateKeypress(document.getElementById(keypress).innerText)
    document.getElementById('keypress').innerText = document.getElementById(keypress).innerText;
    document.getElementById(keypress).classList.add('keypress');
    setTimeout(() => {
        document.getElementById(keypress).classList.remove('keypress');
    }, 500)
}

function logKeyUp(event) {
    
    if (document.getElementById(event.code)) {
        Render(event.code);
    } else if (document.getElementById(event.key)) {
        Render(event.key);
    } else if (document.getElementById(event.key.toUpperCase())) {
        Render(event.key.toUpperCase());
    }

    if (event.key === "ScrollLock") document.querySelector('.keyboard__numbers__leds--scroll .led').classList.toggle('active')
    if (event.key === "NumLock") document.querySelector('.keyboard__numbers__leds--numbers .led').classList.toggle('active')
    if (event.key === "CapsLock") document.querySelector('.keyboard__numbers__leds--uppercase .led').classList.toggle('active')
}

document.addEventListener('keyup', logKeyUp);

document.getElementById('theme').addEventListener('click', () => {
    /** Keyboard */
    document.querySelector('.keyboard').classList.toggle('dark');
    document.querySelector('.keyboard').classList.toggle('light');
    /** Button */
    document.querySelector('#theme').classList.toggle('dark');
    document.querySelector('#theme').classList.toggle('light');
})