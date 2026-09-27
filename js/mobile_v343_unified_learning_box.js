
(function(){
  var moved=false, holder=null, anchor=null;

  function mobile(){return window.matchMedia('(max-width:900px)').matches;}

  function moveHighWide(){
    var grid=document.querySelector('#learn #lessonBody .v168HighGrid');
    if(!grid) return;
    var cards=grid.querySelectorAll(':scope > .v168HighCard');
    if(cards.length<8) return;

    if(mobile() && !moved){
      anchor=document.createComment('v343-high-wide-anchor');
      grid.parentNode.insertBefore(anchor, grid.nextSibling);

      holder=document.createElement('div');
      holder.className='v343HighWideGrid';
      holder.appendChild(cards[6]);
      holder.appendChild(cards[7]);
      anchor.parentNode.insertBefore(holder, anchor.nextSibling);
      moved=true;
    } else if(!mobile() && moved && holder){
      var wide=holder.querySelectorAll('.v168HighCard');
      wide.forEach(function(c){grid.appendChild(c);});
      holder.remove();
      if(anchor) anchor.remove();
      holder=null; anchor=null; moved=false;
    }
  }

  function run(){
    moveHighWide();
  }

  window.addEventListener('load',function(){setTimeout(run,100);});
  window.addEventListener('resize',function(){setTimeout(run,50);});
  document.addEventListener('click',function(e){
    if(e.target.closest('#learn')) setTimeout(run,80);
  });

  if(window.MutationObserver){
    var ob=new MutationObserver(function(){setTimeout(run,30);});
    window.addEventListener('load',function(){
      var body=document.getElementById('lessonBody');
      if(body) ob.observe(body,{childList:true,subtree:true});
    });
  }
})();
