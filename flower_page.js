img="";
status1="";
function preload(){
img=loadImage("flower.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
    image(img,0,0,640,420); 
    fill("#3EB489");
    stroke("#3EB489");
    noFill();
    text("purple",45,75);
    rect(30,60,200,315);
     
    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("pink",240,60);
    rect(240,60,190,295);

    fill("#FFFF00");
    stroke("#FFFF00");
    noFill();
    text("blue",430,60); 
    rect(430,60,190,315);
}
function modelLoaded(){
    console.log("Model is Loaded!");
    status1=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
    }
}