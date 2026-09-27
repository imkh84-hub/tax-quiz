
/* V177에서 해결된 고학년 상세 네비게이션 동작 유지 */
window.v168HighTopic = function(n){
  var wrap=document.querySelector('#lessonBody .v168HighWrap');
  if(!wrap || n<1 || n>8) return;

  var detail=document.getElementById('v168HighDetail');
  if(!detail){
    detail=document.createElement('div');
    detail.id='v168HighDetail';
    wrap.appendChild(detail);
  }

  var prev = n>1
    ? '<button type="button" onclick="v168HighTopic('+(n-1)+')">‹ 이전</button>'
    : '<button type="button" disabled aria-disabled="true">‹ 이전</button>';

  var next = n<8
    ? '<button type="button" onclick="v168HighTopic('+(n+1)+')">다음 ›</button>'
    : '<button type="button" disabled aria-disabled="true">다음 ›</button>';

  detail.innerHTML =
    '<img class="v172HighDetailImg" src="'+v172HighDetailImages[n-1]+'" alt="'+v168HighTitles[n-1]+' 상세 학습자료">'+
    '<div class="v172HighNav">'+prev+
    '<button type="button" id="v179HighListBtn">목록으로</button>'+
    next+'</div>';

  var b=document.getElementById('v179HighListBtn');
  if(b) b.onclick=function(){
    var d=document.getElementById('v168HighDetail');
    if(d) d.remove();
  };
};
