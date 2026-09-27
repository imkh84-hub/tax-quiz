
(function(){
  function mobile(){ return window.matchMedia('(max-width:900px)').matches; }

  /* 모달이 열릴 때 기존 버튼 문구를 짧고 세련되게 통일 */
  function polishModal(){
    if(!mobile()) return;
    var nav=document.querySelector('#v340LearnModal .v153LessonNav');
    if(!nav) return;
    var b=nav.querySelectorAll('button');
    if(b.length>=3){
      b[0].textContent='‹ 이전';
      b[1].textContent='목록';
      b[2].textContent='다음 ›';
      b[0].setAttribute('aria-label','이전 학습자료');
      b[1].setAttribute('aria-label','학습자료 목록으로');
      b[2].setAttribute('aria-label','다음 학습자료');
    }
  }

  /* V340의 모달 DOM 갱신 이후에 문구를 재정리 */
  document.addEventListener('click',function(e){
    if(!mobile()) return;
    if(e.target.closest('#learn #lessonBody .v139Grid article') ||
       e.target.closest('#v340LearnModal .v153LessonNav button')){
      setTimeout(polishModal,120);
    }
  },false);

  if(window.MutationObserver){
    var observer=new MutationObserver(function(){
      setTimeout(polishModal,10);
    });
    window.addEventListener('load',function(){
      observer.observe(document.body,{childList:true,subtree:true});
    });
  }
})();
