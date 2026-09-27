/* V308 — balance correct-answer positions across 1–4 */
(function(){
  const patterns={pre:[1,2,3,0,2],post:[1,2,3,0,2,3,1,2,0,3]};
  function moveCorrect(q,target){
    if(!q||!Array.isArray(q.a)||q.a.length<4||q.c===target)return;
    const answer=q.a[q.c];
    q.a.splice(q.c,1);
    q.a.splice(target,0,answer);
    q.c=target;
  }
  ['low','high','middle'].forEach(level=>{
    ['pre','post'].forEach(kind=>{
      const list=quizBank[level]&&quizBank[level][kind];
      if(!Array.isArray(list))return;
      const pattern=patterns[kind];
      list.forEach((q,i)=>moveCorrect(q,pattern[i%pattern.length]));
    });
  });
})();
