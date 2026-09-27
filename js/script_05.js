
const v157HighTopics=[
 {t:"세금의 의미",d:"세금의 뜻과 우리 생활에서 하는 역할을 알아봐요."},
 {t:"시대에 따라 달라진 세금",d:"옛날부터 오늘날까지 세금이 어떻게 달라졌는지 살펴봐요."},
 {t:"조선시대의 세금",d:"조선시대 사람들은 어떤 방식으로 세금을 냈는지 알아봐요."},
 {t:"국세와 지방세",d:"나라에 내는 세금과 지역에 내는 세금의 차이를 배워봐요."},
 {t:"세금의 쓰임",d:"우리가 낸 세금이 사회 곳곳에서 어떻게 사용되는지 알아봐요."},
 {t:"공공서비스와 연결하기",d:"학교·도로·소방 등 공공서비스와 세금의 관계를 찾아봐요."},
 {t:"납세와 공동체",d:"세금을 내는 일이 우리 공동체에 어떤 의미가 있는지 생각해봐요."},
 {t:"국세청의 역할",d:"국세청이 어떤 일을 하고 세금을 어떻게 관리하는지 알아봐요."}
];
function v157RenderHigh(){
 const body=document.getElementById("lessonBody");
 if(!body) return;
 const tmp=document.createElement("div");
 if(typeof lessons!=="undefined" && lessons.low) tmp.innerHTML=lessons.low;
 const sharedHead=tmp.querySelector(".v139Head.v145Head");
 if(sharedHead){
   const badge=sharedHead.querySelector(".v145HeadCopy span");
   const title=sharedHead.querySelector(".v145HeadCopy h3");
   const desc=sharedHead.querySelector(".v145HeadCopy p");
   if(badge) badge.textContent="초등 고학년 · 4~6학년";
   if(title) title.textContent="세금은 사회를 어떻게 움직일까요?";
   if(desc) desc.innerHTML="세금의 의미와 역사, 종류, 쓰임을 연결해<br>우리 생활과의 관계를 살펴봅니다.";
 }
 const sharedHeadHTML=sharedHead ? sharedHead.outerHTML : "";
 body.innerHTML=`
  ${sharedHeadHTML}
  <div class="v157HighWrap">
   <div class="v157HighGrid">
    ${v157HighTopics.map((x,i)=>`
      <article class="v157HighCard" role="button" tabindex="0"
        onclick="v157HighTopic(${i+1})"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();v157HighTopic(${i+1})}">
       <span class="v157HighNo">${String(i+1).padStart(2,"0")}</span>
       <h4>${x.t}</h4><p>${x.d}</p><span class="v157HighArrow" aria-hidden="true"></span>
      </article>`).join("")}
   </div>
   <div class="v157HighNote">주제를 선택하면 상세 학습자료가 이 영역 아래에 표시됩니다.</div>
  </div>`;
 body.classList.add("v135-visible");
}
function v157HighTopic(n){
 const x=v157HighTopics[n-1];
 const wrap=document.querySelector("#lessonBody .v157HighWrap");
 if(!wrap||!x) return;
 let detail=document.getElementById("v157HighDetail");
 if(!detail){detail=document.createElement("div");detail.id="v157HighDetail";wrap.appendChild(detail);}
 detail.innerHTML=`<div style="margin-top:24px;padding:28px;border-radius:22px;background:#f7fbfe;border:1px solid #dceaf4;text-align:center;color:#365b78">
   <strong style="font-size:22px">${String(n).padStart(2,"0")} ${x.t}</strong>
   <p style="margin:8px 0 0">상세 학습자료는 다음 단계에서 제작해 이곳에 연결합니다.</p>
 </div>`;
}
