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
var stnval = stn;
window.speechSynthesis.cancel();
if (end == "y"){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시 후 종착역인</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span><br><span id="arrive" class="text-5xl">새로운 고속철도,<br>SRT를 이용해주셔서 감사합니다.</span>';

//날자꾸나
var audio = new Audio('./srt_logosong.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('고객 여러분, SRT와 함께 즐겁고 편안한 여행 되셨습니까? 우리 열차는 잠시 후, 마지막 역인 '+stnval+'역에 도착하겠습니다. 소지품을 두고 내리지 않도록, 미리 준비하시기 바랍니다. 행복한 순간, 소중한 기억! 저희 SR이 함께하겠습니다. 감사합니다. 안녕히 가십시오.', {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('Ladies and gentlemen, we are about to arrive at,', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('station, the last destination of our journey. Please check your personal belongings with you. We would like to appreciate you for traveling with us today, and look forward to seeing you again in the near future. Thank you.', {
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
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">We are about to arrive at</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'</span><br><span id="arrive">station. Thank You.</span><br><span id="arrive" class="text-5xl">Thank you for travelling with us and have a good day.</span>';

       i=1;
   }
   else if(i==2){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시 후 종착역인</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span><br><span id="arrive" class="text-5xl">새로운 고속철도,<br>SRT를 이용해주셔서 감사합니다.</span>';

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
else{
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">우리 열차는 잠시 후</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';

//어린달
var audio = new Audio('./srt_stop.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('고객 여러분, 우리 열차는 잠시 후 '+stnval+'역에 도착하겠습니다. 두고 내리는 물건이 없는지 다시 한 번 확인해 주시기 바랍니다. 감사합니다.', {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('Ladies and gentlemen, we are about to arrive at,', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('station. If this is your destination, please be prepared to disembark. Thank you.', {
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
      document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">We are about to arrive at</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'</span><br><span id="arrive">station. Thank You.</span>';
      
             i=1;
         }
         else if(i==2){
      document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">우리 열차는 잠시 후</span><br><span class="text-yellow-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';
      
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

}

function runSrtApp(stn, end){
var stnval = stn;
var endval = end;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">우리는<br>곧 출발하는</span><br><span class="text-9xl font-bold" id="stn">'+endval+'행 SRT</span><br><span id="arrive">열차입니다.</span>';
window.speechSynthesis.cancel();
var audio = new Audio('./srt_logosong.mp3');
audio.play();

 i=0;
totali=0;
function doSetTimeout() {
  setTimeout(function() {
      if(totali < 10){
loadingCont.style.display = "none";
   if(i==3){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">우리는<br>곧 출발하는</span><br><span class="text-9xl font-bold" id="stn">'+endval+'행 SRT</span><br><span id="arrive">열차입니다.</span>';

       i=1;
   }
   else if(i==2){
    document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">Welcome on board<br>SRT bound for</span><br><span class="text-9xl font-bold" id="stn">'+endval+',</span><br><span id="arrive">Soon departing.</span>';

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
