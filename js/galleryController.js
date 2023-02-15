

function renderGallery() {
    const images = getImages()
    const strHTMLs = images.map(
      (img, idx) =>
        `<img src="meme-imgs (square)/${idx + 1}.jpg" onclick="onSelectedImg(${img.id})" />`
    )
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
  }

  function onSelectedImg(id) {
    console.log('clicked')
    showMemeCreatingPage()
    hideGallery()
    setImg(id)
    renderMeme()
  }

  function showMemeCreatingPage() {
    const elMemeCreatingPage = document.querySelector('.meme-creating')
    elMemeCreatingPage.hidden = false
  }
  function hideMemeCreatingPage() {
    const elMemeCreatingPage = document.querySelector('.meme-creating')
    elMemeCreatingPage.hidden = true
  }
  
  function showGallery() {
    renderGallery()
    const elHomePage = document.querySelector('.home-page')
    elHomePage.hidden = false
  }
  
  function hideGallery() {
    const elHomePage = document.querySelector('.home-page')
    elHomePage.hidden = true
  }