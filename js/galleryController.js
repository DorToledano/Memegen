

function renderGallery() {
    const images = getImages()
    const strHTMLs = images.map(
      (img, idx) =>
        `<img src="meme-imgs (square)/${idx + 1}.jpg" onclick="onSelectedImg(${img.id})" />`
    )
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
  }

  function onSelectedImg(id) {
    // console.log('clicked')
    showMemeCreatingPage()
    hideGallery()
    setImg(id)
    renderMeme()
  }

  function showMemeCreatingPage() {
    hideGallery()
    hideMemesPage()
    renderEmojis()
    const elMemeCreatingPage = document.querySelector('.meme-creating')
    elMemeCreatingPage.hidden = false
    resetMeme()
  }
  function hideMemeCreatingPage() {
    const elMemeCreatingPage = document.querySelector('.meme-creating')
    elMemeCreatingPage.hidden = true
  }
  
  function showGallery() {
    renderGallery()
    hideMemeCreatingPage()
    hideMemesPage()
    const elHomePage = document.querySelector('.home-page')
    elHomePage.hidden = false
  }
  
  function hideGallery() {
    const elHomePage = document.querySelector('.home-page')
    elHomePage.hidden = true
  }

  function showMemesPage() {
    hideGallery()
    hideMemeCreatingPage()
    renderMemesPage()
    const elMemesPage = document.querySelector('.memes-page')
    elMemesPage.hidden = false
  }
  function hideMemesPage() {
    const elMemesPage = document.querySelector('.memes-page')
    elMemesPage.hidden = true
  }