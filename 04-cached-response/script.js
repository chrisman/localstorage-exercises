$.get('https://www.reddit.com/r/aww.json')
  .done(function (response) {
    var redditData = response
    localStorage.setItem('redditData', JSON.stringify(redditData))
    console.log('stored');
  })
  .fail(function (error) {
    //What to do if HTTP failed
    console.error("Error: " + error)
    return cachedData = JSON.parse(localStorage.getItem('redditData'))
  })
