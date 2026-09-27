
const v140LowTopics = [
 null,
 {
  title:"세금이란?", sub:"세금의 뜻을 생활 속에서 쉽게 알아봐요.",
  body:`<strong>세금</strong>은 나라와 우리 지역이 필요한 일을 하기 위해 국민이 함께 내는 돈이에요.
        우리가 직접 이용하는 학교, 도서관, 공원처럼 모두가 함께 사용하는 곳과 서비스에 쓰여요.`,
  examples:[["🏫","학교"],["📚","도서관"],["🌳","공원"]],
  point:"기억해요! 세금은 한 사람만을 위한 돈이 아니라 우리 모두를 위해 함께 사용하는 돈이에요."
 },
 {
  title:"세금은 왜 필요할까요?", sub:"세금이 우리 생활에 필요한 이유를 알아봐요.",
  body:`우리 모두가 안전하고 편리하게 생활하려면 많은 시설과 서비스가 필요해요.
        <strong>소방·경찰·교육·도로</strong>처럼 함께 이용하는 일을 운영하는 데 세금이 사용돼요.`,
  examples:[["🚒","소방"],["🚓","안전"],["🛣️","도로"]],
  point:"우리 모두가 이용하는 공공서비스를 계속 운영하기 위해 세금이 필요해요."
 },
 {
  title:"우리 주변 어디에 쓰일까요?", sub:"생활 속에서 세금으로 운영되는 곳을 찾아봐요.",
  body:`세금은 멀리 있는 것이 아니에요. 우리가 다니는 학교와 도서관, 뛰어노는 공원,
        안전하게 이동하는 도로 등 <strong>일상 곳곳</strong>에서 사용되고 있어요.`,
  examples:[["🏫","학교"],["🏞️","공원"],["🚌","대중교통"]],
  point:"오늘 집에 가는 길에 '세금으로 운영되는 것은 무엇일까?' 한번 찾아보세요."
 },
 {
  title:"누가 세금을 낼까요?", sub:"우리 사회에서 누가 세금을 부담하는지 알아봐요.",
  body:`일을 해서 소득을 얻거나 물건을 사고, 사업을 하는 등 여러 경제활동 과정에서 세금을 내게 돼요.
        세금의 종류에 따라 <strong>내는 사람과 방법은 서로 달라요.</strong>`,
  examples:[["👩‍💼","일하는 사람"],["🏪","사업하는 사람"],["🛍️","물건을 사는 사람"]],
  point:"세금은 종류마다 내는 방법이 다르지만 우리 사회를 함께 운영하는 데 사용돼요."
 },
 {
  title:"세금은 누가 관리할까요?", sub:"국세청이 하는 일을 어린이 눈높이에서 알아봐요.",
  body:`우리나라의 국세에 관한 일을 담당하는 기관이 <strong>국세청</strong>이에요.
        세금이 법에 따라 올바르게 신고·납부될 수 있도록 여러 업무를 하고 있어요.`,
  examples:[["🏢","국세청"],["🧾","신고·납부"],["💻","세금 서비스"]],
  point:"국세청은 국민이 세금에 관한 일을 편리하게 처리할 수 있도록 돕고 있어요."
 },
 {
  title:"함께 쓰는 돈", sub:"세금과 공동체의 관계를 생각해 봐요.",
  body:`세금은 우리가 함께 살아가는 사회를 유지하기 위한 소중한 재원이에요.
        필요한 곳에 사용되어 <strong>더 안전하고 편리한 사회</strong>를 만드는 데 도움을 줘요.`,
  examples:[["🤝","함께"],["🏘️","우리 동네"],["🌍","우리 사회"]],
  point:"세금은 '나'뿐만 아니라 '우리'를 위해 함께 사용하는 돈이라는 점을 기억해요."
 }
];

