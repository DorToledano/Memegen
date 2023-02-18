let gElCanvas
let gCtx
let gCurrShape = 'rect'
let isDecreaseLineHeight = false
let isIncreaseLineHeight = false
const MEMES_DB = 'memes'
let gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function init() {
  showGallery()
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
  addListeners()
}

// function getCurrImg(){
//   const meme = getMeme()
//   let currImg = getImageById(meme.selectedImgId)
//   const img = new Image()
//   img.src = currImg.url
//   return img
// }
// var image = getCurrImg()

function renderMeme() {
  const meme = getMeme()
  let currImg = getImageById(meme.selectedImgId)
  const img = new Image()
  img.src = currImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach((line, idx) =>
      drawText(line.txt, line.color, line.size, meme.font, line.align, idx)
    )
    isDecreaseLineHeight = false
    isIncreaseLineHeight = false

    changeInputTxt()
  }
}

function drawText(text, color, size, font = 'arial', align, lineIdx) {
  const meme = getMeme()
  gCtx.lineWidth = 1
  gCtx.strokeStyle = `white`
  gCtx.fillStyle = `${color}`
  gCtx.font = `${size}px ${font}`
  gCtx.textAlign = `${align}`
  gCtx.textBaseline = 'middle'

  const x = meme.lines[lineIdx].x
  const y = meme.lines[lineIdx].y
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

// function drawText(text, color, size, font = 'arial', align, lineIdx) {
//   gCtx.lineWidth = 1
//   gCtx.strokeStyle = `white`
//   gCtx.fillStyle = `${color}`
//   gCtx.font = `${size}px ${font}`
//   gCtx.textAlign = `${align}`
//   gCtx.textBaseline = 'middle'

//   const { x, y } = setTxtPos(lineIdx)
//   gCtx.fillText(text, x, y)
//   gCtx.strokeText(text, x, y)

//   // isDecreaseLineHeight = false
//   // isIncreaseLineHeight = false
//   // gCtx.save()
// }

function isDecreaseLineHt(bool) {
  isDecreaseLineHeight = bool
  const meme = getMeme()
  const lineIdx = meme.selectedLineIdx
  setTxtPos(lineIdx)
  renderMeme()
}

function isIncreaseLineHt(bool) {
  isIncreaseLineHeight = bool
  const meme = getMeme()
  const lineIdx = meme.selectedLineIdx
  setTxtPos(lineIdx)
  renderMeme()
}

function setTxtPos(lineIdx) {
  const line = getLine(lineIdx)

  if (isDecreaseLineHeight) line.diff += 10
  if (isIncreaseLineHeight) line.diff += -10

  switch (lineIdx) {
    case 0:
      line.x = 50
      line.y = 50 + line.diff
      if (line.y < 50) {
        line.y = 50 
        line.diff=0
      }
      else if (line.y >= gElCanvas.height - 50) {
        line.y = gElCanvas.height - 50
        line.diff=0
      }
      break

    case 1:
      line.x = 150
      line.y = gElCanvas.height - 50 + line.diff
      if (line.y < 50) {
        line.y = 50 
        line.diff=0
      }
      else if (line.y >= gElCanvas.height - 50) {
        line.y = gElCanvas.height - 50
        line.diff=0
      }
      break

    default:
      line.x = gElCanvas.width / 2
      line.y = gElCanvas.height / 2 + line.diff
      if (line.y < 50) {
        line.y = 50 
        line.diff=0
      }
      else if (line.y >= gElCanvas.height - 50) {
        line.y = gElCanvas.height - 50
        line.diff=0
      }
      break
  }
}

// function setTxtPos(lineIdx) {
//   const meme = getMeme()
//   const line = getLine(lineIdx)

//   if (line.diff < 0) line.diff = 0
//   else if (line.diff >= gElCanvas.height - 100)line.diff = gElCanvas.height - 100
//   if (isDecreaseLineHeight) line.diff += 5
//   if (isIncreaseLineHeight) line.diff += -5

//   switch (lineIdx) {
//     case 0:
//       return { x: 50, y: 50 + meme.lines[lineIdx].diff }
//     case 1:
//       return { x: 115, y: 500 + meme.lines[lineIdx].diff }
//     default:
//       return { x: 200, y: 200 + meme.lines[lineIdx].diff }
//   }

// switch (lineIdx) {
//     case 0:
//         return { x: 50, y: 50 }
//     case 1:
//         return { x: 150, y: 500 }
//     default:
//         return { x: 200, y: 200 }
// }
// }

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
  const meme = getMeme()
  const lineIdx = meme.lines.length - 1
  setTxtPos(lineIdx)
  switchLine()
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

function onChangeFont(fontName){
  changeFontName(fontName)
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

function onChangePage(num) {
  changePage(num)
  renderEmojis()
}

function OnAddEmoji(elBtn) {
  addEmoji(elBtn)
  switchLine()
  renderMeme()
}

// function clearCanvas() {
//   gCtx.clearRect(0, 0, 50, 50)
// }

function onUploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    // Encode the instance of certain characters in the url
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    console.log(encodedUploadedImgUrl)
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`
    )
  }
  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  // Pack the image for delivery
  const formData = new FormData()
  formData.append('img', imgDataUrl)

  // Send a post req with the image to the server
  const XHR = new XMLHttpRequest()
  XHR.onreadystatechange = () => {
    // If the request is not done, we have no business here yet, so return
    if (XHR.readyState !== XMLHttpRequest.DONE) return
    // if the response is not ok, show an error
    if (XHR.status !== 200) return console.error('Error uploading image')
    const { responseText: url } = XHR
    // Same as
    // const url = XHR.responseText

    // If the response is ok, call the onSuccess callback function,
    // that will create the link to facebook using the url we got
    console.log('Got back live url:', url)
    onSuccess(url)
  }
  XHR.onerror = (req, ev) => {
    console.error(
      'Error connecting to server with request:',
      req,
      '\nGot response data:',
      ev
    )
  }
  XHR.open('POST', '//ca-upload.com/here/upload.php')
  XHR.send(formData)
}

function onDownloadImg(elLink) {
  console.log('download')
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}

// var gImgSrc
// CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
  const reader = new FileReader()
  // After we read the file
  reader.onload = function (event) {
    let img = new Image() // Create a new html img element
    img.src = event.target.result // Set the img src to the img file we read

    // gImgSrc  = event.target.result

    // Run the callBack func, To render the img on the canvas
    img.onload = onImageReady.bind(null, img)

    // Can also do it this way:
    // img.onload = () => onImageReady(img)
  }
  reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function renderImg(img) {
  // // Draw the img on the canvas
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  // const img = new Image()
  // img.src = gImgSrc
  // // console.log('img',img)
  // img.onload = () => {
  //   // console.log('img',img)
  //   gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  //   gMeme.lines.forEach((line, idx) =>
  //     drawText(line.txt, line.color, line.size, meme.font, line.align, idx)
  //   )
  //   changeInputTxt()
  // }
}
function getEvPos(ev) {
  // Gets the offset pos , the default pos
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // Check if its a touch ev
  if (TOUCH_EVS.includes(ev.type)) {
    //soo we will not trigger the mouse ev
    ev.preventDefault()
    //Gets the first touch point
    ev = ev.changedTouches[0]
    //Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}

function onDown(ev) {
  // console.log('Down')
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev)
  console.log('pos', pos)
  if (!isLineClicked(pos)) return

  setLineDrag(true)
  //Save the pos we start from
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const { isDrag } = getCurrLine()
  if (!isDrag) return
  
  const pos = getEvPos(ev)
  // console.log(pos)

  // Calc the delta , the diff we moved
  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
  moveLine(dx, dy)

  // Save the last pos , we remember where we`ve been and move accordingly
  gStartPos = pos

  // The canvas is render again after every move
  renderMeme()
}

function onUp() {
  // console.log('Up')
  setLineDrag(false)
  document.body.style.cursor = 'grab'
}

function addListeners() {
  addMouseListeners()
  addTouchListeners()
  //Listen for resize ev
  window.addEventListener('resize', () => {
    init()
  })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchend', onUp)
}


