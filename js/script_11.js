/* V210: 중학생 상세자료 1~8 — 기존 고학년과 동일한 인라인 이미지 + 이전/목록/다음 */
(function(){
  const titles=['세금의 필요성과 역할','세금의 역사','국세와 지방세','직접세와 간접세','세금은 어디에 쓰일까요?','공평한 세금과 누진세','납세자의 역할','전자세정과 홈택스·손택스'];
  window.v209MiddleTopic=function(n){
    if(n<1||n>8)return;
    const wrap=document.querySelector('#lessonBody .v199MidWrap');if(!wrap)return;
    let detail=document.getElementById('v209MiddleDetail');
    if(!detail){detail=document.createElement('section');detail.id='v209MiddleDetail';wrap.appendChild(detail);}
    detail.replaceChildren();
    const img=document.createElement('img');img.src='images/middle_detail_'+String(n).padStart(2,'0')+'.png';img.alt=titles[n-1]+' 상세 학습자료';img.className='v209MiddleDetailImg';detail.appendChild(img);
    const nav=document.createElement('div');nav.className='v172HighNav';
    const prev=document.createElement('button');prev.textContent='‹ 이전';prev.disabled=n===1;prev.onclick=()=>window.v209MiddleTopic(n-1);
    const list=document.createElement('button');list.textContent='목록으로';list.onclick=()=>detail.remove();
    const next=document.createElement('button');next.textContent='다음 ›';next.disabled=n===8;next.onclick=()=>window.v209MiddleTopic(n+1);
    nav.append(prev,list,next);detail.appendChild(nav);
  };
  document.addEventListener('click',function(ev){
    const card=ev.target.closest('#lessonBody .v199MidCard[data-middle-topic]');
    if(!card)return;
    const n=Number(card.dataset.middleTopic);
    if(n>=1&&n<=8)window.v209MiddleTopic(n);
  });
})();
