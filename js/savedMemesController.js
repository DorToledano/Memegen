'use strict'

function renderMemesPage(){
    let strHtml=[]
    const memes = loadFromStorage(STORAGE_KEY)
    console.log('memes',memes)
    // memes.map(meme=> strHtml.push(`<img src="${meme}" >`))
    if (Array.isArray(memes)) {
        memes.map(meme=> strHtml.push(`<img src="${meme}" >`))
        console.log('strHtml',strHtml)
      } else {
        console.log('not array')
        strHtml.push('<h3>no saved memes</h3>')
      }
      console.log(strHtml)
      document.querySelector('.saved-memes-container').innerHTML=strHtml.join('')
}