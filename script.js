const img = document.querySelector("img");
const play = document.getElementById("play");
const music = document.querySelector("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

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
next.addEventListener("click",nextSong);
previous.addEventListener("click",prevSong);
