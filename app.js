const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const defaults = {
  players: ["Αλέξανδρος", "Παίκτης 2"],
  sound: true,
  tic: {p1:0,p2:0,draws:0},
  connect: {p1:0,p2:0},
  hangman: {wins:0,losses:0},
  games: 0
};
let data = JSON.parse(localStorage.getItem("coupleGamesData") || "null") || structuredClone(defaults);

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
  hangman:$("#hangmanScreen"), stats:$("#statsScreen"), settings:$("#settingsScreen")
};
const titles={
  home:["Couple Games ❤️","Παιχνίδια για δύο στο ίδιο κινητό"],
  tic:["Τρίλιζα","Βάλτε 3 σύμβολα στη σειρά"],
  connect:["Σκορ 4","Βάλτε 4 πιόνια στη σειρά"],
  hangman:["Κρεμάλα","Μάντεψε τη μυστική λέξη"],
  stats:["Στατιστικά","Οι επιδόσεις σας"],
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
