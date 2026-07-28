const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const defaults = {
  players: ["Αλέξανδρος", "Παίκτης 2"],
  sound: true,
  tic: {p1:0,p2:0,draws:0},
  connect: {p1:0,p2:0},
  hangman: {wins:0,losses:0},
  games: 0,
  wheel:["Φιλί ❤️","Μασάζ 10 λεπτά 💆","Διαλέγει ταινία 🎬","Κερνάει καφέ ☕","Διαλέγει τραγούδι 🎵","Κάνει μια χάρη 😊"],
  coin:[], flagsScore:0, playerQuizScore:0, teamQuizScore:0, customPlayers:[], customTeams:[]
};
let data = JSON.parse(localStorage.getItem("coupleGamesData") || "null") || structuredClone(defaults);
for(const [k,v] of Object.entries(defaults)) if(data[k]===undefined) data[k]=structuredClone(v);

function save(){ localStorage.setItem("coupleGamesData", JSON.stringify(data)); updateAll(); }
function toast(msg){ const el=$("#toast"); el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),1800); }
function beep(freq=500,duration=.08){
  if(!data.sound) return;
  try{
    const ctx=new (window.AudioContext||window.webkitAudioContext)();
    const o=ctx.createOscillator(), g=ctx.createGain();
    o.frequency.value=freq;o.connect(g);g.connect(ctx.destination);g.gain.value=.05;o.start();
    setTimeout(()=>{o.stop();ctx.close()},duration*1000);
  }catch{}
}

const screens={
  home:$("#homeScreen"), tic:$("#ticScreen"), connect:$("#connectScreen"),
  hangman:$("#hangmanScreen"), stats:$("#statsScreen"), settings:$("#settingsScreen"),
  coin:$("#coinScreen"), wheel:$("#wheelScreen"), flags:$("#flagsScreen"), sports:$("#sportsScreen")
};
const titles={
  home:["Couple Games ❤️","Παιχνίδια για δύο στο ίδιο κινητό"],
  tic:["Τρίλιζα","Βάλτε 3 σύμβολα στη σειρά"],
  connect:["Σκορ 4","Βάλτε 4 πιόνια στη σειρά"],
  hangman:["Κρεμάλα","Μάντεψε τη μυστική λέξη"],
  stats:["Στατιστικά","Οι επιδόσεις σας"],
  coin:["Κορώνα–Γράμματα","Ρίξε το νόμισμα"], wheel:["Τροχός Τύχης","Δικά σας challenges"],
  flags:["Σημαίες & Χώρες","Μάντεψε τη χώρα"], sports:["Αθλητισμός","Ποδοσφαιριστές και ομάδες"],
  settings:["Ρυθμίσεις","Ονόματα και επιλογές"]
};
let current="home";
function showScreen(name){
  current=name;
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[name].classList.add("active");
  $("#pageTitle").textContent=titles[name][0];
  $("#pageSubtitle").textContent=titles[name][1];
  $("#backBtn").classList.toggle("hidden",name==="home");
  $("#settingsBtn").classList.toggle("hidden",name==="settings");
  if(name==="stats") updateStats();
  if(name==="wheel") drawWheel();
  if(name==="flags") newFlag();
  if(name==="sports") newPlayerQuiz();
  window.scrollTo({top:0,behavior:"smooth"});
}
$$(".game-card").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.game)));
$("#backBtn").onclick=()=>showScreen("home");
$("#settingsBtn").onclick=()=>showScreen("settings");

function updateAll(){
  const [p1,p2]=data.players;
  $("#homeP1").textContent=p1; $("#homeP2").textContent=p2;
  $("#ticP1Name").textContent=p1; $("#ticP2Name").textContent=p2;
  $("#conP1Name").textContent=p1; $("#conP2Name").textContent=p2;
  $("#ticP1Score").textContent=data.tic.p1; $("#ticP2Score").textContent=data.tic.p2;
  $("#conP1Score").textContent=data.connect.p1; $("#conP2Score").textContent=data.connect.p2;
  $("#totalP1").textContent=data.tic.p1+data.connect.p1;
  $("#totalP2").textContent=data.tic.p2+data.connect.p2;
  $("#player1Input").value=p1; $("#player2Input").value=p2; $("#soundToggle").checked=data.sound;
  updateStats();
  if($("#flagScore")) $("#flagScore").textContent=data.flagsScore;
  if($("#playerScore")) $("#playerScore").textContent=data.playerQuizScore;
  if($("#teamScore")) $("#teamScore").textContent=data.teamQuizScore;
  renderWheelItems(); renderCoinHistory(); renderCustomSports();
}

