// let gElCanvas
// let gCtx

var gKeywordSearchCountMap = { funny: 12, dog: 20, politics: 2 }
var gImgs = [
  { id: 1, url: 'meme-imgs (square)/1.jpg', keywords: ['funny', 'politics'] },
  { id: 2, url: 'meme-imgs (square)/2.jpg', keywords: ['cute', 'dog'] },
  { id: 3, url: 'meme-imgs (square)/3.jpg', keywords: ['cute', 'dog'] },
  { id: 4, url: 'meme-imgs (square)/4.jpg', keywords: ['cute', 'dog'] },
]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Hello world',
      size: 20,
      align: 'left',
      color: 'blue',
    },
    {
      txt: 'feeling tired?',
      size: 20,
      align: 'left',
      color: 'blue',
    },
    {
      txt: 'it is what it is',
      size: 20,
      align: 'left',
      color: 'blue',
    },
  ],
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function getImageById(imgId) {
  let img = gImgs.find((img) => img.id === imgId)
  return img
}

function getImages() {
  return gImgs
}

function getMeme() {
  return gMeme
}

function setText(meme, newTxt) {
  meme.lines[meme.selectedLineIdx].txt = newTxt
}

function setColor(meme, newColor) {
  meme.lines[meme.selectedLineIdx].color = newColor
}
function setFont(meme, newFont) {
  meme.lines[meme.selectedLineIdx].size = newFont
}



function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = `${gMeme.lines[0].color}`
  gCtx.font = `${gMeme.lines[0].size}px Arial`

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y) 
}

function switchLine() {
  gMeme.selectedLineIdx++
}