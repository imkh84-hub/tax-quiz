
(function(){
  function infoForGrade(){
    var body=document.getElementById('lessonBody');
    if(!body) return null;
    var text=(body.textContent||'').replace(/\s+/g,' ');
    if(text.includes('중학생')){
      return {badge:'중학생', desc:'세금의 원리와 우리 사회와의 관계를 알아봐요.', count:'8개 학습'};
    }
    if(text.includes('고학년')){
      return {badge:'초등 고학년', desc:'세금의 역할과 쓰임을 조금 더 깊이 알아봐요.', count:'8개 학습'};
    }
    return {badge:'초등 저학년', desc:'생활 속 사례로 세금을 쉽고 재미있게 알아봐요.', count:'6개 학습'};
  }

  function render(){
    var head=document.querySelector('#learn #lessonBody .v139Head.v145Head');
    if(!head) return;
    var old=head.querySelector('.v339MobileInfo');
    if(old) old.remove();
    var d=infoForGrade();
    if(!d) return;
    var bar=document.createElement('div');
    bar.className='v339MobileInfo';
    bar.innerHTML=
      '<span class="v339Badge"></span>'+
      '<p class="v339Desc"></p>'+
      '<span class="v339Count"></span>';
    bar.querySelector('.v339Badge').textContent=d.badge;
    bar.querySelector('.v339Desc').textContent=d.desc;
    bar.querySelector('.v339Count').textContent=d.count;
    head.appendChild(bar);
  }

  document.addEventListener('click',function(e){
    if(e.target.closest('#learn')) setTimeout(render,60);
  });
  window.addEventListener('load',function(){
    setTimeout(render,100);
  });

  var body=document.getElementById('lessonBody');
  if(body && window.MutationObserver){
    new MutationObserver(function(){setTimeout(render,30);})
      .observe(body,{childList:true,subtree:true});
  }
})();
