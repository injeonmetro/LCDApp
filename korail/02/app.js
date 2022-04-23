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

function runApp(stn, end){
    document.getElementById('stnBG').style.display = '';
    document.getElementById('newsVideo').style.display = 'none';
var stnval = stn;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시후</span><br><span class="text-white-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';
window.speechSynthesis.cancel();
if (end == "y"){
//날자꾸나
var audio = new Audio('./fly.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('우리 열차는 잠시 후 마지막 역인 '+stnval+'역에 도착합니다. 미리 준비하시기 바랍니다. 오늘도 코레일과 함께 해 주신 고객여러분 고맙습니다. 안녕히 가십시오.', {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('We will soon be arriving at,', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('station, the final destination of this train. Please make sure all you have belongings with you when leaving the train. Thank you for traveling with Korail.', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
      }, 5000);
}
else{
//어린달
var audio = new Audio('./littlemoon.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('우리 열차는 잠시 후 '+stnval+'역에 도착합니다. 미리 준비하시기 바랍니다. 고맙습니다.', {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('We will soon be arriving at,', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('station. Please make sure all you have belongings with you when leaving the train. Thank you.', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
      }, 5000);
}
 i=0;
totali=0;
function doSetTimeout() {
  setTimeout(function() {
      if(totali < 10){
loadingCont.style.display = "none";
   if(i==3){
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">We will soon arrive at</span><br><span class="text-white-300 text-9xl font-bold" id="stn">'+stnval+'</span><br><span id="arrive">Station</span>';

       i=1;
   }
   else if(i==2){
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시후</span><br><span class="text-white-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';

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
    document.getElementById('stnBG').style.display = 'none';
    document.getElementById('newsVideo').style.display = '';
return;
}
      
      }, 5000);
}
doSetTimeout();
}

function runSrtApp(stn, end){
var stnval = stn;
var endval = end;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">무궁화호</span><br><span class="text-9xl font-bold" id="stn">'+stnval+' ▶▶ '+endval+'</span><br><span id="arrive"></span>';
window.speechSynthesis.cancel();
var audio = new Audio('./springdrizzle.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('우리열차는 '+endval+'역으로 가는 무궁화호 열차입니다. 열차가 곧 출발합니다. 가지고 계신 승차권을 확인해주시기 바랍니다. 고맙습니다.', {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('Welcome aboard the Saemaul train departing for ', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak(endval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('station. The train will soon be departing. Please make sure you have correct ticket for this train. thank you.', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
      }, 5000);

 i=0;
totali=0;
function doSetTimeout() {
  setTimeout(function() {
      if(totali < 10){
loadingCont.style.display = "none";
   if(i==3){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">무궁화호</span><br><span class="text-9xl font-bold" id="stn">'+stnval+' ▶▶ '+endval+'</span><br><span id="arrive"></span>';

       i=1;
   }
   else if(i==2){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">Mugungwha Train</span><br><span class="text-9xl font-bold" id="stn">'+stnval+' ▶▶ '+endval+'</span><br><span id="arrive"></span>';

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
      }, 46000);

}