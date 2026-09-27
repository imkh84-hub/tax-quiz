
const v108GradeData = {
  lower:{
    badge:"초등 저학년 · 1~3학년",
    title:"초등 저학년 세금교실",
    lead:"놀이처럼 쉽고 재미있게 세금의 첫걸음을 시작해요.",
    level:"low",
    topics:[
      ["🏫","세금은 왜 필요할까요?","우리 동네와 학교에서 세금이 하는 일을 알아봐요."],
      ["🚒","세금은 어디에 쓰일까요?","소방서·도로·공원처럼 생활 속 쓰임을 찾아봐요."],
      ["🔎","우리 생활 속 세금 찾기","주변 사례를 보며 세금과 공공서비스를 연결해봐요."]
    ]
  },
  upper:{
    badge:"초등 고학년 · 4~6학년",
    title:"초등 고학년 세금교실",
    lead:"생활 속 사례를 통해 세금의 역할과 가치를 한 단계 더 알아봐요.",
    level:"high",
    topics:[
      ["💡","세금의 역할 알아보기","세금이 사회를 운영하는 데 어떤 역할을 하는지 살펴봐요."],
      ["🏙️","생활 속 공공서비스","우리 주변의 공공서비스와 세금의 관계를 알아봐요."],
      ["🧩","사례로 생각해보기","여러 상황을 보고 세금이 왜 필요한지 직접 판단해봐요."]
    ]
  },
  middle:{
    badge:"중학생 · 중학교 1~3학년",
    title:"중학생 세금교실",
    lead:"더 넓은 사회 속에서 세금의 기능과 의미를 생각해봐요.",
    level:"middle",
    topics:[
      ["⚖️","세금과 사회의 관계","공공서비스와 공동체 운영에서 세금의 역할을 살펴봐요."],
      ["📊","생활 속 세금 이해","일상과 경제활동 속에서 만나는 세금 사례를 알아봐요."],
      ["🌱","세금과 우리의 미래","세금이 사회와 미래에 어떤 영향을 주는지 생각해봐요."]
    ]
  }
};

function selectGrade(key){
  const d=v108GradeData[key]||v108GradeData.lower;
  const modal=document.getElementById("gradeIntroModal");
  modal.classList.toggle("v260LowerArt", key==="lower");
  modal.classList.toggle("v264UpperArt", key==="upper");
  modal.classList.toggle("v274MiddleArt", key==="middle");
  document.getElementById("v108IntroBadge").textContent=d.badge;
  document.getElementById("v108IntroTitle").textContent=d.title;
  document.getElementById("v108IntroLead").textContent=d.lead;
  document.getElementById("v108IntroTopics").innerHTML=d.topics.map(t =>
    '<div class="v108-topic"><span class="ico">'+t[0]+'</span><b>'+t[1]+'</b><small>'+t[2]+'</small></div>'
  ).join("");
  const start=document.getElementById("v108StartBtn");
  start.onclick=function(){ closeGradeIntro(); if(typeof startQuiz==="function") startQuiz(d.level); };
  const lowerStart=document.getElementById("v260LowerStart");
  if(lowerStart) lowerStart.onclick=function(){ closeGradeIntro(); if(typeof startQuiz==="function") startQuiz("low"); };
  const upperStart=document.getElementById("v264UpperStart");
  if(upperStart) upperStart.onclick=function(){ closeGradeIntro(); if(typeof startQuiz==="function") startQuiz("high"); };
  const middleStart=document.getElementById("v274MiddleStart");
  if(middleStart) middleStart.onclick=function(){ closeGradeIntro(); if(typeof startQuiz==="function") startQuiz("middle"); };
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}
function closeGradeIntro(){
  const modal=document.getElementById("gradeIntroModal");
  if(!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
}
document.addEventListener("click",function(e){
  const m=document.getElementById("gradeIntroModal");
  if(e.target===m) closeGradeIntro();
});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape") closeGradeIntro();
});
