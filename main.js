song1 = "Lovely(PagalWorld).mp3"
song2 = "Enemy-MostMags.mp3"
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
leftWristScore = 0
leftWristSong = ""
rightWristScore = 0
rightWristSong = ""

function preload(){
    song1 = loadSound("Lovely(PagalWorld).mp3");
    song2 = loadSound("Enemy-MostMags.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide;
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(leftWristScore > 0.2){
        circle(leftWristX,leftWristY,20);
        stop(song2);
        if(song1 = false){
            play(song1);
            document.getElementById("songname").innerHTML = "Lovely";
        }
    }
    if(rightWristScore > 0.2){
        circle(rightWristX,rightWristY,20);
        stop(song1);
        if(song2 = false){
            play(song2);
            document.getElementById("songname").innerHTML = "Enemy";
        }
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristScore = results[0].pose.keypoints[9].score;
        console.log("leftWristScore = " + leftWristScore);
        rightWristScore = results[0].pose.keypoints[9].score;
        console.log("rightWristScore = " + rightWristScore);
    }
}

isPlaying(){
    song1.isPlaying();
}