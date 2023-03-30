var video = "";
var status = false;
var objectDetector = "";

 function preload() {
    video = createVideo("video.mp4");
    video.hide();
 }

function setup(){
    canvas = createCanvas(1000,380);
    canvas.center();
}

function draw(){
            
    image(video,0,0,580,380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "STATUS : DETECTING THE OBJECTS";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

function modelLoaded() {
    console.log('model loaded');
    video.loop();
    video.speed(1);
    video.volume(0);
    status = true;
}


