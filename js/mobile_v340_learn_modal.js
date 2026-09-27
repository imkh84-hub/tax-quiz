
(function(){
  function mobile(){return window.matchMedia('(max-width:900px)').matches;}

  function ensureModal(){
    var m=document.getElementById('v340LearnModal');
    if(m) return m;
    m=document.createElement('div');
    m.id='v340LearnModal';
    m.className='v340LearnModal';
    m.setAttribute('aria-hidden','true');
    m.innerHTML=
      '<div class="v340LearnDialog" role="dialog" aria-modal="true" aria-label="상세 학습자료">'+
        '<button type="button" class="v340LearnClose" aria-label="닫기">×</button>'+
        '<div class="v340LearnContent"></div>'+
      '</div>';
    document.body.appendChild(m);
    m.querySelector('.v340LearnClose').addEventListener('click',closeModal);
    m.addEventListener('click',function(e){if(e.target===m) closeModal();});
    return m;
  }

  function syncAndOpen(){
    if(!mobile()) return;
    var detail=document.querySelector('#learn #lessonBody .v140Detail');
    if(!detail) return;
    var m=ensureModal();
    var c=m.querySelector('.v340LearnContent');
    c.innerHTML='';
    var clone=detail.cloneNode(true);
    c.appendChild(clone);
    m.classList.add('open');
    m.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    m.querySelector('.v340LearnDialog').scrollTop=0;
  }

  function closeModal(){
    var m=document.getElementById('v340LearnModal');
    if(!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  /* 학습카드 클릭 후 기존 상세 DOM이 갱신될 시간을 조금 준 뒤 팝업 */
  document.addEventListener('click',function(e){
    if(!mobile()) return;
    var card=e.target.closest('#learn #lessonBody .v139Grid article');
    if(card){
      setTimeout(syncAndOpen,80);
      return;
    }

    /* 팝업 안의 이전/다음/목록 버튼:
       기존 상세영역의 대응 버튼을 실제로 눌러 기존 로직을 재사용 */
    var modalBtn=e.target.closest('#v340LearnModal .v153LessonNav button');
    if(modalBtn){
      e.preventDefault();
      e.stopPropagation();
      var buttons=[].slice.call(document.querySelectorAll('#learn #lessonBody .v140Detail .v153LessonNav button'));
      var modalButtons=[].slice.call(document.querySelectorAll('#v340LearnModal .v153LessonNav button'));
      var i=modalButtons.indexOf(modalBtn);
      if(i>=0 && buttons[i]){
        buttons[i].click();
        if(i===1){
          closeModal();
        }else{
          setTimeout(syncAndOpen,80);
        }
      }
    }
  },true);

  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') closeModal();
  });
})();
