
status1="";
objects=[];
function preload(){
    img=loadImage("rp.jpg");
    }
function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";   
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    
}
function draw(){
    image(img,0,0,380,380);
    
     
    if(status1 !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        for(i=0; i<objects.length; i++){
     document.getElementById("status").innerHTML="Status: Object Detected ";
     document.getElementById("number_of_objects").innerHTML="Number of Objects Detected: "+objects.length;
     percent=floor(objects[i].confidence*100);
     fill(r,g,b);
     text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
     noFill();
     stroke(r,g,b);
     rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model is Loaded!");
    status1=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    if(error){
console.error(error);
document.getElementById("status").innerHTML="Status: No Objects";
    }
    else{
        console.log(results);
        objects=results;
    }
}