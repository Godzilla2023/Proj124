function preload() {
    song1 = loadSound("in-the-forest-2-21402.mp3");
    song2 = loadSound(music.mp3);
}
song1="";
song2="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);
}