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
    const meme = gElCanvas.toDataURL()
    let memes = loadFromStorage(STORAGE_KEY)
    console.log('memes',memes)
    !memes ? memes = [meme] : memes.push(meme)
    loadToStorage(STORAGE_KEY,memes)
    onSaveMeme()
}






  



