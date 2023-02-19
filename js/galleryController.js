

function renderGallery() {
    if (!getFilterImgs() || !getFilterImgs().length){
      const images= getImages() 
      const strHTMLs = images.map(
        (img, idx) =>
          `<img src="meme-imgs (square)/${idx + 1}.jpg" onclick="onSelectedImg(${img.id})" />`
      )
  
      document.querySelector('.gallery').innerHTML = strHTMLs.join('')
      
    } else {
      const images= getFilterImgs()
        const strHTMLs = images.map(
          (img) =>
            `<img src="meme-imgs (square)/${img.id}.jpg" onclick="onSelectedImg(${img.id})" />`
        )
      document.querySelector('.gallery').innerHTML = strHTMLs.join('')
    }
    renderKeywords()
      
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

  function onFilterImgs(keyword){
    filterImgs(keyword)
    renderGallery()
  }

  function renderKeywords(){
    let strHtml=''
    const keywordsMap= getKeywords() 
    for (const key in keywordsMap) {
      strHtml+=`<li><a class="key ${key}" href="#" onclick="onFilterImgs('${key}')">${key}</a></li>`
    }
    document.querySelector('.search-by-keywords').innerHTML = strHtml
    for (let key in keywordsMap) {
      // console.log('keywordsMap[key]',keywordsMap[key])
      document.querySelector(`.search-by-keywords .${key}`).style.fontSize = `calc(1em + 4*${keywordsMap[key]}px)`
    }
    // const elKeywords= document.querySelectorAll('.search-by-keywords a .key')
    // elKeywords.forEach(key=>document.querySelector(`.search-by-keywords a key-${key}`).style.fontSize = `calc(1em + 5*${keywordsMap[key]}px)`)
    
  }