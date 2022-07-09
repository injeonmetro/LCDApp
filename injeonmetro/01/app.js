
$.i18n().load( {
	ja: 'i18n/ja.json',
  cn: 'i18n/cn.json',
	en: 'i18n/en.json'
} );


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
    document.getElementById('newsVideo').style.display = 'none';
var stnval = stn;
document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">잠시 후 정차할 역은</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+stnval+'역</span><br><br><span id="arrive">입니다.</span>';
window.speechSynthesis.cancel();
if (end == "y"){
  document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">이번 역은 우리 열차의 종착역인</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+stnval+'역</span><span id="arrive">입니다.<br><br><span class="text-7xl">오늘도 IJX를 이용해주셔서 고맙습니다.</span></span>';
//날자꾸나
var audio = new Audio('./fly.mp3');
audio.play();
setTimeout(function() {
    async function notify(){
      
       sendled('종 착');
        sendled(stnval);
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('이번 역은 우리 열차의 종착역인 '+stnval+'역입니다. 오늘도 IJX를 이용해주신 고객 여러분, 대단히 고맙습니다.')+'&lang=ko-kr&speed=0.5')
        await playAudio(audio)       
        //https://www.google.com/speech-api/v1/synthesize?text=ssss
        sendled('마음을 잊다, 당신의 IJX');
        $.i18n({locale: 'en'});
        document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">This stop is</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+$.i18n(stnval)+' Station</span><br><br><span id="arrive">The last station.<br><span class="text-7xl">Thank you for using IJX.</span></span>';
        var audio = new Audio('./info/end_02.mp3')
        await playAudio(audio)
        sendled('LAST');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('This stop is '+$.i18n(stnval)+' Station, the last station. We hope to see you again. Thank you.')+'&lang=en-us&speed=0.5')
        await playAudio(audio)   
        sendled(stnval);      
        $.i18n({locale: 'ja'});
        document.getElementById("StnNoticeTxt").innerHTML = '<span id="next" style="font-family:Yu Gothic!important">今回の駅は</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;font-family:Yu Gothic!important" id="stn" >'+$.i18n(stnval)+'駅</span><br><br><span id="arrive"><span class="text-7xl" style="font-family:Yu Gothic!important">今日もIJXをご利用いただきありがとうございます。</span></span>';
        var audio = new Audio('./info/end_04.mp3')
        await playAudio(audio)
        sendled('LAST');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('今回の駅は '+$.i18n(stnval)+' 駅、最後の駅。 またお会いしましょう。 ありがとうございました。')+'&lang=ja-jp&speed=0.5')
        await playAudio(audio)  
        sendled(stnval);
        var audio = new Audio('./info/end_05.mp3')
        await playAudio(audio)
        document.getElementById("StnNoticeTxt").innerHTML = '';
        document.getElementById('stnBG').style.display = 'none';
        document.getElementById('newsVideo').style.display = '';
      }
      notify();

      }, 3000);
}
else{
  
//어린달
var audio = new Audio('./ijx_arrive.mp3');
audio.play();
setTimeout(function() {
    async function notify(){
        sendled(stnval);
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('우리 열차는 잠시 후 '+stnval+'역에 도착합니다. 소지품을 두고 내리지 않도록 다시 한번 살펴보시기 바랍니다.')+'&lang=ko-kr&speed=0.5')
        await playAudio(audio)       
        //https://www.google.com/speech-api/v1/synthesize?text=ssss
        sendled('역입니다');
        $.i18n({locale: 'en'});
        document.getElementById("StnNoticeTxt").innerHTML = '<span id="next">We will stop briefly at</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+$.i18n(stnval)+' Station</span>.<br><br><span id="arrive"></span>';
        sendled('STOP');
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('We will stop briefly at '+$.i18n(stnval)+' Station. Please make sure to check your belongings before taking off. Thank you.')+'&lang=en-us&speed=0.5')
        await playAudio(audio)      
        sendled(stnval);
        $.i18n({locale: 'ja'});   
        document.getElementById("StnNoticeTxt").innerHTML = '<span id="next" style="font-family:Yu Gothic!important">今回の駅は</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;font-family:Yu Gothic!important" id="stn" >'+$.i18n(stnval)+'駅</span><br><br><span id="arrive"></span>';
        sendled(stnval);
        var audio = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('今回の駅は'+stnval+'駅。 離陸する前に必ず所持品を確認してください。 ありがとうございました。')+'&lang=ja-jp&speed=0.5')
        await playAudio(audio)  
        document.getElementById("StnNoticeTxt").innerHTML = '';
        document.getElementById('stnBG').style.display = 'none';
        document.getElementById('newsVideo').style.display = '';
      }
      notify();

      }, 3000);
}

}

