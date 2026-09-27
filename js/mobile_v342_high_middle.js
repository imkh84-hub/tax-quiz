
(function(){
  function mobile(){return window.matchMedia('(max-width:900px)').matches;}

  function modal(){
    return document.getElementById('v340LearnModal');
  }

  function openExistingDetail(selector){
    if(!mobile()) return;
    var detail=document.querySelector(selector);
    if(!detail) return;
    var m=modal();
    if(!m) return;
    var c=m.querySelector('.v340LearnContent');
    if(!c) return;
    c.innerHTML='';
    c.appendChild(detail.cloneNode(true));
    var nav=c.querySelector('.v172HighNav');
    if(nav){
      var b=nav.querySelectorAll('button');
      if(b[0]) b[0].textContent='‹ 이전';
      if(b[1]) b[1].textContent='목록';
      if(b[2]) b[2].textContent='다음 ›';
    }
    m.classList.add('open');
    m.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    var dlg=m.querySelector('.v340LearnDialog');
    if(dlg) dlg.scrollTop=0;
  }

  /* 고학년/중학생 카드의 기존 상세 생성 함수 실행 후 모달로 가져옴 */
  document.addEventListener('click',function(e){
    if(!mobile()) return;

    var high=e.target.closest('#lessonBody .v168HighCard');
    if(high){
      var cards=[].slice.call(document.querySelectorAll('#lessonBody .v168HighCard'));
      var n=cards.indexOf(high)+1;
      if(n>0){
        setTimeout(function(){openExistingDetail('#lessonBody #v168HighDetail');},90);
      }
      return;
    }

    var mid=e.target.closest('#lessonBody .v199MidCard[data-middle-topic]');
    if(mid){
      setTimeout(function(){openExistingDetail('#lessonBody #v209MiddleDetail');},90);
    }
  },false);

  /* 복제된 고/중 모달 내비게이션은 원본 함수를 호출하고 다시 동기화 */
  document.addEventListener('click',function(e){
    if(!mobile()) return;
    var btn=e.target.closest('#v340LearnModal .v172HighNav button');
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();

    var m=modal();
    var img=m && m.querySelector('.v172HighDetailImg, .v209MiddleDetailImg');
    if(!img) return;

    var src=img.getAttribute('src')||'';
    var nav=[].slice.call(btn.parentNode.querySelectorAll('button'));
    var pos=nav.indexOf(btn);

    if(pos===1){
      m.classList.remove('open');
      m.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      return;
    }

    if(src.indexOf('middle_detail_')>=0){
      var mm=src.match(/middle_detail_(\d+)/);
      var n=mm?parseInt(mm[1],10):1;
      n += (pos===0?-1:1);
      if(n>=1 && n<=8 && window.v209MiddleTopic){
        window.v209MiddleTopic(n);
        setTimeout(function(){openExistingDetail('#lessonBody #v209MiddleDetail');},40);
      }
    }else{
      var imgs=['image_042.jpg','image_043.jpg','image_044.jpg','image_045.jpg','image_046.jpg','image_047.jpg','image_048.jpg','image_049.jpg'];
      var file=src.split('/').pop();
      var n=imgs.indexOf(file)+1;
      n += (pos===0?-1:1);
      if(n>=1 && n<=8 && window.v168HighTopic){
        window.v168HighTopic(n);
        setTimeout(function(){openExistingDetail('#lessonBody #v168HighDetail');},40);
      }
    }
  },true);
})();
