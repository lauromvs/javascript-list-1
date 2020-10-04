function getFocus() {
    document.getElementById('msg').innerHTML = 'Primeira caixa ativada!';
    // console.log('focus test');
}

function lostFocus() {
    document.getElementById('msg').innerHTML = 'Perdeu o foco.';
    // console.log('lost focus test');
}
