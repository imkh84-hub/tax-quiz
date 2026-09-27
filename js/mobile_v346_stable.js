
(function(){
  function mobile(){return matchMedia('(max-width:900px)').matches;}

  function restoreHigh(){
    var grid=document.querySelector('#learn #lessonBody .v168HighGrid');
    var temp=document.querySelector('#learn #lessonBody .v343HighWideGrid');
    if(grid && temp){
      Array.from(temp.querySelectorAll(':scope > .v168HighCard')).forEach(function(c){
        grid.appendChild(c);
      });
      temp.remove();
    }
  }

  function restoreMiddle(){
    var normal=document.querySelector('#learn #lessonBody .v199MidGrid');
    var wide=document.querySelector('#learn #lessonBody .v206MidWideGrid');
    var temp=document.querySelector('#learn #lessonBody .v344MiddleUnified');
    if(normal && wide && temp){
      var cards=Array.from(temp.querySelectorAll(':scope > .v199MidCard'));
      cards.slice(0,6).forEach(function(c){normal.appendChild(c);});
      cards.slice(6,8).forEach(function(c){wide.appendChild(c);});
      normal.style.display='';
      wide.style.display='';
      temp.remove();
    }
  }

  function stabilize(){
    if(!mobile()) return;
    restoreHigh();
    restoreMiddle();
  }

  addEventListener('load',function(){setTimeout(stabilize,50);});
  document.addEventListener('click',function(e){
    if(e.target.closest('#learn')) setTimeout(stabilize,20);
  });
})();
