
const pages=[...document.querySelectorAll('.page')], navs=[...document.querySelectorAll('nav button')];
function go(id){pages.forEach(x=>x.classList.toggle('active',x.id===id));navs.forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo(0,0);if(id==='effect')renderEffect()}
navs.forEach(b=>b.onclick=()=>go(b.dataset.page));

const lessons={
low:`<div class="v139Lesson">
<div class="v139Head v145Head" style="--v145-hero:url('images/image_021.jpg')">
  <div class="v145HeadCopy">
    <span>초등 저학년 · 1~3학년</span>
    <h3>우리 생활 속 세금을 찾아볼까요?</h3>
    <p>세금이 무엇인지, 왜 필요한지, 어디에 사용되는지<br>생활 속 사례와 함께 배워봅니다.</p>
  </div>
</div>
<div class="v139Grid">
<article role="button" tabindex="0" onclick="v140OpenLowTopic(1)" onkeydown="v140TopicKey(event,1)"><img class="v147ExactCard" src="images/image_022.jpg" alt="저학년 학습주제 1"><i>1</i><h4>세금이란?</h4><p>세금이 무엇인지<br>쉽게 알아봐요.</p><strong>🐷</strong><button>›</button></article>
<article role="button" tabindex="0" onclick="v140OpenLowTopic(2)" onkeydown="v140TopicKey(event,2)"><img class="v147ExactCard" src="images/image_023.jpg" alt="저학년 학습주제 2"><i>2</i><h4>세금은 왜 필요할까요?</h4><p>우리의 안전하고 편리한<br>생활을 위해 필요해요.</p><strong>🚒</strong><button>›</button></article>
<article role="button" tabindex="0" onclick="v140OpenLowTopic(3)" onkeydown="v140TopicKey(event,3)"><img class="v147ExactCard" src="images/image_024.jpg" alt="3. 어디에 쓰일까요?"><i>3</i><h4>우리 주변 어디에 쓰일까요?</h4><p>학교, 도서관, 공원 등<br>우리 주변에서 만나요.</p><strong>🏞️</strong><button>›</button></article>
<article role="button" tabindex="0" onclick="v140OpenLowTopic(4)" onkeydown="v140TopicKey(event,4)"><img class="v147ExactCard" src="images/image_025.jpg" alt="저학년 학습주제 4"><i>4</i><h4>누가 세금을 낼까요?</h4><p>어른만 내는 걸까요?<br>함께 알아봐요.</p><strong>👨‍👩‍👧</strong><button>›</button></article>
<article role="button" tabindex="0" onclick="v140OpenLowTopic(5)" onkeydown="v140TopicKey(event,5)"><img class="v147ExactCard" src="images/image_026.jpg" alt="저학년 학습주제 5"><i>5</i><h4>세금은 누가 관리할까요?</h4><p>국세청은 어떤 일을<br>하는지 알아봐요.</p><strong>🏢</strong><button>›</button></article>
<article role="button" tabindex="0" onclick="v140OpenLowTopic(6)" onkeydown="v140TopicKey(event,6)"><img class="v147ExactCard" src="images/image_027.jpg" alt="저학년 학습주제 6"><i>6</i><h4>함께 쓰는 돈</h4><p>세금은 우리 모두를 위한<br>소중한 약속이에요.</p><strong>🌍</strong><button>›</button></article>
</div>
<div id="v140LowDetail" class="v140Detail" aria-live="polite"></div>
</div>`,
high:`<div class="lessonPro"><div class="lessonHead high"><span>초등 고학년 · 4~6학년</span><h3>세금은 사회를 어떻게 움직일까요?</h3><p>세금의 의미와 역사, 종류, 쓰임을 연결해 우리 생활과의 관계를 살펴봅니다.</p></div><div class="lessonGridDetailed">
<article><h4>① 세금의 의미</h4><p>세금은 국가와 지방자치단체가 공공서비스를 제공하는 데 필요한 재원입니다. 개인이 원하는 물건을 사는 돈과 달리 사회 전체를 위한 일에 사용됩니다.</p></article>
<article><h4>② 시대에 따라 달라진 세금</h4><p>과거에는 곡식이나 물건, 노동으로 세금을 부담하기도 했습니다. 사회와 경제가 발전하면서 오늘날에는 주로 돈으로 납부하는 방식이 자리 잡았습니다.</p></article>
<article><h4>③ 조선시대의 세금</h4><p>조선시대에는 토지에 부과한 전세, 지역의 특산물을 내던 공납, 노동력을 제공하던 역 등이 있었습니다. 당시에는 호조가 재정과 세금 관련 업무를 담당했습니다.</p></article>
<article><h4>④ 국세와 지방세</h4><p>국가가 부과하는 세금을 국세, 지방자치단체가 부과하는 세금을 지방세라고 합니다. 누가 부과하는지에 따라 세금을 구분할 수 있어요.</p></article>
<article><h4>⑤ 세금의 쓰임</h4><p>교육, 치안·소방, 복지, 도로와 교통, 환경 보호 등 혼자 해결하기 어려운 공동의 필요를 위해 세금이 사용됩니다.</p></article>
<article><h4>⑥ 공공서비스와 연결하기</h4><p>도서관, 공원, 도로처럼 많은 사람이 이용하는 시설과 경찰·소방 같은 서비스가 어떻게 유지되는지 세금과 연결해서 생각해 봅니다.</p></article>
<article><h4>⑦ 납세와 공동체</h4><p>공동체를 운영하려면 필요한 비용을 함께 마련해야 합니다. 세금은 사회 구성원이 공공의 필요를 함께 부담하는 중요한 방법입니다.</p></article>
<article><h4>⑧ 국세청의 역할</h4><p>국세청은 국세의 부과·징수와 납세서비스 등 국세행정을 담당합니다. 우리가 낸 세금이 국가 재정의 기반이 되도록 세정을 운영합니다.</p></article></div>
<div class="lessonTip">💡 핵심 정리: 세금의 모습은 시대에 따라 달라졌지만, 공동체 운영에 필요한 재원을 마련한다는 중요한 역할은 이어져 왔습니다.</div>
<div class="thinkBox"><b>🔎 생각해보기</b><p>우리 지역에서 세금으로 제공되는 공공서비스를 찾아보고, 만약 그 서비스가 없다면 생활이 어떻게 달라질지 이야기해 보세요.</p></div></div>`,
middle:`<div class="lessonPro"><div class="lessonHead middle"><span>중학생</span><h3>세금과 사회의 관계를 이해해 봅시다</h3><p>세금의 필요성과 역할, 주요 분류, 공평한 부담의 원리와 전자세정을 연결해 살펴봅니다.</p></div><div class="lessonGridDetailed">
<article><h4>① 세금의 필요성과 역할</h4><p>국가와 지방자치단체가 공공서비스를 제공하고 공동체를 운영하려면 안정적인 재원이 필요합니다. 조세는 이를 마련하는 핵심적인 수단입니다.</p></article>
<article><h4>② 세금의 역사</h4><p>공동체의 안전과 운영을 위해 공동 비용을 부담한 역사는 오래되었습니다. 고대와 조선시대를 거쳐 경제가 발전하면서 오늘날의 조세제도로 변화해 왔습니다.</p></article>
<article><h4>③ 국세와 지방세</h4><p>과세 주체에 따라 국가가 부과하는 국세와 지방자치단체가 부과하는 지방세로 구분할 수 있습니다. 각각 국가와 지역의 행정·공공서비스 재원이 됩니다.</p></article>
<article><h4>④ 직접세와 간접세</h4><p>세금을 납부할 의무가 있는 사람과 실제로 부담하는 사람의 관계에 따라 직접세와 간접세로 나눌 수 있습니다. 부가가치세는 대표적인 간접세입니다.</p></article>
<article><h4>⑤ 세금은 어디에 쓰일까?</h4><p>교육, 국방·안전, 사회복지, 교통과 사회기반시설, 환경 등 사회 구성원이 함께 필요로 하는 다양한 분야의 재원으로 활용됩니다.</p></article>
<article><h4>⑥ 공평한 세금과 누진세</h4><p>세금을 어떻게 공평하게 부담할 것인지는 조세제도의 중요한 과제입니다. 소득이 증가할수록 더 높은 세율을 적용하는 누진 구조도 공평한 부담을 위한 방식 중 하나입니다.</p></article>
<article><h4>⑦ 납세자의 역할</h4><p>성실한 납세는 공공서비스와 국가 운영을 뒷받침합니다. 동시에 납세자는 세금과 관련된 자신의 권리와 제도를 이해하는 것도 중요합니다.</p></article>
<article><h4>⑧ 전자세정과 홈택스·손택스</h4><p>국세행정은 디지털 기술을 활용해 납세자가 세금 관련 업무를 더 편리하게 처리할 수 있도록 발전해 왔습니다. 홈택스와 손택스는 대표적인 전자세정 서비스입니다.</p></article></div>
<div class="lessonTip">💡 핵심 정리: 세금은 단순히 돈을 내는 문제가 아니라 공공서비스, 공평한 부담, 공동체 운영과 연결된 사회의 중요한 제도입니다.</div>
<div class="thinkBox"><b>🔎 생각해보기</b><p>‘모두에게 같은 금액을 걷는 것’과 ‘부담 능력을 고려해 걷는 것’은 각각 어떤 장단점이 있을까요? 공평한 세금이 무엇인지 생각해 보세요.</p></div></div>`
};
function lesson(level,btn){document.querySelectorAll('#learn .learnTabs button').forEach(x=>x.classList.remove('on'));if(btn)btn.classList.add('on');document.getElementById('lessonBody').innerHTML=lessons[level]}
const quizBank={
low:{
pre:[
{q:'친구들과 함께 이용하는 학교 도서관, 공원, 소방서 같은 시설과 서비스를 운영하는 데 필요한 돈은 주로 어디에서 마련될까요?',a:['세금','개인의 용돈','학교 준비물비','게임 포인트'],c:0,cat:'세금의 필요성'},
{q:'다음 중 세금이 사용되는 곳과 가장 거리가 먼 것은 무엇일까요?',a:['도로를 안전하게 관리하기','소방관이 화재를 진압하기','공공도서관을 운영하기','내가 갖고 싶은 장난감을 사기'],c:3,cat:'세금의 쓰임'},
{q:'여러 사람이 함께 이용하는 시설을 만드는 데 세금이 필요한 가장 알맞은 이유는 무엇일까요?',a:['한 사람만 이용하기 때문에','우리 모두에게 필요한 일을 함께 해결하기 위해','물건 값을 싸게 만들기 위해','용돈을 늘리기 위해'],c:1,cat:'공동체'},
{q:'국가가 걷는 세금인 국세와 관련된 일을 담당하는 기관은 어디일까요?',a:['국세청','소방서','도서관','우체국'],c:0,cat:'국세청'},
{q:'세금을 성실하게 내는 행동이 중요한 이유로 가장 알맞은 것은 무엇일까요?',a:['공공서비스를 유지하는 데 도움이 되기 때문에','개인 물건을 더 많이 살 수 있기 때문에','학교 숙제가 줄어들기 때문에','모든 물건이 무료가 되기 때문에'],c:0,cat:'성실납세'}],
post:[
{q:'우리 동네에 어린이공원과 안전한 횡단보도를 새로 만들려고 합니다. 이처럼 많은 주민이 함께 이용하는 시설의 재원과 가장 관련 깊은 것은?',a:['세금','개인 저금통','친구의 용돈','학용품비'],c:0,cat:'세금의 필요성',ex:'세금은 공원·도로처럼 많은 사람이 함께 이용하는 공공시설과 서비스를 마련하는 재원이 됩니다.'},
{q:'다음 중 세금으로 제공되는 공공서비스의 예로 가장 알맞은 것은?',a:['개인 생일선물 구입','소방·구급 활동','개인 여행경비','개인 취미용품 구입'],c:1,cat:'세금의 쓰임',ex:'소방·구급처럼 모두의 안전을 위한 공공서비스에는 세금이 사용됩니다.'},
{q:'세금이 없다면 생길 수 있는 일로 가장 알맞은 것은?',a:['공공시설과 서비스 운영이 어려워질 수 있다','모든 물건이 무료가 된다','학교가 자동으로 더 많아진다','개인 용돈이 국가 예산이 된다'],c:0,cat:'세금의 필요성',ex:'세금은 교육·안전·복지·도로 등 공동체 운영에 필요한 재원을 마련합니다.'},
{q:'학교, 도로, 공원처럼 여러 사람이 함께 이용하는 시설을 세금과 연결해서 생각해야 하는 까닭은?',a:['사회 구성원이 함께 필요로 하는 시설이기 때문에','한 사람의 취미를 위한 시설이기 때문에','모두 개인 돈으로만 운영되기 때문에','세금과 전혀 관계가 없기 때문에'],c:0,cat:'공동체',ex:'혼자 해결하기 어려운 공동의 필요를 함께 부담하는 것이 세금의 중요한 역할입니다.'},
{q:'국세청이 하는 일과 가장 가까운 것은?',a:['국세의 부과·징수와 납세서비스','학교 급식 메뉴 결정','공원 놀이기구 제작','날씨 예보'],c:0,cat:'국세청',ex:'국세청은 국세의 부과·징수와 납세서비스 등 국세행정을 담당합니다.'},
{q:'다음 중 “우리 생활 속 세금”을 가장 잘 설명한 것은?',a:['세금은 어른과만 관련 있고 어린이 생활과는 관계없다','학교·도로·도서관·안전 서비스 등 어린이 생활과도 연결된다','세금은 오직 해외여행에만 쓰인다','세금은 개인 저축과 같은 뜻이다'],c:1,cat:'생활 속 세금',ex:'어린이도 학교, 도로, 도서관 등 세금으로 제공되는 여러 공공서비스를 이용합니다.'},
{q:'친구가 “세금은 내가 직접 이용하는 곳에만 써야 해”라고 말했습니다. 더 알맞은 생각은?',a:['세금은 사회 전체의 필요를 위해 여러 분야에 사용될 수 있다','세금은 한 사람만을 위해 사용한다','세금은 장난감을 사는 돈이다','세금은 공공서비스와 관계없다'],c:0,cat:'공동체',ex:'세금은 교육·복지·안전·환경 등 사회 전체의 필요를 위해 폭넓게 사용됩니다.'},
{q:'성실하게 세금을 내는 것이 우리 사회에 주는 도움으로 가장 알맞은 것은?',a:['필요한 공공서비스를 안정적으로 제공하는 데 도움이 된다','개인 숙제를 대신 해준다','모든 사람이 같은 직업을 갖게 한다','모든 물건의 가격을 없앤다'],c:0,cat:'성실납세',ex:'성실납세는 국가와 지역사회의 공공서비스를 뒷받침하는 중요한 기반입니다.'},
{q:'다음 중 세금과 연결하기 가장 어려운 것은?',a:['경찰의 치안 활동','공공도서관 운영','도로 관리','개인이 친구에게 주는 생일선물'],c:3,cat:'세금의 쓰임',ex:'개인의 사적인 소비와 달리 세금은 공동체의 공공 목적에 사용됩니다.'},
{q:'세금을 배우는 이유로 가장 알맞은 것은?',a:['우리 생활과 공동체가 어떻게 운영되는지 이해하기 위해','세금 이름을 무조건 외우기 위해','모든 물건 값을 계산하기 위해','개인 용돈을 세금으로 바꾸기 위해'],c:0,cat:'세금의 의미',ex:'세금을 배우면 우리가 이용하는 공공서비스와 공동체 운영의 원리를 이해할 수 있습니다.'}]},
high:{
pre:[
{q:'국가나 지방자치단체가 공공서비스를 제공하기 위해 필요한 재원을 마련하는 대표적인 방법은?',a:['세금','개인 용돈','학교 준비물비','기업 광고비만'],c:0,cat:'세금의 의미'},
{q:'국가가 부과하는 세금과 지방자치단체가 부과하는 세금을 구분한 것은?',a:['국세와 지방세','직접세와 간접세','현금과 카드','소득과 소비'],c:0,cat:'세금의 종류'},
{q:'다음 중 세금이 사용되는 공공서비스와 가장 거리가 먼 것은?',a:['소방·치안','도로·공원','교육·복지','개인의 취미용품 구입'],c:3,cat:'세금의 쓰임'},
{q:'국세의 부과·징수와 납세서비스를 담당하는 기관은?',a:['국세청','교육청','기상청','우체국'],c:0,cat:'국세청'},
{q:'성실납세가 중요한 이유로 가장 알맞은 것은?',a:['공동체 운영에 필요한 재원을 안정적으로 마련하기 위해','모든 세금을 없애기 위해','개인 소비를 늘리기 위해','공공서비스를 줄이기 위해'],c:0,cat:'성실납세'}],
post:[
{q:'세금을 “사회가 함께 내는 회비”에 비유할 수 있는 가장 큰 이유는?',a:['공동의 필요를 위한 비용을 함께 부담하기 때문에','모두 같은 물건을 사기 때문에','세금이 개인 저축이기 때문에','원하는 사람만 자유롭게 내기 때문에'],c:0,cat:'세금의 의미',ex:'세금은 공동체가 필요로 하는 공공서비스와 시설을 위해 구성원이 함께 부담하는 재원입니다.'},
{q:'국세와 지방세를 구분하는 기준으로 가장 알맞은 것은?',a:['세금을 부과하는 주체','납부하는 사람의 나이','날씨','학교 학년'],c:0,cat:'세금의 종류',ex:'국가가 부과하는 세금은 국세, 지방자치단체가 부과하는 세금은 지방세입니다.'},
{q:'다음 중 세금의 쓰임을 가장 폭넓게 설명한 것은?',a:['교육·복지·안전·교통·환경 등 공동의 필요','개인의 쇼핑과 취미','친구끼리 주고받는 선물','개인 저축만'],c:0,cat:'세금의 쓰임',ex:'세금은 교육, 복지, 안전, 사회기반시설, 환경 등 다양한 공공 목적에 활용됩니다.'},
{q:'조선시대 세금 제도에 대한 설명으로 알맞은 것은?',a:['토지에 전세를 부과하고 공납·역 등의 부담도 있었다','모든 세금을 신용카드로 냈다','세금 제도가 전혀 없었다','모든 세금을 지방세라고 불렀다'],c:0,cat:'세금의 역사',ex:'과거에는 곡식·특산물·노동 등 다양한 형태로 세금을 부담했으며 조선시대에는 전세·공납·역 등이 있었습니다.'},
{q:'국세청의 역할과 가장 가까운 것은?',a:['국세의 부과·징수 및 납세서비스','지방공원의 놀이기구 운영만','학교 교과서 제작만','기상 관측'],c:0,cat:'국세청',ex:'국세청은 국세행정을 담당하며 세금 신고·납부와 관련한 납세서비스도 제공합니다.'},
{q:'도로·공원·소방 서비스처럼 개인이 혼자 마련하기 어려운 서비스를 세금으로 제공하는 이유는?',a:['많은 사람이 함께 필요로 하는 공공서비스이기 때문에','특정 개인만 이용하기 때문에','모두 사적인 소비이기 때문에','세금과 관계없는 일이기 때문에'],c:0,cat:'공공서비스',ex:'공공서비스는 사회 구성원이 공동으로 필요로 하므로 세금을 통해 재원을 마련합니다.'},
{q:'세금의 모습이 시대에 따라 달라졌다는 설명으로 알맞은 것은?',a:['과거에는 곡식·물건·노동으로 부담하기도 했고 오늘날에는 주로 돈으로 낸다','옛날에는 세금이 전혀 없었다','오늘날에는 모두 노동으로만 낸다','세금은 시대와 관계없이 항상 같은 방식이었다'],c:0,cat:'세금의 역사',ex:'세금의 형태와 제도는 사회·경제의 변화에 따라 발전해 왔습니다.'},
{q:'성실납세와 공공서비스의 관계를 가장 잘 설명한 것은?',a:['성실납세는 공공서비스를 뒷받침하는 재원 마련에 기여한다','성실납세는 공공서비스와 관계없다','세금은 개인 물건 구입에만 쓰인다','세금은 원하는 사람만 낸다'],c:0,cat:'성실납세',ex:'성실한 납세는 국가와 지역사회의 안정적인 운영과 공공서비스 제공을 뒷받침합니다.'},
{q:'우리 지역에서 세금의 쓰임을 직접 찾아보려면 어떤 방법이 가장 적절할까요?',a:['학교·도서관·공원·도로 등 공공시설과 서비스를 살펴본다','친구의 장난감 가격만 조사한다','개인 통장 잔액만 확인한다','게임 점수만 비교한다'],c:0,cat:'생활 속 세금',ex:'생활 주변의 공공시설과 서비스를 관찰하면 세금이 우리 생활과 어떻게 연결되는지 쉽게 찾을 수 있습니다.'},
{q:'세금을 공부할 때 가장 중요한 관점은?',a:['세금의 종류뿐 아니라 왜 필요하고 어디에 쓰이는지 함께 이해한다','세금 이름만 많이 외운다','세금은 나와 관계없다고 생각한다','모든 세금이 똑같다고 생각한다'],c:0,cat:'종합이해',ex:'세금의 의미·종류·쓰임·성실납세를 서로 연결해서 이해하는 것이 중요합니다.'}]},
middle:{
pre:[
{q:'조세가 국가와 지방자치단체 운영에서 중요한 이유는?',a:['공공서비스와 공동체 운영에 필요한 재원을 마련하기 때문에','개인 소비를 대신하기 때문에','기업 광고를 위해서만 쓰이기 때문에','모든 물가를 결정하기 때문에'],c:0,cat:'세금의 의미'},
{q:'과세 주체에 따라 세금을 구분한 것은?',a:['국세와 지방세','직접세와 간접세','소득세와 소비세','현금과 카드'],c:0,cat:'세금의 분류'},
{q:'세금을 납부할 의무가 있는 사람과 실제 부담하는 사람의 관계를 기준으로 한 분류는?',a:['직접세와 간접세','국세와 지방세','보통세와 목적세','중앙세와 지역세'],c:0,cat:'세금의 분류'},
{q:'다음 중 국세행정을 담당하는 기관은?',a:['국세청','교육부','기상청','소방청'],c:0,cat:'국세청'},
{q:'성실납세가 중요한 이유로 가장 적절한 것은?',a:['공공서비스와 국가 운영의 재정 기반을 뒷받침하기 때문에','개인 재산을 늘려주기 때문에','세금 제도를 없애기 때문에','모든 사람의 소득을 같게 만들기 때문에'],c:0,cat:'성실납세'}],
post:[
{q:'세금의 기능을 가장 정확하게 설명한 것은?',a:['공공서비스와 공동체 운영에 필요한 재원을 마련한다','개인의 사적 소비를 대신한다','모든 시장가격을 국가가 정하게 한다','개인 저축을 의무적으로 대신한다'],c:0,cat:'세금의 의미',ex:'조세는 국가와 지방자치단체가 공공서비스를 제공하고 공동체를 운영하는 핵심 재원입니다.'},
{q:'국세와 지방세의 구분 기준은 무엇인가요?',a:['과세 주체','세율의 높고 낮음','납세자의 직업','납부 장소의 거리'],c:0,cat:'세금의 분류',ex:'국가가 부과하는 세금은 국세, 지방자치단체가 부과하는 세금은 지방세로 구분합니다.'},
{q:'직접세와 간접세를 구분할 때 주로 살펴보는 것은?',a:['납세의무자와 실제 세금 부담자의 관계','국가와 지방자치단체의 위치','세금 사용 지역의 넓이','납세자의 나이'],c:0,cat:'세금의 분류',ex:'직접세·간접세는 법적으로 세금을 납부하는 사람과 실제 경제적 부담을 지는 사람의 관계를 중심으로 구분합니다.'},
{q:'다음 중 대표적인 간접세로 배우는 세금은?',a:['부가가치세','소득세','법인세','상속세'],c:0,cat:'세금의 분류',ex:'부가가치세는 재화·용역의 거래 과정에서 소비자가 가격을 통해 부담하는 대표적인 간접세입니다.'},
{q:'세금이 교육·복지·치안·교통·환경 등에 사용되는 공통적인 이유는?',a:['사회 구성원이 함께 필요로 하는 공공 목적이기 때문에','특정 개인의 취미를 지원하기 위해','모든 기업의 이익을 보장하기 위해','개인 저축을 대신하기 위해'],c:0,cat:'세금의 쓰임',ex:'세금은 사회 구성원 전체의 필요와 공공서비스 제공을 위해 다양한 분야에 활용됩니다.'},
{q:'소득 수준에 따라 더 높은 세율을 적용하는 누진 구조를 두는 취지와 가장 가까운 것은?',a:['부담 능력을 고려한 공평한 조세 부담','모든 사람에게 같은 금액을 부과','공공서비스를 없애기 위한 것','세금 납부를 선택사항으로 만들기 위한 것'],c:0,cat:'공평한 부담',ex:'누진 구조는 부담 능력을 고려해 조세 부담의 공평성을 높이려는 방식 중 하나입니다.'},
{q:'성실납세와 납세자의 권리에 대한 설명으로 가장 적절한 것은?',a:['납세의무를 성실히 이행하면서 관련 권리와 제도를 이해하는 것도 중요하다','납세자에게는 의무만 있고 권리는 없다','세금은 원하는 사람만 납부한다','세금 관련 정보는 알 필요가 없다'],c:0,cat:'납세자',ex:'성실납세와 함께 납세자가 자신의 권리와 납세지원 제도를 이해하는 것도 중요합니다.'},
{q:'홈택스·손택스와 같은 전자세정 서비스의 목적과 가장 가까운 것은?',a:['세금 관련 업무를 더 편리하게 처리하도록 지원','세금을 모두 없애기','학교 성적을 관리하기','교통 신호를 제어하기'],c:0,cat:'전자세정',ex:'전자세정은 신고·납부 등 세금 관련 업무를 온라인과 모바일에서 편리하게 처리할 수 있도록 돕습니다.'},
{q:'공공서비스를 안정적으로 유지하려면 성실납세가 중요한 이유는?',a:['안정적인 재정 기반을 마련하는 데 기여하기 때문에','공공서비스를 개인화하기 때문에','모든 세율을 0으로 만들기 때문에','국가 예산과 관계없기 때문에'],c:0,cat:'성실납세',ex:'성실납세는 공공서비스와 국가 운영을 지속할 수 있는 재정 기반을 뒷받침합니다.'},
{q:'세금 제도를 이해하는 가장 적절한 관점은?',a:['세금의 필요성·분류·쓰임·공평한 부담·납세자의 역할을 연결해서 본다','세목 이름만 외우면 충분하다','세금은 개인 생활과 관계없다','세금은 모두 같은 방식으로 부담한다'],c:0,cat:'종합이해',ex:'세금은 재정, 공공서비스, 공평한 부담, 납세자의 권리·의무가 연결된 사회 제도입니다.'}]}};
let quizLevel='low',phase='pre',answers=[],quizIndex=0;
const gradeNames={low:'초등 저학년 · 1~3학년',high:'초등 고학년 · 4~6학년',middle:'중학생 · 1~3학년'};
function startQuiz(level,startPhase='pre'){quizLevel=level;phase=startPhase;answers=[];quizIndex=0;showQ(0);document.getElementById('quizModal').classList.add('show')}
function currentQuestions(){return quizBank[quizLevel][phase]}
function showQ(i){
  const list=currentQuestions(); quizIndex=i;
  if(i>=list.length)return finishQuiz();
  const q=list[i], pct=Math.round((i/list.length)*100);
  document.getElementById('quizContent').innerHTML=`
  <div class="quizShell ${phase}">
    <div class="quizTop"><div><span class="quizGrade">${gradeNames[quizLevel]}</span><h2>${phase==='pre'?'사전진단':'사후평가'}</h2></div><div class="quizCount"><b>${i+1}</b><span>/ ${list.length}</span></div></div>
    <div class="quizProgress"><i style="width:${pct}%"></i></div>
    <div class="quizMeta"><span>${phase==='pre'?'지금 알고 있는 만큼 편하게 풀어보세요.':'배운 내용을 떠올리며 천천히 풀어보세요.'}</span><em>${q.cat}</em></div>
    <div class="q"><b class="questionText"><small>Q${i+1}</small>${q.q}</b><div class="answerGrid">${q.a.map((a,j)=>`<button onclick="pick(${i},${j},this)"><span>${j+1}</span>${a}</button>`).join('')}</div></div>
    <div class="quizFoot">${phase==='pre'?'사전진단에서는 정답을 바로 알려주지 않아요.':'답을 선택하면 간단한 해설을 확인할 수 있어요.'}</div>
  </div>`
}
function pick(i,j,btn){
  const q=currentQuestions()[i], correct=j===q.c; answers.push(correct);
  if(phase==='pre'){showQ(i+1);return;}
  document.querySelectorAll('.answerGrid button').forEach((b,k)=>{b.disabled=true;if(k===q.c)b.classList.add('correct');else if(k===j)b.classList.add('wrong')});
  const foot=document.querySelector('.quizFoot');
  foot.innerHTML=`<div class="quizExplain ${correct?'ok':'no'}"><b>${correct?'✓ 정답이에요!':'↗ 다시 기억해볼까요?'}</b><span>${q.ex||''}</span><button onclick="showQ(${i+1})">${i+1===currentQuestions().length?'결과 보기':'다음 문제 →'}</button></div>`;
}
function finishQuiz(){
  const list=currentQuestions(), score=Math.round(answers.filter(Boolean).length/list.length*100);
  localStorage.setItem('tax_'+quizLevel+'_'+phase,score);
  if(phase==='pre'){
    document.getElementById('quizContent').innerHTML=`<div class="quizResult"><div class="resultIcon">🌱</div><span>${gradeNames[quizLevel]}</span><h2>사전진단 완료!</h2><div class="resultScore"><b>${score}</b><small>%</small></div><p>현재 실력을 확인했어요.<br>이제 세금교실에서 배우고 다시 도전해보세요.</p><div class="resultActions"><button class="primary" onclick="closeQuiz();go('learn')">학습하러 가기 →</button><button onclick="startQuiz('${quizLevel}','post')">사후평가 바로 시작</button></div></div>`;
  }else{
    const pre=localStorage.getItem('tax_'+quizLevel+'_pre'), gain=pre===null?null:score-(+pre);
    document.getElementById('quizContent').innerHTML=`<div class="quizResult post"><div class="resultIcon">🎉</div><span>${gradeNames[quizLevel]}</span><h2>사후평가 완료!</h2><div class="resultScore"><b>${score}</b><small>%</small></div><p>${gain===null?'학습을 끝까지 완료했어요!':`사전진단보다 <strong>${gain>=0?'+':''}${gain}%p</strong> 변화했어요.`}</p><div class="resultActions"><button class="primary" onclick="closeQuiz();go('effect')">학습효과 확인 →</button></div></div>`;
  }
}
function closeQuiz(){document.getElementById('quizModal').classList.remove('show')}
function openVideo(){window.open('https://kids.nts.go.kr/kid/cm/cntnts/cntntsView.do?cntntsId=239027&mi=40672','_blank')}
let effectGrade='low';
function data(k){let a=localStorage.getItem('tax_'+k+'_pre'),b=localStorage.getItem('tax_'+k+'_post');return [a===null?null:+a,b===null?null:+b]}
function renderEffect(){let d=data(effectGrade),g=d[0]!=null&&d[1]!=null?d[1]-d[0]:null;preScore.textContent=d[0]==null?'-':d[0]+'%';postScore.textContent=d[1]==null?'-':d[1]+'%';gainScore.textContent=g==null?'-':(g>0?'+':'')+g+'%';let names={low:'초등 저학년',high:'초등 고학년',middle:'중학생'};resultRows.innerHTML=Object.keys(names).map(k=>{let x=data(k),z=x[0]!=null&&x[1]!=null?x[1]-x[0]:null;return `<tr><td>${names[k]}</td><td>${x[0]==null?'-':x[0]+'%'}</td><td>${x[1]==null?'-':x[1]+'%'}</td><td>${z==null?'-':(z>0?'+':'')+z+'%'}</td></tr>`}).join('')}
