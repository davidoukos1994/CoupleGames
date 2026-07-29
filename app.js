const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function shuffle(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
// Συμβατότητα με παλαιότερα τμήματα που αφαιρέθηκαν από την αρχική.
function renderCustom(){}
function renderQuestionList(){}
const DEFAULT_QUOTE_QUESTIONS=[{"id":"builtin-tvq-01","quote":"Όχι, στεγνώνουμε το μανό","correct":"50-50","image":"sprite:0","wrongs":["Άκρως Οικογενειακόν","Δύο Ξένοι","Είσαι το Ταίρι μου"],"builtin":true},{"id":"builtin-tvq-02","quote":"Μη φωνάζεις, θα σου κοπεί η περίοδος","correct":"50-50","image":"sprite:1","wrongs":["Ευτυχισμένοι Μαζί","Το Καφέ της Χαράς","Κωνσταντίνου και Ελένης"],"builtin":true},{"id":"builtin-tvq-03","quote":"Έλα μην σου πάρει ο διάολος τον πατέρα","correct":"Άκρως Οικογενειακόν","image":"sprite:2","wrongs":["Στο Παρά Πέντε","Σαββατογεννημένες","Οι Στάβλοι της Εριέτας Ζαΐμη"],"builtin":true},{"id":"builtin-tvq-04","quote":"Γύρνα πίσω ή έστω τηλεφώνα","correct":"Δύο Ξένοι","image":"sprite:3","wrongs":["50-50","Άκρως Οικογενειακόν","Είσαι το Ταίρι μου"],"builtin":true},{"id":"builtin-tvq-05","quote":"Χριστέ μου, τι ντεκαντάνς","correct":"Δύο Ξένοι","image":"sprite:4","wrongs":["Ευτυχισμένοι Μαζί","Το Καφέ της Χαράς","Κωνσταντίνου και Ελένης"],"builtin":true},{"id":"builtin-tvq-06","quote":"Και εγώ πάω να την πέσω γιατί κουράστηκα που ξύπνησα","correct":"Είσαι το Ταίρι μου","image":"sprite:5","wrongs":["Στο Παρά Πέντε","Σαββατογεννημένες","Οι Στάβλοι της Εριέτας Ζαΐμη"],"builtin":true},{"id":"builtin-tvq-07","quote":"Η γυναίκα, το κοτόπουλο και το σκουλήκι θέλουν χέρι","correct":"Είσαι το Ταίρι μου","image":"sprite:6","wrongs":["50-50","Άκρως Οικογενειακόν","Δύο Ξένοι"],"builtin":true},{"id":"builtin-tvq-08","quote":"Σωτήρη γύρνα πίσω, θα φαρμακωθώ","correct":"Είσαι το Ταίρι μου","image":"sprite:7","wrongs":["Ευτυχισμένοι Μαζί","Το Καφέ της Χαράς","Κωνσταντίνου και Ελένης"],"builtin":true},{"id":"builtin-tvq-09","quote":"Με έχετε φέρει μέχρι εδώ","correct":"Ευτυχισμένοι Μαζί","image":"sprite:8","wrongs":["Στο Παρά Πέντε","Σαββατογεννημένες","Οι Στάβλοι της Εριέτας Ζαΐμη"],"builtin":true},{"id":"builtin-tvq-10","quote":"Μην επιμένετε! Γυμνό δεν κάνω","correct":"Ευτυχισμένοι Μαζί","image":"sprite:9","wrongs":["50-50","Άκρως Οικογενειακόν","Δύο Ξένοι"],"builtin":true},{"id":"builtin-tvq-11","quote":"Άντρες είμαστε και εμείς, θέλουμε να μαρσάρουμεεε","correct":"Ευτυχισμένοι Μαζί","image":"sprite:10","wrongs":["Είσαι το Ταίρι μου","Το Καφέ της Χαράς","Κωνσταντίνου και Ελένης"],"builtin":true},{"id":"builtin-tvq-12","quote":"Εμάς τις όμορφες μορφωμένες οι άντρες μας φοβούνται","correct":"Το Καφέ της Χαράς","image":"sprite:11","wrongs":["Στο Παρά Πέντε","Σαββατογεννημένες","Οι Στάβλοι της Εριέτας Ζαΐμη"],"builtin":true},{"id":"builtin-tvq-13","quote":"Η αμαρτωλή μου σάρκα όμως θέλει τα πιπίνια","correct":"Το Καφέ της Χαράς","image":"sprite:12","wrongs":["50-50","Άκρως Οικογενειακόν","Δύο Ξένοι"],"builtin":true},{"id":"builtin-tvq-14","quote":"Σου απαγορεύω να ανοίξεις πορνείο","correct":"Κωνσταντίνου και Ελένης","image":"sprite:13","wrongs":["Είσαι το Ταίρι μου","Ευτυχισμένοι Μαζί","Το Καφέ της Χαράς"],"builtin":true},{"id":"builtin-tvq-15","quote":"Θα είμαι πάντα για σας ένα άπιαστο όνειρο","correct":"Κωνσταντίνου και Ελένης","image":"sprite:14","wrongs":["Στο Παρά Πέντε","Σαββατογεννημένες","Οι Στάβλοι της Εριέτας Ζαΐμη"],"builtin":true},{"id":"builtin-tvq-16","quote":"Μαρούσκα, το Evian","correct":"Δύο Ξένοι","image":"sprite:15","wrongs":["50-50","Άκρως Οικογενειακόν","Είσαι το Ταίρι μου"],"builtin":true},{"id":"builtin-tvq-17","quote":"Βιργινία, δεν είσαι σωστή συνάδελφος","correct":"Στο Παρά Πέντε","image":"sprite:16","wrongs":["Είσαι το Ταίρι μου","Ευτυχισμένοι Μαζί","Το Καφέ της Χαράς"],"builtin":true},{"id":"builtin-tvq-18","quote":"Άντε καλέ, σιγά! Κόβεται το σεξ","correct":"Στο Παρά Πέντε","image":"sprite:17","wrongs":["Κωνσταντίνου και Ελένης","Σαββατογεννημένες","Οι Στάβλοι της Εριέτας Ζαΐμη"],"builtin":true},{"id":"builtin-tvq-19","quote":"Πρόστυχη! Μόλις γύρισα την πλάτη μου πήγες και τα έφτιαξες με αυτόν τον χιχιφιόγκο","correct":"Σαββατογεννημένες","image":"sprite:18","wrongs":["50-50","Άκρως Οικογενειακόν","Δύο Ξένοι"],"builtin":true},{"id":"builtin-tvq-20","quote":"Ο μόνος που φταίει ρε είναι ο πατέρας σου, που γονιμοποίησε τη μάνα σου","correct":"Οι Στάβλοι της Εριέτας Ζαΐμη","image":"sprite:19","wrongs":["Είσαι το Ταίρι μου","Ευτυχισμένοι Μαζί","Το Καφέ της Χαράς"],"builtin":true}];
const D={players:["Παίκτης 1","Παίκτης 2"],tic:{p1:0,p2:0},con:{p1:0,p2:0},flags:0,playersScore:0,teamsScore:0,wheel:["Φιλί","Μασάζ 10 λεπτά","Διαλέγει ταινία","Κερνάει καφέ","Διαλέγει τραγούδι","Κάνει μια χάρη","Χορός 30 δευτερόλεπτα","Μίμηση χαρακτήρα","Αστεία ιστορία","Διάλεξε επόμενο παιχνίδι","Τραγούδησε ένα ρεφρέν","Μυστική πρόκληση"],wheelPlayers:["Παίκτης 1","Παίκτης 2"],wheelPlayerIndex:0,coin:[],customPlayers:[],customTeams:[],quizQuestions:{footballers:[],history:[],audience:[]}};
let d=JSON.parse(localStorage.getItem("retroGamesDLemonis")||"null")||structuredClone(D);
d.quizQuestions=d.quizQuestions||{footballers:[],history:[],audience:[]};
for(const k of ['footballers','history','audience'])d.quizQuestions[k]=Array.isArray(d.quizQuestions[k])?d.quizQuestions[k]:[];
d.customPlayers=Array.isArray(d.customPlayers)?d.customPlayers:[];d.customTeams=Array.isArray(d.customTeams)?d.customTeams:[];
d.quoteQuestions=Array.isArray(d.quoteQuestions)?d.quoteQuestions:[];
// Προσθήκη των ενσωματωμένων ερωτήσεων χωρίς να χάνονται οι ερωτήσεις του χρήστη.
const existingQuoteIds=new Set(d.quoteQuestions.map(q=>q.id).filter(Boolean));
for(const q of DEFAULT_QUOTE_QUESTIONS){if(!existingQuoteIds.has(q.id))d.quoteQuestions.push({...q});}
d.wheel=Array.isArray(d.wheel)&&d.wheel.length?d.wheel:D.wheel.slice();
d.wheelPlayers=Array.isArray(d.wheelPlayers)&&d.wheelPlayers.length?d.wheelPlayers:["Παίκτης 1","Παίκτης 2"];
d.wheelPlayerIndex=Number.isInteger(d.wheelPlayerIndex)?d.wheelPlayerIndex:0;
// Τα ονόματα ξεκινούν καθαρά σε κάθε νέο άνοιγμα της εφαρμογής.
d.players=["Παίκτης 1","Παίκτης 2"];
const save=()=>{localStorage.setItem("retroGamesDLemonis",JSON.stringify(d));update()};
function toast(t){let e=$("#toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1600)}
function options(container,items,correct,onPick){
  container.innerHTML="";
  items.forEach(value=>{
    const b=document.createElement("button");
    b.type="button";
    b.textContent=value;
    b.onclick=()=>{
      [...container.querySelectorAll("button")].forEach(x=>{x.disabled=true;if(x.textContent===correct)x.classList.add("correct")});
      if(value!==correct)b.classList.add("wrong");
      onPick(value,b);
    };
    container.appendChild(b);
  });
}
const meta={arcade:["Retro Arcade","Κλασικά παιχνίδια"],pacman:["Pac-Man","Φάε τις τελείες και ξέφυγε από τα φαντάσματα"],home:["RetroGames By D.Lemonis",""],tic:["Τρίλιζα","Τρία σύμβολα στη σειρά"],connect:["Σκορ 4","Τέσσερα πιόνια στη σειρά"],hang:["Κρεμάλα","Μάντεψε τη λέξη"],coin:["Κορώνα–Γράμματα","Ρίξε το νόμισμα"],sos:["SOS","Σχημάτισε τις περισσότερες λέξεις SOS"],snake:["Φιδάκι","Φάε τα μήλα και κάνε ρεκόρ"],mines:["Ναρκαλιευτής","Βρες όλα τα ασφαλή τετράγωνα"],wheel:["Τροχός Τύχης","Challenges που αλλάζεις εσύ"],flags:["Find the Flags","Μάντεψε τη χώρα"],sports:["QuizBall","Ποδοσφαιρικά παιχνίδια και ερωτήσεις"],quotes:["TV Quote Challenge","Μάντεψε την ελληνική σειρά από τη διάσημη ατάκα"],stats:["Στατιστικά","Τα σκορ σας"],settings:["Ρυθμίσεις","Ονόματα παικτών"]};
function go(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');$('#title').textContent=meta[id][0];$('#subtitle').textContent=meta[id][1]||'';$('#subtitle').classList.toggle('hidden',!meta[id][1]);$('#back').classList.toggle('hidden',id==='home');document.body.classList.toggle('home-view',id==='home');const playerBar=$('#gamePlayersBar');if(playerBar)playerBar.classList.toggle('hidden',['home','settings','arcade','snake','mines','pacman'].includes(id));const sb=$('#settingsBtn');if(sb)sb.classList.toggle('hidden',id==='settings');scrollTo(0,0);if(id==='wheel')drawWheel();if(id==='flags')newFlag();if(id==='sports')showQuizBallHub();if(id==='quotes')showQuoteHub();if(id==='pacman')drawPac()}
$$('[data-screen]').forEach(b=>b.onclick=()=>go(b.dataset.screen));$("#back").onclick=()=>go("home");const settingsHeader=$("#settingsBtn");if(settingsHeader)settingsHeader.onclick=()=>go("settings");
function setText(sel,value){let el=$(sel);if(el)el.textContent=value}
function update(){let[a,b]=d.players;if($("#quickP1")&&document.activeElement!==$("#quickP1"))$("#quickP1").value=a;if($("#quickP2")&&document.activeElement!==$("#quickP2"))$("#quickP2").value=b;setText("#ticN1",a);setText("#ticN2",b);setText("#conN1",a);setText("#conN2",b);setText("#ticS1",d.tic.p1);setText("#ticS2",d.tic.p2);setText("#conS1",d.con.p1);setText("#conS2",d.con.p2);if($("#p1Input"))$("#p1Input").value=a;if($("#p2Input"))$("#p2Input").value=b;setText("#flagScore",d.flags);setText("#stTic",d.tic.p1+"-"+d.tic.p2);setText("#stCon",d.con.p1+"-"+d.con.p2);setText("#stFlag",d.flags);setText("#stPlayers",d.playersScore);renderWheel();renderWheelPlayers();renderCoin();renderCustom();renderQuestionList();renderQuoteList();updateQuoteCount();renderFlagEditor()}
$("#saveSettings").onclick=()=>{d.players=[$("#p1Input").value.trim()||"Παίκτης 1",$("#p2Input").value.trim()||"Παίκτης 2"];save();toast("Αποθηκεύτηκαν")};

function saveQuickPlayers(){
  d.players=[($("#quickP1")?.value||"").trim()||"Παίκτης 1",($("#quickP2")?.value||"").trim()||"Παίκτης 2"];
  localStorage.setItem("retroGamesDLemonis",JSON.stringify(d));
  update();
}
["#quickP1","#quickP2"].forEach(sel=>{const el=$(sel);if(!el)return;el.addEventListener("change",saveQuickPlayers);el.addEventListener("blur",saveQuickPlayers);el.addEventListener("keydown",e=>{if(e.key==="Enter")el.blur()})});

let tb=Array(9).fill(""),tp="X",to=false;
function drawT(){let e=$("#ticBoard");e.innerHTML="";tb.forEach((v,i)=>{let b=document.createElement("button");b.className="tic-cell";b.dataset.index=i;b.textContent=v==="X"?"❌":v==="O"?"⭕":"";b.onclick=()=>{if(to||tb[i])return;tb[i]=tp;drawT();let winLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].find(a=>a.every(k=>tb[k]===tp));if(winLine){to=true;winLine.forEach(k=>e.querySelector(`[data-index="${k}"]`)?.classList.add("winning"));d.tic[tp==="X"?"p1":"p2"]++;$("#ticMsg").textContent="Νίκησε ο "+d.players[tp==="X"?0:1];save();return}if(tb.every(Boolean)){to=true;$("#ticMsg").textContent="Ισοπαλία";return}tp=tp==="X"?"O":"X";$("#ticTurn").textContent=tp==="X"?"❌":"⭕";$("#ticMsg").textContent="Παίζει ο "+d.players[tp==="X"?0:1]};e.append(b)})}
function resetT(){tb=Array(9).fill("");tp="X";to=false;$("#ticTurn").textContent="❌";$("#ticMsg").textContent="Παίζει ο "+d.players[0];drawT()}$("#ticNew").onclick=resetT;$("#ticReset").onclick=()=>{d.tic={p1:0,p2:0};save();resetT()};

let cb,p=1,co=false;
function drawC(){let e=$("#conBoard");e.innerHTML="";for(let r=0;r<6;r++)for(let c=0;c<7;c++){let b=document.createElement("button");b.className="con-cell"+(cb[r][c]===1?" r":cb[r][c]===2?" y":"");b.onclick=()=>moveC(c);e.append(b)}}
function resetC(){cb=Array.from({length:6},()=>Array(7).fill(0));p=1;co=false;$("#conTurn").textContent="🔴";$("#conMsg").textContent="Παίζει ο "+d.players[0];drawC()}
function moveC(c){if(co)return;let r=-1;for(let x=5;x>=0;x--)if(!cb[x][c]){r=x;break}if(r<0)return;cb[r][c]=p;drawC();if(winC(r,c)){co=true;d.con[p===1?"p1":"p2"]++;$("#conMsg").textContent="Νίκησε ο "+d.players[p-1];save();return}p=p===1?2:1;$("#conTurn").textContent=p===1?"🔴":"🟡";$("#conMsg").textContent="Παίζει ο "+d.players[p-1]}
function winC(r,c){for(let[a,b]of[[1,0],[0,1],[1,1],[1,-1]]){let n=1;for(let s of[-1,1]){let x=r+a*s,y=c+b*s;while(x>=0&&x<6&&y>=0&&y<7&&cb[x][y]===p){n++;x+=a*s;y+=b*s}}if(n>=4)return true}return false}$("#conNew").onclick=resetC;$("#conReset").onclick=()=>{d.con={p1:0,p2:0};save();resetC()};

const alpha="ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";let word="",gu=new Set(),mis=0,hov=false;
const norm=s=>s.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
$("#hangStart").onclick=()=>{word=norm($("#secret").value.trim());if(word.length<2)return toast("Γράψε λέξη");gu=new Set();mis=0;hov=false;$("#hangSetup").classList.add("hidden");$("#hangPlay").classList.remove("hidden");renderH()};
function renderH(){let f=["🙂","😐","😟","😨","😵","💀","☠️"];$("#hangFace").textContent=f[mis];$("#mistakes").textContent=mis;$("#hintOut").textContent=$("#hint").value?"Βοήθεια: "+$("#hint").value:"";$("#wordOut").textContent=[...word].map(c=>/[^Α-ΩA-Z]/.test(c)||gu.has(c)?c:"_").join(" ");$("#wrongOut").textContent=[...gu].filter(c=>!word.includes(c)).join(" ");let k=$("#keyboard");k.innerHTML="";[...alpha].forEach(l=>{let b=document.createElement("button");b.textContent=l;b.disabled=gu.has(l)||hov;b.onclick=()=>{gu.add(l);if(!word.includes(l))mis++;let won=[...word].filter(c=>/[Α-ΩA-Z]/.test(c)).every(c=>gu.has(c));if(won){hov=true;$("#hangMsg").textContent="Βρήκες τη λέξη"}else if(mis>=6){hov=true;$("#hangMsg").textContent="Η λέξη ήταν "+word}renderH()};k.append(b)})}$("#hangNew").onclick=()=>{$("#secret").value="";$("#hint").value="";$("#hangSetup").classList.remove("hidden");$("#hangPlay").classList.add("hidden")};

// SOS game
let sosSize=8,sosBoard=Array(sosSize*sosSize).fill(''),sosPlayer=0,sosScores=[0,0],sosOver=false,sosLines=[];
function sosNames(){return [d.players[0]||'Παίκτης 1',d.players[1]||'Παίκτης 2']}
function sosLetterForPlayer(player){return player===0?'S':'O'}
function renderSOS(){
  const names=sosNames(),letter=sosLetterForPlayer(sosPlayer);
  $('#sosName1').textContent=names[0]+' · S';$('#sosName2').textContent=names[1]+' · O';
  $('#sosScore1').textContent=sosScores[0];$('#sosScore2').textContent=sosScores[1];
  $('#sosTurnName').textContent=sosOver?'Τέλος':names[sosPlayer]+' · '+letter;
  $('#sosScoreBox1')?.classList.toggle('active',!sosOver&&sosPlayer===0);
  $('#sosScoreBox2')?.classList.toggle('active',!sosOver&&sosPlayer===1);
  $('#sosFixedS')?.classList.toggle('active',!sosOver&&sosPlayer===0);
  $('#sosFixedO')?.classList.toggle('active',!sosOver&&sosPlayer===1);
  const board=$('#sosBoard');if(!board)return;board.innerHTML='';board.style.setProperty('--sos-size',sosSize);
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('class','sos-lines');svg.setAttribute('viewBox',`0 0 ${sosSize} ${sosSize}`);svg.setAttribute('preserveAspectRatio','none');
  sosLines.forEach(line=>{const el=document.createElementNS('http://www.w3.org/2000/svg','line');const a=line.cells[0],z=line.cells[2];el.setAttribute('x1',(a%sosSize)+.5);el.setAttribute('y1',Math.floor(a/sosSize)+.5);el.setAttribute('x2',(z%sosSize)+.5);el.setAttribute('y2',Math.floor(z/sosSize)+.5);el.setAttribute('class','player-'+(line.player+1));svg.append(el)});
  board.append(svg);
  sosBoard.forEach((v,i)=>{const b=document.createElement('button');b.textContent=v;b.disabled=!!v||sosOver;b.className=v?(v==='S'?'letter-s':'letter-o'):'';b.setAttribute('aria-label',v?`Κελί ${v}`:'Άδειο κελί');b.onclick=()=>sosMove(i);board.append(b)});
}
function sosMove(index){
  if(sosOver||sosBoard[index])return;
  const player=sosPlayer,letter=sosLetterForPlayer(player);sosBoard[index]=letter;
  const r=Math.floor(index/sosSize),c=index%sosSize,dirs=[[0,1],[1,0],[1,1],[1,-1]];let made=0;
  for(const [dr,dc] of dirs){
    for(let off=-2;off<=0;off++){
      const cells=[];let ok=true;
      for(let k=0;k<3;k++){const rr=r+(off+k)*dr,cc=c+(off+k)*dc;if(rr<0||rr>=sosSize||cc<0||cc>=sosSize){ok=false;break}cells.push(rr*sosSize+cc)}
      if(ok&&cells.map(i=>sosBoard[i]).join('')==='SOS'){
        const key=cells.join('-');
        if(!sosLines.some(x=>x.key===key)){sosLines.push({key,cells,player});made++;}
      }
    }
  }
  if(made){sosScores[player]+=made;$('#sosMsg').textContent=made===1?`${sosNames()[player]} έκανε SOS! +1 πόντος`:`${sosNames()[player]} έκανε ${made} SOS! +${made} πόντοι`;}
  else $('#sosMsg').textContent='';
  sosPlayer=1-sosPlayer;
  if(sosBoard.every(Boolean)){sosOver=true;const n=sosNames();$('#sosMsg').textContent=sosScores[0]===sosScores[1]?`Ισοπαλία ${sosScores[0]}–${sosScores[1]}`:`Νικητής: ${sosScores[0]>sosScores[1]?n[0]:n[1]} (${Math.max(...sosScores)} πόντοι)`;}
  renderSOS();
}
$('#sosNew').onclick=()=>{sosBoard=Array(sosSize*sosSize).fill('');sosPlayer=0;sosOver=false;sosLines=[];$('#sosMsg').textContent='';renderSOS()};
$('#sosReset').onclick=()=>{sosScores=[0,0];sosBoard=Array(sosSize*sosSize).fill('');sosPlayer=0;sosOver=false;sosLines=[];$('#sosMsg').textContent='';renderSOS()};

$("#flipCoin").onclick=()=>{let c=$("#coinDisc");c.classList.remove("flip");void c.offsetWidth;c.classList.add("flip");setTimeout(()=>{let r=Math.random()<.5?"Κορώνα":"Γράμματα";c.textContent=r==="Κορώνα"?"👑":"🔤";$("#coinResult").textContent=r;d.coin.unshift(r);d.coin=d.coin.slice(0,20);save()},850)};
function renderCoin(){$("#coinHistory").innerHTML=d.coin.length?d.coin.map((x,i)=>"<div class='custom-row'><span>"+(i+1)+". "+x+"</span></div>").join(""):"Δεν υπάρχουν ρίψεις."}

let ang=0,spin=false;const cols=["#ef4444","#f59e0b","#10b981","#06b6d4","#3b82f6","#8b5cf6","#ec4899","#64748b","#14b8a6","#f97316","#6366f1","#84cc16"];
function currentWheelPlayer(){if(!d.wheelPlayers.length)d.wheelPlayers=["Παίκτης 1","Παίκτης 2"];d.wheelPlayerIndex%=d.wheelPlayers.length;return d.wheelPlayers[d.wheelPlayerIndex]}
function drawWheel(){let c=$("#wheelCanvas"),x=c.getContext("2d"),n=d.wheel.length||1;x.clearRect(0,0,700,700);for(let i=0;i<n;i++){let a=ang+i*2*Math.PI/n,b=ang+(i+1)*2*Math.PI/n;x.beginPath();x.moveTo(350,350);x.arc(350,350,330,a,b);x.fillStyle=cols[i%cols.length];x.fill();x.save();x.translate(350,350);x.rotate((a+b)/2);x.textAlign="right";x.fillStyle="white";x.font="bold 22px sans-serif";x.fillText(d.wheel[i].slice(0,22),305,8);x.restore()}x.beginPath();x.arc(350,350,50,0,Math.PI*2);x.fillStyle="white";x.fill()}
function renderWheelPlayers(){const list=$("#wheelPlayersList"),cur=$("#wheelCurrentPlayer");if(cur)cur.textContent=currentWheelPlayer();if(!list)return;list.innerHTML="";d.wheelPlayers.forEach((name,i)=>{const row=document.createElement("div");row.className="wheel-player-chip"+(i===d.wheelPlayerIndex?" active":"");const input=document.createElement("input");input.value=name;input.maxLength=24;input.onchange=()=>{d.wheelPlayers[i]=input.value.trim()||`Παίκτης ${i+1}`;save()};const del=document.createElement("button");del.textContent="×";del.title="Διαγραφή παίκτη";del.onclick=()=>{if(d.wheelPlayers.length<=2)return toast("Χρειάζονται τουλάχιστον 2 παίκτες");d.wheelPlayers.splice(i,1);if(d.wheelPlayerIndex>=d.wheelPlayers.length)d.wheelPlayerIndex=0;save()};row.append(input,del);list.append(row)})}
$("#addWheelPlayer").onclick=()=>{let v=$("#wheelPlayerInput").value.trim();if(!v)return;if(d.wheelPlayers.length>=12)return toast("Μέχρι 12 παίκτες");d.wheelPlayers.push(v);$("#wheelPlayerInput").value="";save()};
$("#spinWheel").onclick=()=>{if(spin||d.wheel.length<2)return;spin=true;const player=currentWheelPlayer();let st=ang,ex=Math.PI*2*(5+Math.random()*4),t0=performance.now();function a(t){let q=Math.min(1,(t-t0)/3500);ang=st+ex*(1-Math.pow(1-q,3));drawWheel();if(q<1)requestAnimationFrame(a);else{spin=false;let n=d.wheel.length,v=(((-Math.PI/2-ang)%(Math.PI*2))+Math.PI*2)%(Math.PI*2),i=Math.floor(v/(Math.PI*2/n));$("#wheelResult").textContent=player+": "+d.wheel[i];d.wheelPlayerIndex=(d.wheelPlayerIndex+1)%d.wheelPlayers.length;save()}}requestAnimationFrame(a)};
$("#addWheel").onclick=()=>{let v=$("#wheelInput").value.trim();if(!v)return;if(d.wheel.length>=12)return toast("Ο τροχός χωράει έως 12 επιλογές");d.wheel.push(v);$("#wheelInput").value="";save();drawWheel()};
function renderWheel(){let e=$("#wheelItems");if(!e)return;e.innerHTML="";d.wheel.forEach((v,i)=>{let r=document.createElement("div"),s=document.createElement("span"),ed=document.createElement("button"),del=document.createElement("button");s.textContent=(i+1)+". "+v;ed.textContent="✏️";del.textContent="🗑️";ed.onclick=()=>{let nv=prompt("Αλλαγή",v);if(nv){d.wheel[i]=nv;save();drawWheel()}};del.onclick=()=>{if(d.wheel.length<=2)return toast("Χρειάζονται 2 επιλογές");d.wheel.splice(i,1);save();drawWheel()};r.append(s,ed,del);e.append(r)})}

const defaultFlags=[["assets/flags/albania.webp","Αλβανία"],["assets/flags/andorra.webp","Ανδόρα"],["assets/flags/austria.webp","Αυστρία"],["assets/flags/belarus.webp","Λευκορωσία"],["assets/flags/belgium.webp","Βέλγιο"],["assets/flags/bosnia.webp","Βοσνία και Ερζεγοβίνη"],["assets/flags/bulgaria.webp","Βουλγαρία"],["assets/flags/croatia.webp","Κροατία"],["assets/flags/czechia.webp","Τσεχία"],["assets/flags/denmark.webp","Δανία"],["assets/flags/england.webp","Αγγλία"],["assets/flags/estonia.webp","Εσθονία"],["assets/flags/finland.webp","Φινλανδία"],["assets/flags/france.webp","Γαλλία"],["assets/flags/germany.webp","Γερμανία"],["assets/flags/greece.webp","Ελλάδα"],["assets/flags/hungary.webp","Ουγγαρία"],["assets/flags/iceland.webp","Ισλανδία"],["assets/flags/ireland.webp","Ιρλανδία"],["assets/flags/italy.webp","Ιταλία"],["assets/flags/kosovo.webp","Κόσοβο"],["assets/flags/latvia.webp","Λετονία"],["assets/flags/liechtenstein.webp","Λιχτενστάιν"],["assets/flags/lithuania.webp","Λιθουανία"],["assets/flags/luxembourg.webp","Λουξεμβούργο"],["assets/flags/north-macedonia.webp","Βόρεια Μακεδονία"],["assets/flags/malta.webp","Μάλτα"],["assets/flags/moldova.webp","Μολδαβία"],["assets/flags/monaco.webp","Μονακό"],["assets/flags/montenegro.webp","Μαυροβούνιο"],["assets/flags/netherlands.webp","Ολλανδία"],["assets/flags/northern-ireland.webp","Βόρεια Ιρλανδία"],["assets/flags/norway.webp","Νορβηγία"],["assets/flags/poland.webp","Πολωνία"],["assets/flags/portugal.webp","Πορτογαλία"],["assets/flags/romania.webp","Ρουμανία"],["assets/flags/russia.webp","Ρωσία"],["assets/flags/san-marino.webp","Άγιος Μαρίνος"],["assets/flags/scotland.webp","Σκωτία"],["assets/flags/serbia.webp","Σερβία"],["assets/flags/slovakia.webp","Σλοβακία"],["assets/flags/slovenia.webp","Σλοβενία"],["assets/flags/spain.webp","Ισπανία"],["assets/flags/sweden.webp","Σουηδία"],["assets/flags/switzerland.webp","Ελβετία"],["assets/flags/turkey.webp","Τουρκία"],["assets/flags/ukraine.webp","Ουκρανία"],["assets/flags/united-kingdom.webp","Ηνωμένο Βασίλειο"],["assets/flags/vatican-city.webp","Βατικανό"],["assets/flags/wales.webp","Ουαλία"],["assets/flags/european-union.webp","Ευρωπαϊκή Ένωση"]];
// V24: οι σημαίες αποθηκεύονται ως ξεχωριστές εικόνες. Η παλιά λίστα emoji αναβαθμίζεται αυτόματα μία φορά.
if(d.flagDataVersion!==24){d.customFlagList=defaultFlags.map(x=>[...x]);d.flagDataVersion=24;localStorage.setItem("retroGamesDLemonis",JSON.stringify(d));}
d.customFlagList=Array.isArray(d.customFlagList)&&d.customFlagList.length>=4?d.customFlagList.map(x=>[String(x[0]||""),String(x[1]||"").trim()]).filter(x=>x[0]&&x[1]):defaultFlags.map(x=>[...x]);
function activeFlags(){return d.customFlagList.length>=4?d.customFlagList:defaultFlags}
let flagDeck=[];
let currentFlag=null;
function refillFlagDeck(){flagDeck=shuffle(activeFlags().map(x=>[...x]));}
function newFlag(){
  const list=activeFlags();
  if(list.length<4){$("#flagMsg").textContent="Χρειάζονται τουλάχιστον 4 χώρες";return}
  if(!flagDeck.length)refillFlagDeck();
  let q=flagDeck.pop();
  if(currentFlag&&q[1]===currentFlag[1]&&flagDeck.length){flagDeck.unshift(q);q=flagDeck.pop()}
  currentFlag=q;const flagImg=$("#flagImage");flagImg.src=q[0];flagImg.alt="Σημαία χώρας";$("#flagMsg").textContent="";
  let wrong=shuffle(list.filter(x=>x[1]!==q[1])).slice(0,3);
  let o=shuffle([q,...wrong]).map(x=>x[1]);
  options($("#flagOptions"),o,q[1],a=>{if(a===q[1]){d.flags++;save();$("#flagMsg").textContent="Σωστά"}else $("#flagMsg").textContent="Η σωστή απάντηση είναι "+q[1]})
}
$("#nextFlag").onclick=newFlag;
function renderFlagEditor(){
  const box=$("#flagEditorList");if(!box)return;box.innerHTML="";
  d.customFlagList.forEach((item,i)=>{
    const row=document.createElement("div");row.className="flag-editor-row";
    const preview=document.createElement("img");preview.src=item[0];preview.alt=item[1];preview.className="flag-editor-preview";
    const country=document.createElement("input");country.value=item[1];country.setAttribute("aria-label","Χώρα");
    const del=document.createElement("button");del.textContent="🗑️";del.title="Διαγραφή";
    country.onchange=()=>{const v=country.value.trim();if(v){d.customFlagList[i][1]=v;flagDeck=[];save()}else country.value=d.customFlagList[i][1]};
    del.onclick=()=>{if(d.customFlagList.length<=4)return toast("Χρειάζονται τουλάχιστον 4 χώρες");d.customFlagList.splice(i,1);flagDeck=[];save();renderFlagEditor()};
    row.append(preview,country,del);box.append(row);
  });
}


function commons(file){
  const normalized=file.replace(/ /g,"_");
  let h=md5(normalized);
  return `https://upload.wikimedia.org/wikipedia/commons/${h[0]}/${h.slice(0,2)}/${encodeURIComponent(normalized).replace(/%2F/g,"/")}`;
}
/* Μικρή υλοποίηση MD5 μόνο για τη δημιουργία σταθερών Wikimedia URLs */
function md5(str){function cmn(q,a,b,x,s,t){a=(a+q+x+t)|0;return (((a<<s)|(a>>>(32-s)))+b)|0}function ff(a,b,c,d,x,s,t){return cmn((b&c)|((~b)&d),a,b,x,s,t)}function gg(a,b,c,d,x,s,t){return cmn((b&d)|(c&(~d)),a,b,x,s,t)}function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t)}function ii(a,b,c,d,x,s,t){return cmn(c^(b|(~d)),a,b,x,s,t)}function cycle(x,k){let a=x[0],b=x[1],c=x[2],d=x[3];a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);x[0]=(a+x[0])|0;x[1]=(b+x[1])|0;x[2]=(c+x[2])|0;x[3]=(d+x[3])|0}function blk(s){let n=s.length*8,a=[];for(let i=0;i<n;i+=8)a[i>>5]|=(s.charCodeAt(i/8)&255)<<(i%32);a[n>>5]|=128<<(n%32);a[(((n+64)>>>9)<<4)+14]=n;return a}let x=[1732584193,-271733879,-1732584194,271733878],a=blk(unescape(encodeURIComponent(str)));for(let i=0;i<a.length;i+=16)cycle(x,a.slice(i,i+16));return x.map(v=>[0,8,16,24].map(s=>(v>>>s&255).toString(16).padStart(2,"0")).join("")).join("")}

