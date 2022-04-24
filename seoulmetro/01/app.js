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
var stnval = stn;
var audio = new Audio('./info/'+stnval+'.mp3');
audio.play();
if(stnval == "750"){
    sendled('이 열차는 부평구청행 열차입니다. This Train is bound for Bupyeong-gu office.');     
    var ko = '<span id="next">이 열차는</span><br><span class="text-blue-300 ns font-bold">부천종합운동장, 	부평구청, 굴포천</span><br>을(를) 거쳐<br><span class="text-yellow-300 ns font-bold" id="stn">부평구청</span><br>까지 가는 열차입니다.';
    var en = '<span id="next">THIS TRAIN IS FOR</span><br><br><span class="text-yellow-300 ns font-bold" id="stn">Bupyeong-gu Office</span>'

}
if(stnval == "751"){
    sendled('<까치울');     
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >까치울</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Kkachiul</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "752"){
    sendled('<운동장');     
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >부천종합운동장</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Bucheon Stadium</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "753"){
    sendled('<춘 의');     
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >춘 의</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Chunui</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "754"){
    sendled('<신중동');     
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >신중동</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Sinjong-dong</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "755"){
    sendled('<시청');   
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >부천시청</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Bucheon City Hall</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "756"){
    sendled('상 동>');   
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >상 동</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">오른쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Sangdong</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">RIGHT</h3> </div></div>'
}
if(stnval == "757"){
    sendled('체육관>');   
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >삼산체육관</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">오른쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Samsan Gymnasium</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">RIGHT</h3> </div></div>'
}
if(stnval == "758"){
    sendled('굴포천>');   
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >굴포천</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">오른쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Gulpocheon</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">RIGHT</h3> </div></div>'
}
if(stnval == "759"){
    sendled('종착역: 부평구청  내리실문: 오른쪽');     
    var ko = '<div class="text-left"><span id="next">이번역은 마지막역인</span><br><span class="text-yellow-300 ns font-bold" id="stn">부평구청</span><br>역입니다<br>내리실문은 <span class="text-blue-300 ns font-bold">오른쪽</span> 입니다</div>';
    var en = '<div class="text-left">내리실 때에는 차안에 두고<br>내리는 물건이 없는지 다시<br>한 번 살펴보시기 바랍니다.<br>안녕히 가십시오.<br>고맙습니다.</div>'
}

document.getElementById("StnNoticeTxt").innerHTML = ko;
 i=0;
totali=0;
function doSetTimeout() {
  setTimeout(function() {
      if(totali < 10){
loadingCont.style.display = "none";
   if(i==3){
document.getElementById("StnNoticeTxt").innerHTML = en;

       i=1;
   }
   else if(i==2){
document.getElementById("StnNoticeTxt").innerHTML = ko;

   }
      else if(i==1){
      i=2;
   }
i++;
totali++;
doSetTimeout();
}
else{
    document.getElementById("StnNoticeTxt").innerHTML = '<img src="logo_static.svg" class="h-96 mx-auto">';
    sendled('교통공사');     
return;
}
      
      }, 2000);
}
doSetTimeout();

}
