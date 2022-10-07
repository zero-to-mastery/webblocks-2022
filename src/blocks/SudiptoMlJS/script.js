
let video;
let mobilnet;
let label;
const res=document.getElementById("res");

function modelReady(){
    console.log("Your model is ready");
    mobilnet.predict(video,gotResult)
}
function gotResult(error,result){
  if(error){
    console.log(error);
  }else{
     label=result[0].label;
     let prob=result[0].confidence;
     res.innerHTML=label
     //mobilnet=ml5.imageClassifier('MobileNet',modelReady)
  }
}
function setup(){
    createCanvas(600,500);
    video=createCapture(VIDEO);
    video.hide();
}
function startPrediction(){
  mobilnet=ml5.imageClassifier('MobileNet',modelReady)
}


function draw() {
    background(0);
    image(video,0,0);
   //fill(55);
}