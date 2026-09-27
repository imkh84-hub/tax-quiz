
(function(){
  function mobile(){return matchMedia('(max-width:900px)').matches;}

  /* ---------- Self-contained learning modal ---------- */
  function ensureModal(){
    var m=document.getElementById('v351LearnModal');
    if(m) return m;
    m=document.createElement('div');
    m.id='v351LearnModal'; m.setAttribute('aria-hidden','true');
    m.innerHTML='<div class="v351Dialog" role="dialog" aria-modal="true">'+
      '<button class="v351Close" type="button" aria-label="닫기">×</button>'+
      '<div class="v351Content"></div></div>';
    document.body.appendChild(m);
    function close(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow='';}
    m.querySelector('.v351Close').onclick=close;
    m.addEventListener('click',function(e){if(e.target===m)close();});
    m._close=close;
    return m;
  }
  function detail(type){return document.getElementById(type==='high'?'v168HighDetail':'v209MiddleDetail');}
  function callTopic(type,n){
    if(type==='high' && typeof window.v168HighTopic==='function') window.v168HighTopic(n);
    if(type==='middle' && typeof window.v209MiddleTopic==='function') window.v209MiddleTopic(n);
  }
  function openTopic(type,n){
    if(n<1||n>8)return;
    var m=ensureModal();               // first click에서도 여기서 즉시 생성
    callTopic(type,n);
    requestAnimationFrame(function(){
      var d=detail(type), src=d&&d.querySelector('img');
      if(!src)return;
      var c=m.querySelector('.v351Content'); c.replaceChildren();
      var im=document.createElement('img'); im.src=src.currentSrc||src.src; im.alt=src.alt||'상세 학습자료'; c.appendChild(im);
      var nav=document.createElement('div');nav.className='v351Nav';
      [['‹ 이전',n<=1,function(){openTopic(type,n-1)}],['목록',false,function(){m._close()}],['다음 ›',n>=8,function(){openTopic(type,n+1)}]].forEach(function(x){
        var b=document.createElement('button');b.type='button';b.textContent=x[0];b.disabled=x[1];b.onclick=x[2];nav.appendChild(b);
      });
      c.appendChild(nav);m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
      m.querySelector('.v351Dialog').scrollTop=0;
    });
  }
  document.addEventListener('click',function(e){
    if(!mobile())return;
    var h=e.target.closest('#learn #lessonBody .v168HighGrid > .v168HighCard');
    if(h){var a=[].slice.call(h.parentElement.children).filter(function(x){return x.classList.contains('v168HighCard')});var n=a.indexOf(h)+1;if(n){e.preventDefault();e.stopImmediatePropagation();openTopic('high',n);}return;}
    var md=e.target.closest('#learn #lessonBody .v199MidGrid > .v199MidCard');
    if(md){var a=[].slice.call(md.parentElement.children).filter(function(x){return x.classList.contains('v199MidCard')});var n=a.indexOf(md)+1;if(n){e.preventDefault();e.stopImmediatePropagation();openTopic('middle',n);}}
  },true);
  document.addEventListener('DOMContentLoaded',ensureModal);

  /* ---------- Video mobile: derive from existing cards, no new images ---------- */
  function buildVideo(){
    var root=document.getElementById('video'); if(!root||root.querySelector('.v351VideoMobile'))return;
    var cards=[].slice.call(root.querySelectorAll('a')).filter(function(a){return a.querySelector('img');});
    if(!cards.length)return;

    /* Use existing order: split into three grade groups as evenly as possible.
       Original elements stay intact for desktop. */
    var groups=[[],[],[]];
    cards.forEach(function(a,i){groups[i%3].push(a);});

    var mobileWrap=document.createElement('div');mobileWrap.className='v351VideoMobile';
    var tabs=document.createElement('div');tabs.className='v351VideoTabs';
    var grid=document.createElement('div');grid.className='v351VideoGrid';
    var labels=['초등 저학년','초등 고학년','중학생'];

    function show(k){
      [].slice.call(tabs.children).forEach(function(b,i){b.classList.toggle('active',i===k)});
      grid.replaceChildren();
      groups[k].forEach(function(a){
        var img=a.querySelector('img'); var title=(a.innerText||img.alt||labels[k]+' 교육영상').trim().replace(/\s+/g,' ');
        var card=document.createElement('a');card.className='v351VideoCard';card.href=a.href||'#'; if(a.target)card.target=a.target;
        var pic=document.createElement('img');pic.src=img.currentSrc||img.src;pic.alt=img.alt||title;
        var meta=document.createElement('div');meta.className='v351VideoMeta';
        var t=document.createElement('p');t.className='v351VideoTitle';t.textContent=title;
        var go=document.createElement('div');go.className='v351VideoGo';go.innerHTML='<span>영상 보러가기</span><span>→</span>';
        meta.append(t,go);card.append(pic,meta);grid.appendChild(card);
      });
      if(!groups[k].length){var em=document.createElement('div');em.className='v351VideoEmpty';em.textContent='등록된 교육영상이 없습니다.';grid.appendChild(em);}
    }
    labels.forEach(function(label,i){var b=document.createElement('button');b.type='button';b.className='v351VideoTab';b.textContent=label;b.onclick=function(){show(i)};tabs.appendChild(b);});
    mobileWrap.append(tabs,grid);

    /* Mark existing video content as desktop/original without altering hero/header. */
    var candidate=cards[0].closest('div');
    if(candidate) candidate.classList.add('v351VideoOriginal');
    root.appendChild(mobileWrap);show(0);
  }
  /* V354: legacy education-video builder disabled; popup logic remains active. */
})();
