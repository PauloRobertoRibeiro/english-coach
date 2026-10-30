// Ensaio com falas-modelo. Não há IA ou reconhecimento automático de respostas.
let familyLesson=24,familyStep=0,familyReturn=false;
const familyLessons=COURSE.filter(l=>l.family);
function familyVoice(text,slow=false){speak(text,slow,'en-GB')}
function renderFamily(){
 const select=$('familyLesson');select.replaceChildren();familyLessons.forEach(l=>select.append(new Option(l.title,l.id)));select.value=familyLesson;
 const lesson=COURSE[familyLesson],dialogue=lesson.family.dialogues[familyStep],p=lesson.phrases[dialogue.response];
 $('familyStep').textContent='Cena '+(familyStep+1)+' de '+lesson.family.dialogues.length;
 $('childLine').textContent=dialogue.child;$('childTranslation').textContent=dialogue.childPt;$('childTranslation').classList.add('hidden');$('childLine').classList.add('hidden');
 $('grandparentLine').textContent=p.en;$('grandparentTranslation').textContent=p.pt;$('familyAnswer').classList.add('hidden');
 $('familyTip').textContent=lesson.family.tip;$('familyPrev').disabled=familyStep===0;$('familyNext').textContent=familyStep===lesson.family.dialogues.length-1?'Recomeçar as cenas ↺':'Próxima cena →';
 $('familyStatus').textContent='1. Ouça a criança. 2. Tente responder em voz alta. 3. Consulte o modelo e repita.';
}
$('familyLesson').onchange=()=>{stopSpeech();familyLesson=+$('familyLesson').value;familyStep=0;renderFamily()};
$('hearChild').onclick=()=>familyVoice(COURSE[familyLesson].family.dialogues[familyStep].child);
$('hearChildSlow').onclick=()=>familyVoice(COURSE[familyLesson].family.dialogues[familyStep].child,true);
$('showChild').onclick=()=>{$('childLine').classList.toggle('hidden');$('childTranslation').classList.toggle('hidden')};
$('showFamilyAnswer').onclick=()=>{$('familyAnswer').classList.remove('hidden');$('familyStatus').textContent='Um modelo de resposta. Você pode usar outras palavras na conversa real.'};
$('hearFamilyAnswer').onclick=()=>{const l=COURSE[familyLesson],p=l.phrases[l.family.dialogues[familyStep].response];$('familyAnswer').classList.remove('hidden');familyVoice(p.en)};
$('familyPrev').onclick=()=>{if(familyStep>0)familyStep--;stopSpeech();renderFamily()};
$('familyNext').onclick=()=>{familyStep=(familyStep+1)%COURSE[familyLesson].family.dialogues.length;stopSpeech();renderFamily()};
$('recordFamily').onclick=()=>{familyReturn=true;show('speak');$('speakLesson').value=familyLesson;speakPhrases();$('speakPhrase').value=COURSE[familyLesson].family.dialogues[familyStep].response;speakText();$('backFamily').classList.remove('hidden');$('recordStatus').textContent='Ouça seu modelo de resposta e toque em Gravar minha voz. Ao terminar, volte à cena.'};
$('backFamily').onclick=()=>{familyReturn=false;$('backFamily').classList.add('hidden');show('family')};
$('studyFamilyLesson').onclick=()=>openLesson(familyLesson);
$('familyShortcut').onclick=()=>show('family');
$('familyFromLesson').onclick=()=>{familyLesson=state.lesson;familyStep=0;show('family')};
