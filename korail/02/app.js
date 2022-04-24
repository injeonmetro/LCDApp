
function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
  }
  
function runApp(stn, end){
    document.getElementById('stnBG').style.display = '';
    document.getElementById('newsVideo').style.display = 'none';
var stnval = stn;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시후</span><br><span class="text-white-300 text-9xl font-bold" id="stn">'+stnval+'역에</span><br><span id="arrive">도착하겠습니다.</span>';
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

var audio = new Audio('./springdrizzle.mp3');
audio.play();
  setTimeout(function() {
    async function notify(){
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('우리열차는 '+endval+'역으로 가는 무궁화호 열차입니다. 열차가 곧 출발합니다. 가지고 계신 승차권을 확인해주시기 바랍니다. 고맙습니다.')+'&lang=ko_KR&speed=0.5');
        await playAudio(audio)   
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('Welcome aboard the Mugungwha train departing for '+endval+'station. The train will soon be departing. Please make sure you have correct ticket for this train. thank you.')+'&lang=en_US&speed=0.5');
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