let folderPlayers=[];
let folderTeams=[];
let folderQuestions={footballers:[],history:[],audience:[]};
let folderSprites={};

async function loadFolderLibrary(){
  try{
    const response=await fetch('assets/library.json?version='+Date.now(),{cache:'no-store'});
    if(!response.ok) throw new Error('library.json');
    const library=await response.json();
    folderPlayers=Array.isArray(library.players)?library.players:[];
    folderTeams=Array.isArray(library.teams)?library.teams:[];
    folderSprites=library.sprites||{};
    const q=library.questions||{};
    folderQuestions={footballers:Array.isArray(q.footballers)?q.footballers:[],history:Array.isArray(q.history)?q.history:[],audience:Array.isArray(q.audience)?q.audience:[]};
  }catch(error){
    folderPlayers=[];
    folderTeams=[];
    folderSprites={};
    folderQuestions={footballers:[],history:[],audience:[]};
  }
}

function folderLibraryStatus(){
  const box=$('#folderLibraryStatus');
  if(!box)return;
  const totalQuestions=folderQuestions.footballers.length+folderQuestions.history.length+folderQuestions.audience.length;
  box.innerHTML=`<b>Περιεχόμενο μέσα στο ZIP:</b> ${folderPlayers.length} ποδοσφαιριστές, ${folderTeams.length} σήματα και ${totalQuestions} ερωτήσεις.`;
}

