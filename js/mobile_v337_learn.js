
(function(){
  function ensureZoom(){
    var z=document.getElementById('v337Zoom');
    if(z) return z;
    z=document.createElement('div');
    z.id='v337Zoom';
    z.className='v337Zoom';
    z.setAttribute('aria-hidden','true');
    z.innerHTML='<button class="v337ZoomClose" type="button" aria-label="확대보기 닫기">×</button><div class="v337ZoomPanel"><img alt=""></div>';
    document.body.appendChild(z);
    z.querySelector('.v337ZoomClose').addEventListener('click',closeZoom);
    z.addEventListener('click',function(e){if(e.target===z) closeZoom();});
    return z;
  }
  function closeZoom(){
    var z=document.getElementById('v337Zoom');
    if(!z)return;
    z.classList.remove('open');
    z.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }
  function openZoom(img){
    if(!window.matchMedia('(max-width:900px)').matches) return;
    var z=ensureZoom();
    var zi=z.querySelector('img');
    zi.src=img.currentSrc||img.src;
    zi.alt=img.alt||'상세 학습자료 확대보기';
    z.classList.add('open');
    z.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  document.addEventListener('click',function(e){
    var img=e.target.closest('#learn #lessonBody .v153ImageLesson > img');
    if(img){ e.preventDefault(); openZoom(img); }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') closeZoom();
  });
})();