function runSrtApp(stn, end, train){
  document.getElementById('departBG').style.display = '';
  document.getElementById('newsVideo').style.display = 'none';
      var stnval = stn;
      var endval = end;
      var traval = train;
      document.getElementById("traininfo").innerHTML = endval+'행 IJX<br>'+train+'열차';
      document.getElementById("StnNoticeTxt").innerHTML = '<span class="text-7xl py-4">우리 열차는 </span><span class="px-8 text-7xl py-4 bg-green-600 rounded-full text-white font-bold" style="animation: BtmfadeIn 1s ease-in both; ">IJX 제 '+traval+'열차</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+stnval+'</span>▶<span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+endval+'</span><br><br>';
      window.speechSynthesis.cancel();
      var audio = new Audio('./ijx_start.mp3');
      audio.play();
      setTimeout(function() {
        async function notify(){
          sendled(endval+'행');
            var audioz = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('고객 여러분, 환영합니다! 우리 열차는 '+endval+'역까지 가는 아이제이엑스 열차입니다. 저희 승무원은 보다 쾌적하고 즐겁게 고객님을 목적지까지 보내드릴 수 있도록 최선을 다하겠습니다.')+'&lang=ko-kr&speed=0.5')
            await playAudio(audioz)     
            sendled('IJX');
            $.i18n({locale: 'en'});
            document.getElementById("StnNoticeTxt").innerHTML = '<span class="text-7xl py-4">Our train is </span><span class="px-8 text-7xl py-4 bg-green-600 rounded-full text-white font-bold" style="animation: BtmfadeIn 1s ease-in both; ">IJX No '+traval+'</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+$.i18n(stnval)+'</span>▶<span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn">'+$.i18n(endval)+'</span><br><br>';
            var audioz = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('Dear passengers, welcome to the I.J.X train bound for '+endval+' Station.We will do our best to deliver customers to their destinations in a more comfortable and enjoyable way.')+'&lang=en-us&speed=0.45')
            await playAudio(audioz)  
              
            sendled(endval);  
            //$.i18n({locale: 'cn'});
            //document.getElementById("StnNoticeTxt").innerHTML = '<span class="text-7xl py-4" style="font-family:Microsoft JhengHei!important">我们的火车是 </span><span class="px-8 text-7xl py-4 bg-green-600 rounded-full text-white font-bold" style="animation: BtmfadeIn 1s ease-in both; " style="font-family:Microsoft JhengHei!important" >IJX No '+traval+'</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn" style="font-family:Microsoft JhengHei!important">'+$.i18n(stnval)+'</span>▶<span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn" style="font-family:Microsoft JhengHei!important">'+$.i18n(endval)+'</span><br><br>';
            //var audioz = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('各位旅客,大家好。本次列车是开往 '+endval+'。 站的高速列车。我们将竭诚为您服务,祝您一路平安,旅途愉快。')+'&lang=zh-cn&speed=0.5')
            //await playAudio(audioz)    
            $.i18n({locale: 'ja'}); 
            document.getElementById("StnNoticeTxt").innerHTML = '<span class="text-7xl py-4" style="font-family:Yu Gothic!important">我们的火车是 </span><span class="px-8 text-7xl py-4 bg-green-600 rounded-full text-white font-bold" style="animation: BtmfadeIn 1s ease-in both; " style="font-family:Yu Gothic!important" >IJX No '+traval+'</span><br><br><span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn" style="font-family:Yu Gothic!important">'+$.i18n(stnval)+'</span>▶<span class="mt-32 mb-32 text-white bg-green-600 px-20 font-bold" style="font-size:15vh;" id="stn" style="font-family:Yu Gothic!important">'+$.i18n(endval)+'</span><br><br>'; 
            var audioz = new Audio('https://www.google.com/speech-api/v1/synthesize?text='+encodeURIComponent('親愛なる乗客、'+endval+'駅行きのI.J.X列車へようこそ。お客様をより快適で楽しい方法で目的地に届けるために最善を尽くします。')+'&lang=ja-jp&speed=0.5')
            await playAudio(audioz)  
            audio.pause();
audio.currentTime = 0;
            document.getElementById("StnNoticeTxt").innerHTML = '';
            document.getElementById('srtbox').style.display = 'none';
            document.getElementById('newsVideo').style.display = 'none';
            document.getElementById('departBG').style.display = 'none';
            document.getElementById('accidentPrevention').currentTime = 0;
            document.getElementById('accidentPrevention').style.display = '';
            document.getElementById('accidentPrevention').play();
            hideAccidentPrevention();
          }
          notify();
    
          }, 3000);
       i=0;
      totali=0;
      function doSetTimeout() {
console.log('done');
      }
      doSetTimeout();
}

