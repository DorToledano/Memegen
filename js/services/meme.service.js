// let gElCanvas
// let gCtx

var gKeywordSearchCountMap = { funny: 12, dog: 20, politics: 2 }
var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics'] },
  { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
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

function getImages() {
  return gImgs
}

function getMeme() {
  return gMeme
}

// setLineTxt(gMeme)
function setLineTxt(meme, newTxt) {
  meme.lines[meme.selectedLineIdx].txt = newTxt
}

function setcolor(meme, newColor) {
  meme.lines[meme.selectedLineIdx].color = newColor
}
function setFont(meme, newFont) {
  meme.lines[meme.selectedLineIdx].size = newFont
}
function setImg(id) {
  gMeme.selectedImgId = id
}

function getImageById(imgId) {
  let img = gImgs.find((img) => img.id === imgId)
  return img
}
function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = `${gMeme.lines[0].color}`
  // gCtx.fillStyle = 'yellow'
  gCtx.font = `${gMeme.lines[0].size}px Arial`
  // gCtx.textAlign = 'center'
  // gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}