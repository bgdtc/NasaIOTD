
const urlApi = 'https://api.nasa.gov/planetary/apod?api_key=gLe8JlDuBckdftGTVhcxauh64pUeB8xnRV91wcJr';
const video = document.getElementById('nasa');
const image = document.getElementById('nasa2');
const date = document.getElementById('apod');
const image3 = document.getElementById('nasa3');
const video3 = document.getElementById('video3');



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


function bydate() {
    let d = date.value 
    console.log(d);
    let urlDate = 'https://api.nasa.gov/planetary/apod?api_key=gLe8JlDuBckdftGTVhcxauh64pUeB8xnRV91wcJr&date=' + d
    fetch(urlDate)
    .then((res) => res.json())
    .then(result2 => {
        if (result2.media_type === 'video') {
            image3.setAttribute('src', '')
            video3.setAttribute('src', result2.url)

        }else {
            video3.setAttribute('src', '')
            image3.setAttribute('src', result2.url)
        }
        
    })
}