$("#saveSettingsBtn").onclick=()=>{
  data.players=[
    $("#player1Input").value.trim()||"Παίκτης 1",
    $("#player2Input").value.trim()||"Παίκτης 2"
  ];
  data.sound=$("#soundToggle").checked;
  save(); toast("Οι ρυθμίσεις αποθηκεύτηκαν");
};
$("#resetAllBtn").onclick=()=>{
  if(confirm("Να μηδενιστούν όλα τα σκορ και τα στατιστικά;")){
    const players=data.players, sound=data.sound;
    data=structuredClone(defaults); data.players=players; data.sound=sound; save();
    resetTic(); resetConnect(); toast("Έγινε μηδενισμός");
  }
};

function updateStats(){
  const p1=data.tic.p1+data.connect.p1;
  const p2=data.tic.p2+data.connect.p2;
  $("#statTotal").textContent=p1+p2+data.hangman.wins;
  $("#statGames").textContent=data.games;
  $("#statP1Name").textContent=data.players[0]; $("#statP2Name").textContent=data.players[1];
  $("#statP1").textContent=p1; $("#statP2").textContent=p2;
  $("#statTic").textContent=`${data.tic.p1} - ${data.tic.p2}`;
  $("#statConnect").textContent=`${data.connect.p1} - ${data.connect.p2}`;
  $("#statHang").textContent=data.hangman.wins; $("#statHangLoss").textContent=data.hangman.losses;
}

/* Τρίλιζα */
let ticBoard=Array(9).fill(""), ticPlayer="X", ticOver=false;
function drawTic(){
  const b=$("#ticBoard"); b.innerHTML="";
  ticBoard.forEach((v,i)=>{
    const btn=document.createElement("button");
    btn.className="tic-cell"; btn.textContent=v==="X"?"❌":v==="O"?"⭕":"";
    btn.onclick=()=>ticMove(i); b.appendChild(btn);
  });
}
function ticMove(i){
  if(ticOver||ticBoard[i]) return;
  ticBoard[i]=ticPlayer; beep(ticPlayer==="X"?480:620); drawTic();
  const winner=checkTic();
  if(winner){
    ticOver=true; const key=winner==="X"?"p1":"p2"; data.tic[key]++; data.games++;
    $("#ticMessage").textContent=`Νίκησε ο ${winner==="X"?data.players[0]:data.players[1]}! 🎉`; beep(850,.2); save(); return;
  }
  if(ticBoard.every(Boolean)){
    ticOver=true; data.tic.draws++; data.games++; $("#ticMessage").textContent="Ισοπαλία!"; save(); return;
  }
  ticPlayer=ticPlayer==="X"?"O":"X";
  $("#ticTurn").textContent=ticPlayer==="X"?"❌":"⭕";
  $("#ticMessage").textContent=`Παίζει ο ${ticPlayer==="X"?data.players[0]:data.players[1]}`;
}
function checkTic(){
  const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(const [a,b,c] of wins) if(ticBoard[a]&&ticBoard[a]===ticBoard[b]&&ticBoard[a]===ticBoard[c]) return ticBoard[a];
  return null;
}
function resetTic(){ ticBoard=Array(9).fill("");ticPlayer="X";ticOver=false;$("#ticTurn").textContent="❌";$("#ticMessage").textContent=`Παίζει ο ${data.players[0]}`;drawTic(); }
$("#ticNewBtn").onclick=resetTic;
$("#ticResetBtn").onclick=()=>{if(confirm("Να μηδενιστεί το σκορ της Τρίλιζας;")){data.tic={p1:0,p2:0,draws:0};save();resetTic();}};

