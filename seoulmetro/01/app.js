

function runApp(stn, end){
var stnval = stn;
var audio = new Audio('./info/'+stnval+'.mp3');
audio.play();
if(stnval == "750"){
    var ko = '<span id="next">이 열차는</span><br><span class="text-blue-300 ns font-bold">부천종합운동장, 	부평구청, 굴포천</span><br>을(를) 거쳐<br><span class="text-yellow-300 ns font-bold" id="stn">부평구청</span><br>까지 가는 열차입니다.';
    var en = '<span id="next">THIS TRAIN IS FOR</span><br><br><span class="text-yellow-300 ns font-bold" id="stn">Bupyeong-gu Office</span>'

}
if(stnval == "751"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >까치울</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Kkachiul</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "752"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >부천종합운동장</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Bucheon Stadium</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "753"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >춘 의</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Chunui</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "754"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >신중동</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Sinjong-dong</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "755"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >부천시청</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">왼      쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Bucheon City Hall</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">LEFT</h3> </div></div>'
}
if(stnval == "756"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >상 동</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">오른쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Sangdong</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">RIGHT</h3> </div></div>'
}
if(stnval == "757"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >삼산체육관</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">오른쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Samsan Gymnasium</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">RIGHT</h3> </div></div>'
}
if(stnval == "758"){
    var ko = ' <div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">이 번 역</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >굴포천</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">내리실문</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">오른쪽</h3> </div></div>';
    var en = '<div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">STATION</h3></div><div class="w-1/2"> <h3 class="font-bold text-8xl text-yellow-300 ns" >Gulpocheon</h3> </div></div><div class="flex block mb-12 text-center text-gray-500 w-screen"> <div class="w-1/2"> <h3 class="text-7xl">EXIT</h3> </div><div class="w-1/2"> <h3 class="font-bold text-8xl text-blue-300 ns">RIGHT</h3> </div></div>'
}
if(stnval == "759"){
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

return;
}
      
      }, 2000);
}
doSetTimeout();

}
