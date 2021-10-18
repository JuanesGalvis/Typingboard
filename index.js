// const Fila1 = ['Escape', 'PrintScreen', 'ScrollLock', 'Pause']
// const Fila2 = ['|', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '?', '¿', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-']
// const Fila3 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Dead', '+', 'Enter', 'Delete', 'End', 'PageDown', '7', '8', '9', '+']
// const Fila4 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', '{', '}', '4', '5', '6']
// const Fila5 = ['Shift', '<', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', 'Shift', 'ArrowUp', '1', '2', '3', 'Enter']
// const Fila6 = ['Control', 'Alt', 'Espacio', 'AltGraph', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight', '0', '.']

function Render( keypress ) {
    
    document.getElementById('keypress').innerText = keypress;
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
    }


    if (event.key === "ScrollLock") document.querySelector('.keyboard__numbers__leds--scroll .led').classList.toggle('active')
    if (event.key === "NumLock") document.querySelector('.keyboard__numbers__leds--numbers .led').classList.toggle('active')
    if (event.key === "CapsLock") document.querySelector('.keyboard__numbers__leds--uppercase .led').classList.toggle('active')

}

document.addEventListener('keyup', logKeyUp);