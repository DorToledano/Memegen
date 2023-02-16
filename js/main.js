'use strict'
const emojis = ['😃','🥰','😇','🤯','🏀','🥹']

function toggleModal(){
    document.body.classList.toggle('modal-open'); 
}
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function renderEmojis(){
    let strHTML=[]
    // emojis.map(emoji=> strHTML.push(emoji))
    emojis.map(emoji=> strHTML.push(`<button onclick="OnAddEmoji(this)">${emoji}</button>` ))
    document.querySelector('.emojis').innerHTML=strHTML.join(' ')
}

function getEmojis(){
    return emojis
}