/* Σκορ 4 */
const ROWS=6,COLS=7;
let conBoard=Array.from({length:ROWS},()=>Array(COLS).fill(0)), conPlayer=1, conOver=false;
function drawConnect(){
  const board=$("#connectBoard"); board.innerHTML="";
  for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
    const cell=document.createElement("button");
    cell.className="connect-cell"+(conBoard[r][c]===1?" red":conBoard[r][c]===2?" yellow":"");
    cell.onclick=()=>connectMove(c); board.appendChild(cell);
  }
}
function connectMove(col){
  if(conOver)return;
  let row=-1; for(let r=ROWS-1;r>=0;r--)if(!conBoard[r][col]){row=r;break}
  if(row<0)return;
  conBoard[row][col]=conPlayer; beep(conPlayer===1?420:620); drawConnect();
  if(checkConnect(row,col)){
    conOver=true; const key=conPlayer===1?"p1":"p2"; data.connect[key]++; data.games++;
    $("#connectMessage").textContent=`Νίκησε ο ${data.players[conPlayer-1]}! 🎉`; beep(900,.2); save(); return;
  }
  if(conBoard.flat().every(Boolean)){conOver=true;data.games++;$("#connectMessage").textContent="Ισοπαλία!";save();return}
  conPlayer=conPlayer===1?2:1;
  $("#conTurn").textContent=conPlayer===1?"🔴":"🟡";
  $("#connectMessage").textContent=`Παίζει ο ${data.players[conPlayer-1]}`;
}
function checkConnect(r,c){
  const p=conBoard[r][c], dirs=[[1,0],[0,1],[1,1],[1,-1]];
  for(const [dr,dc] of dirs){
    let count=1;
    for(const s of [-1,1]){let rr=r+dr*s,cc=c+dc*s;while(rr>=0&&rr<ROWS&&cc>=0&&cc<COLS&&conBoard[rr][cc]===p){count++;rr+=dr*s;cc+=dc*s}}
    if(count>=4)return true;
  } return false;
}
function resetConnect(){conBoard=Array.from({length:ROWS},()=>Array(COLS).fill(0));conPlayer=1;conOver=false;$("#conTurn").textContent="🔴";$("#connectMessage").textContent=`Παίζει ο ${data.players[0]}`;drawConnect();}
$("#connectNewBtn").onclick=resetConnect;
$("#connectResetBtn").onclick=()=>{if(confirm("Να μηδενιστεί το σκορ του Σκορ 4;")){data.connect={p1:0,p2:0};save();resetConnect();}};

/* Κρεμάλα */
const alphabet="ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
let secret="",hint="",guessed=new Set(),mistakes=0,hangOver=false;
function normalizeGreek(s){return s.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/Σ$/g,"Σ")}
function startHang(){
  secret=normalizeGreek($("#secretWord").value.trim());
  hint=$("#secretHint").value.trim();
  if(secret.replace(/[^Α-ΩA-Z]/g,"").length<2){toast("Γράψε μια λέξη τουλάχιστον 2 γραμμάτων");return}
  guessed=new Set();mistakes=0;hangOver=false;
  $("#hangSetup").classList.add("hidden");$("#hangGame").classList.remove("hidden");
  renderHang();
}
function renderHang(){
  const stages=["🙂","😐","😟","😨","😵","💀","☠️"];
  $("#hangFigure").textContent=stages[mistakes];
  $("#hangMistakes").textContent=mistakes;
  $("#hangHint").textContent=hint?`Βοήθεια: ${hint}`:"";
  const shown=[...secret].map(ch=>/[^Α-ΩA-Z]/.test(ch)?ch:(guessed.has(ch)?ch:"_")).join(" ");
  $("#hangWord").textContent=shown;
  $("#wrongLetters").textContent=[...guessed].filter(l=>!secret.includes(l)).join("  ");
  const keyboard=$("#keyboard");keyboard.innerHTML="";
  [...alphabet].forEach(letter=>{
    const b=document.createElement("button");b.className="key";b.textContent=letter;b.disabled=guessed.has(letter)||hangOver;b.onclick=()=>guessLetter(letter);keyboard.appendChild(b)
  });
}
function guessLetter(letter){
  if(hangOver)return; guessed.add(letter); if(!secret.includes(letter)){mistakes++;beep(220)}else beep(650);
  const won=[...secret].filter(ch=>/[Α-ΩA-Z]/.test(ch)).every(ch=>guessed.has(ch));
  if(won){hangOver=true;data.hangman.wins++;data.games++;$("#hangMessage").textContent="Βρήκες τη λέξη! 🎉";beep(900,.2);save()}
  else if(mistakes>=6){hangOver=true;data.hangman.losses++;data.games++;$("#hangMessage").textContent=`Έχασες! Η λέξη ήταν: ${secret}`;save()}
  else $("#hangMessage").textContent=secret.includes(letter)?"Σωστό γράμμα!":"Λάθος γράμμα";
  renderHang();
}
function newHang(){
  $("#secretWord").value="";$("#secretHint").value="";$("#hangSetup").classList.remove("hidden");$("#hangGame").classList.add("hidden");$("#hangMessage").textContent="Διάλεξε ένα γράμμα";
}
$("#startHangBtn").onclick=startHang;$("#hangNewBtn").onclick=newHang;

