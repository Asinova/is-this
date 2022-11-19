var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = document.getElementById("textbox")
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start()


}
recognition.onresult= function(event){
console.log(event)
Content=event.results[0][0].transcript;
console.log(Content);
textbox.innerHTML=Content;
if(Content == "take my selfie"){
speak();
}
document.getElementById("textbox").innerHTML=Content;

}
function speak(){
var synth = window.speechSynthesis;
speak_data = "taking selfie in 5 secs please wait"
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(macadamianut);
setTimeout(function(){
    take_selfie();
    save();
},5000)
}


macadamianut = document.getElementById("macadamianut")

Webcam.set({
    width: 320,
    height: 343,
    image_format: 'png',
    png_quality: 90
 });
  function take_selfie(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
        })

  }

  function save(){
    link =document.getElementById("link");
    img =document.getElementById("selfie_img").scr;
    link.href=img;
    link.click();
  }

