function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mOXXHm874/model.json', modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error, results){
    if(error){
        console.log(error);
   }
   else{
       console.log(results);
   }
   random_color_r = Math.floor(Math.random()*255)+1;
   random_color_g = Math.floor(Math.random()*255)+1;
   random_color_b = Math.floor(Math.random()*255)+1;
   document.getElementById("hear").innerHTML = 'I can hear - '+ results[0].label;
   document.getElementById("accuracy").innerHTML = 'accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
   document.getElementById("hear").style.color = "rgb("+random_color_r+" ,"+random_color_g+" ,"+random_color_b+")";
   document.getElementById("accuracy").style.color = "rgb("+random_color_r+" ,"+random_color_g+" ,"+random_color_b+")";

img = document.getElementById("img1");
img5 = document.getElementById("img2");
img6 = document.getElementById("img3");
if(results[0].label == "tiger"){
    img.src = "tiger.png";
    img5.src= "";
    img6.src= "";
}
else if(results[0].label == "bell"){
    img.src = "";
    img5.src= "lion.png";
    img6.src= "";
}
else if(results[0].label == "snap"){
    img.src = "";
    img5.src= "";
     img6.src= "bear.png";
     img7.src= "";
 }
}