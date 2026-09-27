/* V211: 학년 선택 및 고학년/중학생 주제 카드 선택 상태 통일 */
(function(){
  function setGrade(card){
    document.querySelectorAll('#learn .v129-grade-card, #learn .v132GradeCard').forEach(el=>{
      el.classList.remove('v135-selected','selected');el.setAttribute('aria-pressed','false');
    });
    if(card){card.classList.add('v135-selected','selected');card.setAttribute('aria-pressed','true');}
  }
  // 기존 고학년 클릭 핸들러는 selected만 부여하므로 공통 선택 클래스를 보완한다.
  document.addEventListener('click',ev=>{
    const grade=ev.target.closest('#learn .v129-grade-card, #learn .v132GradeCard');
    if(grade) setGrade(grade);
  });
  function selectTopic(selector,card){
    document.querySelectorAll(selector).forEach(el=>{
      el.classList.remove('v211-topic-selected');el.setAttribute('aria-pressed','false');
    });
    if(card){card.classList.add('v211-topic-selected');card.setAttribute('aria-pressed','true');}
  }
  // 이전/다음 버튼으로 이동해도 해당 카드의 선택 표시가 바뀐다.
  const oldHigh=window.v168HighTopic;
  window.v168HighTopic=function(n){
    const result=oldHigh.apply(this,arguments);
    selectTopic('#lessonBody .v168HighCard',document.querySelectorAll('#lessonBody .v168HighCard')[n-1]);
    return result;
  };
  const oldMiddle=window.v209MiddleTopic;
  window.v209MiddleTopic=function(n){
    const result=oldMiddle.apply(this,arguments);
    selectTopic('#lessonBody .v199MidCard',document.querySelector('#lessonBody .v199MidCard[data-middle-topic="'+n+'"]'));
    return result;
  };
  // 상세 화면을 닫으면 주제 선택 표시도 해제한다.
  document.addEventListener('click',ev=>{
    if(ev.target.closest('#v168HighDetail .v172HighNav button, #v209MiddleDetail .v172HighNav button')?.textContent.trim()==='목록으로'){
      selectTopic('#lessonBody .v168HighCard, #lessonBody .v199MidCard',null);
    }
  });
})();