if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
updateAll();resetTic();resetConnect();

/* Νέα παιχνίδια V2 */
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
function renderAnswers(box,values,correct,onDone){box.innerHTML="";values.forEach(v=>{const b=document.createElement("button");b.textContent=v;b.onclick=()=>{[...box.children].forEach(x=>x.disabled=true);b.classList.add(v===correct?"correct":"wrong");onDone(v)};box.appendChild(b)})}

// Κορώνα - Γράμματα
$("#flipCoinBtn").onclick=()=>{const coin=$("#coinDisc");coin.classList.remove("flip");void coin.offsetWidth;coin.classList.add("flip");setTimeout(()=>{const r=Math.random()<.5?"Κορώνα":"Γράμματα";coin.textContent=r==="Κορώνα"?"👑":"🔤";$("#coinResult").textContent=r;data.coin.unshift(r);data.coin=data.coin.slice(0,20);save()},850)};
function renderCoinHistory(){const e=$("#coinHistory");if(!e)return;e.innerHTML=data.coin.length?data.coin.map((x,i)=>`<div class="custom-row"><span>${i+1}. ${x}</span></div>`).join(""):"Δεν υπάρχουν ρίψεις ακόμα."}

// Τροχός τύχης
let wheelAngle=0,wheelSpinning=false;const wheelColors=["#ef4444","#f59e0b","#10b981","#06b6d4","#3b82f6","#8b5cf6","#ec4899","#64748b"];
function drawWheel(){const c=$("#wheelCanvas");if(!c)return;const x=c.getContext("2d"),n=data.wheel.length||1;x.clearRect(0,0,700,700);for(let i=0;i<n;i++){const a=wheelAngle+i*2*Math.PI/n,b=wheelAngle+(i+1)*2*Math.PI/n;x.beginPath();x.moveTo(350,350);x.arc(350,350,330,a,b);x.fillStyle=wheelColors[i%wheelColors.length];x.fill();x.save();x.translate(350,350);x.rotate((a+b)/2);x.textAlign="right";x.fillStyle="white";x.font="bold 25px sans-serif";x.fillText((data.wheel[i]||"").slice(0,22),305,8);x.restore()}x.beginPath();x.arc(350,350,52,0,Math.PI*2);x.fillStyle="white";x.fill();x.fillStyle="#6d28d9";x.font="bold 23px sans-serif";x.textAlign="center";x.fillText("SPIN",350,358)}
$("#spinWheelBtn").onclick=()=>{if(wheelSpinning||data.wheel.length<2)return;wheelSpinning=true;const start=wheelAngle,extra=Math.PI*2*(5+Math.random()*4),dur=3500,t0=performance.now();function go(t){const q=Math.min(1,(t-t0)/dur),ease=1-Math.pow(1-q,3);wheelAngle=start+extra*ease;drawWheel();if(q<1)requestAnimationFrame(go);else{wheelSpinning=false;const n=data.wheel.length,pointer=-Math.PI/2,norm=((pointer-wheelAngle)%(Math.PI*2)+Math.PI*2)%(Math.PI*2),idx=Math.floor(norm/(Math.PI*2/n));$("#wheelResult").textContent=`🎉 ${data.wheel[idx]}`}}requestAnimationFrame(go)};
$("#addWheelBtn").onclick=()=>{const v=$("#wheelInput").value.trim();if(!v)return;data.wheel.push(v);$("#wheelInput").value="";save();drawWheel()};
function renderWheelItems(){const e=$("#wheelItems");if(!e)return;e.innerHTML="";data.wheel.forEach((v,i)=>{const r=document.createElement("div"),s=document.createElement("span"),ed=document.createElement("button"),del=document.createElement("button");s.textContent=v;ed.textContent="✏️";del.textContent="🗑️";ed.onclick=()=>{const nv=prompt("Αλλαγή επιλογής",v);if(nv){data.wheel[i]=nv;save();drawWheel()}};del.onclick=()=>{if(data.wheel.length<=2)return toast("Χρειάζονται τουλάχιστον 2 επιλογές");data.wheel.splice(i,1);save();drawWheel()};r.append(s,ed,del);e.append(r)})}

