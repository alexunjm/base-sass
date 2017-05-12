export default function youtubeVideo () {
  const d = document,
    w = window,
    mq = w.matchMedia('(min-width: 64em)'),
    youtube = d.querySelectorAll('.Youtube'),
    youtubeIds = [],
    youtubeIframe = []

  youtube.forEach((video, index) => {
    youtubeIds[index] = video.id
    youtubeIframe[index] = video.innerHTML
  })

  //console.log( youtubeIds, youtubeIframe )
  
  function showVideo (mq) {
    if (mq.matches) {
      youtube.forEach((video, index) => {
        video.innerHTML = youtubeIframe[index]
      })
    } else {
      youtube.forEach((video, index) => {
        video.innerHTML = `<a href="https://www.youtube.com/watch?v=${youtubeIds[index]}" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>`
      })
    }
  }

  mq.addListener(showVideo);
  showVideo(mq);
}