const v153Topic1DetailImage = "images/image_028.png";
const v155Topic2DetailImage = "images/image_029.png";
const v155Topic3DetailImage = "images/image_030.png";
const v155Topic4DetailImage = "images/image_031.png";
const v155Topic5DetailImage = "images/image_032.jpg";
const v155Topic6DetailImage = "images/image_033.jpg";
function v140OpenLowTopic(n){
 const d=document.getElementById("v140LowDetail");
 if(!d || !v140LowTopics[n]) return;
 const x=v140LowTopics[n];
 if(n===1){
   document.querySelectorAll("#learn .v139Grid article").forEach((el,i)=>el.classList.toggle("v140-active",i===0));
   d.innerHTML=`
     <div class="v153ImageLesson">
       <img src="${v153Topic1DetailImage}" alt="01 세금이란? 세금의 뜻을 설명하는 애니메이션풍 학습자료">
       <div class="v153LessonNav">
         <button type="button" disabled aria-disabled="true">〈 이전</button>
         <button type="button" onclick="v140CloseLowTopic()">목록으로</button>
         <button type="button" onclick="v140OpenLowTopic(2)">다음 〉</button>
       </div>
     </div>`;
   return;
 }
 if(n>=2 && n<=6){
   document.querySelectorAll("#learn .v139Grid article").forEach((el,i)=>el.classList.toggle("v140-active",i===n-1));
   const imgMap={
     2:v155Topic2DetailImage,
     3:v155Topic3DetailImage,
     4:v155Topic4DetailImage,
     5:v155Topic5DetailImage,
     6:v155Topic6DetailImage
   };
   const altMap={
     2:"02 왜 필요할까요? 세금이 필요한 이유를 설명하는 애니메이션풍 학습자료",
     3:"03 세금은 어디에 쓰일까요? 상세 학습자료",
     4:"04 세금에는 어떤 종류가 있을까요? 상세 학습자료",
     5:"05 세금이 만드는 더 좋은 내일 상세 학습자료",
     6:"06 함께하는 세금, 더 밝은 미래 상세 학습자료"
   };
   d.innerHTML=`
     <div class="v153ImageLesson">
       <img src="${imgMap[n]}" alt="${altMap[n]}">
       <div class="v153LessonNav">
         <button type="button" onclick="v140OpenLowTopic(${n-1})">〈 이전</button>
         <button type="button" onclick="v140CloseLowTopic()">목록으로</button>
         <button type="button" ${n===6?'disabled aria-disabled="true"':`onclick="v140OpenLowTopic(${n+1})"`}>다음 〉</button>
       </div>
     </div>`;
   return;
 }


 document.querySelectorAll("#learn .v139Grid article").forEach((el,i)=>el.classList.toggle("v140-active",i===n-1));
 d.innerHTML=`
  <div class="v140DetailHead"><span class="v140DetailNum">${n}</span><div><h3>${x.title}</h3><p>${x.sub}</p></div></div>
  <div class="v140LearnBox">${x.body}
    <div class="v140ExampleRow">${x.examples.map(e=>`<div class="v140Example"><b>${e[0]}</b><span>${e[1]}</span></div>`).join("")}</div>
    <div class="v140Point">💡 ${x.point}</div>
  </div>
  <div class="v140Nav">
    <button ${n===1?"disabled":""} onclick="v140OpenLowTopic(${n-1})">‹ 이전</button>
    <button class="v140List" onclick="v140CloseLowTopic()">목록으로</button>
    <button ${n===6?"disabled":""} onclick="v140OpenLowTopic(${n+1})">다음 ›</button>
  </div>`;
}
function v140CloseLowTopic(){
 const d=document.getElementById("v140LowDetail"); if(d) d.innerHTML="";
 document.querySelectorAll("#learn .v139Grid article").forEach(el=>el.classList.remove("v140-active"));
}
function v140TopicKey(e,n){if(e.key==="Enter"||e.key===" "){e.preventDefault();v140OpenLowTopic(n);}}