// Σημαίες
const flagBank=[["🇬🇷","Ελλάδα"],["🇮🇹","Ιταλία"],["🇪🇸","Ισπανία"],["🇫🇷","Γαλλία"],["🇩🇪","Γερμανία"],["🇵🇹","Πορτογαλία"],["🇧🇷","Βραζιλία"],["🇦🇷","Αργεντινή"],["🇬🇧","Ηνωμένο Βασίλειο"],["🇺🇸","ΗΠΑ"],["🇯🇵","Ιαπωνία"],["🇨🇳","Κίνα"],["🇨🇦","Καναδάς"],["🇦🇺","Αυστραλία"],["🇲🇽","Μεξικό"],["🇳🇱","Ολλανδία"],["🇧🇪","Βέλγιο"],["🇭🇷","Κροατία"],["🇹🇷","Τουρκία"],["🇨🇾","Κύπρος"],["🇸🇪","Σουηδία"],["🇳🇴","Νορβηγία"],["🇩🇰","Δανία"],["🇨🇭","Ελβετία"]];
function newFlag(){const q=flagBank[Math.floor(Math.random()*flagBank.length)];$("#flagEmoji").textContent=q[0];$("#flagMessage").textContent="";const choices=shuffle([q,...shuffle(flagBank.filter(x=>x!==q)).slice(0,3)]).map(x=>x[1]);renderAnswers($("#flagOptions"),choices,q[1],a=>{if(a===q[1]){data.flagsScore++;save();$("#flagMessage").textContent="Σωστά! 🎉"}else $("#flagMessage").textContent=`Η σωστή απάντηση είναι ${q[1]}`})}
$("#nextFlagBtn").onclick=newFlag;

