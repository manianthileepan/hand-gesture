var prediction_1=""
var prediction_2=""

webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camere=document.getElementById('camera')

webcam.attach('#camere')

function takesnashot()
{
    webcam.snacamera(function(data_uri){
    document.getElementById("result").innerhtml='<img id="catured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5version:' ,ml5version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Vf6OHNRGF/',modalloaded);
function modalloaded(){
    console.log('Modal Loaded!');
}
function speak(){
    varsynth=window.peechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="the second prediction is"+prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
}synth.speak(utterthis)

function cheak(){
    img+document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}else{
    console.log('results');
    document.getElementById("result_hand_name").innerhtml=results[0].label;
    document.getElementById("result_hand_name2").innerhtml=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;