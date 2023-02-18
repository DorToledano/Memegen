let gFilteredImgs

// var gKeywordSearchCountMap = { funny: 12, dog: 20, politics: 2 , cute, baby, dog, sleep,}
var gKeywordSearchCountMap = {} //funny: 12, dog: 20, politics: 2 ,
var gImgs = [
  { id: 1, url: 'meme-imgs (square)/1.jpg', keywords: ['funny', 'politics'] },
  { id: 2, url: 'meme-imgs (square)/2.jpg', keywords: ['cute', 'dog'] },
  { id: 3, url: 'meme-imgs (square)/3.jpg', keywords: ['baby', 'dog'] },
  { id: 4, url: 'meme-imgs (square)/4.jpg', keywords: ['sleep', 'cat'] },
  { id: 5, url: 'meme-imgs (square)/5.jpg', keywords: ['baby', 'happy'] },
  { id: 6, url: 'meme-imgs (square)/6.jpg', keywords: ['man', 'confused'] },
  { id: 7, url: 'meme-imgs (square)/7.jpg', keywords: ['baby', 'surprise'] },
  { id: 8, url: 'meme-imgs (square)/8.jpg', keywords: ['man', 'creepy'] },
  { id: 9, url: 'meme-imgs (square)/9.jpg', keywords: ['baby', 'funny'] },
  { id: 10, url: 'meme-imgs (square)/10.jpg', keywords: ['politics', 'funny'] },
  { id: 11, url: 'meme-imgs (square)/11.jpg', keywords: ['man', 'awkward'] },
  { id: 12, url: 'meme-imgs (square)/12.jpg', keywords: ['man', 'famous'] },
  { id: 13, url: 'meme-imgs (square)/13.jpg', keywords: ['man', 'famous'] },
  { id: 14, url: 'meme-imgs (square)/14.jpg', keywords: ['man', 'mission'] },
  { id: 15, url: 'meme-imgs (square)/15.jpg', keywords: ['man', 'zero'] },
  { id: 16, url: 'meme-imgs (square)/16.jpg', keywords: ['man', 'funny'] },
  { id: 17, url: 'meme-imgs (square)/17.jpg', keywords: ['politics', 'scary'] },
  { id: 18, url: 'meme-imgs (square)/18.jpg', keywords: ['toy', 'scary'] },
]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  font: 'Arial',
  lines: [
    {
      txt: 'Change meme text',
      size: 40,
      align: 'left',
      color: 'black',
      diff: 0,
      x: 50,
      y: 50,
      isDrag: false,
    },
  ],
}

function filterImgs(keyword){
  // console.log('filter')
  let counter=0
  gFilteredImgs = gImgs.reduce((acc, img) => {
    if (img.keywords.includes(`${keyword}`)) {
      counter++
      if (counter===1) {
        gKeywordSearchCountMap[keyword]?gKeywordSearchCountMap[keyword]++ :gKeywordSearchCountMap[keyword]=1
        console.log('in')
      }
      acc.push(img);
    }
    return acc;
  }, []);
  return gFilteredImgs
}

function getFilterImgs(){
  return gFilteredImgs
}

function resetMeme() {
  gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'Change meme text ',
        size: 40,
        align: 'left',
        color: 'black',
        diff: 0,
        x: 50,
        y: 50,
        isDrag: false,
      },
    ],
  }
}

function getKeywords(){
  return gKeywordSearchCountMap
}

function setMeme(ImgId,lineIdx,allLines){
  gMeme = {
    selectedImgId: ImgId,
    selectedLineIdx: lineIdx,
    lines: allLines,
}
console.log('gMeme',gMeme)
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
    txt: '',
    size: 40,
    align: 'center',
    color: 'black',
    diff: 0,
    x: 200,
    y: 200,
    isDrag: false,
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

function changeFontName(fontName) {
  gMeme.font = fontName
}

function setColor(newColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = newColor
}
function changeFontSize(diff) {
  gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function changeAlign(align) {
  // gMeme.lines[gMeme.selectedLineIdx].align = align
  const line = gMeme.lines[gMeme.selectedLineIdx]
  const txtWidth = gCtx.measureText(line.txt).width

  switch (align) {
    case 'left':
      if (gMeme.selectedLineIdx === 0) line.x = 50
      else line.x = 150
      break

    case 'right':
      line.x = gElCanvas.height - txtWidth

      break

    default:
      line.x = gElCanvas.height / 2 - txtWidth / 2
      break
  }
}

function addEmoji(elBtn) {
  gMeme.lines.push({
    txt: `${elBtn.innerText}`,
    size: 50,
    align: 'center',
    color: 'black',
    diff: 0,
    x: gElCanvas.height / 2,
    y: gElCanvas.width / 2,
  })
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

function getLine(idx) {
  return gMeme.lines[idx]
}

function getCurrLine() {
  return gMeme.lines[gMeme.selectedLineIdx]
}

//Check if the click is inside the circle
function isLineClicked(clickedPos) {
  const line = getCurrLine()
  const metrics = gCtx.measureText(line.txt)
  const txtWidth = metrics.width
  const fontHeight =
    metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
  // const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  const { x, y } = line
  // Calc the distance between two dots
  // const distance = Math.sqrt((x - clickedPos.x) ** 2 + (y- clickedPos.y) ** 2)
  //If its smaller then the radius of the circle we are inside
  // return distance <= txtWidth || distance <= fontHeight
  if (
    gMeme.selectedLineIdx === 0 &&
    clickedPos.x >= x &&
    clickedPos.x <= x + txtWidth &&
    clickedPos.y <= y + fontHeight / 2 &&
    clickedPos.y >= y
  )
    return true
  if (
    gMeme.selectedLineIdx !== 0 &&
    clickedPos.x >= x - txtWidth / 2 &&
    clickedPos.x <= x + txtWidth / 2 &&
    clickedPos.y >= y - fontHeight / 2 &&
    clickedPos.y <= y + fontHeight / 2
  )
    return true

  // return clickedPos.x >= x && clickedPos.x <= x+txtWidth && clickedPos.y <= y + fontHeight/2 && clickedPos.y>=y
}

function setLineDrag(isDrag) {
  const line = getCurrLine()
  line.isDrag = isDrag
}

// Move the circle in a delta, diff from the pervious pos
function moveLine(dx, dy) {
  // console.log('gMeme.lines[gMeme.selectedLineIdx]',gMeme.lines[gMeme.selectedLineIdx])
  gMeme.lines[gMeme.selectedLineIdx].x += dx
  gMeme.lines[gMeme.selectedLineIdx].y += dy
}
