let gElCanvas
let gCtx
let gCurrShape = 'rect'

function init() {
  showGallery()
  hideMemeCreatingPage()
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
}

function renderMeme() {
  const meme = getMeme()
  let currImg = getImageById(meme.selectedImgId)
  //   console.log('currImg', currImg)
  const img = new Image() // Create a new html img element

  img.src = currImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach((line, idx) =>
      drawText(line.txt, line.color, line.size, meme.font, line.align, idx)
    )
    changeInputTxt()
  }
}

function drawText(text, color, size, font = 'arial', align, lineIdx) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = `${color}`
  gCtx.fillStyle = `${color}`
  gCtx.font = `${size}px ${font}`
  gCtx.textAlign = `${align}`
  gCtx.textBaseline = 'middle'

  const { x, y } = setTxtPos(lineIdx)
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
  gCtx.save()
}

function setTxtPos(lineIdx) {
  // console.log('lineIdx',lineIdx)
  switch (lineIdx) {
      case 0:
          return { x: 50, y: 50 }
      case 1:
          return { x: 150, y: 500 }
      default:
          return { x: 200, y: 200 }
  }
}

function changeInputTxt() {
  const txt = getLineTxt()
  document.querySelector('.txt').value = txt
}

function onSetLineTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

function onChangeTextFont(font) {
  changeFontSize(+font)
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  // getLineTxt()
  changeInputTxt()
}

function onAddLine() {
  addLine()
  renderMeme()
}

function onDeleteLine() {
  deleteLine()
  renderMeme()
}

function onSetFont(diff) {
  changeFontSize(diff)
  renderMeme()
}

function onChangeColor(color) {
  setColor(color)
  renderMeme()
}

function onChangeAlign(align) {
  changeAlign(align)
  renderMeme()
}

// function clearCanvas() {
//   gCtx.clearRect(0, 0, 50, 50)
// }


