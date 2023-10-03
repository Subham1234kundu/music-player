const img = document.querySelector("img");
const play = document.getElementById("play");
const music = document.querySelector("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let pogress = document.getElementById("pogress");
let current_Time = document.getElementById("current-time");
let tot_Duration = document.getElementById("duration");
let pogressDiv = document.getElementById("pogress-div");


const songs=[{
    img:"ashes",
    song:"ashes",
    title:"hin",
    artist:"ashes"
},
{
    img:"warfaze",
    song:"warfaze",
    title:"purnota",
    artist:"warfaze"
},
{
    img:"artcell",
    song:"artcell",
    title:"dukkho bilash",
    artist:"artcell"
}
]

let isPlaying = false;
play.addEventListener("click" ,()=>{
    if(isPlaying == true){
    pauseMusic();
    }else{
        playMusic(); 
    }
})

function playMusic(){
    isPlaying = true;
    music.play();
    play.classList.replace("ri-play-fill","ri-pause-fill");
    img.classList.add("anime")
}
function pauseMusic(){
    isPlaying = false;
    music.pause();
    play.classList.replace("ri-pause-fill","ri-play-fill");
    img.classList.remove("anime");

}


const loading= (songs)=>{
 title.textContent = songs.title;
 artist.textContent = songs.artist;
 img.src = `img/${songs.img}.jpeg`
 music.src = `music/${songs.song}.mp3`
}

let songIndex = 0;
const nextSong = ()=>{
  songIndex = (songIndex+1)%songs.length;
  loading(songs[songIndex]);
  playMusic();
}

const prevSong = ()=>{
  songIndex = (songIndex-1+songs.length)%songs.length;
   loading(songs[songIndex]);
   playMusic();
}

//pogress js work
music.addEventListener("timeupdate" ,(event)=>{
    // console.log(event);
    const{currentTime,duration} = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);
    let pogressTime = ((currentTime/duration)*100);
    pogress.style.width = `${pogressTime}%`;

    //music duration update
    let minDuration = Math.floor(duration/60);
    let secDuration = Math.floor(duration%60);
    if(duration){
        tot_Duration.textContent = `${minDuration}:${secDuration}`;
    }
    
    //music current time 
    let currentMin = Math.floor(currentTime/60);
    let currentSec = Math.floor(currentTime%60);
    if(currentSec<10){
        currentSec = `0${currentSec}`
    }
    current_Time.textContent = `${currentMin}:${currentSec}`;
    
});


pogressDiv.addEventListener("click" , (event)=>{
    console.log(event);
    const{duration} = music;
    // const duration = music.duration;
    let movepogress = (event.offsetX/event.srcElement.clientWidth)*duration;
    console.log(duration);
    console.log(movepogress);
    music.currentTime = movepogress;
})

//if music is end and call the next song
music.addEventListener("ended",nextSong);

next.addEventListener("click",nextSong);
previous.addEventListener("click",prevSong);
