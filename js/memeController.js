let gElCanvas
let gCtx
let gCurrShape = 'rect'


function init() {
  showGallery()
  hideMemeCreatingPage()
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
//   console.log('gCtx', gCtx)
  onDraw()
//   renderMeme()
}

function clearCanvas() {
  // Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height)
  // to transparent black, erasing any previously drawn content.
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  // You may clear part of the canvas
  // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}

function onDraw() {
  const meme = getMeme()
  const elInputPrice = document.querySelector('.txt')
  setText(meme, elInputPrice.value)

  drawText(meme.lines[gMeme.selectedLineIdx].txt, 50, 50)
}

function drawImg() {
  const meme = getMeme()
  console.log('meme',meme)
  let currImg = getImageById(meme.selectedImgId)
//   console.log('currImg', currImg)
  const img = new Image() // Create a new html img element

  img.src = currImg.url // Send a network req to get that image, define the img src

  // When the image ready draw it on the canvas
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}

function renderMeme() {
  drawImg()
//   drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)

}

function onChangeColor(color) {
    setColor(gMeme, color)
    // gCtx.strokeStyle = `${gMeme.lines[0].color}`
  drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)

    // renderMeme()
  }
  
  function onChangeTextFont(font) {
    setFont(gMeme, +font)
  drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)

    // renderMeme()
  }
  function onSwitchLine() {
    switchLine()
  }
  function onAddLine() {
    const elInputTxt = document.querySelector('.txt')
  
    setLineTxt(gMeme, elInputTxt.value)
  
    drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 500)
  }

  function onSetFont(diff){
    //   renderMeme()
    setFont(gMeme, diff)
   drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)


  }
