
(function(){
  const previous=window.openGradeLesson;
  window.openGradeLesson=function(level,card){
    if(level!=="middle") return previous(level,card);

    document.querySelectorAll("#learn .v129-grade-card").forEach(function(c){
      c.classList.remove("v135-selected");
      c.setAttribute("aria-pressed","false");
    });
    if(card){
      card.classList.add("v135-selected");
      card.setAttribute("aria-pressed","true");
    }

    const body=document.getElementById("lessonBody");
    if(!body) return;

    /* 저학년에서 사용 중인 실제 공통배너 HTML을 복제 */
    const tmp=document.createElement("div");
    tmp.innerHTML=lessons.low;
    const head=tmp.querySelector(".v139Head.v145Head");

    if(head){
      const badge=head.querySelector(".v145HeadCopy span");
      const title=head.querySelector(".v145HeadCopy h3");
      const desc=head.querySelector(".v145HeadCopy p");
      if(badge) badge.textContent="중학생 · 1~3학년";
      if(title) title.textContent="세금과 사회의 관계를 이해해 봅시다";
      if(desc) desc.innerHTML="세금의 필요성과 역할, 주요 분류, 공평한 부담의 원리를<br>전자세정과 연결해 살펴봅니다.";
      body.innerHTML=head.outerHTML+
        '<div class="v185MiddleNext">'+
        '<div class="v185MiddlePlaceholder">중학생 학습주제 8개 카드가 이 아래에 들어갑니다.</div>'+
        '</div>';
    }else{
      body.innerHTML=lessons.middle;
    }
    body.classList.add("v135-visible");
  };
})();
