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
    document.getElementById('newsVideo').style.display = '';
var stnval = stn;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시후</span><br><span class="text-white-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';
window.speechSynthesis.cancel();
if (end == "y"){
//날자꾸나
var audio = new Audio('./ktx_end.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('우리 열차는 잠시 후 마지막 역인 '+stnval+'역에 도착합니다. 미리 준비하시기 바랍니다. 오늘도 빠르고 편안한 KTX를 이용해주신 고객 여러분, 고맙습니다. 안녕히 가십시오.', {
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
    speak('station, the final destination of this train. Please make sure you have all your belongings with you when leaving the train. Thank you for traveling with fast and convenient KTX.', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak('各位旅客，本次列车即将到达终点站: ', {
        rate: 1,
        pitch: 1.2,
        lang: 'zh-CN'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('站。请大家提前做好下车准备。感谢大家乘坐舒适快捷的KTX，下次旅途再见。', {
        rate: 1,
        pitch: 1.2,
        lang: 'zh-CN'
    })

    speak('この列車はまもなく終点', {
        rate: 1,
        pitch: 1.2,
        lang: 'ja-JP'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('駅に到着いたします。お忘れ物のないようご注意ください。本日もＫＴＸをご利用くださいまして誠にありがとうございました。', {
        rate: 1,
        pitch: 1.2,
        lang: 'ja-JP'
    })
      }, 5000);
}
else{
//어린달
var audio = new Audio('./ktx_arrive.mp3');
audio.play();
  setTimeout(function() {
window.speechSynthesis.cancel();
    speak('우리 열차는 잠시 후 '+stnval+'역에 도착하겠습니다. 미리 준비하시기 바랍니다. 고맙습니다.', {
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
    speak('station. Please make sure all you have belongings with you when leaving the train.', {
        rate: 1,
        pitch: 1.2,
        lang: 'en-US'
    })
    speak('各位旅客，本次列车即将到达', {
        rate: 1,
        pitch: 1.2,
        lang: 'zh-CN'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('站。各位旅客请提前做好下车准备，谢谢。', {
        rate: 1,
        pitch: 1.2,
        lang: 'zh-CN'
    })

    speak('この列車はまもなく', {
        rate: 1,
        pitch: 1.2,
        lang: 'ja-JP'
    })
    speak(stnval, {
        rate: 1,
        pitch: 1.2,
        lang: 'ko-KR'
    })
    speak('駅に到着いたします。お忘れ物のないようご注意ください。ありがとうございました。', {
        rate: 1,
        pitch: 1.2,
        lang: 'ja-JP'
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
      document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">곧 출발하는</span><br><span class="text-9xl font-bold" id="stn">'+endval+'행 KTX</span><br><span id="arrive">열차입니다.</span>';
      window.speechSynthesis.cancel();
      var audio = new Audio('./ktx_start_short.mp3');
      audio.play();
      setTimeout(function() {
        window.speechSynthesis.cancel();
            speak('고객 여러분 안녕하십니까? 우리 열차는 '+endval+'역까지 가는 고속 열차입니다. 저희 승무원은 고객께서 편안히 여행할 수 있도록 정성을 다하겠습니다.', {
                rate: 1,
                pitch: 1.2,
                lang: 'ko-KR'
            })
            speak('Welcome aboard the KTX bound for ', {
                rate: 1,
                pitch: 1.2,
                lang: 'en-US'
            })
            speak(endval, {
                rate: 1,
                pitch: 1.2,
                lang: 'ko-KR'
            })
            speak('We will do our best to make your journey as comfortable as possible.', {
                rate: 1,
                pitch: 1.2,
                lang: 'en-US'
            })

            speak('各位旅客，大家好。本次列车是开往', {
                rate: 1,
                pitch: 1.2,
                lang: 'zh-CN'
            })
            speak(endval, {
                rate: 1,
                pitch: 1.2,
                lang: 'ko-KR'
            })
            speak('站的高速列车。我们将竭诚为您服务，祝您一路平安，旅途愉快。', {
                rate: 1,
                pitch: 1.2,
                lang: 'zh-CN'
            })

            speak('ご乗車ありがとうございます。この列車は', {
                rate: 1,
                pitch: 1.2,
                lang: 'ja-JP'
            })
            speak(endval, {
                rate: 1,
                pitch: 1.2,
                lang: 'ko-KR'
            })
            speak('行きの高速鉄道です。私たち乗務員はお客様に便利で快適なご旅行を提供するために努めております。', {
                rate: 1,
                pitch: 1.2,
                lang: 'ja-JP'
            })
              }, 5000);
       i=0;
      totali=0;
      function doSetTimeout() {
        setTimeout(function() {
            if(totali < 10){
      loadingCont.style.display = "none";
         if(i==3){
            document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">곧 출발하는</span><br><span class="text-9xl font-bold" id="stn">'+endval+'행 KTX</span><br><span id="arrive">열차입니다.</span>';
     
             i=1;
         }
         else if(i==2){
          document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">This train is KTX</span><br><span class="text-9xl font-bold" id="stn">bound for '+endval+'.</span>';
      
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