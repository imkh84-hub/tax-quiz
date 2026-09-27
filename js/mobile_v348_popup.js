
(function(){
  function mobile(){return matchMedia('(max-width:900px)').matches;}

  function ensureModal(){
    var m=document.getElementById('v340LearnModal');
    if(m) return m;
    return null;
  }

  function closeModal(){
    var m=ensureModal();
    if(!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  function renderPopup(type,n){
    if(!mobile()) return;
    var m=ensureModal();
    if(!m) return;

    var detailId=type==='high' ? 'v168HighDetail' : 'v209MiddleDetail';
    var detail=document.getElementById(detailId);
    if(!detail) return;

    var sourceImg=detail.querySelector('img');
    if(!sourceImg) return;

    var content=m.querySelector('.v340LearnContent');
    if(!content) return;
    content.replaceChildren();

    var img=document.createElement('img');
    img.className='v348DetailImage';
    img.src=sourceImg.src;
    img.alt=sourceImg.alt || '상세 학습자료';
    content.appendChild(img);

    var nav=document.createElement('div');
    nav.className='v348Nav';

    var prev=document.createElement('button');
    prev.type='button';
    prev.textContent='‹ 이전';
    prev.disabled=n<=1;

    var list=document.createElement('button');
    list.type='button';
    list.textContent='목록';

    var next=document.createElement('button');
    next.type='button';
    next.textContent='다음 ›';
    next.disabled=n>=8;

    prev.addEventListener('click',function(){
      if(n<=1)return;
      if(type==='high') window.v168HighTopic(n-1);
      else window.v209MiddleTopic(n-1);
    });
    list.addEventListener('click',closeModal);
    next.addEventListener('click',function(){
      if(n>=8)return;
      if(type==='high') window.v168HighTopic(n+1);
      else window.v209MiddleTopic(n+1);
    });

    nav.append(prev,list,next);
    content.appendChild(nav);

    m.classList.add('open');
    m.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    var dialog=m.querySelector('.v340LearnDialog');
    if(dialog) dialog.scrollTop=0;
  }

  /* 모든 기존 스크립트가 로드된 뒤 실제 상세 함수 하나만 감싼다.
     DOM 이동/복제 이벤트를 추가하지 않아 재진입 시에도 동일하게 동작. */
  function install(){
    if(window.__v348PopupInstalled) return;
    if(typeof window.v168HighTopic!=='function' || typeof window.v209MiddleTopic!=='function'){
      setTimeout(install,30);
      return;
    }

    var highBase=window.v168HighTopic;
    var middleBase=window.v209MiddleTopic;

    window.v168HighTopic=function(n){
      var result=highBase.apply(this,arguments);
      if(mobile()) setTimeout(function(){renderPopup('high',Number(n));},0);
      return result;
    };

    window.v209MiddleTopic=function(n){
      var result=middleBase.apply(this,arguments);
      if(mobile()) setTimeout(function(){renderPopup('middle',Number(n));},0);
      return result;
    };

    window.__v348PopupInstalled=true;
  }

  addEventListener('load',install);
  setTimeout(install,0);
})();
