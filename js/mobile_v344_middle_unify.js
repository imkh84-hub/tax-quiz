
(function(){
  var unified=false, unifiedGrid=null, midAnchor=null;

  function mobile(){return window.matchMedia('(max-width:900px)').matches;}

  function unifyMiddle(){
    var normal=document.querySelector('#learn #lessonBody .v199MidGrid');
    var wide=document.querySelector('#learn #lessonBody .v206MidWideGrid');

    if(mobile() && normal && wide && !unified){
      var normalCards=[].slice.call(normal.querySelectorAll(':scope > .v199MidCard'));
      var wideCards=[].slice.call(wide.querySelectorAll(':scope > .v199MidCard'));
      if(normalCards.length < 6 || wideCards.length < 2) return;

      midAnchor=document.createComment('v344-middle-anchor');
      normal.parentNode.insertBefore(midAnchor, normal);

      unifiedGrid=document.createElement('div');
      unifiedGrid.className='v344MiddleUnified';

      normalCards.forEach(function(c){unifiedGrid.appendChild(c);});
      wideCards.forEach(function(c){unifiedGrid.appendChild(c);});

      normal.parentNode.insertBefore(unifiedGrid, normal);
      normal.style.display='none';
      wide.style.display='none';
      unified=true;
    }

    if(!mobile() && unified){
      var normal=document.querySelector('#learn #lessonBody .v199MidGrid');
      var wide=document.querySelector('#learn #lessonBody .v206MidWideGrid');
      if(normal && wide && unifiedGrid){
        var cards=[].slice.call(unifiedGrid.querySelectorAll(':scope > .v199MidCard'));
        cards.slice(0,6).forEach(function(c){normal.appendChild(c);});
        cards.slice(6,8).forEach(function(c){wide.appendChild(c);});
        normal.style.display='';
        wide.style.display='';
        unifiedGrid.remove();
      }
      if(midAnchor) midAnchor.remove();
      unified=false; unifiedGrid=null; midAnchor=null;
    }
  }

  function run(){unifyMiddle();}

  window.addEventListener('load',function(){setTimeout(run,120);});
  window.addEventListener('resize',function(){setTimeout(run,60);});
  document.addEventListener('click',function(e){
    if(e.target.closest('#learn')) setTimeout(run,90);
  });

  if(window.MutationObserver){
    window.addEventListener('load',function(){
      var body=document.getElementById('lessonBody');
      if(!body) return;
      new MutationObserver(function(){setTimeout(run,40);})
        .observe(body,{childList:true,subtree:true});
    });
  }
})();
