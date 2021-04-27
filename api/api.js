//déclaration de constantes 1-API 2-VIDEO_DU_JOUR 3-IMAGE_DU_JOUR 4-INPUT_DATE 5-IMAGE_DATE 6-VIDEO_DATE
const urlApi = 'https://api.nasa.gov/planetary/apod?api_key=gLe8JlDuBckdftGTVhcxauh64pUeB8xnRV91wcJr';
const video = document.getElementById('videoToday');
const image = document.getElementById('imageToday');
const date = document.getElementById('apod');
const imageDate = document.getElementById('imageDate');
const videoDate = document.getElementById('videoDate');


//fonction pour récupérer la video/image du jour
function recuperer() {
    fetch(urlApi)
    .then((res) => res.json())
    .then(result =>{
        console.log(result);
       
        if (result.media_type === 'video') {
            video.setAttribute('src', result.url)

        }else {
            image.setAttribute('src', result.url)
        }
       
        
    })
}

recuperer();

//fonction pour récupérer la video/image du jour de la date séléctionnée
function bydate() {
    let d = date.value 
    console.log(d);
    let urlDate = 'https://api.nasa.gov/planetary/apod?api_key=gLe8JlDuBckdftGTVhcxauh64pUeB8xnRV91wcJr&date=' + d
    fetch(urlDate)
    .then((res) => res.json())
    .then(result2 => {
        if (result2.media_type === 'video') {
            imageDate.setAttribute('src', '')
            videoDate.setAttribute('src', result2.url)

        }else {
            videoDate.setAttribute('src', '')
            imageDate.setAttribute('src', result2.url)
        }
        
    })
}