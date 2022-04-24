function speak(text, opt_prop) {
    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
        return
    }
    
    // 현재 읽고있다면 초기화

    const prop = opt_prop || {}

    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10      
    speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR"
    speechMsg.text = text
    
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg)
}
function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
  }

function runApp(stn, end){
var stnval = stn;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시후</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';
window.speechSynthesis.cancel();
if (end == "y"){
    //날자꾸나
    var audio = new Audio('./fly.mp3');
    audio.play();
      setTimeout(function() {
        async function notify(){
            var audio = new Audio('./info/end_01.mp3')
            await playAudio(audio)
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=ko-kr&speed=0.5')
            await playAudio(audio)       
            //https://www.google.com/speech-api/v1/synthesize?text=ssss
            var audio = new Audio('./info/end_02.mp3')
            await playAudio(audio)
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=en_us&speed=0.5')
            await playAudio(audio)      
            var audio = new Audio('./info/end_03.mp3')
            await playAudio(audio)
          }
          notify();
    
          }, 3000);
    }
    else{
    //어린달
    var audio = new Audio('./littlemoon.mp3');
    audio.play();
    setTimeout(function() {
        async function notify(){
            var audio = new Audio('./info/stop_01.mp3')
            await playAudio(audio)
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=ko-kr&speed=0.5')
            await playAudio(audio)       
            //https://www.google.com/speech-api/v1/synthesize?text=ssss
            var audio = new Audio('./info/stop_02.mp3')
            await playAudio(audio)
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=en_us&speed=0.5')
            await playAudio(audio)      
            var audio = new Audio('./info/stop_03.mp3')
            await playAudio(audio)
          }
          notify();
    
          }, 3000);
    }
 i=0;
totali=0;
function doSetTimeout() {
  setTimeout(function() {
      if(totali < 10){
loadingCont.style.display = "none";
   if(i==3){
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">We will soon arrive at</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'</span><br><span id="arrive">Station</span>';

       i=1;
   }
   else if(i==2){
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시후</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';

   }
      else if(i==1){
      i=2;
   }
i++;
totali++;
doSetTimeout();
}
else{
    document.getElementById("StnNoticeTxt").innerHTML = '';

return;
}
      
      }, 5000);
}
doSetTimeout();
}

function runSrtApp(stn, end){
var stnval = stn;
var endval = end;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">새마을호</span><br><span class="text-9xl font-bold" id="stn">'+stnval+' ▶▶ '+endval+'</span><br><span id="arrive"></span>';
window.speechSynthesis.cancel();
var audio = new Audio('./springdrizzle.mp3');
audio.play();
setTimeout(function() {
    async function notify(){
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('우리열차는 '+endval+'역으로 가는 새마을호 열차입니다. 열차가 곧 출발합니다. 가지고 계신 승차권을 확인해주시기 바랍니다. 고맙습니다.')+'&lang=ko_KR&speed=0.5');
        await playAudio(audio)   
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('Welcome aboard the Saemaul train departing for '+endval+'station. The train will soon be departing. Please make sure you have correct ticket for this train. thank you.')+'&lang=en_US&speed=0.5');
        await playAudio(audio)       
      }
      notify();
      }, 5000);

 i=0;
totali=0;
function doSetTimeout() {
  setTimeout(function() {
      if(totali < 10){
loadingCont.style.display = "none";
   if(i==3){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">새마을호</span><br><span class="text-9xl font-bold" id="stn">'+stnval+' ▶▶ '+endval+'</span><br><span id="arrive"></span>';

       i=1;
   }
   else if(i==2){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">Saemaul Train</span><br><span class="text-9xl font-bold" id="stn">'+stnval+' ▶▶ '+endval+'</span><br><span id="arrive"></span>';

   }
      else if(i==1){
      i=2;
   }
i++;
totali++;
doSetTimeout();
}
else{
    document.getElementById("StnNoticeTxt").innerHTML = '';

return;
}
      
      }, 5000);
}
doSetTimeout();
}

function hideAccidentPrevention(){
setTimeout(function() {
document.getElementById('accidentPrevention').style.display = 'none';
document.getElementById('newsVideo').style.display = '';
      }, 74000);

}