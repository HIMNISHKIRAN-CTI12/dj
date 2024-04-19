scorerightWrist = 0;
scoreleftWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
monke = "";
pendah = "";
function setup(){
    canvas = createCanvas(800,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialised");
}
function preload(){
monke = loadSound("Monke.mp3");
pendah = loadSound("Pendah.mp3");
}

function draw(){
    image(video,0,0,800,450);
}