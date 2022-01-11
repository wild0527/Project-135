status = "";


function setup() {
    canvas = createCanvas(480, 360);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();

}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("start").value = "input_values";
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 360);
}