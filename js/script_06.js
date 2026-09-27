
const v168HighImages=["images/image_034.png", "images/image_035.png", "images/image_036.png", "images/image_037.png", "images/image_038.png", "images/image_039.png", "images/image_040.png", "images/image_041.png"];
const v168HighTitles=["세금의 의미", "시대에 따라 달라지는 세금", "조선시대의 세금", "국세와 지방세", "세금의 쓰임", "공공서비스와 연결하기", "납세와 공동체", "국세청의 역할"];

function v168HighTopic(n){
 const wrap=document.querySelector("#lessonBody .v168HighWrap");
 if(!wrap) return;
 let detail=document.getElementById("v168HighDetail");
 if(!detail){
   detail=document.createElement("div");
   detail.id="v168HighDetail";
   wrap.appendChild(detail);
 }
 detail.innerHTML='<div style="margin-top:24px;padding:28px;border-radius:22px;background:#f7fbfe;border:1px solid #dceaf4;text-align:center;color:#365b78"><strong style="font-size:22px">'+String(n).padStart(2,"0")+' '+v168HighTitles[n-1]+'</strong><p style="margin:8px 0 0">상세 학습자료는 다음 단계에서 제작해 이곳에 연결합니다.</p></div>';
 detail.scrollIntoView({behavior:"smooth",block:"nearest"});
}

function v168RenderHigh(){
 const body=document.getElementById("lessonBody"); if(!body)return;
 const tmp=document.createElement("div");
 if(typeof lessons!=="undefined"&&lessons.low) tmp.innerHTML=lessons.low;
 const h=tmp.querySelector(".v139Head.v145Head");
 if(h){
   const b=h.querySelector(".v145HeadCopy span");
   const t=h.querySelector(".v145HeadCopy h3");
   const d=h.querySelector(".v145HeadCopy p");
   if(b)b.textContent="초등 고학년 · 4~6학년";
   if(t)t.textContent="세금은 사회를 어떻게 움직일까요?";
   if(d)d.innerHTML="세금의 의미와 역사, 종류, 쓰임을 연결해<br>우리 생활과의 관계를 살펴봅니다.";
 }
 const cards=v168HighImages.map((src,i)=>
   '<button type="button" class="v168HighCard" aria-label="'+v168HighTitles[i]+'" onclick="v168HighTopic('+(i+1)+')"><img src="'+src+'" alt="'+v168HighTitles[i]+'"></button>'
 ).join("");
 body.innerHTML=(h?h.outerHTML:"")+'<div class="v168HighWrap"><div class="v168HighGrid">'+cards+'</div></div>';
 body.classList.add("v135-visible");
}

const v168PrevOpen=window.openGradeLesson;
window.openGradeLesson=function(level,card){
 if(level==="high"){
   document.querySelectorAll(".v132GradeCard").forEach(x=>x.classList.remove("selected"));
   if(card)card.classList.add("selected");
   v168RenderHigh();
   return;
 }
 return v168PrevOpen(level,card);
};
