
(function(){
  function build(){
    if(!matchMedia('(max-width:900px)').matches)return;
    var root=document.getElementById('video');
    if(!root || root.querySelector('.v352VideoMobile'))return;

    /* V351 already identified the three original grade videos.
       Read them from its generated tabs/cards if available. */
    var old=root.querySelector('.v351VideoMobile');
    var oldTabs=old ? Array.from(old.querySelectorAll('.v351VideoTab')) : [];
    var originalLinks=Array.from(root.querySelectorAll('a')).filter(function(a){
      return !a.closest('.v351VideoMobile') && a.querySelector('img');
    });

    /* Prefer exactly the three original grade links, in original page order. */
    var videos=originalLinks.slice(0,3);
    if(videos.length<3 && old){
      videos=Array.from(old.querySelectorAll('.v351VideoCard')).slice(0,3);
    }
    if(!videos.length)return;

    var wrap=document.createElement('div');
    wrap.className='v352VideoMobile';

    var guide=document.createElement('div');
    guide.className='v352OfficialGuide';
    guide.innerHTML='<div class="v352GuideIcon">▶</div>'+
      '<div class="v352GuideText"><strong>어린이국세청 공식페이지</strong>로 이동한 뒤 '+
      '<span class="v352MenuBadge">e-세금교육 영상</span> 메뉴를 선택하면 학년별 영상을 볼 수 있어요.</div>';

    var tabs=document.createElement('div');
    tabs.className='v352VideoTabs';
    var stage=document.createElement('div');
    stage.className='v352VideoStage';
    var labels=['초등 저학년','초등 고학년','중학생'];

    function show(i){
      Array.from(tabs.children).forEach(function(b,k){b.classList.toggle('active',i===k)});
      stage.replaceChildren();
      var src=videos[i] || videos[0];
      if(!src)return;
      var srcImg=src.querySelector('img');
      var card=document.createElement('a');
      card.className='v352VideoCard';
      card.href=src.href||'#';
      if(src.target)card.target=src.target;
      if(src.rel)card.rel=src.rel;

      var img=document.createElement('img');
      img.src=srcImg.currentSrc||srcImg.src;
      img.alt=srcImg.alt||labels[i]+' 세금교육 영상';

      var action=document.createElement('div');
      action.className='v352VideoAction';
      action.innerHTML='<span>영상 보러가기</span><span>→</span>';

      card.append(img,action);
      stage.appendChild(card);
    }

    labels.forEach(function(label,i){
      var b=document.createElement('button');
      b.type='button';b.className='v352VideoTab';b.textContent=label;
      b.addEventListener('click',function(){show(i)});
      tabs.appendChild(b);
    });

    wrap.append(guide,tabs,stage);
    root.appendChild(wrap);
    show(0);
  }
  addEventListener('load',function(){setTimeout(build,140)});
})();
