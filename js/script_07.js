
const v172HighDetailImages = ['images/image_042.jpg','images/image_043.jpg','images/image_044.jpg','images/image_045.jpg','images/image_046.jpg','images/image_047.jpg','images/image_048.jpg','images/image_049.jpg'];

window.v168HighTopic = function(n){
  const wrap=document.querySelector("#lessonBody .v168HighWrap");
  if(!wrap || n<1 || n>8) return;
  let detail=document.getElementById("v168HighDetail");
  if(!detail){
    detail=document.createElement("div");
    detail.id="v168HighDetail";
    wrap.appendChild(detail);
  }
  const prev=n>1 ? '<button type="button" onclick="v168HighTopic('+(n-1)+')">‹ 이전</button>' : '';
  const next=n<8 ? '<button type="button" onclick="v168HighTopic('+(n+1)+')">다음 ›</button>' : '';
  detail.innerHTML=
    '<img class="v172HighDetailImg" src="'+v172HighDetailImages[n-1]+'" alt="'+v168HighTitles[n-1]+' 상세 학습자료">'+
    '<div class="v172HighNav">'+prev+
    '<button type="button" onclick="document.getElementById(\'v168HighDetail\').remove();document.querySelector(\'#lessonBody .v168HighGrid\').scrollIntoView({behavior:\'smooth\',block:\'start\'})">목록으로</button>'+
    next+'</div>';
  detail.scrollIntoView({behavior:"smooth",block:"start"});
};