function hideAccidentPrevention(){
setTimeout(function() {
document.getElementById('accidentPrevention').style.display = 'none';

document.getElementById('newsVideo').style.display = '';
      }, 83170);

}

function autoEntry(trainNo){
if (trainNo.startsWith('01')) {
  document.getElementById('srtname').value = '인천공항1터미널';
  document.getElementById('srtname2').value = '대전';
}
else if (trainNo.startsWith('02')) {
  document.getElementById('srtname').value = '인천공항1터미널';
  document.getElementById('srtname2').value = '천안아산';
}
else if (trainNo.startsWith('03')) {
  document.getElementById('srtname').value = '대전';
  document.getElementById('srtname2').value = '인천공항1터미널';
}
else if (trainNo.startsWith('04')) {
  document.getElementById('srtname').value = '천안아산';
  document.getElementById('srtname2').value = '인천공항1터미널';
}
else if (trainNo.startsWith('11')) {
  document.getElementById('srtname').value = '인천공항1터미널';
  document.getElementById('srtname2').value = '대전';
}
else if (trainNo.startsWith('12')) {
  document.getElementById('srtname').value = '대전';
  document.getElementById('srtname2').value = '인천공항1터미널';
}
else if (trainNo.startsWith('13')) {
  document.getElementById('srtname').value = '인천';
  document.getElementById('srtname2').value = '서울';
}
else if (trainNo.startsWith('14')) {
  document.getElementById('srtname').value = '서울';
  document.getElementById('srtname2').value = '인천';
}
else if (trainNo.startsWith('15')) {
  document.getElementById('srtname').value = '대전';
  document.getElementById('srtname2').value = '인천';
}
else if (trainNo.startsWith('16')) {
  document.getElementById('srtname').value = '인천';
  document.getElementById('srtname2').value = '대전';
}
else if (trainNo.startsWith('21')) {
  document.getElementById('srtname').value = '인천공항1터미널';
  document.getElementById('srtname2').value = '부산';
}
else if (trainNo.startsWith('22')) {
  document.getElementById('srtname').value = '부산';
  document.getElementById('srtname2').value = '인천공항1터미널';
}
else if (trainNo.startsWith('90')) {
  document.getElementById('srtname2').value = '대전조차장';
}
else{}
}