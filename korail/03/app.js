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
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}
  if ($.urlParam('ip') == null){
    var useled = 0;
    var ip = "";
  }
  else{
var useled = 1;
var ip = $.urlParam('ip');
  }
function sendled(text){
  if (useled == 1){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "http://"+ip+":8000/pixel/"+encodeURIComponent(text), true);
  xhttp.send();
  }
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
    async function notify(){
       sendled('종 착');
        var audio = new Audio('./info/end_01.mp3')
        await playAudio(audio)
        sendled(stnval);
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=ko-kr&speed=0.5')
        await playAudio(audio)       
        //https://www.google.com/speech-api/v1/synthesize?text=ssss
        sendled('오늘도 빠르고 편한 KTX를 이용해주셔서 감사합니다.');
        var audio = new Audio('./info/end_02.mp3')
        await playAudio(audio)
        sendled('LAST');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=en-us&speed=0.5')
        await playAudio(audio)   
        sendled(stnval);   
        var audio = new Audio('./info/end_03.mp3')
        await playAudio(audio)
        sendled('Thank you for using fast and convenient KTX.');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=zh-cn&speed=0.5')
        await playAudio(audio)      
        sendled('종 착');
        var audio = new Audio('./info/end_04.mp3')
        await playAudio(audio)
        sendled('LAST');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=ja-jp&speed=0.5')
        await playAudio(audio)  
        sendled(stnval);
        var audio = new Audio('./info/end_05.mp3')
        await playAudio(audio)
      }
      notify();

      }, 3000);
}
else{
//어린달
var audio = new Audio('./ktx_arrive.mp3');
audio.play();
setTimeout(function() {
    async function notify(){
      sendled('이번역은');
        var audio = new Audio('./info/stop_01.mp3')
        await playAudio(audio)
        sendled(stnval);
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=ko-kr&speed=0.5')
        await playAudio(audio)       
        //https://www.google.com/speech-api/v1/synthesize?text=ssss
        sendled('역입니다');
        var audio = new Audio('./info/stop_02.mp3')
        await playAudio(audio)
        sendled('STOP');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=en-us&speed=0.5')
        await playAudio(audio)      
        sendled(stnval);
        var audio = new Audio('./info/stop_03.mp3')
        await playAudio(audio)
        sendled('두고 내리는 물건이 없는지 확인');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=zh-cn&speed=0.5')
        await playAudio(audio)      
        var audio = new Audio('./info/stop_04.mp3')
        await playAudio(audio)
        sendled(stnval);
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent(stnval)+'&lang=ja-jp&speed=0.5')
        await playAudio(audio)  
        var audio = new Audio('./info/stop_05.mp3')
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
        async function notify(){
          sendled(endval+'행');
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('고객 여러분 안녕하십니까? 우리 열차는 '+endval+'역까지 가는 고속 열차입니다. 저희 승무원은 고객께서 편안히 여행할 수 있도록 정성을 다하겠습니다.')+'&lang=ko-kr&speed=0.5')
            await playAudio(audio)     
            sendled('KTX');
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('Welcome aboard the KTX bound for '+endval+'. We will do our best to make your journey as comfortable as possible.')+'&lang=en-us&speed=0.5')
            await playAudio(audio)  
              
            sendled(endval);  
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('各位旅客，大家好。本次列车是开往 '+endval+'。 站的高速列车。我们将竭诚为您服务，祝您一路平安，旅途愉快。')+'&lang=zh-cn&speed=0.5')
            await playAudio(audio)      
            var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('ご乗車ありがとうございます。この列車は '+endval+'。 行きの高速鉄道です。私たち乗務員はお客様に便利で快適なご旅行を提供するために努めております。')+'&lang=ja-jp&speed=0.5')
            await playAudio(audio)  

          
          }
          notify();
    
          }, 3000);
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