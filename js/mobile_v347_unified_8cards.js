
(function(){
  function mobile(){return matchMedia('(max-width:900px)').matches;}

  function unifyMiddle(){
    if(!mobile()) return;
    var normal=document.querySelector('#learn #lessonBody .v199MidGrid');
    var wide=document.querySelector('#learn #lessonBody .v206MidWideGrid');
    if(!normal || !wide) return;

    /* 이미 합쳐졌다면 아무것도 하지 않음: 재진입 안정화 */
    if(normal.querySelectorAll(':scope > .v199MidCard').length >= 8) return;

    var extra=Array.from(wide.querySelectorAll(':scope > .v199MidCard'));
    extra.forEach(function(card){
      normal.appendChild(card);
    });
  }

  function restoreMiddleDesktop(){
    if(mobile()) return;
    var normal=document.querySelector('#learn #lessonBody .v199MidGrid');
    var wide=document.querySelector('#learn #lessonBody .v206MidWideGrid');
    if(!normal || !wide) return;
    var cards=Array.from(normal.querySelectorAll(':scope > .v199MidCard'));
    if(cards.length >= 8){
      cards.slice(6,8).forEach(function(card){wide.appendChild(card);});
    }
  }

  function run(){
    if(mobile()) unifyMiddle();
    else restoreMiddleDesktop();
  }

  addEventListener('load',function(){setTimeout(run,60);});
  addEventListener('resize',function(){setTimeout(run,60);});
  document.addEventListener('click',function(e){
    if(e.target.closest('#learn')) setTimeout(run,30);
  });
})();
