const STORAGE_KEY = 'memes'
const STORAGE_KEY1 = 'memesInfo'

function onSaveMeme(){
    const memeInfo = getMeme()
    let memesInfo = loadFromStorage(STORAGE_KEY1)
    !memesInfo ? memesInfo = [memeInfo] : memesInfo.push(memeInfo)
    loadToStorage(STORAGE_KEY1,memesInfo)
}
  function loadToStorage(key,val) {
    localStorage.setItem(key, JSON.stringify(val))
  }
  
  function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  function onSaveMemeData(){
    const elFlashMsg= document.querySelector('.flash-msg')
    elFlashMsg.style.translate='0'
    elFlashMsg.style.opacity='1'
    setTimeout(() => {
      elFlashMsg.style.translate='0 100%'
    elFlashMsg.style.opacity='0'

    }, 2000);
    const meme = gElCanvas.toDataURL()
    let memes = loadFromStorage(STORAGE_KEY)
    console.log('memes',memes)
    !memes ? memes = [meme] : memes.push(meme)
    loadToStorage(STORAGE_KEY,memes)
    onSaveMeme()
}

function makeLorem(wordCount = 100) {
  const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
  var txt = ''
  while (wordCount > 0) {
      wordCount--
      txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}





  



