
(function(){
  function mobile(){return window.matchMedia('(max-width:900px)').matches;}

  function modal(){
    return document.getElementById('v340LearnModal');
  }

  function closeModal(){
    var m=modal();
    if(!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  function getNumber(card,type){
    if(type==='high'){
      var cards=Array.from(document.querySelectorAll('#learn #lessonBody .v168HighGrid > .v168HighCard'));
      return cards.indexOf(card)+1;
    }
    var cards=Array.from(document.querySelectorAll(
      '#learn #lessonBody .v199MidGrid > .v199MidCard'
    ));
    return cards.indexOf(card)+1;
  }

  function render(type,n){
    var m=modal();
    if(!m || !n) return;

    var detail=document.getElementById(type==='high' ? 'v168HighDetail' : 'v209MiddleDetail');
    if(!detail) return;

    var sourceImg=detail.querySelector('img');
    if(!sourceImg) return;

    var content=m.querySelector('.v340LearnContent');
    if(!content) return;
    content.replaceChildren();

    var img=document.createElement('img');
    img.className='v348DetailImage';
    img.src=sourceImg.currentSrc || sourceImg.src;
    img.alt=sourceImg.alt || '상세 학습자료';
    content.appendChild(img);

    var nav=document.createElement('div');
    nav.className='v348Nav';

    function button(text,disabled,fn){
      var b=document.createElement('button');
      b.type='button';
      b.textContent=text;
      b.disabled=disabled;
      b.addEventListener('click',fn);
      return b;
    }

    nav.appendChild(button('‹ 이전',n<=1,function(){
      openTopic(type,n-1);
    }));
    nav.appendChild(button('목록',false,closeModal));
    nav.appendChild(button('다음 ›',n>=8,function(){
      openTopic(type,n+1);
    }));
    content.appendChild(nav);

    m.classList.add('open');
    m.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';

    var dialog=m.querySelector('.v340LearnDialog');
    if(dialog) dialog.scrollTop=0;
  }

  function openTopic(type,n){
    if(n<1 || n>8) return;

    /* 클릭 시점에 직접 기존 상세 생성 함수를 호출.
       초기 load/wrapper 설치 순서에 의존하지 않음. */
    if(type==='high' && typeof window.v168HighTopic==='function'){
      window.v168HighTopic(n);
    }else if(type==='middle' && typeof window.v209MiddleTopic==='function'){
      window.v209MiddleTopic(n);
    }else{
      return;
    }

    /* 함수가 상세 DOM을 동기적으로 갱신한 직후 모달에 반영 */
    requestAnimationFrame(function(){
      render(type,n);
    });
  }

  /* capture 단계에서 고/중 카드 클릭을 직접 받는다.
     첫 진입/재진입 여부와 무관하게 항상 같은 경로 사용. */
  document.addEventListener('click',function(e){
    if(!mobile()) return;

    var high=e.target.closest('#learn #lessonBody .v168HighGrid > .v168HighCard');
    if(high){
      var n=getNumber(high,'high');
      if(n){
        e.preventDefault();
        e.stopPropagation();
        openTopic('high',n);
      }
      return;
    }

    var mid=e.target.closest('#learn #lessonBody .v199MidGrid > .v199MidCard');
    if(mid){
      var n=getNumber(mid,'middle');
      if(n){
        e.preventDefault();
        e.stopPropagation();
        openTopic('middle',n);
      }
    }
  },true);
})();