const spriteCache=new Map();
function renderSpriteToImg(img,fb,cfg,idx,kind){
  const key=cfg.file;
  let sprite=spriteCache.get(key);
  if(!sprite){
    sprite=new Image();
    spriteCache.set(key,sprite);
    sprite.src=cfg.file+'?v=stable7';
  }
  const draw=()=>{
    try{
      const col=idx%cfg.cols,row=Math.floor(idx/cfg.cols);
      const cellW=Math.floor(sprite.naturalWidth/cfg.cols),cellH=Math.floor(sprite.naturalHeight/cfg.rows);
      const canvas=document.createElement('canvas');
      canvas.width=cellW;canvas.height=cellH;
      const ctx=canvas.getContext('2d');
      ctx.fillStyle=kind==='teams'?'#ffffff':'#e9e6ef';ctx.fillRect(0,0,cellW,cellH);
      ctx.drawImage(sprite,col*cellW,row*cellH,cellW,cellH,0,0,cellW,cellH);
      img.style.backgroundImage='';img.style.objectFit='contain';img.style.padding=kind==='teams'?'10px':'0';
      img.src=canvas.toDataURL('image/webp',0.95);
      img.style.display='block';fb.style.display='none';
    }catch(e){img.style.display='none';fb.style.display='grid'}
  };
  if(sprite.complete&&sprite.naturalWidth)draw();
  else {sprite.addEventListener('load',draw,{once:true});sprite.addEventListener('error',()=>{img.style.display='none';fb.style.display='grid'},{once:true});}
}
function setImg(img,fb,url){
  fb.style.display='none';img.style.display='block';
  img.style.backgroundImage='';img.style.backgroundSize='';img.style.backgroundPosition='';img.style.backgroundRepeat='';
  img.removeAttribute('src');
  if(typeof url==='string'&&url.startsWith('sprite:')){
    const parts=url.split(':'),kind=parts[1],idx=Number(parts[2]),cfg=folderSprites[kind];
    if(!cfg||!Number.isFinite(idx)){img.style.display='none';fb.style.display='grid';return}
    renderSpriteToImg(img,fb,cfg,idx,kind);return;
  }
  img.onload=()=>{fb.style.display='none';img.style.display='block'};
  img.onerror=()=>{img.style.display='none';fb.style.display='grid'};
  img.src=url;
}
function showQuizBallHub(){showQB('setup');renderQBNames();updateQBRounds()}
function showQB(part){['quizSetup','quizGame','quizResults'].forEach(id=>$('#'+id).classList.add('hidden'));$('#quiz'+part[0].toUpperCase()+part.slice(1)).classList.remove('hidden')}
const qbLabels={logo1:'Logo Quiz ×1',logo2:'Logo Quiz ×2',top5:'TOP 5 ×3',playerid:'Player ID ×2',footballers:'Footballers ×1',audience:'Ερωτήσεις κοινού ×1'};
const playerIdQuestions=[{"name":"Cristiano Ronaldo","aliases":["Cristiano","Ronaldo","Κριστιάνο Ρονάλντο"],"career":[["Sporting CP","2002–2003"],["Manchester United","2003–2009"],["Real Madrid","2009–2018"],["Juventus","2018–2021"],["Manchester United","2021–2022"],["Al-Nassr","2023–σήμερα"]]},{"name":"Lionel Messi","aliases":["Messi","Λιονέλ Μέσι","Μέσι"],"career":[["Barcelona","2004–2021"],["Paris Saint-Germain","2021–2023"],["Inter Miami","2023–σήμερα"]]},{"name":"Zlatan Ibrahimović","aliases":["Zlatan Ibrahimovic","Zlatan","Ιμπραΐμοβιτς"],"career":[["Malmö FF","1999–2001"],["Ajax","2001–2004"],["Juventus","2004–2006"],["Inter","2006–2009"],["Barcelona","2009–2010"],["AC Milan","2010–2012"],["Paris Saint-Germain","2012–2016"],["Manchester United","2016–2018"],["LA Galaxy","2018–2019"],["AC Milan","2020–2023"]]},{"name":"Neymar","aliases":["Neymar Jr","Νεϊμάρ"],"career":[["Santos","2009–2013"],["Barcelona","2013–2017"],["Paris Saint-Germain","2017–2023"],["Al-Hilal","2023–2025"],["Santos","2025–σήμερα"]]},{"name":"Ronaldo Nazário","aliases":["Ronaldo Nazario","Ronaldo","Ρονάλντο Ναζάριο"],"career":[["Cruzeiro","1993–1994"],["PSV Eindhoven","1994–1996"],["Barcelona","1996–1997"],["Inter","1997–2002"],["Real Madrid","2002–2007"],["AC Milan","2007–2008"],["Corinthians","2009–2011"]]},{"name":"Andrés Iniesta","aliases":["Andres Iniesta","Iniesta","Ινιέστα"],"career":[["Albacete","1994–1996"],["Barcelona B","1996–1998"],["Barcelona","1998–2018"],["Vissel Kobe","2018–2023"],["Emirates Club","2023–2024"]]},{"name":"David Beckham","aliases":["Beckham","Ντέιβιντ Μπέκαμ","Μπέκαμ"],"career":[["Manchester United","1992–2003"],["Real Madrid","2003–2007"],["LA Galaxy","2007–2012"],["AC Milan (δανεισμός)","2009"],["AC Milan (δανεισμός)","2010"],["Paris Saint-Germain","2013"]]},{"name":"Robert Lewandowski","aliases":["Lewandowski","Λεβαντόφσκι"],"career":[["Znicz Pruszków","2006–2008"],["Lech Poznań","2008–2010"],["Borussia Dortmund","2010–2014"],["Bayern Munich","2014–2022"],["Barcelona","2022–2026"]]},{"name":"Αντώνης Νικοπολίδης","aliases":["Antonis Nikopolidis","Νικοπολίδης"],"career":[["Παναθηναϊκός","1989–2004"],["Ολυμπιακός","2004–2011"]]},{"name":"Xavi Hernández","aliases":["Xavi Hernandez","Xavi","Τσάβι"],"career":[["Barcelona B","1998–1999"],["Barcelona","1999–2015"],["Al Sadd","2015–2019"]]},{"name":"Antoine Griezmann","aliases":["Griezmann","Γκριεζμάν"],"career":[["Real Sociedad B","2009–2010"],["Real Sociedad","2010–2014"],["Atlético Madrid","2014–2019"],["Barcelona","2019–2021"],["Atlético Madrid","2021–2022"],["Atlético Madrid","2022–2026"]]},{"name":"Thierry Henry","aliases":["Henry","Τιερί Ανρί","Ανρί"],"career":[["Monaco","1994–1999"],["Juventus","1999–2000"],["Arsenal","2000–2007"],["Barcelona","2007–2010"],["New York Red Bulls","2010–2014"]]},{"name":"Harry Kane","aliases":["Kane","Χάρι Κέιν","Κέιν"],"career":[["Tottenham Hotspur","2011–2023"],["Bayern Munich","2023–σήμερα"]]},{"name":"Eden Hazard","aliases":["Hazard","Εντέν Αζάρ","Αζάρ"],"career":[["Lille","2007–2012"],["Chelsea","2012–2019"],["Real Madrid","2019–2024"]]},{"name":"Steven Gerrard","aliases":["Gerrard","Στίβεν Τζέραρντ","Τζέραρντ"],"career":[["Liverpool","1998–2015"],["LA Galaxy","2015–2016"]]},{"name":"Kylian Mbappé","aliases":["Kylian Mbappe","Mbappé","Mbappe","Εμπαπέ"],"career":[["Monaco","2015–2017"],["Paris Saint-Germain","2017–2025"],["Real Madrid","2025–σήμερα"]]}];
const top5Questions=[{"question":"Ποιες είναι οι 5 ακριβότερες μεταγραφές του 2026 σύμφωνα με το Transfermarkt;","answers":["Morgan Rogers","Elliot Anderson","Sandro Tonali","Mateus Fernandes","Hugo Ekitiké"],"aliases":{"Morgan Rogers":["Rogers"],"Elliot Anderson":["Anderson"],"Sandro Tonali":["Tonali"],"Mateus Fernandes":["Fernandes"],"Hugo Ekitiké":["Ekitiké"]}},{"question":"Ποιες είναι οι 5 ακριβότερες μεταγραφές του Ολυμπιακού τη σεζόν 2025/26 σύμφωνα με το Transfermarkt;","answers":["Gabriel Strefezza","Gustavo Mancha","Diogo Nascimento","Lorenzo Scipioni","Mehdi Taremi"],"aliases":{"Gabriel Strefezza":["Strefezza"],"Gustavo Mancha":["Mancha"],"Diogo Nascimento":["Nascimento"],"Lorenzo Scipioni":["Scipioni"],"Mehdi Taremi":["Taremi"]}},{"question":"Ποιες είναι οι 5 ακριβότερες μεταγραφές της Manchester City τη σεζόν 2025/26 σύμφωνα με το Transfermarkt;","answers":["Tijjani Reijnders","Rayan Aït-Nouri","Rayan Cherki","Sverre Nypan","Marcus Bettinelli"],"aliases":{"Tijjani Reijnders":["Reijnders"],"Rayan Aït-Nouri":["Nouri"],"Rayan Cherki":["Cherki"],"Sverre Nypan":["Nypan"],"Marcus Bettinelli":["Bettinelli"]}},{"question":"Ποιες είναι οι 5 ακριβότερες μεταγραφές της Arsenal τη σεζόν 2025/26 σύμφωνα με το Transfermarkt;","answers":["Viktor Gyökeres","Martín Zubimendi","Cristhian Mosquera","Christian Nørgaard","Kepa Arrizabalaga"],"aliases":{"Viktor Gyökeres":["Gyökeres"],"Martín Zubimendi":["Zubimendi"],"Cristhian Mosquera":["Mosquera"],"Christian Nørgaard":["Nørgaard"],"Kepa Arrizabalaga":["Arrizabalaga"]}},{"question":"Ποιοι είναι οι 5 παίκτες με τις περισσότερες ασίστ στη LaLiga τη σεζόν 2025/26;","answers":["Lamine Yamal","Nicolas Pépé","Luis Milla","Álex Baena","Álex Berenguer"],"aliases":{"Lamine Yamal":["Yamal","Γιαμάλ"],"Nicolas Pépé":["Pépé"],"Luis Milla":["Milla"],"Álex Baena":["Baena"],"Álex Berenguer":["Berenguer"]}},{"question":"Ποιοι είναι οι 5 παίκτες με τις περισσότερες ασίστ στην Premier League τη σεζόν 2025/26;","answers":["Bruno Fernandes","Rayan Cherki","Jarrod Bowen","Morgan Rogers","Bukayo Saka"],"aliases":{"Bruno Fernandes":["Fernandes","Μπρούνο Φερνάντες"],"Rayan Cherki":["Cherki"],"Jarrod Bowen":["Bowen"],"Morgan Rogers":["Rogers"],"Bukayo Saka":["Saka"]}},{"question":"Ποιοι είναι οι 5 πρώτοι σκόρερ της Stoiximan Super League τη σεζόν 2025/26;","answers":["Ayoub El Kaabi","Luka Jović","Loren Morón","Zini","Chiquinho"],"aliases":{"Ayoub El Kaabi":["Kaabi","El Kaabi","Ελ Κααμπί"],"Luka Jović":["Jović"],"Loren Morón":["Morón"]}},{"question":"Ποιοι είναι οι 5 πρώτοι σκόρερ της LaLiga τη σεζόν 2025/26;","answers":["Kylian Mbappé","Vedat Muriqi","Ante Budimir","Ferran Torres","Lamine Yamal"],"aliases":{"Kylian Mbappé":["Mbappé","Mbappe","Εμπαπέ"],"Vedat Muriqi":["Muriqi"],"Ante Budimir":["Budimir"],"Ferran Torres":["Torres"],"Lamine Yamal":["Yamal","Γιαμάλ"]}},{"question":"Ποιοι είναι οι 5 πρώτοι σκόρερ της Premier League τη σεζόν 2025/26;","answers":["Erling Haaland","Igor Thiago","Antoine Semenyo","João Pedro","Yoane Wissa"],"aliases":{"Erling Haaland":["Haaland","Χάαλαντ"],"Igor Thiago":["Thiago"],"Antoine Semenyo":["Semenyo"],"João Pedro":["Pedro"],"Yoane Wissa":["Wissa"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στην ιστορία του Ολυμπιακού;","answers":["Predrag Đorđević","Giorgio Delasoudas","Anastasios Mitropoulos","José Holebas","Grigoris Georgatos"],"aliases":{"Predrag Đorđević":["Đorđević","Djordjevic","Τζόρτζεβιτς"],"Giorgio Delasoudas":["Delasoudas"],"Anastasios Mitropoulos":["Mitropoulos"],"José Holebas":["Holebas","Χολέμπας"],"Grigoris Georgatos":["Georgatos"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στην ιστορία του Παναθηναϊκού;","answers":["Mimis Domazos","Krzysztof Warzycha","Giannis Goumas","Antonis Antoniadis","Takis Fyssas"],"aliases":{"Mimis Domazos":["Domazos"],"Krzysztof Warzycha":["Warzycha","Βαζέχα"],"Giannis Goumas":["Goumas"],"Antonis Antoniadis":["Antoniadis"],"Takis Fyssas":["Fyssas"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες επίσημες συμμετοχές στην ιστορία της Real Madrid;","answers":["Raúl González","Iker Casillas","Manolo Sanchís","Sergio Ramos","Karim Benzema"],"aliases":{"Raúl González":["González","Raul","Raúl"],"Iker Casillas":["Casillas"],"Manolo Sanchís":["Sanchís"],"Sergio Ramos":["Ramos"],"Karim Benzema":["Benzema"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες επίσημες συμμετοχές στην ιστορία της Barcelona;","answers":["Lionel Messi","Xavi Hernández","Sergio Busquets","Andrés Iniesta","Gerard Piqué"],"aliases":{"Lionel Messi":["Messi","Μέσι"],"Xavi Hernández":["Hernández","Xavi","Τσάβι"],"Sergio Busquets":["Busquets","Μπουσκέτς"],"Andrés Iniesta":["Iniesta","Ινιέστα"],"Gerard Piqué":["Piqué","Pique","Πικέ"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες επίσημες συμμετοχές στην ιστορία της Manchester United;","answers":["Ryan Giggs","Sir Bobby Charlton","Paul Scholes","Bill Foulkes","Gary Neville"],"aliases":{"Ryan Giggs":["Giggs"],"Sir Bobby Charlton":["Charlton"],"Paul Scholes":["Scholes"],"Bill Foulkes":["Foulkes"],"Gary Neville":["Neville"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες επίσημες συμμετοχές στον Ολυμπιακό από το 2004 έως σήμερα;","answers":["Kostas Fortounis","Omar Elabdellaoui","Alberto Botía","José Holebas","Youssef El-Arabi"],"aliases":{"Kostas Fortounis":["Fortounis","Φορτούνης"],"Omar Elabdellaoui":["Elabdellaoui"],"Alberto Botía":["Botía"],"José Holebas":["Holebas","Χολέμπας"],"Youssef El-Arabi":["Arabi","El Arabi","El-Arabi","Ελ Αραμπί"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στο UEFA Champions League με τον Ολυμπιακό από το 2004 και μετά;","answers":["Antonis Nikopolidis","Ieroklis Stoltidis","Vasilis Torosidis","Luciano Galletti","Kostas Fortounis"],"aliases":{"Antonis Nikopolidis":["Nikopolidis"],"Ieroklis Stoltidis":["Stoltidis"],"Vasilis Torosidis":["Torosidis"],"Luciano Galletti":["Galletti"],"Kostas Fortounis":["Fortounis","Φορτούνης"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στο UEFA Champions League με τον Παναθηναϊκό από το 2004 και μετά;","answers":["Loukas Vyntra","Giorgos Karagounis","Dimitris Salpingidis","Gilberto Silva","Kostas Katsouranis"],"aliases":{"Loukas Vyntra":["Vyntra"],"Giorgos Karagounis":["Karagounis"],"Dimitris Salpingidis":["Salpingidis"],"Gilberto Silva":["Silva"],"Kostas Katsouranis":["Katsouranis"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στο UEFA Champions League με τη Real Madrid από το 2004 και μετά;","answers":["Karim Benzema","Luka Modrić","Sergio Ramos","Iker Casillas","Cristiano Ronaldo"],"aliases":{"Karim Benzema":["Benzema"],"Luka Modrić":["Modrić"],"Sergio Ramos":["Ramos"],"Iker Casillas":["Casillas"],"Cristiano Ronaldo":["Ronaldo","Cristiano","Κριστιάνο Ρονάλντο"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στο UEFA Champions League με τη Barcelona από το 2004 και μετά;","answers":["Xavi Hernández","Lionel Messi","Sergio Busquets","Gerard Piqué","Andrés Iniesta"],"aliases":{"Xavi Hernández":["Hernández","Xavi","Τσάβι"],"Lionel Messi":["Messi","Μέσι"],"Sergio Busquets":["Busquets","Μπουσκέτς"],"Gerard Piqué":["Piqué","Pique","Πικέ"],"Andrés Iniesta":["Iniesta","Ινιέστα"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στο UEFA Champions League με την Arsenal από το 2004 και μετά;","answers":["Thierry Henry","Theo Walcott","Kolo Touré","Freddie Ljungberg","Robert Pirès"],"aliases":{"Thierry Henry":["Henry"],"Theo Walcott":["Walcott"],"Kolo Touré":["Touré"],"Freddie Ljungberg":["Ljungberg"],"Robert Pirès":["Pirès"]}},{"question":"Ποιοι είναι οι 5 ποδοσφαιριστές με τις περισσότερες συμμετοχές στο UEFA Champions League με τη Manchester City από το 2004 και μετά;","answers":["Kevin De Bruyne","Fernandinho","Ederson","Bernardo Silva","İlkay Gündoğan"],"aliases":{"Kevin De Bruyne":["Bruyne","De Bruyne","Ντε Μπρόινε"],"Bernardo Silva":["Silva"],"İlkay Gündoğan":["Gündoğan","Gundogan"]}},{"question":"Ποιες είναι οι 5 ξένες χώρες με τους περισσότερους εκπροσώπους στη LaLiga τη σεζόν 2025/26;","answers":["Αργεντινή","Γαλλία","Ουρουγουάη","Μαρόκο","Βραζιλία"],"aliases":{}},{"question":"Ποιες είναι οι 5 ξένες χώρες με τους περισσότερους εκπροσώπους στην Premier League τη σεζόν 2025/26;","answers":["Γαλλία","Βραζιλία","Ολλανδία","Ισπανία","Γερμανία"],"aliases":{}}];
const audienceQuestions=[
{question:'Ποια χώρα έχει κατακτήσει τα περισσότερα Παγκόσμια Κύπελλα;',answers:['Βραζιλία'],wrong:['Γερμανία','Ιταλία','Αργεντινή']},
{question:'Ποιος ποδοσφαιριστής έχει τις περισσότερες κατακτήσεις Champions League στην ιστορία;',answers:['Paco Gento'],aliases:{'Paco Gento':['Πάκο Χέντο','Francisco Gento','Gento']},wrong:['Cristiano Ronaldo','Luka Modrić','Karim Benzema']},
{question:'Ποια ομάδα έχει κατακτήσει τα περισσότερα Champions League;',answers:['Real Madrid'],aliases:{'Real Madrid':['Ρεάλ Μαδρίτης','Ρεαλ Μαδριτης']},wrong:['AC Milan','Liverpool','Bayern Munich']},
{question:'Ποιος είναι ο πρώτος σκόρερ στην ιστορία του Champions League;',answers:['Cristiano Ronaldo'],aliases:{'Cristiano Ronaldo':['Κριστιάνο Ρονάλντο','Ronaldo','CR7']},wrong:['Lionel Messi','Robert Lewandowski','Karim Benzema']},
{question:'Ποιος είναι ο πρώτος σκόρερ στην ιστορία των εθνικών ομάδων;',answers:['Cristiano Ronaldo'],aliases:{'Cristiano Ronaldo':['Κριστιάνο Ρονάλντο','Ronaldo','CR7']},wrong:['Lionel Messi','Ali Daei','Romelu Lukaku']},
{question:'Ποια χώρα έχει κατακτήσει τα περισσότερα EURO;',answers:['Γερμανία','Ισπανία'],wrong:['Γαλλία','Ιταλία','Πορτογαλία']},
{question:'Ποιος είναι ο μοναδικός τερματοφύλακας που έχει κατακτήσει τη Χρυσή Μπάλα;',answers:['Lev Yashin'],aliases:{'Lev Yashin':['Λεβ Γιασίν','Yashin','Γιασίν']},wrong:['Gianluigi Buffon','Manuel Neuer','Iker Casillas']},
{question:'Ποια ομάδα έχει κατακτήσει τα περισσότερα πρωταθλήματα Αγγλίας;',answers:['Liverpool'],aliases:{'Liverpool':['Λίβερπουλ']},wrong:['Manchester United','Arsenal','Manchester City']},
{question:'Ποια ομάδα έχει κατακτήσει τα περισσότερα πρωταθλήματα Ισπανίας;',answers:['Real Madrid'],aliases:{'Real Madrid':['Ρεάλ Μαδρίτης','Ρεαλ Μαδριτης']},wrong:['Barcelona','Atlético Madrid','Athletic Bilbao']},
{question:'Ποια ομάδα έχει κατακτήσει τα περισσότερα πρωταθλήματα Ιταλίας;',answers:['Juventus'],aliases:{'Juventus':['Γιουβέντους']},wrong:['Inter','AC Milan','Napoli']},
{question:'Ποια ομάδα έχει κατακτήσει τα περισσότερα Κύπελλα Πρωταθλητριών/Champions League στην Αγγλία;',answers:['Liverpool'],aliases:{'Liverpool':['Λίβερπουλ']},wrong:['Manchester United','Chelsea','Nottingham Forest']},
{question:'Ποια χώρα έχει τους περισσότερους νικητές της Χρυσής Μπάλας;',answers:['Γερμανία','Ολλανδία','Πορτογαλία','Αργεντινή'],wrong:['Ισπανία','Γαλλία','Βραζιλία']},
{question:'Ποιος είναι ο νεότερος σκόρερ στην ιστορία του Champions League;',answers:['Ansu Fati'],aliases:{'Ansu Fati':['Ανσού Φατί','Fati']},wrong:['Lamine Yamal','Kylian Mbappé','Bojan Krkić']},
{question:'Ποιος έχει τις περισσότερες συμμετοχές στην ιστορία του Champions League;',answers:['Cristiano Ronaldo'],aliases:{'Cristiano Ronaldo':['Κριστιάνο Ρονάλντο','Ronaldo','CR7']},wrong:['Iker Casillas','Lionel Messi','Thomas Müller']},
{question:'Ποιος είναι ο μοναδικός ποδοσφαιριστής που έχει σκοράρει σε 5 διαφορετικά Παγκόσμια Κύπελλα;',answers:['Cristiano Ronaldo'],aliases:{'Cristiano Ronaldo':['Κριστιάνο Ρονάλντο','Ronaldo','CR7']},wrong:['Lionel Messi','Miroslav Klose','Pelé']}
];
let qb={names:[],scores:[],cats:[],totalTurns:0,turn:0,currentCat:null,current:null,answered:false,selectedCorrect:null,selectedButton:null,used50:[],usedDouble:[],doubleActive:false,bag:[],playerBag:[],top5Bag:[],audienceBag:[],playerIdBag:[]};
function renderQBNames(){const count=Number($('#qbPlayerCount').value),box=$('#qbNames');box.innerHTML='';for(let i=0;i<count;i++){let l=document.createElement('label');l.textContent='Όνομα παίκτη '+(i+1);let inp=document.createElement('input');inp.id='qbName'+i;inp.value=(d.players[i]||('Παίκτης '+(i+1)));l.append(inp);box.append(l)}}
function selectedQBCats(){return $$('.qb-choice input:checked:not(:disabled)').map(x=>x.value)}
function updateQBRounds(){$$('.qb-choice').forEach(x=>x.classList.toggle('active',x.querySelector('input').checked));const n=Number($('#qbPlayerCount').value),c=selectedQBCats().length;$('#qbRoundsInfo').innerHTML=`<b>${c*n} γύροι συνολικά</b><small>Σε κάθε γύρο ο παίκτης επιλέγει κατηγορία</small>`}
$('#qbPlayerCount').onchange=()=>{renderQBNames();updateQBRounds()};$$('.qb-choice input').forEach(x=>x.onchange=updateQBRounds);
function refillQBBag(){qb.bag=shuffle(folderTeams.map((_,i)=>i))}function nextQBTeam(){if(!qb.bag.length)refillQBBag();return folderTeams[qb.bag.shift()]}
function nextFootballer(){if(!qb.playerBag.length)qb.playerBag=shuffle(folderPlayers.map((_,i)=>i));return folderPlayers[qb.playerBag.shift()]}
function nextTop5(){if(!qb.top5Bag.length)qb.top5Bag=shuffle(top5Questions.map((_,i)=>i));return top5Questions[qb.top5Bag.shift()]}
function nextAudience(){if(!qb.audienceBag.length)qb.audienceBag=shuffle(audienceQuestions.map((_,i)=>i));return audienceQuestions[qb.audienceBag.shift()]}
function nextPlayerId(){if(!qb.playerIdBag.length)qb.playerIdBag=shuffle(playerIdQuestions.map((_,i)=>i));return playerIdQuestions[qb.playerIdBag.shift()]}
function currentQBPlayer(){return qb.turn%qb.names.length}
function renderQBScore(){const turn=currentQBPlayer();$('#qbScoreboard').innerHTML=qb.names.map((n,i)=>`<span class="${i===turn?'active':''}"><small>${n}</small><b>${qb.scores[i]}</b></span>`).join('');$('#qbTurnName').textContent=qb.names[turn];$('#qbProgress').textContent=`Γύρος ${Math.min(qb.turn+1,qb.totalTurns)} από ${qb.totalTurns}`}
function showQBStage(id){['qbCategoryPick','qbBeforeQuestion','qbQuestionCard'].forEach(x=>$('#'+x).classList.add('hidden'));$('#'+id).classList.remove('hidden')}
$('#qbStart').onclick=()=>{const cats=selectedQBCats();if(!cats.length)return toast('Επίλεξε τουλάχιστον μία κατηγορία');if(cats.some(x=>x.startsWith('logo'))&&folderTeams.length<3)return toast('Δεν υπάρχουν αρκετά λογότυπα');if(cats.includes('footballers')&&folderPlayers.length<4)return toast('Δεν υπάρχουν αρκετές φωτογραφίες ποδοσφαιριστών');const count=Number($('#qbPlayerCount').value);qb.names=Array.from({length:count},(_,i)=>($('#qbName'+i).value.trim()||('Παίκτης '+(i+1))));qb.scores=Array(count).fill(0);qb.used50=Array(count).fill(false);qb.usedDouble=Array(count).fill(false);qb.cats=cats;qb.totalTurns=cats.length*count;qb.turn=0;qb.bag=[];qb.playerBag=[];qb.top5Bag=[];qb.audienceBag=[];qb.playerIdBag=[];showQB('game');renderCategoryPick()};
function renderCategoryPick(){if(qb.turn>=qb.totalTurns)return finishQB();qb.currentCat=null;qb.current=null;qb.answered=false;qb.doubleActive=false;renderQBScore();const box=$('#qbAvailableCats');box.innerHTML='';for(const cat of qb.cats){const b=document.createElement('button');b.className='qb-pick-card';b.innerHTML=`<b>${qbLabels[cat]}</b><small>${['logo1','footballers','audience'].includes(cat)?'1 πόντος':['logo2','playerid'].includes(cat)?'2 πόντοι':'έως 3 πόντοι'}</small>`;b.onclick=()=>prepareQuestion(cat);box.append(b)}showQBStage('qbCategoryPick')}
function prepareQuestion(cat){qb.currentCat=cat;const p=currentQBPlayer();$('#qbBeforeTitle').textContent=qbLabels[cat];$('#qbUseDouble').disabled=qb.usedDouble[p];$('#qbUseDouble').classList.toggle('used',qb.usedDouble[p]);showQBStage('qbBeforeQuestion')}
$('#qbUseDouble').onclick=()=>{const p=currentQBPlayer();if(qb.usedDouble[p])return;qb.usedDouble[p]=true;qb.doubleActive=true;startQuestion()};
$('#qbNoDouble').onclick=()=>{qb.doubleActive=false;startQuestion()};
function renderTop5Inputs(){const box=$('#qbTop5Inputs');box.innerHTML='';for(let i=0;i<5;i++){const input=document.createElement('input');input.type='text';input.autocomplete='off';input.placeholder=(i+1)+'η απάντηση';box.append(input)}}
function applyLogoMask(team){
  const box=$('#qbImageBox'),top=box?.querySelector('.logo-cover-top'),mid=box?.querySelector('.logo-cover-mid');
  if(!top||!mid)return;
  [top,mid].forEach(x=>{x.style.display='none';x.style.left='';x.style.right='';x.style.top='';x.style.height='';x.style.width=''});
  const n=(team?.name||'').toLowerCase();
  const masks={
    'olympiacos':[[18,24,64,12],[24,66,52,10]],'panathinaikos':[[18,18,64,12],[28,68,44,10]],'arsenal':[[26,14,48,12]],
    'manchester city':[[22,16,56,11],[35,68,30,9]],'chelsea':[[18,15,64,10],[30,72,40,9]],'real madrid':[[30,68,40,10]],
    'barcelona':[[30,18,40,10]],'bayern munich':[[18,18,64,10],[24,70,52,9]],'paris saint-germain':[[16,16,68,10],[22,72,56,9]],
    'liverpool':[[28,70,44,10]],'manchester united':[[18,15,64,11],[24,70,52,10]],'tottenham':[[24,70,52,10]],
    'newcastle':[[18,72,64,10]],'west ham':[[25,18,50,11],[30,70,40,9]],'fenerbahce':[[16,18,68,10],[26,72,48,9]],
    'feyenoord':[[20,18,60,10],[25,72,50,9]],'ajax':[[26,14,48,10]],'roma':[[30,69,40,9]],'paok':[[30,15,40,10]],
    'aek':[[26,14,48,10]],'porto':[[30,72,40,9]],'benfica':[[28,72,44,9]],'schalke':[[32,25,36,18]],'napoli':[[35,35,30,28]],
    'inter':[[31,27,38,34]],'atletico madrid':[[25,16,50,10]],'atletico mineiro':[[28,35,44,12]],'lille':[[28,64,44,12]],
    'bayer leverkusen':[[27,19,46,10],[33,69,34,9]],'borussia dortmund':[[30,31,40,20]],'psv eindhoven':[[28,27,44,18]],
    'alkmaar':[[28,34,44,18]],'gremio':[[22,17,56,9],[25,70,50,9]],'galatasaray':[[28,72,44,9]],'flamengo':[[24,18,52,10]],
    'sevilla':[[32,28,36,16]],'como':[[26,21,48,18]],'fiorentina':[[34,70,32,9]],'lazio':[[26,70,48,9]],
    'monaco':[[28,23,44,10]],'alaves':[[18,18,64,10],[28,70,44,9]],'atromitos':[[17,18,66,10],[28,70,44,9]],
    'besiktas':[[34,18,32,11],[33,69,34,9]],'nottingham forest':[[28,66,44,12]],'lyon':[[24,18,52,15]],'marseille':[[34,34,32,26]]
  };
  const arr=masks[n]||[[25,12,50,8]];
  [top,mid].forEach((el,i)=>{const m=arr[i];if(!m)return;el.style.display='block';el.style.left=m[0]+'%';el.style.width=m[2]+'%';el.style.right='auto';el.style.top=m[1]+'%';el.style.height=m[3]+'%';});
}
function startQuestion(){const cat=qb.currentCat,p=currentQBPlayer();qb.current=cat==='top5'?nextTop5():cat==='audience'?nextAudience():cat==='playerid'?nextPlayerId():cat==='footballers'?nextFootballer():nextQBTeam();qb.answered=false;qb.selectedCorrect=null;qb.selectedButton=null;$('#qbConfirm').classList.add('hidden');$('#qbConfirm').disabled=true;$('#qbCategory').textContent=qbLabels[cat];const base=['logo1','footballers','audience'].includes(cat)?1:['logo2','playerid'].includes(cat)?2:3;$('#qbPoints').textContent=(cat==='top5'?'1 ή 3':base*(qb.doubleActive?2:1))+' πόντοι'+(qb.doubleActive?' · ×2 ενεργό':'');$('#qbMsg').textContent='';$('#qbNext').classList.add('hidden');$('#qbMultiple').innerHTML='';$('#qbAnswer').value='';const written=['logo2','audience','playerid'].includes(cat);$('#qbMultiple').classList.toggle('hidden',!['logo1','footballers'].includes(cat));$('#qbWritten').classList.toggle('hidden',!written);$('#qbTop5').classList.toggle('hidden',cat!=='top5');$('#qbImageBox').classList.toggle('hidden',['top5','audience','playerid'].includes(cat));$('#qbPlayerIdCard').classList.toggle('hidden',cat!=='playerid');$('#qbImageBox').classList.toggle('logo',cat!=='footballers');$('#qbImageBox').classList.toggle('footballer-photo',cat==='footballers');$('#qb5050').disabled=!['logo1','footballers','audience'].includes(cat)||qb.used50[p];$('#qb5050').classList.toggle('used',qb.used50[p]);if(cat==='top5'){$('#qbQuestion').textContent=qb.current.question;renderTop5Inputs();$('#qbTop5Decision').classList.add('hidden');$('#qbTop5RiskBox').classList.add('hidden');$('#qbTop5Check4').classList.remove('hidden');$('#qbTop5Fifth').value=''}else if(cat==='playerid'){$('#qbQuestion').textContent='Ποιος ποδοσφαιριστής είναι;';$('#qbAnswer').placeholder='Γράψε το όνομα του παίκτη';$('#qbPlayerIdCard').innerHTML='<div class="player-id-title">PLAYER ID</div><div class="player-id-route">'+qb.current.career.map((x,i)=>'<div class="player-id-stop"><span class="player-id-dot">'+(i+1)+'</span><div><b>'+x[0]+'</b><small>'+x[1]+'</small></div></div>').join('')+'</div>'}else if(cat==='audience'){$('#qbQuestion').textContent=qb.current.question;$('#qbAnswer').placeholder='Γράψε την απάντηση'}else{$('#qbQuestion').textContent=cat==='footballers'?'Ποιος ποδοσφαιριστής είναι;':'Ποια ομάδα είναι;';$('#qbAnswer').placeholder='Γράψε το όνομα της ομάδας';setImg($('#qbLogo'),$('#qbLogoFallback'),qb.current.img);if(cat!=='footballers')applyLogoMask(qb.current)}if(['logo1','footballers'].includes(cat)){const pool=cat==='footballers'?folderPlayers:folderTeams;const wrong=shuffle(pool.filter(x=>x.name!==qb.current.name)).slice(0,cat==='footballers'?3:2);for(const o of shuffle([qb.current,...wrong])){const b=document.createElement('button');b.textContent=o.name;b.onclick=()=>selectQBChoice(o.name===qb.current.name,b);$('#qbMultiple').append(b)}}showQBStage('qbQuestionCard')}
function correctAnswerText(){return qb.currentCat==='audience'?qb.current.answers.join(' ή '):qb.currentCat==='top5'?qb.current.answers.join(', '):qb.current.name}
function finishCurrent(correct,button=null,pointsOverride=null){if(qb.answered)return;qb.answered=true;$('#qbConfirm').classList.add('hidden');const cat=qb.currentCat,p=currentQBPlayer(),base=['logo2','playerid'].includes(cat)?2:1,points=pointsOverride!==null?pointsOverride:base*(qb.doubleActive?2:1);if(['logo1','footballers'].includes(cat)||(cat==='audience'&&!$('#qbMultiple').classList.contains('hidden'))){$$('#qbMultiple button').forEach(b=>{b.disabled=true;const ok=['logo1','footballers'].includes(cat)?b.textContent===qb.current.name:audienceMatch(b.textContent,qb.current);if(ok)b.classList.add('correct')});if(button&&!correct)button.classList.add('wrong')}if(correct){qb.scores[p]+=points;$('#qbMsg').innerHTML=`<b>Σωστά! +${points} πόντοι 🎉</b><br>Σωστή απάντηση: ${correctAnswerText()}`}else{$('#qbMsg').innerHTML=`<b>Λάθος · 0 πόντοι</b><br>Η σωστή απάντηση είναι: ${correctAnswerText()}`}$('#qbNext').classList.remove('hidden');renderQBScore()}
function selectQBChoice(correct,button){if(qb.answered)return;$$('#qbMultiple button').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');qb.selectedCorrect=correct;qb.selectedButton=button;$('#qbConfirm').disabled=false;$('#qbConfirm').classList.remove('hidden')}
function answerQB(correct,button){selectQBChoice(correct,button)}
$('#qbConfirm').onclick=()=>{if(qb.answered||qb.selectedCorrect===null||!qb.selectedButton)return;finishCurrent(qb.selectedCorrect,qb.selectedButton);$('#qbConfirm').classList.add('hidden')};
function normalizeAnswer(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9α-ω]/g,'')}
function lev(a,b){const m=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)m[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return m[a.length][b.length]}
function fuzzyTeam(input,correct){const a=normalizeAnswer(input),b=normalizeAnswer(correct);if(!a)return false;if(a.includes(b)||b.includes(a))return true;return lev(a,b)<=Math.max(1,Math.floor(b.length*.28))}
function audienceMatch(input,q){return q.answers.some(answer=>[answer,...(q.aliases?.[answer]||[])].some(form=>fuzzyTeam(input,form)))}
function top5Match(input,q,used=new Set()){for(const answer of q.answers){if(used.has(answer))continue;const forms=[answer,...(q.aliases?.[answer]||[])];if(forms.some(x=>fuzzyTeam(input,x)))return answer}return null}
$('#qbSubmit').onclick=()=>{const cat=qb.currentCat;finishCurrent(cat==='audience'?audienceMatch($('#qbAnswer').value,qb.current):cat==='playerid'?[qb.current.name,...(qb.current.aliases||[])].some(x=>fuzzyTeam($('#qbAnswer').value,x)):fuzzyTeam($('#qbAnswer').value,qb.current.name))};$('#qbAnswer').onkeydown=e=>{if(e.key==='Enter')$('#qbSubmit').click()};
$('#qbPass').onclick=()=>{if(qb.answered)return;finishCurrent(false);$('#qbMsg').innerHTML=`<b>ΠΑΣΟ · 0 πόντοι</b><br>Η σωστή απάντηση είναι: ${correctAnswerText()}`};
$('#qbTop5Check4').onclick=()=>{if(qb.answered)return;const inputs=$$('#qbTop5Inputs input'),used=new Set();let mistakes=0;for(const inp of inputs){const value=inp.value.trim();inp.classList.remove('correct-input','wrong-input');if(!value)continue;const match=top5Match(value,qb.current,used);if(match){used.add(match);inp.classList.add('correct-input')}else{mistakes++;inp.classList.add('wrong-input')}}if(mistakes>=2){finishCurrent(false,null,0);return}if(used.size===5){const pts=3*(qb.doubleActive?2:1);finishCurrent(true,null,pts);return}if(used.size===4&&mistakes===1){qb.top5Used=used;$('#qbTop5Check4').classList.add('hidden');$('#qbTop5Decision').classList.remove('hidden');$('#qbMsg').textContent='4 σωστές. Σταμάτα για 1 πόντο ή ρίσκαρε για 3.';return}$('#qbMsg').textContent=mistakes===1?'Έχεις κάνει 1 λάθος και συνεχίζεις.':'Συνέχισε μέχρι να βρεις και τις 5.'};
$('#qbTop5Stop').onclick=()=>{const pts=1*(qb.doubleActive?2:1);finishCurrent(true,null,pts);$('#qbTop5Decision').classList.add('hidden')};
$('#qbTop5Risk').onclick=()=>{$('#qbTop5Decision').classList.add('hidden');$('#qbTop5RiskBox').classList.remove('hidden')};
$('#qbTop5Submit5').onclick=()=>{const ok=!!top5Match($('#qbTop5Fifth').value,qb.current,qb.top5Used||new Set());finishCurrent(ok,null,ok?3*(qb.doubleActive?2:1):0);$('#qbTop5RiskBox').classList.add('hidden')};
$('#qb5050').onclick=()=>{const p=currentQBPlayer(),cat=qb.currentCat;if(qb.used50[p]||qb.answered||!['logo1','footballers','audience'].includes(cat))return;qb.used50[p]=true;qb.selectedCorrect=null;qb.selectedButton=null;$('#qbConfirm').classList.add('hidden');$('#qbConfirm').disabled=true;$$('#qbMultiple button').forEach(b=>b.classList.remove('selected'));if(['logo1','footballers'].includes(cat)){const wrong=$$('#qbMultiple button').filter(b=>b.textContent!==qb.current.name&&!b.disabled);shuffle(wrong).slice(0,cat==='footballers'?2:1).forEach(b=>b.classList.add('hidden'))}else{const correct=qb.current.answers[Math.floor(Math.random()*qb.current.answers.length)],wrong=qb.current.wrong[Math.floor(Math.random()*qb.current.wrong.length)];$('#qbWritten').classList.add('hidden');$('#qbMultiple').classList.remove('hidden');$('#qbMultiple').innerHTML='';for(const answer of shuffle([correct,wrong])){const b=document.createElement('button');b.textContent=answer;b.onclick=()=>selectQBChoice(audienceMatch(answer,qb.current),b);$('#qbMultiple').append(b)}}$('#qb5050').disabled=true;$('#qb5050').classList.add('used')};
$('#qbNext').onclick=()=>{qb.turn++;renderCategoryPick()};$('#qbQuit').onclick=()=>{if(confirm('Να τελειώσει το παιχνίδι;'))finishQB()};
function finishQB(){showQB('results');const order=qb.names.map((name,i)=>({name,score:qb.scores[i]})).sort((a,b)=>b.score-a.score);$('#qbFinal').innerHTML=order.map((x,i)=>`<div class="result-row"><span>${['🥇','🥈','🥉'][i]||'⚽'} ${x.name}</span><b>${x.score} πόντοι</b></div>`).join('')}
$('#qbAgain').onclick=()=>showQuizBallHub();

// ===== Βρες τη σειρά/ταινία από την ατάκα =====
let quoteDraftImage='';
let quoteState={bag:[],current:null,score:0,round:0,answered:false,selected:null,level:'beginner'};
function showQuotePart(id){['quoteHub','quoteManager','quoteGame','quoteResults'].forEach(x=>$('#'+x).classList.add('hidden'));$('#'+id).classList.remove('hidden')}
function showQuoteHub(){showQuotePart('quoteHub');updateQuoteCount()}
function updateQuoteCount(){const e=$('#quoteCount');if(e)e.textContent=(d.quoteQuestions?.length||0)+' αποθηκευμένες ερωτήσεις'}
function renderQuoteList(){const box=$('#quoteQuestionList');if(!box)return;const qs=d.quoteQuestions||[];box.innerHTML=qs.length?'':'Δεν υπάρχουν ακόμη ερωτήσεις.';qs.forEach((q,i)=>{const row=document.createElement('div');row.className='custom-row quote-list-row';row.innerHTML=`<span><b>${q.correct}</b><small>${q.quote}</small></span><button type="button">🗑️</button>`;row.querySelector('button').onclick=()=>{if(confirm('Να διαγραφεί η ερώτηση;')){d.quoteQuestions.splice(i,1);save()}};box.append(row)})}
$('#quoteManageBtn').onclick=()=>showQuotePart('quoteManager');
$('#quoteManagerBack').onclick=showQuoteHub;
$('#quoteImage').onchange=e=>{const f=e.target.files?.[0];if(!f){quoteDraftImage='';$('#quotePreview').classList.add('hidden');return}const r=new FileReader();r.onload=()=>{quoteDraftImage=r.result;$('#quotePreview img').src=quoteDraftImage;$('#quotePreview').classList.remove('hidden')};r.readAsDataURL(f)};
$('#quoteSave').onclick=()=>{const quote=$('#quoteText').value.trim(),correct=$('#quoteCorrect').value.trim(),wrongs=[$('#quoteWrong1').value,$('#quoteWrong2').value,$('#quoteWrong3').value].map(x=>x.trim());if(!quote||!correct||wrongs.some(x=>!x))return toast('Συμπλήρωσε την ατάκα και τις 4 επιλογές');const all=[correct,...wrongs].map(normalizeAnswer);if(new Set(all).size<4)return toast('Οι 4 επιλογές πρέπει να είναι διαφορετικές');d.quoteQuestions.push({quote,correct,wrongs,image:quoteDraftImage});['quoteText','quoteCorrect','quoteWrong1','quoteWrong2','quoteWrong3'].forEach(id=>$('#'+id).value='');$('#quoteImage').value='';quoteDraftImage='';$('#quotePreview').classList.add('hidden');save();toast('Η ερώτηση αποθηκεύτηκε')};
function refillQuoteBag(){quoteState.bag=shuffle((d.quoteQuestions||[]).map((_,i)=>i))}
function startQuoteGame(level='beginner'){if(!(d.quoteQuestions||[]).length)return toast('Πρόσθεσε πρώτα τουλάχιστον μία ερώτηση');quoteState={bag:[],current:null,score:0,round:0,answered:false,selected:null,level};refillQuoteBag();$('#quoteLevelBadge').textContent=level==='advanced'?'Προχωρημένος':'Αρχάριος';showQuotePart('quoteGame');nextQuoteQuestion()}
function showQuoteImage(image){const imgBox=$('#quoteGameImage');const img=imgBox.querySelector('img');imgBox.style.backgroundImage='';imgBox.style.backgroundSize='';imgBox.style.backgroundPosition='';imgBox.style.backgroundRepeat='';if(!image){img.removeAttribute('src');img.classList.remove('hidden');imgBox.classList.add('hidden');return}if(typeof image==='string'&&image.startsWith('sprite:')){const idx=Number(image.split(':')[1]);const col=idx%4,row=Math.floor(idx/4);img.removeAttribute('src');img.classList.add('hidden');imgBox.style.backgroundImage="url('assets/quotes-sprite.webp')";imgBox.style.backgroundSize='400% 500%';imgBox.style.backgroundPosition=`${col*(100/3)}% ${row*25}%`;imgBox.style.backgroundRepeat='no-repeat';imgBox.classList.remove('hidden');return}img.classList.remove('hidden');img.src=image;imgBox.classList.remove('hidden')}
function nextQuoteQuestion(){if(!quoteState.bag.length)return finishQuoteGame();const idx=quoteState.bag.pop();quoteState.current=d.quoteQuestions[idx];quoteState.round++;quoteState.answered=false;quoteState.selected=null;$('#quoteRound').textContent=quoteState.round;$('#quoteScore').textContent=quoteState.score;$('#quoteMsg').textContent='';$('#quoteNext').classList.add('hidden');const confirm=$('#quoteConfirm');confirm.classList.remove('hidden');confirm.disabled=true;const q=quoteState.current;$('#quoteGameText').textContent='«'+q.quote+'»';if(quoteState.level==='advanced')showQuoteImage('');else showQuoteImage(q.image);const opts=$('#quoteOptions');opts.innerHTML='';shuffle([q.correct,...q.wrongs]).forEach(answer=>{const b=document.createElement('button');b.textContent=answer;b.onclick=()=>selectQuoteAnswer(answer,b);opts.append(b)})}
function selectQuoteAnswer(answer,button){if(quoteState.answered)return;quoteState.selected=answer;$$('#quoteOptions button').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');$('#quoteConfirm').disabled=false}
function confirmQuoteAnswer(){if(quoteState.answered||!quoteState.selected)return;quoteState.answered=true;const correct=quoteState.selected===quoteState.current.correct;$$('#quoteOptions button').forEach(b=>{b.disabled=true;b.classList.remove('selected');if(b.textContent===quoteState.current.correct)b.classList.add('correct');else if(b.textContent===quoteState.selected)b.classList.add('wrong')});if(correct){quoteState.score++;$('#quoteScore').textContent=quoteState.score;$('#quoteMsg').innerHTML='<b>Σωστά! +1 πόντος 🎉</b>'}else $('#quoteMsg').innerHTML='<b>Λάθος.</b><br>Η σωστή απάντηση είναι: '+quoteState.current.correct;$('#quoteConfirm').classList.add('hidden');$('#quoteNext').classList.remove('hidden')}
function finishQuoteGame(){showQuotePart('quoteResults');$('#quoteFinalScore').textContent=quoteState.score+' / '+quoteState.round}
$('#quoteBeginnerBtn').onclick=()=>startQuoteGame('beginner');$('#quoteAdvancedBtn').onclick=()=>startQuoteGame('advanced');$('#quoteConfirm').onclick=confirmQuoteAnswer;$('#quoteNext').onclick=nextQuoteQuestion;$('#quoteEnd').onclick=finishQuoteGame;$('#quoteAgain').onclick=()=>startQuoteGame(quoteState.level||'beginner');

async function initApp(){
  await loadFolderLibrary();
  folderLibraryStatus();
  update();resetT();resetC();drawWheel();
}
if(navigator.serviceWorker&&typeof navigator.serviceWorker.register==="function")addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=stable8").then(r=>r.update()).catch(()=>{}));
initApp();

// V22: κεντρικές διορθώσεις παιχνιδιών
const settingsWheel=$("#settingsWheel");if(settingsWheel)settingsWheel.onclick=()=>go("wheel");
const settingsQuotes=$("#settingsQuotes");if(settingsQuotes)settingsQuotes.onclick=()=>{go("quotes");showQuotePart("quoteManager")};
const settingsQuizball=$("#settingsQuizball");if(settingsQuizball)settingsQuizball.onclick=()=>go("sports");
const addFlagItem=$("#addFlagItem");if(addFlagItem)addFlagItem.onclick=()=>{const emoji=$("#newFlagEmoji").value.trim(),country=$("#newFlagCountry").value.trim();if(!emoji||!country)return toast("Βάλε διαδρομή εικόνας και όνομα χώρας");d.customFlagList.push([emoji,country]);$("#newFlagEmoji").value="";$("#newFlagCountry").value="";flagDeck=[];save();renderFlagEditor()};
const resetFlags=$("#resetFlags");if(resetFlags)resetFlags.onclick=()=>{if(!confirm("Να επανέλθει η αρχική λίστα χωρών;"))return;d.customFlagList=defaultFlags.map(x=>[...x]);flagDeck=[];save();renderFlagEditor();toast("Η λίστα επανήλθε")};

try{renderSOS()}catch(e){}


// ===== Φιδάκι =====
const snakeCanvas=$('#snakeCanvas'),snakeCtx=snakeCanvas?.getContext('2d');
let snakeBody=[],snakeFood={x:12,y:10},snakeDir={x:1,y:0},snakeNext={x:1,y:0},snakeTimer=null,snakeRunning=false,snakePaused=false,snakePoints=0;
const SNAKE_GRID=20;
function snakeBest(){return Number(localStorage.getItem('retrogames.snake.best')||0)}
function updateSnakeHud(){if($('#snakeScore'))$('#snakeScore').textContent=snakePoints;if($('#snakeBest'))$('#snakeBest').textContent=snakeBest()}
function randomSnakeFood(){let p;do{p={x:Math.floor(Math.random()*SNAKE_GRID),y:Math.floor(Math.random()*SNAKE_GRID)}}while(snakeBody.some(v=>v.x===p.x&&v.y===p.y));snakeFood=p}
function drawSnake(){if(!snakeCtx)return;const z=snakeCanvas.width/SNAKE_GRID;snakeCtx.clearRect(0,0,snakeCanvas.width,snakeCanvas.height);snakeCtx.fillStyle='#eaf8e7';snakeCtx.fillRect(0,0,snakeCanvas.width,snakeCanvas.height);snakeCtx.strokeStyle='rgba(22,101,52,.08)';for(let i=0;i<=SNAKE_GRID;i++){snakeCtx.beginPath();snakeCtx.moveTo(i*z,0);snakeCtx.lineTo(i*z,snakeCanvas.height);snakeCtx.stroke();snakeCtx.beginPath();snakeCtx.moveTo(0,i*z);snakeCtx.lineTo(snakeCanvas.width,i*z);snakeCtx.stroke()}snakeCtx.fillStyle='#ef4444';snakeCtx.beginPath();snakeCtx.arc((snakeFood.x+.5)*z,(snakeFood.y+.5)*z,z*.36,0,Math.PI*2);snakeCtx.fill();snakeBody.forEach((v,i)=>{snakeCtx.fillStyle=i===0?'#14532d':'#22c55e';snakeCtx.fillRect(v.x*z+2,v.y*z+2,z-4,z-4)});}
function resetSnake(){clearInterval(snakeTimer);snakeTimer=null;snakeRunning=false;snakePaused=false;snakePoints=0;snakeDir={x:1,y:0};snakeNext={x:1,y:0};snakeBody=[{x:8,y:10},{x:7,y:10},{x:6,y:10}];randomSnakeFood();updateSnakeHud();drawSnake();if($('#snakeMsg'))$('#snakeMsg').textContent='Πάτησε Έναρξη'}
function endSnake(){clearInterval(snakeTimer);snakeTimer=null;snakeRunning=false;const old=snakeBest();if(snakePoints>old)localStorage.setItem('retrogames.snake.best',snakePoints);updateSnakeHud();drawSnake();if(snakeCtx){snakeCtx.save();snakeCtx.fillStyle='rgba(15,23,42,.72)';snakeCtx.fillRect(0,snakeCanvas.height/2-52,snakeCanvas.width,104);snakeCtx.fillStyle='#fff';snakeCtx.font='900 44px Arial';snakeCtx.textAlign='center';snakeCtx.textBaseline='middle';snakeCtx.fillText('ΕΧΑΣΕΣ',snakeCanvas.width/2,snakeCanvas.height/2);snakeCtx.restore()}$('#snakeMsg').textContent='Έχασες · Σκορ '+snakePoints;}
function snakeTick(){if(snakePaused)return;snakeDir=snakeNext;const h={x:snakeBody[0].x+snakeDir.x,y:snakeBody[0].y+snakeDir.y};if(h.x<0||h.x>=SNAKE_GRID||h.y<0||h.y>=SNAKE_GRID||snakeBody.some(v=>v.x===h.x&&v.y===h.y))return endSnake();snakeBody.unshift(h);if(h.x===snakeFood.x&&h.y===snakeFood.y){snakePoints++;randomSnakeFood();updateSnakeHud()}else snakeBody.pop();drawSnake()}
function setSnakeDir(x,y){if(x===-snakeDir.x&&y===-snakeDir.y)return;snakeNext={x,y}}
function startSnake(){if(snakeRunning){snakePaused=false;$('#snakeMsg').textContent='';return}if(!snakeBody.length)resetSnake();snakeRunning=true;snakePaused=false;$('#snakeMsg').textContent='';clearInterval(snakeTimer);snakeTimer=setInterval(snakeTick,Number($('#snakeLevel').value)||125)}
$('#snakeStart')&&($('#snakeStart').onclick=startSnake);$('#snakePause')&&($('#snakePause').onclick=()=>{if(!snakeRunning)return;snakePaused=!snakePaused;$('#snakeMsg').textContent=snakePaused?'Παύση':''});$('#snakeReset')&&($('#snakeReset').onclick=resetSnake);$('#snakeLevel')&&($('#snakeLevel').onchange=()=>{if(snakeRunning){clearInterval(snakeTimer);snakeTimer=setInterval(snakeTick,Number($('#snakeLevel').value)||125)}});$$('.snake-pad button').forEach(b=>b.onclick=()=>{const d=b.dataset.dir;if(d==='up')setSnakeDir(0,-1);if(d==='down')setSnakeDir(0,1);if(d==='left')setSnakeDir(-1,0);if(d==='right')setSnakeDir(1,0);startSnake()});addEventListener('keydown',e=>{if(!$('#snake')?.classList.contains('active'))return;const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};if(m[e.key]){e.preventDefault();setSnakeDir(...m[e.key]);startSnake()}});let snakeTouch=null;snakeCanvas?.addEventListener('touchstart',e=>{const t=e.touches[0];snakeTouch={x:t.clientX,y:t.clientY}},{passive:true});snakeCanvas?.addEventListener('touchend',e=>{if(!snakeTouch)return;const t=e.changedTouches[0],dx=t.clientX-snakeTouch.x,dy=t.clientY-snakeTouch.y;if(Math.max(Math.abs(dx),Math.abs(dy))<20)return;if(Math.abs(dx)>Math.abs(dy))setSnakeDir(dx>0?1:-1,0);else setSnakeDir(0,dy>0?1:-1);startSnake();snakeTouch=null},{passive:true});resetSnake();

// ===== Ναρκαλιευτής =====
let mineRows=9,mineCols=9,mineCount=10,mineCells=[],mineStarted=false,mineOver=false,mineFlags=0,mineSeconds=0,mineTimer=null;
function mineConfig(){const v=$('#minesLevel')?.value||'beginner';return v==='advanced'?[16,16,40]:v==='medium'?[12,12,24]:[9,9,10]}
function mineIndex(r,c){return r*mineCols+c}function mineNeighbours(i){const r=Math.floor(i/mineCols),c=i%mineCols,a=[];for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){if(!dr&&!dc)continue;const rr=r+dr,cc=c+dc;if(rr>=0&&rr<mineRows&&cc>=0&&cc<mineCols)a.push(mineIndex(rr,cc))}return a}
function buildMines(first=-1){const banned=new Set(first<0?[]:[first,...mineNeighbours(first)]),pool=[];for(let i=0;i<mineCells.length;i++)if(!banned.has(i))pool.push(i);shuffle(pool).slice(0,mineCount).forEach(i=>mineCells[i].mine=true);mineCells.forEach((c,i)=>c.num=mineNeighbours(i).filter(n=>mineCells[n].mine).length)}
function updateMineHud(){if($('#minesLeft'))$('#minesLeft').textContent=Math.max(0,mineCount-mineFlags);if($('#minesTime'))$('#minesTime').textContent=mineSeconds}
function renderMines(){const b=$('#minesBoard');if(!b)return;b.style.setProperty('--mine-cols',mineCols);b.innerHTML='';mineCells.forEach((c,i)=>{const x=document.createElement('button');if(c.open){x.className='open '+(c.mine?'mine':c.num?'n'+c.num:'');x.textContent=c.mine?'💣':c.num||''}else if(c.flag){x.className='flagged';x.textContent='🚩'}x.disabled=c.open||mineOver;x.onclick=()=>openMine(i);x.oncontextmenu=e=>{e.preventDefault();flagMine(i)};let hold;x.addEventListener('touchstart',()=>{hold=setTimeout(()=>flagMine(i),550)},{passive:true});x.addEventListener('touchend',()=>clearTimeout(hold),{passive:true});x.addEventListener('touchmove',()=>clearTimeout(hold),{passive:true});b.append(x)})}
function newMines(){clearInterval(mineTimer);[mineRows,mineCols,mineCount]=mineConfig();mineCells=Array.from({length:mineRows*mineCols},()=>({mine:false,open:false,flag:false,num:0}));mineStarted=false;mineOver=false;mineFlags=0;mineSeconds=0;$('#minesMsg').textContent='';$('#minesNew').textContent='🙂';updateMineHud();renderMines()}
function startMineTimer(){clearInterval(mineTimer);mineTimer=setInterval(()=>{mineSeconds++;updateMineHud()},1000)}
function flagMine(i){const c=mineCells[i];if(mineOver||c.open)return;c.flag=!c.flag;mineFlags+=c.flag?1:-1;updateMineHud();renderMines()}
function floodMine(i){const stack=[i],seen=new Set();while(stack.length){const k=stack.pop();if(seen.has(k))continue;seen.add(k);const c=mineCells[k];if(c.flag||c.mine)continue;c.open=true;if(c.num===0)mineNeighbours(k).forEach(n=>stack.push(n))}}
function revealAllMines(){mineCells.forEach(c=>{if(c.mine)c.open=true})}
function openMine(i){if(mineOver||mineCells[i].flag)return;if(!mineStarted){buildMines(i);mineStarted=true;startMineTimer()}const c=mineCells[i];if(c.mine){c.open=true;mineOver=true;clearInterval(mineTimer);revealAllMines();$('#minesNew').textContent='😵';$('#minesMsg').textContent='Έπεσες σε νάρκη!';renderMines();return}floodMine(i);const safe=mineCells.filter(c=>!c.mine);if(safe.every(c=>c.open)){mineOver=true;clearInterval(mineTimer);mineCells.forEach(c=>{if(c.mine)c.flag=true});mineFlags=mineCount;$('#minesNew').textContent='😎';$('#minesMsg').textContent='Νίκη! Άνοιξες όλα τα ασφαλή τετράγωνα.';updateMineHud()}renderMines()}
$('#minesNew')&&($('#minesNew').onclick=newMines);$('#minesLevel')&&($('#minesLevel').onchange=newMines);newMines();


// ===== Pac-Man (Retro Arcade) =====
const pacCanvas=$('#pacCanvas'),pacCtx=pacCanvas?.getContext('2d');
const PAC_MAP=[
'#####################',
'#.........#.........#',
'#.###.###.#.###.###.#',
'#o###.###.#.###.###o#',
'#...................#',
'#.###.#.#####.#.###.#',
'#.....#...#...#.....#',
'#####.### # ###.#####',
'    #.#       #.#    ',
'#####.# ##G## #.#####',
'     .  #GGG#  .     ',
'#####.# ##### #.#####',
'    #.#       #.#    ',
'#####.# ##### #.#####',
'#.........#.........#',
'#.###.###.#.###.###.#',
'#o..#.....P.....#..o#',
'###.#.#.#####.#.#.###',
'#.....#...#...#.....#',
'#.#######.#.#######.#',
'#...................#',
'#####################'];
let pacGrid=[],pac={x:10,y:16,dx:0,dy:0,nx:0,ny:0},pacGhosts=[],pacTimer=null,pacRunning=false,pacPaused=false,pacScore=0,pacLives=3,pacTickNo=0;
const PAC_CELL=20;
function pacBest(){return Number(localStorage.getItem('retrogames.pac.best')||0)}
function updatePacHud(){if($('#pacScore'))$('#pacScore').textContent=pacScore;if($('#pacBest'))$('#pacBest').textContent=pacBest();if($('#pacLives'))$('#pacLives').textContent=pacLives}
function resetPacPositions(){pac={x:10,y:16,dx:0,dy:0,nx:0,ny:0};pacGhosts=[{x:9,y:10,dx:1,dy:0,c:'#ef4444'},{x:10,y:10,dx:-1,dy:0,c:'#ec4899'},{x:11,y:10,dx:0,dy:-1,c:'#22d3ee'}]}
function newPac(){clearInterval(pacTimer);pacTimer=null;pacRunning=false;pacPaused=false;pacScore=0;pacLives=3;pacTickNo=0;pacGrid=PAC_MAP.map(r=>r.split('').map(ch=>ch==='.'||ch==='o'?ch:' '));resetPacPositions();updatePacHud();drawPac();if($('#pacMsg'))$('#pacMsg').textContent='Πάτησε Έναρξη'}
function pacWall(x,y){return y<0||y>=PAC_MAP.length||x<0||x>=PAC_MAP[0].length||PAC_MAP[y][x]==='#'}
function pacMovePossible(x,y,dx,dy){return !pacWall(x+dx,y+dy)}
function setPacDir(dx,dy){pac.nx=dx;pac.ny=dy}
function drawPac(){if(!pacCtx)return;const w=pacCanvas.width,h=pacCanvas.height,s=Math.min(w/PAC_MAP[0].length,h/PAC_MAP.length),ox=(w-PAC_MAP[0].length*s)/2,oy=(h-PAC_MAP.length*s)/2;pacCtx.fillStyle='#020617';pacCtx.fillRect(0,0,w,h);for(let y=0;y<PAC_MAP.length;y++)for(let x=0;x<PAC_MAP[y].length;x++){if(PAC_MAP[y][x]==='#'){pacCtx.strokeStyle='#2563eb';pacCtx.lineWidth=2;pacCtx.strokeRect(ox+x*s+1,oy+y*s+1,s-2,s-2)}const d=pacGrid[y]?.[x];if(d==='.'||d==='o'){pacCtx.fillStyle='#fde68a';pacCtx.beginPath();pacCtx.arc(ox+(x+.5)*s,oy+(y+.5)*s,d==='o'?s*.19:s*.07,0,Math.PI*2);pacCtx.fill()}}pacCtx.fillStyle='#facc15';pacCtx.beginPath();const ang=pacTickNo%2?0.28:0.08;pacCtx.moveTo(ox+(pac.x+.5)*s,oy+(pac.y+.5)*s);pacCtx.arc(ox+(pac.x+.5)*s,oy+(pac.y+.5)*s,s*.42,ang,Math.PI*2-ang);pacCtx.closePath();pacCtx.fill();pacGhosts.forEach(g=>{const cx=ox+(g.x+.5)*s,cy=oy+(g.y+.5)*s;pacCtx.fillStyle=g.c;pacCtx.beginPath();pacCtx.arc(cx,cy-s*.08,s*.35,Math.PI,0);pacCtx.lineTo(cx+s*.35,cy+s*.34);pacCtx.lineTo(cx+s*.17,cy+s*.22);pacCtx.lineTo(cx,cy+s*.34);pacCtx.lineTo(cx-s*.17,cy+s*.22);pacCtx.lineTo(cx-s*.35,cy+s*.34);pacCtx.closePath();pacCtx.fill();pacCtx.fillStyle='#fff';pacCtx.beginPath();pacCtx.arc(cx-s*.12,cy-s*.08,s*.09,0,Math.PI*2);pacCtx.arc(cx+s*.12,cy-s*.08,s*.09,0,Math.PI*2);pacCtx.fill()})}
function pacRemaining(){return pacGrid.reduce((n,r)=>n+r.filter(x=>x==='.'||x==='o').length,0)}
function ghostStep(g){const dirs=[[1,0],[-1,0],[0,1],[0,-1]].filter(([dx,dy])=>pacMovePossible(g.x,g.y,dx,dy)&&!(dx===-g.dx&&dy===-g.dy));if(!dirs.length){g.dx=-g.dx;g.dy=-g.dy}else{dirs.sort((a,b)=>{const da=Math.abs(g.x+a[0]-pac.x)+Math.abs(g.y+a[1]-pac.y),db=Math.abs(g.x+b[0]-pac.x)+Math.abs(g.y+b[1]-pac.y);return (Math.random()<.65?da-db:Math.random()-.5)});[g.dx,g.dy]=dirs[0]}g.x+=g.dx;g.y+=g.dy}
function pacHit(){return pacGhosts.some(g=>g.x===pac.x&&g.y===pac.y)}
function losePacLife(){pacLives--;updatePacHud();if(pacLives<=0){clearInterval(pacTimer);pacRunning=false;if(pacScore>pacBest())localStorage.setItem('retrogames.pac.best',pacScore);updatePacHud();drawPac();pacCtx.save();pacCtx.fillStyle='rgba(2,6,23,.82)';pacCtx.fillRect(0,pacCanvas.height/2-50,pacCanvas.width,100);pacCtx.fillStyle='#fff';pacCtx.font='900 38px Arial';pacCtx.textAlign='center';pacCtx.textBaseline='middle';pacCtx.fillText('ΕΧΑΣΕΣ',pacCanvas.width/2,pacCanvas.height/2);pacCtx.restore();$('#pacMsg').textContent='Τέλος παιχνιδιού · Σκορ '+pacScore;return}resetPacPositions();$('#pacMsg').textContent='Έχασες μία ζωή';drawPac()}
function pacTick(){if(pacPaused)return;pacTickNo++;if(pacMovePossible(pac.x,pac.y,pac.nx,pac.ny)){pac.dx=pac.nx;pac.dy=pac.ny}if(pacMovePossible(pac.x,pac.y,pac.dx,pac.dy)){pac.x+=pac.dx;pac.y+=pac.dy}if(pacGrid[pac.y]?.[pac.x]==='.'||pacGrid[pac.y]?.[pac.x]==='o'){pacScore+=pacGrid[pac.y][pac.x]==='o'?50:10;pacGrid[pac.y][pac.x]=' ';updatePacHud()}if(pacHit())return losePacLife();if(pacTickNo%2===0)pacGhosts.forEach(ghostStep);if(pacHit())return losePacLife();if(!pacRemaining()){clearInterval(pacTimer);pacRunning=false;if(pacScore>pacBest())localStorage.setItem('retrogames.pac.best',pacScore);updatePacHud();$('#pacMsg').textContent='Νίκη! Καθάρισες όλο το ταμπλό 🎉'}drawPac()}
function startPac(){if(pacRunning){pacPaused=false;$('#pacMsg').textContent='';return}pacRunning=true;pacPaused=false;clearInterval(pacTimer);pacTimer=setInterval(pacTick,145);$('#pacMsg').textContent=''}
$('#pacStart')&&($('#pacStart').onclick=startPac);$('#pacPause')&&($('#pacPause').onclick=()=>{if(!pacRunning)return;pacPaused=!pacPaused;$('#pacMsg').textContent=pacPaused?'Παύση':''});$('#pacReset')&&($('#pacReset').onclick=newPac);$$('[data-pac-dir]').forEach(b=>b.onclick=()=>{const m={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};setPacDir(...m[b.dataset.pacDir]);startPac()});addEventListener('keydown',e=>{if(!$('#pacman')?.classList.contains('active'))return;const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};if(m[e.key]){e.preventDefault();setPacDir(...m[e.key]);startPac()}});let pacTouch=null;pacCanvas?.addEventListener('touchstart',e=>{const t=e.touches[0];pacTouch={x:t.clientX,y:t.clientY}},{passive:true});pacCanvas?.addEventListener('touchend',e=>{if(!pacTouch)return;const t=e.changedTouches[0],dx=t.clientX-pacTouch.x,dy=t.clientY-pacTouch.y;if(Math.max(Math.abs(dx),Math.abs(dy))>18){if(Math.abs(dx)>Math.abs(dy))setPacDir(dx>0?1:-1,0);else setPacDir(0,dy>0?1:-1);startPac()}pacTouch=null},{passive:true});newPac();
