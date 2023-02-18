'use strict'
let gMemes
function renderMemesPage(){
    let strHtml=[]
    gMemes = loadFromStorage(STORAGE_KEY)
    const memesInfo= loadFromStorage(STORAGE_KEY1)
    if (Array.isArray(gMemes)) {
    // console.log('gMemesInfo',memesInfo)
        gMemes.map((meme,idx)=> {
          // console.log('memesInfo[idx]',memesInfo[idx])
          strHtml.push(`<img src="${meme}" onclick="onSelectedMeme('${encodeURIComponent(JSON.stringify(memesInfo[idx]))}')">`);
        })
          
      } else {
        console.log('not array')
        strHtml.push('<h3>no saved memes</h3>')
      }
      // console.log(strHtml)
      document.querySelector('.saved-memes-container').innerHTML=strHtml.join('')
}

function onSelectedMeme(memeInfo) {
  const meme = JSON.parse(decodeURIComponent(memeInfo));
  console.log('meme',meme)

  const { selectedImgId: imgId, selectedLineIdx: lineIdx, lines } = meme;
  console.log('imgId,lineIdx,lines', imgId, lineIdx, lines);
  showMemeCreatingPage();
  hideMemesPage();
  setMeme(imgId,lineIdx,lines);
  setImg(imgId);
  renderMeme();
  
}

// function onDeleteMemeDisplay(idx){
//   gMemes.splice(idx,1)
//   renderMemesPage()
// }