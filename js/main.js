'use strict'
const gEmojis = ['😃','🥰','😇','🤯','🏀','🥹','🔮','🤪','😶‍🌫️','💀']
let gPageIdx = 0

const PAGE_SIZE = 3


function toggleModal(){
    document.body.classList.toggle('modal-open'); 
}
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function renderEmojis(){
    let strHTML=[]
    const emojis=getEmojis()
    // emojis.map(emoji=> strHTML.push(emoji))
    emojis.map(emoji=> strHTML.push(`<button onclick="OnAddEmoji(this)">${emoji}</button>` ))
    document.querySelector('.emojis').innerHTML=strHTML.join(' ')
}

// function getEmojis(){
//     return emojis
// }

function getEmojis() {
    const startIdx = gPageIdx * PAGE_SIZE
    return gEmojis.slice(startIdx, startIdx + 3)
}

function disableButton(btn) {
    var prevBtn = document.querySelector('.prev')
    var nextBtn = document.querySelector('.next')
    if (btn === 'next') {
        nextBtn.disabled = true
        prevBtn.disabled = false
    } else if (btn === 'prev') {
        prevBtn.disabled = true
        nextBtn.disabled = false
    }
    else {
        nextBtn.disabled = false
        prevBtn.disabled = false
    }
}

function changePage(num) {
    gPageIdx += num
    if (gPageIdx * PAGE_SIZE + PAGE_SIZE > gEmojis.length) {
        disableButton('next')
    } else if (!gPageIdx) disableButton('prev')
    else disableButton('none')
}


