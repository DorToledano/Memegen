let gElCanvas
let gCtx
let gCurrShape = 'rect'

function init() {
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
  console.log('gCtx', gCtx)
  renderMeme()
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = 'black'
  gCtx.font = '40px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y) 
  gCtx.strokeText(text, x, y) 
  return
}

function clearCanvas() {
  // Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height)
  // to transparent black, erasing any previously drawn content.
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  // You may clear part of the canvas
  // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}

function onDraw() {
  clearCanvas()
  renderMeme()
  elInput = document.querySelector('.txt')

  drawText(elInput.value, gElCanvas.width / 2, gElCanvas.height / 2)
}

function drawImg() {
  const img = new Image() // Create a new html img element
  img.src = 'meme-imgs (square)/4.jpg' // Send a network req to get that image, define the img src
  // When the image ready draw it on the canvas
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}

function renderMeme() {
    drawImg()
    // drawRect()
//   gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawRect(x, y) {
    // gCtx.beginPath()
  
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x, y, 120, 120)
    gCtx.fillStyle = 'orange'
    gCtx.fillRect(x, y, 120, 120)
}