// Αθλητισμός
const starterPlayers=[
{name:"Lionel Messi",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Lionel_Messi_in_2018.jpg"},
{name:"Cristiano Ronaldo",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Cristiano_Ronaldo_2018.jpg"},
{name:"Kylian Mbappé",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Kylian_Mbapp%C3%A9.jpg"},
{name:"Erling Haaland",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Erling_Haaland_2023_%28cropped%29.jpg"},
{name:"Mohamed Salah",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mohamed_Salah_2018.jpg"},
{name:"Luka Modrić",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Luka_Modric_2018.jpg"},
{name:"Robert Lewandowski",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Robert_Lewandowski_2018.jpg"},
{name:"Neymar",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg"}
];
const starterTeams=[
{name:"Barcelona",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/FC_Barcelona_%28crest%29.svg"},
{name:"Real Madrid",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Real_Madrid_CF.svg"},
{name:"Liverpool",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Liverpool_FC.svg"},
{name:"Manchester United",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Manchester_United_FC_crest.svg"},
{name:"Arsenal",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Arsenal_FC.svg"},
{name:"Juventus",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Juventus_FC_2017_logo.svg"}
];
function showImage(img,fb,url){fb.style.display="none";img.style.display="block";img.onerror=()=>{img.style.display="none";fb.style.display="grid"};img.src=url}
function newPlayerQuiz(){const all=[...starterPlayers,...data.customPlayers];if(all.length<4)return;const q=all[Math.floor(Math.random()*all.length)];showImage($("#playerPhoto"),$("#playerFallback"),q.img);$("#playerMessage").textContent="";const choices=shuffle([q,...shuffle(all.filter(x=>x!==q)).slice(0,3)]).map(x=>x.name);renderAnswers($("#playerOptions"),choices,q.name,a=>{if(a===q.name){data.playerQuizScore++;save();$("#playerMessage").textContent="Σωστά! 🎉"}else $("#playerMessage").textContent=`Ήταν ο ${q.name}`})}
function newTeamQuiz(){const all=[...starterTeams,...data.customTeams];if(all.length<4)return;const q=all[Math.floor(Math.random()*all.length)];showImage($("#teamPhoto"),$("#teamFallback"),q.img);$("#teamMessage").textContent="";const choices=shuffle([q,...shuffle(all.filter(x=>x!==q)).slice(0,3)]).map(x=>x.name);renderAnswers($("#teamOptions"),choices,q.name,a=>{if(a===q.name){data.teamQuizScore++;save();$("#teamMessage").textContent="Σωστά! 🎉"}else $("#teamMessage").textContent=`Ήταν η ${q.name}`})}
$("#nextPlayerBtn").onclick=newPlayerQuiz;$("#nextTeamBtn").onclick=newTeamQuiz;
$$(".sport-tab").forEach(b=>b.onclick=()=>{$$(".sport-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");$$(".sport-pane").forEach(x=>x.classList.remove("active"));$("#"+b.dataset.pane).classList.add("active");if(b.dataset.pane==="teamPane")newTeamQuiz()});
function readPhoto(file,cb){if(!file)return;const r=new FileReader();r.onload=()=>cb(r.result);r.readAsDataURL(file)}
$("#addCustomPlayerBtn").onclick=()=>{const n=$("#customPlayerName").value.trim(),f=$("#customPlayerPhoto").files[0];if(!n||!f)return toast("Βάλε όνομα και φωτογραφία");readPhoto(f,img=>{data.customPlayers.push({name:n,img});try{save();$("#customPlayerName").value="";$("#customPlayerPhoto").value="";toast("Ο παίκτης προστέθηκε")}catch{data.customPlayers.pop();toast("Η φωτογραφία είναι πολύ μεγάλη")}})};
$("#addCustomTeamBtn").onclick=()=>{const n=$("#customTeamName").value.trim(),f=$("#customTeamPhoto").files[0];if(!n||!f)return toast("Βάλε όνομα και λογότυπο");readPhoto(f,img=>{data.customTeams.push({name:n,img});try{save();$("#customTeamName").value="";$("#customTeamPhoto").value="";toast("Η ομάδα προστέθηκε")}catch{data.customTeams.pop();toast("Η φωτογραφία είναι πολύ μεγάλη")}})};
function renderCustomSports(){const e=$("#customSportsList");if(!e)return;e.innerHTML="";const items=[...data.customPlayers.map((x,i)=>({kind:"Παίκτης",key:"customPlayers",x,i})),...data.customTeams.map((x,i)=>({kind:"Ομάδα",key:"customTeams",x,i}))];items.forEach(o=>{const r=document.createElement("div");r.className="custom-row";const s=document.createElement("span"),b=document.createElement("button");s.innerHTML=`<b>${o.kind}:</b> ${o.x.name}`;b.textContent="🗑️";b.onclick=()=>{data[o.key].splice(o.i,1);save()};r.append(s,b);e.append(r)});if(!items.length)e.textContent="Δεν έχεις προσθέσει ακόμα δικές σου φωτογραφίες."}

updateAll();
