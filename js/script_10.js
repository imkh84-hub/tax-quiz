
(function(){
 const oldOpen=window.openGradeLesson;
 window.openGradeLesson=function(level,card){
  if(level!=="middle") return oldOpen(level,card);
  document.querySelectorAll("#learn .v129-grade-card").forEach(c=>{
   c.classList.remove("v135-selected");c.setAttribute("aria-pressed","false");
  });
  if(card){card.classList.add("v135-selected");card.setAttribute("aria-pressed","true");}
  const body=document.getElementById("lessonBody");if(!body)return;
  const tmp=document.createElement("div");tmp.innerHTML=lessons.low;
  const head=tmp.querySelector(".v139Head.v145Head");if(!head)return;
  const badge=head.querySelector(".v145HeadCopy span");
  const title=head.querySelector(".v145HeadCopy h3");
  const desc=head.querySelector(".v145HeadCopy p");
  if(badge)badge.textContent="중학생 · 1~3학년";
  if(title)title.textContent="세금과 사회의 관계를 이해해 봅시다";
  if(desc)desc.innerHTML="세금의 필요성과 역할, 주요 분류, 공평한 부담의 원리를<br>전자세정과 연결해 살펴봅니다.";
  body.innerHTML=head.outerHTML+
   '<div class="v199MidWrap"><div class="v199MidGrid"><button type="button" class="v199MidCard" data-middle-topic="1" aria-label="중학생 학습주제 1"><img src="images/image_050.png" alt="세금의 필요성과 역할"></button><button type="button" class="v199MidCard" data-middle-topic="2" aria-label="중학생 학습주제 2"><img src="images/image_051.png" alt="세금의 역사"></button><button type="button" class="v199MidCard" data-middle-topic="3" aria-label="중학생 학습주제 3"><img src="images/image_052.png" alt="국세와 지방세"></button><button type="button" class="v199MidCard" data-middle-topic="4" aria-label="중학생 학습주제 4"><img src="images/image_053.png" alt="직접세와 간접세"></button><button type="button" class="v199MidCard" data-middle-topic="5" aria-label="중학생 학습주제 5"><img src="images/image_054.png" alt="세금은 어디에 쓰일까?"></button><button type="button" class="v199MidCard" data-middle-topic="6" aria-label="중학생 학습주제 6"><img src="images/image_055.png" alt="공평한 세금과 누진세"></button></div><div class="v206MidWideGrid"><button type="button" class="v199MidCard" data-middle-topic="7" aria-label="중학생 학습주제 7"><img src="images/image_056.png" alt="납세자의 역할"></button><button type="button" class="v199MidCard" data-middle-topic="8" aria-label="중학생 학습주제 8"><img src="images/image_057.png" alt="전자세정과 홈택스·손택스"></button></div></div>';
  body.classList.add("v135-visible");
 };
})();
