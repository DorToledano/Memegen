// let gElCanvas
// let gCtx

var gKeywordSearchCountMap = { funny: 12, dog: 20, politics: 2 }
var gImgs = [
  { id: 1, url: 'meme-imgs (square)/1.jpg', keywords: ['funny', 'politics'] },
  { id: 2, url: 'meme-imgs (square)/2.jpg', keywords: ['cute', 'dog'] },
  { id: 3, url: 'meme-imgs (square)/3.jpg', keywords: ['cute', 'dog'] },
  { id: 4, url: 'meme-imgs (square)/4.jpg', keywords: ['cute', 'dog'] },
  { id: 5, url: 'meme-imgs (square)/5.jpg', keywords: ['cute', 'dog'] },
  { id: 6, url: 'meme-imgs (square)/6.jpg', keywords: ['cute', 'dog'] },
  { id: 7, url: 'meme-imgs (square)/7.jpg', keywords: ['cute', 'dog'] },
  { id: 8, url: 'meme-imgs (square)/8.jpg', keywords: ['cute', 'dog'] },
  { id: 9, url: 'meme-imgs (square)/9.jpg', keywords: ['cute', 'dog'] },
  { id: 10, url: 'meme-imgs (square)/10.jpg', keywords: ['cute', 'dog'] },
  { id: 11, url: 'meme-imgs (square)/11.jpg', keywords: ['cute', 'dog'] },
]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Change meme text →',
      size: 40,
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

function setLineTxt(newTxt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
}

function addLine() {
  gMeme.lines.push({
    txt: 'Type here',
    size: 30,
    align: 'center',
    color: 'white',
  })
}

function deleteLine() {
  if (gMeme.lines.length === 1) return
  gMeme.lines.splice(gMeme.lines.length - 1, 1)
}

function removeLine() {
  if (gMeme.lines.length === 1) return
  gMeme.lines.splice(gMeme.lines.length - 1, 1)
}

function setText() {
  txt = getLineTxt()
  document.querySelector('.txt').value = txt
}

function setColor(newColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = newColor
}
function changeFontSize(diff) {
  gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function changeAlign(align) {
  gMeme.lines[gMeme.selectedLineIdx].align = align
}

function switchLine() {
  if (gMeme.lines.length === 1) return
  if (gMeme.selectedLineIdx < gMeme.lines.length - 1) gMeme.selectedLineIdx++
  else if (gMeme.selectedLineIdx === gMeme.lines.length - 1)
    gMeme.selectedLineIdx = 0
}

function getLineTxt() {
  const idx = gMeme.selectedLineIdx
  return gMeme.lines[idx].txt
}
