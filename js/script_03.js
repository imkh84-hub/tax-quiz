
function openGradeLesson(level, card){
  if(level==="high"){
    document.querySelectorAll("#learn .v129-grade-card").forEach(function(c){
      c.classList.remove("v135-selected"); c.setAttribute("aria-pressed","false");
    });
    if(card){card.classList.add("v135-selected");card.setAttribute("aria-pressed","true");}
    v157RenderHigh();
    return;
  }

  document.querySelectorAll("#learn .v129-grade-card").forEach(function(c){
    c.classList.remove("v135-selected");
    c.setAttribute("aria-pressed","false");
  });
  if(card){
    card.classList.add("v135-selected");
    card.setAttribute("aria-pressed","true");
  }

  if(typeof lessons !== "undefined" && lessons[level]){
    var body=document.getElementById("lessonBody");
    body.innerHTML=lessons[level];
    body.classList.add("v135-visible");
  }
}
function gradeCardKey(e, level, card){
  if(e.key==="Enter" || e.key===" "){
    e.preventDefault();
    openGradeLesson(level, card);
  }
}
