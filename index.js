const col_flip = document.getElementById('btn-1');
col_flip.style.color = '#55a9e2';
const simple_hex = document.getElementById('btn-2');
simple_hex.style.color = 'black';
const click_me = document.querySelector('.click');
const arrColor = ['Red', 'Green', 'Orange', 'Yellow', 'Violet', 'Indigo', 'Blue'];
const bg = document.querySelector('body');
const bgColor = document.getElementById('clr');

function onclickBtn1(){
    col_flip.style.color = '#55a9e2';
    simple_hex.style.color = 'black';
}

function onclickBtn2(){
    col_flip.style.color = 'black';
    simple_hex.style.color = '#55a9e2';
}

function generateRandomHexCode() {
    const hexCharacters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexCode += hexCharacters[randomIndex];
    }
    return hexCode;
}

function onclickMe(){
    const c1 = simple_hex.style.color;
    if(c1 === 'black'){
        const ind = Math.floor(Math.random()*arrColor.length);
        bg.style.backgroundColor = arrColor[ind];
        bgColor.textContent = arrColor[ind];
    }        
    else{
        const randomHex = generateRandomHexCode();
        bg.style.backgroundColor = randomHex;
        bgColor.textContent = randomHex;
    }
}

col_flip.onclick = onclickBtn1;
simple_hex.onclick = onclickBtn2;
click_me.onclick = onclickMe;