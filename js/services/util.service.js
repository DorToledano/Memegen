const STORAGE_KEY = 'memes'

function onSaveMeme(){
    const meme = getMeme()
    let memes = loadFromStorage(STORAGE_KEY)
    console.log('memes',memes)
    !memes ? memes = [meme] : memes.push(meme)
    loadToStorage(STORAGE_KEY,memes)
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
}


  



