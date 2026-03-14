(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Ss={};let Rl=null,fs=null,jr=null;function xt(n,e){Ss[n]=e}function fe(n,e={}){fs&&(fs(),fs=null),Rl=n,window.location.hash=n;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",Ss[n]){const s=Ss[n](t,e);typeof s=="function"&&(fs=s)}jr&&jr(n,e)}}function ih(n){jr=n}function oh(n="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||n;t!==Rl&&Ss[t]&&fe(t)});const e=window.location.hash.slice(1)||n;fe(e)}const mi="bgc_";function Cl(n,e){try{return localStorage.setItem(mi+n,JSON.stringify(e)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function Pl(n,e=null){try{const t=localStorage.getItem(mi+n);return t?JSON.parse(t):e}catch(t){return console.warn("Storage load failed:",t),e}}function ah(){Object.keys(localStorage).filter(e=>e.startsWith(mi)).forEach(e=>localStorage.removeItem(e))}const Dl="player",Vl={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},leaguePoints:0,league:"Pescador",createdAt:Date.now()},Rn=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],aa=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],lh=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let X=null;function Re(){return X||(X=Pl(Dl,{...Vl})),{...X}}function Zt(){Cl(Dl,X)}function xl(n){X||Re(),X.name=n.trim()||"Jugador",Zt()}function ch(n){X||Re(),X.avatar=n,Zt()}function js(n){X||Re(),X.xp+=n;let e=!1;for(;X.level<Rn.length&&X.xp>=Rn[X.level];)X.level++,e=!0;return Zt(),e}function zs(n){X||Re(),X.coins+=n,Zt(),Gs()}function jn(n,e,t=0){X||Re(),X.totalGamesPlayed++,X.totalScore+=e,X.totalCorrectAnswers+=t,X.gamesCompleted[n]||(X.gamesCompleted[n]=0),X.gamesCompleted[n]++,(!X.bestScores[n]||e>X.bestScores[n])&&(X.bestScores[n]=e),Zt()}function uh(){const n=Re();if(n.level>=Rn.length)return{current:n.xp,needed:n.xp,progress:1};const e=Rn[n.level-1]||0,t=Rn[n.level],s=(n.xp-e)/(t-e);return{current:n.xp-e,needed:t-e,progress:Math.min(s,1)}}function hh(n=null){const e=n||Re().level;return aa[Math.min(e-1,aa.length-1)]}function dh(){return[...lh]}function fh(){X={...Vl,createdAt:Date.now()},Zt(),Gs()}function Gs(){const n=document.getElementById("coin-count");if(n){const e=Re();n.textContent=e.coins}}const pi=[];function pt(n){pi.push(n)}function mh(){return[...pi]}function Nl(n){return pi.find(e=>e.id===n)}const Rs=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function kl(){const n=new Date,e=Math.floor((n-new Date(n.getFullYear(),0,0))/864e5);return Rs[e%Rs.length]}function ph(n,e=[]){return Rs.filter(r=>!e.includes(r.ref)).sort(()=>Math.random()-.5).slice(0,n)}const gh=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function Ll(){const n=Re(),e=[...gh,{name:n.name,avatar:n.avatar,score:n.totalScore,level:n.level,isCurrentPlayer:!0}];return e.sort((t,s)=>s.score-t.score),e.map((t,s)=>({...t,position:s+1}))}function gi(){const n=Ll(),e=n.find(t=>t.isCurrentPlayer);return(e==null?void 0:e.position)||n.length}function yh(n){var a,c;const e=Re(),t=kl(),s=mh(),r=gi(),o=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];n.innerHTML=`
    <div class="home-screen">
      <div class="home-welcome">
        <span class="welcome-emoji">✝️</span>
        <h2>¡Hola, ${e.name}!</h2>
        <p>¿Listo para aprender jugando?</p>
      </div>

      <div class="home-stats">
        <div class="stat-card">
          <div class="stat-value">${e.level}</div>
          <div class="stat-label">Nivel</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${e.totalGamesPlayed}</div>
          <div class="stat-label">Jugados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">#${r}</div>
          <div class="stat-label">Ranking</div>
        </div>
      </div>

      <div class="verse-card-home" id="verse-card-home">
        <div class="verse-text">"${t.text}"</div>
        <div class="verse-ref">— ${t.ref}</div>
      </div>

      <div class="section-title">🎮 Juegos</div>
      <div class="games-grid">
        ${s.map((h,d)=>`
          <div class="game-card" data-game-id="${h.id}">
            <div class="game-card-icon" style="background: ${o[d%o.length]}">
              ${h.icon}
            </div>
            <div class="game-card-info">
              <h3>${h.name}</h3>
              <p>${h.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${h.difficulty}">${h.difficulty==="easy"?"Fácil":h.difficulty==="medium"?"Medio":"Difícil"}</span>
                ${e.bestScores[h.id]?`<span class="text-sm text-muted">Mejor: ${e.bestScores[h.id]}</span>`:""}
              </div>
            </div>
            <div class="game-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="section-title mt-xl">🏆 Ranking</div>
      <button class="btn btn-secondary btn-block" id="btn-ranking">
        Ver Ranking Completo
      </button>
    </div>
  `,n.querySelectorAll(".game-card").forEach(h=>{h.addEventListener("click",()=>{const d=h.dataset.gameId;fe("game",{gameId:d})})}),(a=document.getElementById("verse-card-home"))==null||a.addEventListener("click",()=>{fe("verse")}),(c=document.getElementById("btn-ranking"))==null||c.addEventListener("click",()=>{fe("ranking")})}function ne(n,e="info",t=3e3){const s=document.getElementById("toast-container");if(!s)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const o={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};r.innerHTML=`<span>${o[e]||"📢"}</span><span>${n}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("removing"),setTimeout(()=>r.remove(),300)},t)}function vh(n,e,t=[]){const s=document.getElementById("modal-overlay");if(!s)return;const r=t.map(o=>`<button class="btn ${o.class||"btn-primary"} btn-block" id="modal-btn-${o.id}">${o.label}</button>`).join("");s.innerHTML=`
    <div class="modal">
      <h2>${n}</h2>
      <p>${e}</p>
      <div class="flex flex-col gap-sm">${r}</div>
    </div>
  `,s.classList.remove("hidden"),t.forEach(o=>{const a=document.getElementById(`modal-btn-${o.id}`);a&&a.addEventListener("click",()=>{s.classList.add("hidden"),o.onClick&&o.onClick()})})}function xe(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function la(n){return n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}function _h(n){var s,r;const e=kl(),t=ph(5,[e.ref]);n.innerHTML=`
    <div class="verse-screen">
      <div class="verse-of-day-card">
        <div class="verse-badge">📅 Versículo del Día</div>
        <blockquote class="verse-main-text">"${e.text}"</blockquote>
        <cite class="verse-main-ref">— ${e.ref}</cite>
        <div class="verse-actions">
          <button class="btn btn-sm btn-primary" id="btn-share-verse">
            📤 Compartir
          </button>
          <button class="btn btn-sm btn-secondary" id="btn-copy-verse">
            📋 Copiar
          </button>
        </div>
      </div>

      <div class="section-title mt-lg">✨ Más Versículos</div>
      <div class="verse-list">
        ${t.map(o=>`
          <div class="verse-list-item">
            <div class="verse-list-text">"${o.text}"</div>
            <div class="verse-list-ref">— ${o.ref}</div>
          </div>
        `).join("")}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `,(s=document.getElementById("btn-share-verse"))==null||s.addEventListener("click",()=>{var a;const o=`"${e.text}" — ${e.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:o}).catch(()=>{}):(a=navigator.clipboard)==null||a.writeText(o).then(()=>{ne("Versículo copiado al portapapeles","success")})}),(r=document.getElementById("btn-copy-verse"))==null||r.addEventListener("click",()=>{var a;const o=`"${e.text}" — ${e.ref}`;(a=navigator.clipboard)==null||a.writeText(o).then(()=>{ne("Versículo copiado ✅","success")}).catch(()=>{ne("No se pudo copiar","error")})})}const Ml="achievements",yi=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let _s=null;function vi(){return _s||(_s=Pl(Ml,{})),_s}function be(n){const e=vi();if(e[n])return!1;const t=yi.find(s=>s.id===n);return t?(e[n]={unlockedAt:Date.now()},_s=e,Cl(Ml,e),ne(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function Ol(){return Object.keys(vi()).length}function Fl(){return yi.length}function Eh(){const n=vi();return yi.map(e=>{var t;return{...e,unlocked:!!n[e.id],unlockedAt:((t=n[e.id])==null?void 0:t.unlockedAt)||null}})}function Th(){const n=Re();n.totalGamesPlayed>=1&&be("first_game"),n.totalGamesPlayed>=5&&be("games_5"),n.totalGamesPlayed>=25&&be("games_25"),n.totalGamesPlayed>=100&&be("games_100"),n.level>=5&&be("level_5"),n.level>=10&&be("level_10"),n.coins>=500&&be("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(s=>(n.gamesCompleted[s]||0)>0)&&be("all_games"),(n.gamesCompleted.trivia||0)>=10&&be("trivia_10"),(n.gamesCompleted.characters||0)>=5&&be("character_5"),(n.gamesCompleted["verse-complete"]||0)>=10&&be("verse_master"),(n.gamesCompleted["word-search"]||0)>=5&&be("word_hunter"),(n.gamesCompleted.memory||0)>=5&&be("memory_king")}function bh(n){var h,d,m;const e=Re(),t=uh(),s=hh(),r=Ol(),o=Fl(),a=gi(),c=dh();n.innerHTML=`
    <div class="profile-screen">
      <div class="profile-header-card">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar" id="profile-avatar">${e.avatar}</div>
          <button class="profile-avatar-edit" id="btn-change-avatar">✏️</button>
        </div>
        <h2 class="profile-name" id="profile-name">${e.name}</h2>
        <div class="profile-level-badge">
          <span class="level-number">Nivel ${e.level}</span>
          <span class="level-name">${s}</span>
        </div>
      </div>

      <div class="xp-bar-container">
        <div class="xp-bar-label">
          <span>XP</span>
          <span>${t.current} / ${t.needed}</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width: ${Math.round(t.progress*100)}%"></div>
        </div>
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🪙</div>
          <div class="profile-stat-value">${e.coins}</div>
          <div class="profile-stat-label">Monedas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🎮</div>
          <div class="profile-stat-value">${e.totalGamesPlayed}</div>
          <div class="profile-stat-label">Partidas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">✅</div>
          <div class="profile-stat-value">${e.totalCorrectAnswers}</div>
          <div class="profile-stat-label">Correctas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🏆</div>
          <div class="profile-stat-value">#${a}</div>
          <div class="profile-stat-label">Ranking</div>
        </div>
      </div>

      <div class="profile-section">
        <div class="section-title">📊 Estadísticas</div>
        <div class="stats-list">
          <div class="stats-row">
            <span>Puntuación Total</span>
            <span class="stats-value">${e.totalScore.toLocaleString()}</span>
          </div>
          <div class="stats-row">
            <span>Logros Desbloqueados</span>
            <span class="stats-value">${r} / ${o}</span>
          </div>
          <div class="stats-row">
            <span>Juegos Distintos</span>
            <span class="stats-value">${Object.keys(e.gamesCompleted).length} / 5</span>
          </div>
          <div class="stats-row">
            <span>Miembro Desde</span>
            <span class="stats-value">${new Date(e.createdAt).toLocaleDateString("es")}</span>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <button class="btn btn-secondary btn-block" id="btn-edit-name">
          ✏️ Cambiar Nombre
        </button>
      </div>

      <!-- Avatar Picker Modal -->
      <div class="avatar-picker hidden" id="avatar-picker">
        <div class="avatar-picker-title">Elige tu avatar</div>
        <div class="avatar-grid">
          ${c.map(p=>`
            <button class="avatar-option ${p===e.avatar?"selected":""}" data-avatar="${p}">${p}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,(h=document.getElementById("btn-change-avatar"))==null||h.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.toggle("hidden")}),(d=document.getElementById("btn-close-avatar-picker"))==null||d.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(p=>{p.addEventListener("click",()=>{const T=p.dataset.avatar;ch(T),document.getElementById("profile-avatar").textContent=T,document.querySelectorAll(".avatar-option").forEach(w=>w.classList.remove("selected")),p.classList.add("selected"),ne("Avatar actualizado ✅","success")})}),(m=document.getElementById("btn-edit-name"))==null||m.addEventListener("click",()=>{const p=prompt("Ingresa tu nombre:",e.name);p&&p.trim()&&(xl(p.trim()),document.getElementById("profile-name").textContent=p.trim(),ne("Nombre actualizado ✅","success"))})}function Ih(n){const e=Eh(),t=Ol(),s=Fl(),r=Math.round(t/s*100);n.innerHTML=`
    <div class="achievements-screen">
      <div class="achievements-header">
        <div class="achievements-progress-ring">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-gold)" stroke-width="8"
              stroke-dasharray="${2*Math.PI*52}"
              stroke-dashoffset="${2*Math.PI*52*(1-r/100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="achievements-progress-text">
            <span class="achievements-count">${t}</span>
            <span class="achievements-total">/ ${s}</span>
          </div>
        </div>
        <p class="achievements-subtitle">Logros Desbloqueados</p>
      </div>

      <div class="achievements-grid">
        ${e.map(o=>`
          <div class="achievement-card ${o.unlocked?"unlocked":"locked"}">
            <div class="achievement-icon">${o.unlocked?o.icon:"🔒"}</div>
            <div class="achievement-info">
              <div class="achievement-name">${o.name}</div>
              <div class="achievement-desc">${o.desc}</div>
              ${o.unlocked?`<div class="achievement-unlocked-date">✅ ${new Date(o.unlockedAt).toLocaleDateString("es")}</div>`:`<div class="achievement-reward">🪙 +${o.coins}</div>`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ah(n){var s,r;const e=Re();n.innerHTML=`
    <div class="settings-screen">
      <div class="settings-group">
        <div class="settings-group-title">👤 Jugador</div>
        <div class="settings-item" id="setting-name">
          <div class="settings-item-left">
            <span class="settings-icon">✏️</span>
            <span>Nombre del Jugador</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted" id="display-name">${e.name}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">🎨 Apariencia</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">🌙</span>
            <span>Modo Oscuro</span>
          </div>
          <div class="settings-item-right">
            <label class="toggle-switch">
              <input type="checkbox" id="toggle-dark">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">🔊</span>
            <span>Sonido</span>
          </div>
          <div class="settings-item-right">
            <label class="toggle-switch">
              <input type="checkbox" id="toggle-sound">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">ℹ️ Información</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">📱</span>
            <span>Versión</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted">1.0.0</span>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">📖</span>
            <span>Bible Games Collection</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted">PWA</span>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">⚠️ Zona de Peligro</div>
        <button class="btn btn-danger btn-block" id="btn-reset-data">
          🗑️ Borrar Todos los Datos
        </button>
        <p class="text-sm text-muted mt-sm text-center">¡Esta acción no se puede deshacer!</p>
      </div>

      <div class="settings-footer">
        <p>Hecho con ❤️ y ✝️</p>
        <p class="text-sm text-muted">Bible Games Collection © ${new Date().getFullYear()}</p>
      </div>
    </div>
  `,(s=document.getElementById("setting-name"))==null||s.addEventListener("click",()=>{const o=prompt("Ingresa tu nombre:",e.name);o&&o.trim()&&(xl(o.trim()),document.getElementById("display-name").textContent=o.trim(),ne("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",o=>{o.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(r=document.getElementById("btn-reset-data"))==null||r.addEventListener("click",()=>{vh("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{ah(),fh(),ne("Datos borrados","info"),fe("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function wh(n){const e=Ll(),t=gi(),s=["🥇","🥈","🥉"];n.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${e.slice(0,3).map((r,o)=>`
            <div class="podium-item podium-${o+1} ${r.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${r.avatar}</div>
              <div class="podium-medal">${s[o]}</div>
              <div class="podium-name">${r.name}</div>
              <div class="podium-score">${la(r.score)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${t}</strong>
      </div>

      <div class="ranking-list">
        ${e.map((r,o)=>`
          <div class="ranking-row ${r.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${o<3?s[o]:`#${r.position}`}
            </div>
            <div class="ranking-avatar">${r.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${r.name} ${r.isCurrentPlayer?"(Tú)":""}</div>
              <div class="ranking-level">Nivel ${r.level}</div>
            </div>
            <div class="ranking-score">${la(r.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const Cn={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function Sh(n,e,t="easy"){const r={easy:1,medium:1.5,hard:2}[t]||1,o=Math.floor(e*.5*r),a=Math.floor(e*r);return{coins:Math.max(o,5),xp:Math.max(a,10)}}function zn(n,e,t=0,s="easy"){const r=Sh(n,e,s);zs(r.coins);const o=js(r.xp);if(o){const a=Re();ne(`🎉 ¡Subiste al nivel ${a.level}!`,"reward")}return setTimeout(()=>Th(),500),{...r,leveledUp:o}}function Rh(n){const s=[...Cn.easy.map(x=>({...x,diff:"easy"})),...Cn.medium.map(x=>({...x,diff:"medium"})),...Cn.hard.map(x=>({...x,diff:"hard"}))],r=xe(s).slice(0,10);let o=0,a=0,c=0,h=0,d=null,m=20,p=!1;function T(){const x=r[o];p=!1,m=20;const k={easy:"Fácil",medium:"Medio",hard:"Difícil"},F={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};n.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${o+1} / 10</span>
            <span class="trivia-score">⭐ ${a}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${o/10*100}%"></div>
          </div>
        </div>

        <div class="trivia-timer">
          <div class="timer-circle">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="6"/>
              <circle id="timer-ring" cx="50" cy="50" r="42" fill="none" stroke="var(--color-gold)" stroke-width="6"
                stroke-dasharray="${2*Math.PI*42}"
                stroke-dashoffset="0"
                stroke-linecap="round"
                transform="rotate(-90 50 50)"/>
            </svg>
            <span id="timer-text" class="timer-text">${m}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${F[x.diff]}">${k[x.diff]}</span>
          <span class="text-sm text-muted">${x.category}</span>
        </div>

        <div class="trivia-question">${x.q}</div>

        <div class="trivia-options">
          ${x.options.map((O,$)=>`
            <button class="trivia-option" data-index="${$}">
              <span class="option-letter">${String.fromCharCode(65+$)}</span>
              <span>${O}</span>
            </button>
          `).join("")}
        </div>

        ${h>=3?`<div class="streak-indicator">🔥 ¡Racha de ${h}!</div>`:""}
      </div>
    `,w(),n.querySelectorAll(".trivia-option").forEach(O=>{O.addEventListener("click",()=>{if(p)return;const $=parseInt(O.dataset.index);R($,x)})})}function w(){clearInterval(d);const x=document.getElementById("timer-ring"),k=2*Math.PI*42;d=setInterval(()=>{m--;const F=document.getElementById("timer-text");if(F&&(F.textContent=m),x){const O=k*(1-m/20);x.setAttribute("stroke-dashoffset",O),m<=5&&x.setAttribute("stroke","var(--color-error)")}m<=0&&(clearInterval(d),D())},1e3)}function R(x,k){p=!0,clearInterval(d);const F=n.querySelectorAll(".trivia-option"),O=x===k.answer;if(F.forEach(($,B)=>{$.disabled=!0,B===k.answer&&$.classList.add("correct"),B===x&&!O&&$.classList.add("wrong")}),O){c++,h++;const $=Math.floor(m*2),B={easy:10,medium:20,hard:30},_=10+$+(B[k.diff]||0);a+=_,h>=3&&be("streak_3"),m>=17&&be("fast_answer")}else h=0;setTimeout(()=>{o++,o<10?T():V()},1500)}function D(){p=!0,h=0;const x=r[o];n.querySelectorAll(".trivia-option").forEach((F,O)=>{F.disabled=!0,O===x.answer&&F.classList.add("correct")}),ne("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{o++,o<10?T():V()},1500)}function V(){var O,$;clearInterval(d);const x=Math.round(c/10*100);x===100&&be("perfect_trivia");const k=zn("trivia",a,c,"easy");jn("trivia",a,c);const F=x>=80?"🏆":x>=60?"😊":x>=40?"🤔":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${F}</div>
        <h2 class="results-title">${x>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${a}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${c}/10</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${x}%</span>
            <span class="results-stat-label">Precisión</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${k.coins} monedas</div>
          <div class="reward-item">⭐ +${k.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(O=document.getElementById("btn-play-again"))==null||O.addEventListener("click",()=>{fe("game",{gameId:"trivia"})}),($=document.getElementById("btn-go-home"))==null||$.addEventListener("click",()=>{fe("home")})}return T(),()=>{clearInterval(d)}}const zr=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function Ch(n){const t=xe([...zr]).slice(0,5);let s=0,r=0,o=0,a=0;function c(){const p=t[s];a=0;const T=zr.filter(D=>D.name!==p.name).map(D=>D.name),w=xe(T).slice(0,3),R=xe([p.name,...w]);h(p,R)}function h(p,T){var D;const w=p.clues.slice(0,a+1),R=Math.max(50-a*10,10);n.innerHTML=`
      <div class="characters-game">
        <div class="characters-header">
          <div class="characters-progress">
            <span>Personaje ${s+1} / 5</span>
            <span class="characters-score">⭐ ${r}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${s/5*100}%"></div>
          </div>
        </div>

        <div class="characters-clue-counter">
          <span>Pista ${a+1} de ${p.clues.length}</span>
          <span class="text-muted">Valor: ${R} pts</span>
        </div>

        <div class="characters-clues">
          ${w.map((V,x)=>`
            <div class="clue-card ${x===a?"clue-new":""}">
              <span class="clue-number">${x+1}</span>
              <span>${V}</span>
            </div>
          `).join("")}
        </div>

        ${a<p.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${T.map(V=>`
            <button class="characters-option" data-name="${V}">${V}</button>
          `).join("")}
        </div>
      </div>
    `,(D=document.getElementById("btn-more-clue"))==null||D.addEventListener("click",()=>{a++,h(p,T)}),n.querySelectorAll(".characters-option").forEach(V=>{V.addEventListener("click",()=>{const x=V.dataset.name;d(x,p)})})}function d(p,T,w){const R=p===T.name;if(n.querySelectorAll(".characters-option").forEach(D=>{D.disabled=!0,D.dataset.name===T.name&&D.classList.add("correct"),D.dataset.name===p&&!R&&D.classList.add("wrong")}),R){o++;const D=Math.max(50-a*10,10);r+=D,ne(`✅ ¡Correcto! +${D} pts`,"success")}else ne(`❌ Era: ${T.name}`,"error");setTimeout(()=>{s++,s<5?c():m()},1800)}function m(){var w,R;const p=zn("characters",r,o,"medium");jn("characters",r,o);const T=o>=4?"🕵️":o>=3?"😊":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${T}</div>
        <h2 class="results-title">${o>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${o}/5</span>
            <span class="results-stat-label">Adivinados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${p.coins} monedas</div>
          <div class="reward-item">⭐ +${p.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(w=document.getElementById("btn-play-again"))==null||w.addEventListener("click",()=>{fe("game",{gameId:"characters"})}),(R=document.getElementById("btn-go-home"))==null||R.addEventListener("click",()=>{fe("home")})}c()}function Ph(n){const t=xe([...Rs]).slice(0,5);let s=0,r=0,o=0;function a(d){const m=d.text.split(" "),p=Math.min(3,Math.max(2,Math.floor(m.length/5))),T=[];for(;T.length<p;){const k=Math.floor(Math.random()*m.length);!T.includes(k)&&m[k].length>3&&T.push(k)}T.sort((k,F)=>k-F);const w=[],R=[];m.forEach((k,F)=>{if(T.includes(F)){const O=k.replace(/[.,;:!?¡¿"']/g,""),$=k.replace(O,"");w.push({type:"blank",original:O,punct:$,index:R.length}),R.push(O)}else w.push({type:"word",text:k})});const V=xe(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(k=>!R.includes(k.toLowerCase()))).slice(0,2),x=xe([...R,...V]);return{blankedWords:w,missingWords:R,allOptions:x}}function c(){const d=t[s],{blankedWords:m,missingWords:p,allOptions:T}=a(d);let w=new Array(p.length).fill(null);function R(){var V;n.innerHTML=`
        <div class="verse-complete-game">
          <div class="verse-complete-header">
            <div class="trivia-progress">
              <span>Versículo ${s+1} / 5</span>
              <span class="trivia-score">⭐ ${r}</span>
            </div>
            <div class="trivia-progress-bar">
              <div class="trivia-progress-fill" style="width: ${s/5*100}%"></div>
            </div>
          </div>

          <div class="verse-complete-ref">📖 ${d.ref}</div>

          <div class="verse-complete-text">
            ${m.map(x=>{if(x.type==="word")return`<span class="vc-word">${x.text}</span>`;{const k=w[x.index];return`<span class="vc-blank ${k?"filled":""}" data-blank="${x.index}">${k||"___"}${x.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${T.map(x=>{const k=w.includes(x);return`<button class="vc-option ${k?"used":""}" data-word="${x}" ${k?"disabled":""}>${x}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${w.includes(null)?"disabled":""}" id="btn-check-verse" ${w.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,n.querySelectorAll(".vc-blank.filled").forEach(x=>{x.addEventListener("click",()=>{const k=parseInt(x.dataset.blank);w[k]=null,R()})}),n.querySelectorAll(".vc-option:not([disabled])").forEach(x=>{x.addEventListener("click",()=>{const k=x.dataset.word,F=w.indexOf(null);F!==-1&&(w[F]=k,R())})}),(V=document.getElementById("btn-check-verse"))==null||V.addEventListener("click",()=>{D(p)})}function D(V){let x=!0;V.forEach((k,F)=>{var O;((O=w[F])==null?void 0:O.toLowerCase())!==k.toLowerCase()&&(x=!1)}),x?(o++,r+=30,ne("✅ ¡Correcto! +30 pts","success")):ne(`❌ Respuesta: ${V.join(", ")}`,"error"),setTimeout(()=>{s++,s<5?c():h()},2e3)}R()}function h(){var p,T;const d=zn("verse-complete",r,o,"medium");jn("verse-complete",r,o);const m=o>=4?"📖":o>=2?"😊":"🙏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${m}</div>
        <h2 class="results-title">${o>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${o}/5</span>
            <span class="results-stat-label">Completados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${d.coins} monedas</div>
          <div class="reward-item">⭐ +${d.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(p=document.getElementById("btn-play-again"))==null||p.addEventListener("click",()=>{fe("game",{gameId:"verse-complete"})}),(T=document.getElementById("btn-go-home"))==null||T.addEventListener("click",()=>{fe("home")})}c()}const Dh=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","PACIENCIA","BONDAD","FE","MANSEDUMBRE","TEMPLANZA","BENIGNIDAD","PERDON","PIEDAD"]},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","SANTIAGO","ANDRES","FELIPE","SIMON","BARTOLOME","JUDAS","TADEO","FELIPE"]},{theme:"Libros del Antiguo Testamento",words:["GENESIS","EXODO","LEVITICO","NUMEROS","DEUTERONOMIO","JOSUE","JUECES","RUT","SAMUEL","REYES","SALMOS"]},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER","ABRAHAM","ISAAC","JACOB","JOSE","SAMUEL","DANIEL","SANSÓN"]},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN","JERUSALEN","NAZARET","JERICO","EGIPTO","BETEL","CANAN","GOLGOTA"]},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON","AMOR","JUSTICIA","SANTIDAD","HONESTIDAD","HUMILDAD","FE"]},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS","JEREMIAS","EZEQUIEL","OSEAS","MALAQUIAS","AMOS","MIQUEAS","HABACUC"]},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA","AGUILA","TORO","CABALLO","LOBO","SERPIENTE","CORDERO"]},{theme:"Reyes de la Biblia",words:["DAVID","SAUL","SALOMON","JOSIAS","EZEQUIAS","ACAB","ROBOAM","OZIAS","HERODES","FELESTINO","BALAC"]},{theme:"Milagros de Jesús",words:["VINO","PAN","AGUA","VISTA","VIDA","PESCA","CALMA","LAZARO","PIES","OREJA","HIJA"]}];function $l(n){e();function e(){n.innerHTML=`
      <div class="word-search-game">
        <div class="ws-header">
          <h2>🔍 Sopa de Letras</h2>
          <p class="text-secondary text-center">Encuentra palabras bíblicas ocultas en el tablero.</p>
        </div>

        <div class="difficulty-selection">
          <h3>Selecciona la Dificultad:</h3>
          <div class="difficulty-grid">
            <button class="btn btn-difficulty" data-level="easy">
               <div class="diff-title">🌱 Fácil</div>
               <div class="diff-desc">Grid 11x11, 10 palabras (Horiz/Vert)</div>
            </button>
            <button class="btn btn-difficulty" data-level="medium">
               <div class="diff-title">⚔️ Medio</div>
               <div class="diff-desc">Grid 13x13, 11 palabras (+ Diagonales)</div>
            </button>
            <button class="btn btn-difficulty" data-level="hard">
               <div class="diff-title">👑 Difícil</div>
               <div class="diff-desc">Grid 15x15, 12 palabras (Todas direcciones)</div>
            </button>
          </div>
        </div>
      </div>
    `,n.querySelectorAll(".btn-difficulty").forEach(s=>{s.addEventListener("click",r=>{const o=s.dataset.level;t(o)})})}function t(s){const o={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[s],a=o.size,c=xe([...Dh])[0],h=xe([...c.words]).slice(0,o.wordCount);let d=[],m=[],p=!1,T=[],w=0,R=Date.now();function D(){d=Array.from({length:a},()=>Array.from({length:a},()=>""));const O=o.directions;h.forEach(B=>{let _=!1,g=0;for(;!_&&g<100;){g++;const y=O[Math.floor(Math.random()*O.length)],b=Math.floor(Math.random()*a),E=Math.floor(Math.random()*a),I=b+y[0]*(B.length-1),v=E+y[1]*(B.length-1);if(I<0||I>=a||v<0||v>=a)continue;let he=!0;for(let ie=0;ie<B.length;ie++){const Ke=b+y[0]*ie,Mt=E+y[1]*ie;if(d[Ke][Mt]!==""&&d[Ke][Mt]!==B[ie]){he=!1;break}}if(he){for(let ie=0;ie<B.length;ie++){const Ke=b+y[0]*ie,Mt=E+y[1]*ie;d[Ke][Mt]=B[ie]}_=!0}}});const $="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let B=0;B<a;B++)for(let _=0;_<a;_++)d[B][_]===""&&(d[B][_]=$[Math.floor(Math.random()*$.length)])}function V(){n.innerHTML=`
        <div class="word-search-game">
          <div class="ws-header">
            <div class="ws-theme">
              <span class="ws-theme-icon">📚</span>
              <span>${c.theme} (${s.toUpperCase()})</span>
            </div>
            <div class="ws-found">${m.length} / ${h.length}</div>
          </div>

          <div class="ws-words-list">
            ${h.map($=>`
              <span class="ws-word ${m.includes($)?"found":""}">${$}</span>
            `).join("")}
          </div>

          <div class="ws-grid" id="ws-grid">
            ${d.map(($,B)=>$.map((_,g)=>`
                <div class="ws-cell" data-row="${B}" data-col="${g}">${_}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const O=document.getElementById("ws-grid");O&&(O.style.gridTemplateColumns=`repeat(${a}, 1fr)`),x()}function x(){const O=document.getElementById("ws-grid");if(!O)return;const $=b=>{const E=b.touches?b.touches[0]:b,I=document.elementFromPoint(E.clientX,E.clientY);return I&&I.classList.contains("ws-cell")?{row:parseInt(I.dataset.row),col:parseInt(I.dataset.col),el:I}:null},B=b=>{b.preventDefault(),p=!0,T=[];const E=$(b);E&&(T.push(E),E.el.classList.add("cell-selected"))},_=b=>{if(!p)return;b.preventDefault();const E=$(b);E&&!T.some(I=>I.row===E.row&&I.col===E.col)&&(T.length===1||y(E))&&(T.push(E),E.el.classList.add("cell-selected"))},g=()=>{p&&(p=!1,k(),document.querySelectorAll(".cell-selected").forEach(b=>b.classList.remove("cell-selected")),T=[])};function y(b){if(T.length<1)return!0;const E=T[0],I=T[T.length-1],v=Math.sign(I.row-E.row),he=Math.sign(I.col-E.col),ie=I.row+v,Ke=I.col+he;return b.row===ie&&b.col===Ke}O.addEventListener("mousedown",B),O.addEventListener("mousemove",_),window.addEventListener("mouseup",g),O.addEventListener("touchstart",B,{passive:!1}),O.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",g)}function k(){if(T.length<2)return;const O=T.map(_=>d[_.row][_.col]).join(""),$=O.split("").reverse().join(""),B=h.find(_=>(_===O||_===$)&&!m.includes(_));if(B){m.push(B),w+=25,T.forEach(y=>{const b=document.querySelector(`.ws-cell[data-row="${y.row}"][data-col="${y.col}"]`);b&&b.classList.add("cell-found")});const _=Array.from(document.querySelectorAll(".ws-word")).find(y=>y.textContent===B);_&&_.classList.add("found");const g=document.querySelector(".ws-found");if(g&&(g.textContent=`${m.length} / ${h.length}`),ne(`✅ ¡Encontraste "${B}"!`,"success"),m.length===h.length){const y=Math.max(0,60-Math.floor((Date.now()-R)/1e3));w+=y,setTimeout(F,1e3)}}}function F(){var $,B;const O=zn("word-search",w,m.length,s);jn("word-search",w,m.length),n.innerHTML=`
        <div class="game-results">
          <div class="results-emoji">🔤</div>
          <h2 class="results-title">¡Sopa Completada!</h2>

          <div class="results-score-circle">
            <span class="results-score-value">${w}</span>
            <span class="results-score-label">puntos</span>
          </div>

          <div class="results-stats">
            <div class="results-stat">
              <span class="results-stat-value">${m.length}</span>
              <span class="results-stat-label">Palabras</span>
            </div>
            <div class="results-stat">
              <span class="results-stat-value">${Math.floor((Date.now()-R)/1e3)}s</span>
              <span class="results-stat-label">Tiempo</span>
            </div>
          </div>

          <div class="results-rewards">
            <div class="reward-item">🪙 +${O.coins} monedas</div>
            <div class="reward-item">⭐ +${O.xp} XP</div>
          </div>

          <div class="results-actions">
            <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
            <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
          </div>
        </div>
      `,($=document.getElementById("btn-play-again"))==null||$.addEventListener("click",()=>{$l(n)}),(B=document.getElementById("btn-go-home"))==null||B.addEventListener("click",()=>{fe("home")})}D(),V()}}function Vh(n){const s=xe([...zr]).slice(0,6).map((R,D)=>[{id:D,type:"name",text:R.name,icon:"👤",pairId:D},{id:D,type:"clue",text:R.clues[0],icon:"💡",pairId:D}]).flat(),r=xe(s);let o=[],a=[],c=0,h=0,d=Date.now(),m=!0;function p(){n.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${a.length}/6</span>
            <span>🔄 ${c} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${r.map((R,D)=>`
            <div class="memory-card ${a.includes(R.pairId)?"matched":""} ${o.includes(D)?"flipped":""}"
                 data-index="${D}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${R.icon}</span>
                  <span class="memory-card-text">${R.text}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".memory-card").forEach(R=>{R.addEventListener("click",()=>{if(!m)return;const D=parseInt(R.dataset.index);T(D)})})}function T(R){if(o.includes(R)||a.includes(r[R].pairId)||o.length>=2)return;o.push(R);const D=n.querySelector(`.memory-card[data-index="${R}"]`);if(D&&D.classList.add("flipped"),o.length===2){c++,m=!1;const[V,x]=o,k=r[V],F=r[x];k.pairId===F.pairId&&k.type!==F.type?(a.push(k.pairId),h+=Math.max(30-c,10),setTimeout(()=>{var $,B;($=document.querySelector(`.memory-card[data-index="${V}"]`))==null||$.classList.add("matched"),(B=document.querySelector(`.memory-card[data-index="${x}"]`))==null||B.classList.add("matched");const O=n.querySelector(".memory-stats");O&&(O.innerHTML=`<span>🎯 ${a.length}/6</span><span>🔄 ${c} movimientos</span>`),o=[],m=!0,ne("✅ ¡Par encontrado!","success"),a.length===6&&setTimeout(w,800)},600)):setTimeout(()=>{var $,B;($=document.querySelector(`.memory-card[data-index="${V}"]`))==null||$.classList.remove("flipped"),(B=document.querySelector(`.memory-card[data-index="${x}"]`))==null||B.classList.remove("flipped");const O=n.querySelector(".memory-stats");O&&(O.innerHTML=`<span>🎯 ${a.length}/6</span><span>🔄 ${c} movimientos</span>`),o=[],m=!0},1e3)}}function w(){var k,F;const R=Math.floor((Date.now()-d)/1e3),D=Math.max(0,120-R);h+=D;const V=zn("memory",h,a.length,"easy");jn("memory",h,a.length);const x=c<=12?"🧠":c<=18?"😊":"🃏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${x}</div>
        <h2 class="results-title">${c<=12?"¡Memoria increíble!":"¡Bien jugado!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${h}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${c}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${R}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${V.coins} monedas</div>
          <div class="reward-item">⭐ +${V.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(k=document.getElementById("btn-play-again"))==null||k.addEventListener("click",()=>{fe("game",{gameId:"memory"})}),(F=document.getElementById("btn-go-home"))==null||F.addEventListener("click",()=>{fe("home")})}p()}const ql={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function xh(n){_i(n)}function _i(n){n.innerHTML=`
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(ql).map(e=>`
          <div class="story-card" id="story-${e.id}">
            <div class="story-card-cover" style="background-image: url('${e.cover}')">
              <div class="story-card-overlay">
                <span class="badge badge-difficulty">${e.difficulty}</span>
              </div>
            </div>
            <div class="story-card-content">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <div class="story-card-footer">
                <span>💰 +${e.reward}</span>
                <span>⭐ +${e.xp} XP</span>
              </div>
              <button class="btn btn-primary btn-block btn-start-story" data-id="${e.id}">
                Comenzar Historia
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,n.querySelectorAll(".btn-start-story").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.dataset.id;Nh(n,s)})})}function Nh(n,e){const t=ql[e];let s=t.startNode||"start";function r(){var h;const o=t.nodes[s];if(!o){console.error(`Node not found: ${s}`);return}const a=o.image||t.cover;if(o.isEnd){kh(n,t,o);return}n.innerHTML=`
      <div class="story-play-container" style="background-image: url('${a}')">
        <div class="story-overlay"></div>
        
        <button class="btn-exit-story" id="btn-exit-story">❌ Salir</button>

        <div class="story-content-frame">
          <div class="story-text-container">
            <p class="story-text" id="story-text-box"></p>
          </div>
          
          <div class="story-choices" id="story-choices-container">
            <!-- Choices will be injected here after typewriter effect -->
          </div>
        </div>
      </div>
    `,(h=document.getElementById("btn-exit-story"))==null||h.addEventListener("click",()=>{_i(n)});const c=document.getElementById("story-text-box");Lh(o.text,c,()=>{const d=document.getElementById("story-choices-container");d&&o.choices&&o.choices.forEach(m=>{const p=document.createElement("button");p.className="btn btn-option btn-glass fade-in",p.textContent=m.text,p.addEventListener("click",()=>{s=m.nextNode,r()}),d.appendChild(p)})})}r()}function kh(n,e,t){var s;zs(e.reward),js(e.xp),ne(`¡Historia completada! +${e.reward} monedas`,"success"),n.innerHTML=`
    <div class="story-play-container" style="background-image: url('${e.cover}')">
      <div class="story-overlay"></div>
      
      <div class="story-content-frame">
        <div class="story-end-card glass">
          <div class="story-end-icon">🎉</div>
          <h2>¡Fin de la Historia!</h2>
          <p class="story-text">${t.text}</p>
          <div class="reward-summary">
            <div class="reward-item">💰 <span>+${e.reward}</span></div>
            <div class="reward-item">⭐ <span>+${e.xp} XP</span></div>
          </div>
          <p class="message-muted">${t.message||""}</p>
          <button class="btn btn-primary btn-block mt-lg" id="btn-finish-story">
            Volver a Historias
          </button>
        </div>
      </div>
    </div>
  `,(s=document.getElementById("btn-finish-story"))==null||s.addEventListener("click",()=>{_i(n)})}function Lh(n,e,t,s=25){let r=0;e.innerHTML="";function o(){r<n.length?(e.innerHTML+=n.charAt(r),r++,setTimeout(o,s)):t&&t()}o()}const ca=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'}];function Mh(n){let e=a(),t=[],s=6,r=6,o=!1;function a(){const p=Math.floor(Math.random()*ca.length);return ca[p]}function c(){if(o){m();return}const p=e.word.toUpperCase();if(p.split("").every(w=>t.includes(w)||w===" ")){d(!0);return}if(s<=0){d(!1);return}n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-header">
          <div class="hm-category">🏷️ ${e.category}</div>
          <div class="hm-lives">
            ${Array.from({length:r},(w,R)=>`
              <span class="hm-heart ${R<s?"filled":"empty"}">❤️</span>
            `).join("")}
          </div>
        </div>

        <div class="hm-hint-container">
          <p class="hm-hint">💡 Pista: <span>${e.hint}</span></p>
        </div>

        <div class="hm-word-display" id="hm-word-display">
          ${p.split("").map(w=>`
            <div class="hm-letter-box ${w===" "?"hm-space":""}">
              ${t.includes(w)||w===" "?w:"_"}
            </div>
          `).join("")}
        </div>

        <div class="hm-keyboard" id="hm-keyboard">
          ${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map(w=>`
            <button class="btn btn-keyboard" 
                    data-letter="${w}" 
                    ${t.includes(w)?"disabled":""}>
              ${w}
            </button>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".btn-keyboard").forEach(w=>{w.addEventListener("click",R=>{const D=R.target.dataset.letter;h(D)})})}function h(p){if(t.includes(p))return;t.push(p),e.word.toUpperCase().includes(p)?ne("¡Correcto!","success"):(s--,ne("¡Letra incorrecta!","warning")),c()}function d(p){o=!0,p&&(zs(50),js(25)),m(p)}function m(p){var T;n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">${p?"🎉":"😢"}</div>
          <h2>${p?"¡Victoria!":"¡Fin del Juego!"}</h2>
          
          <p class="hm-result-word">La palabra era: <span>${e.word}</span></p>
          
          <div class="hm-verse-box">
            <h4>📖 Contexto Bíblico:</h4>
            <p>${e.verse}</p>
          </div>

          <div class="reward-summary">
            ${p?`
              <div class="reward-item">💰 <span>+50</span></div>
              <div class="reward-item">⭐ <span>+25 XP</span></div>
            `:'<p class="text-muted">No te rindas, ¡sigue aprendiendo!</p>'}
          </div>

          <button class="btn btn-primary btn-block" id="btn-restart-hm">
            Jugar de Nuevo
          </button>
        </div>
      </div>
    `,(T=document.getElementById("btn-restart-hm"))==null||T.addEventListener("click",()=>{e=a(),t=[],s=6,o=!1,c()})}c()}const Oh=()=>{};var ua={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Fh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],c=n[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,c=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,m=o>>2,p=(o&3)<<4|c>>4;let T=(c&15)<<2|d>>6,w=d&63;h||(w=64,a||(T=64)),s.push(t[m],t[p],t[T],t[w])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||d==null||p==null)throw new $h;const T=o<<2|c>>4;if(s.push(T),d!==64){const w=c<<4&240|d>>2;if(s.push(w),p!==64){const R=d<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qh=function(n){const e=Bl(n);return Ul.encodeByteArray(e,!0)},Cs=function(n){return qh(n).replace(/\./g,"")},Bh=function(n){try{return Ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=()=>Uh().__FIREBASE_DEFAULTS__,zh=()=>{if(typeof process>"u"||typeof ua>"u")return;const n=ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bh(n[1]);return e&&JSON.parse(e)},Ei=()=>{try{return Oh()||jh()||zh()||Gh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hh=n=>{var e,t;return(t=(e=Ei())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qh=n=>{const e=Hh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},jl=()=>{var n;return(n=Ei())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}const Pn={};function Yh(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pn))Pn[e]?n.emulator.push(e):n.prod.push(e);return n}function Xh(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ha=!1;function Zh(n,e){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||Pn[n]===e||Pn[n]||ha)return;Pn[n]=e;function t(T){return`__firebase__banner__${T}`}const s="__firebase__banner",o=Yh().prod.length>0;function a(){const T=document.getElementById(s);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,w){T.setAttribute("width","24"),T.setAttribute("id",w),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{ha=!0,a()},T}function m(T,w){T.setAttribute("id",w),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function p(){const T=Xh(s),w=t("text"),R=document.getElementById(w)||document.createElement("span"),D=t("learnmore"),V=document.getElementById(D)||document.createElement("a"),x=t("preprendIcon"),k=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const F=T.element;c(F),m(V,D);const O=d();h(k,x),F.append(k,R,V,O),document.body.appendChild(F)}o?(R.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function td(){var e;const n=(e=Ei())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nd(){return!td()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="FirebaseError";class en extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=id,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zl.prototype.create)}}class zl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?od(o,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new en(r,c,s)}}function od(n,e){return n.replace(ad,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ad=/\{\$([^}]+)}/g;function Ps(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(da(o)&&da(a)){if(!Ps(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function da(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Jh;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ud(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cd(n){return n===It?void 0:n}function ud(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ld(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const dd={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},fd=W.INFO,md={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},pd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=md[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=fd,this._logHandler=pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const gd=(n,e)=>e.some(t=>n instanceof t);let fa,ma;function yd(){return fa||(fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vd(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hl=new WeakMap,Gr=new WeakMap,Ql=new WeakMap,xr=new WeakMap,bi=new WeakMap;function _d(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(rt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hl.set(t,n)}).catch(()=>{}),bi.set(e,n),e}function Ed(n){if(Gr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Gr.set(n,e)}let Hr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ql.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Td(n){Hr=n(Hr)}function bd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Nr(this),e,...t);return Ql.set(s,e.sort?e.sort():[e]),rt(s)}:vd().includes(n)?function(...e){return n.apply(Nr(this),e),rt(Hl.get(this))}:function(...e){return rt(n.apply(Nr(this),e))}}function Id(n){return typeof n=="function"?bd(n):(n instanceof IDBTransaction&&Ed(n),gd(n,yd())?new Proxy(n,Hr):n)}function rt(n){if(n instanceof IDBRequest)return _d(n);if(xr.has(n))return xr.get(n);const e=Id(n);return e!==n&&(xr.set(n,e),bi.set(e,n)),e}const Nr=n=>bi.get(n);function Ad(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),c=rt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(rt(a.result),h.oldVersion,h.newVersion,rt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const wd=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],kr=new Map;function pa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kr.get(e))return kr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Sd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wd.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&h.done]))[0]};return kr.set(e,o),o}Td(n=>({...n,get:(e,t,s)=>pa(e,t)||n.get(e,t,s),has:(e,t)=>!!pa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Cd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qr="@firebase/app",ga="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new Gl("@firebase/app"),Pd="@firebase/app-compat",Dd="@firebase/analytics-compat",Vd="@firebase/analytics",xd="@firebase/app-check-compat",Nd="@firebase/app-check",kd="@firebase/auth",Ld="@firebase/auth-compat",Md="@firebase/database",Od="@firebase/data-connect",Fd="@firebase/database-compat",$d="@firebase/functions",qd="@firebase/functions-compat",Bd="@firebase/installations",Ud="@firebase/installations-compat",jd="@firebase/messaging",zd="@firebase/messaging-compat",Gd="@firebase/performance",Hd="@firebase/performance-compat",Qd="@firebase/remote-config",Jd="@firebase/remote-config-compat",Wd="@firebase/storage",Kd="@firebase/storage-compat",Yd="@firebase/firestore",Xd="@firebase/ai",Zd="@firebase/firestore-compat",ef="firebase",tf="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]",nf={[Qr]:"fire-core",[Pd]:"fire-core-compat",[Vd]:"fire-analytics",[Dd]:"fire-analytics-compat",[Nd]:"fire-app-check",[xd]:"fire-app-check-compat",[kd]:"fire-auth",[Ld]:"fire-auth-compat",[Md]:"fire-rtdb",[Od]:"fire-data-connect",[Fd]:"fire-rtdb-compat",[$d]:"fire-fn",[qd]:"fire-fn-compat",[Bd]:"fire-iid",[Ud]:"fire-iid-compat",[jd]:"fire-fcm",[zd]:"fire-fcm-compat",[Gd]:"fire-perf",[Hd]:"fire-perf-compat",[Qd]:"fire-rc",[Jd]:"fire-rc-compat",[Wd]:"fire-gcs",[Kd]:"fire-gcs-compat",[Yd]:"fire-fst",[Zd]:"fire-fst-compat",[Xd]:"fire-vertex","fire-js":"fire-js",[ef]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map,sf=new Map,Wr=new Map;function ya(n,e){try{n.container.addComponent(e)}catch(t){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vs(n){const e=n.name;if(Wr.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;Wr.set(e,n);for(const t of Ds.values())ya(t,n);for(const t of sf.values())ya(t,n);return!0}function rf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function of(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},it=new zl("app","Firebase",af);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=tf;function Jl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Jr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw it.create("bad-app-name",{appName:String(r)});if(t||(t=jl()),!t)throw it.create("no-options");const o=Ds.get(r);if(o){if(Ps(t,o.options)&&Ps(s,o.config))return o;throw it.create("duplicate-app",{appName:r})}const a=new hd(r);for(const h of Wr.values())a.addComponent(h);const c=new lf(t,s,a);return Ds.set(r,c),c}function uf(n=Jr){const e=Ds.get(n);if(!e&&n===Jr&&jl())return Jl();if(!e)throw it.create("no-app",{appName:n});return e}function zt(n,e,t){let s=nf[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(a.join(" "));return}Vs(new kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="firebase-heartbeat-database",df=1,Ln="firebase-heartbeat-store";let Lr=null;function Wl(){return Lr||(Lr=Ad(hf,df,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ln)}catch(t){console.warn(t)}}}}).catch(n=>{throw it.create("idb-open",{originalErrorMessage:n.message})})),Lr}async function ff(n){try{const t=(await Wl()).transaction(Ln),s=await t.objectStore(Ln).get(Kl(n));return await t.done,s}catch(e){if(e instanceof en)Qe.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(t.message)}}}async function va(n,e){try{const s=(await Wl()).transaction(Ln,"readwrite");await s.objectStore(Ln).put(e,Kl(n)),await s.done}catch(t){if(t instanceof en)Qe.warn(t.message);else{const s=it.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(s.message)}}}function Kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=1024,pf=30;class gf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_a();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>pf){const a=_f(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_a(),{heartbeatsToSend:s,unsentEntries:r}=yf(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Qe.warn(t),""}}}function _a(){return new Date().toISOString().substring(0,10)}function yf(n,e=mf){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Ea(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ea(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ff(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ea(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}function _f(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n){Vs(new kn("platform-logger",e=>new Rd(e),"PRIVATE")),Vs(new kn("heartbeat",e=>new gf(e),"PRIVATE")),zt(Qr,ga,n),zt(Qr,ga,"esm2020"),zt("fire-js","")}Ef("");var Tf="firebase",bf="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Tf,bf,"app");var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ot,Yl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function y(){}y.prototype=g.prototype,_.F=g.prototype,_.prototype=new y,_.prototype.constructor=_,_.D=function(b,E,I){for(var v=Array(arguments.length-2),he=2;he<arguments.length;he++)v[he-2]=arguments[he];return g.prototype[E].apply(b,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(_,g,y){y||(y=0);const b=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)b[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;E<16;++E)b[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=_.g[0],y=_.g[1],E=_.g[2];let I=_.g[3],v;v=g+(I^y&(E^I))+b[0]+3614090360&4294967295,g=y+(v<<7&4294967295|v>>>25),v=I+(E^g&(y^E))+b[1]+3905402710&4294967295,I=g+(v<<12&4294967295|v>>>20),v=E+(y^I&(g^y))+b[2]+606105819&4294967295,E=I+(v<<17&4294967295|v>>>15),v=y+(g^E&(I^g))+b[3]+3250441966&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(I^y&(E^I))+b[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=I+(E^g&(y^E))+b[5]+1200080426&4294967295,I=g+(v<<12&4294967295|v>>>20),v=E+(y^I&(g^y))+b[6]+2821735955&4294967295,E=I+(v<<17&4294967295|v>>>15),v=y+(g^E&(I^g))+b[7]+4249261313&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(I^y&(E^I))+b[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=I+(E^g&(y^E))+b[9]+2336552879&4294967295,I=g+(v<<12&4294967295|v>>>20),v=E+(y^I&(g^y))+b[10]+4294925233&4294967295,E=I+(v<<17&4294967295|v>>>15),v=y+(g^E&(I^g))+b[11]+2304563134&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(I^y&(E^I))+b[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=I+(E^g&(y^E))+b[13]+4254626195&4294967295,I=g+(v<<12&4294967295|v>>>20),v=E+(y^I&(g^y))+b[14]+2792965006&4294967295,E=I+(v<<17&4294967295|v>>>15),v=y+(g^E&(I^g))+b[15]+1236535329&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(E^I&(y^E))+b[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=I+(y^E&(g^y))+b[6]+3225465664&4294967295,I=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(I^g))+b[11]+643717713&4294967295,E=I+(v<<14&4294967295|v>>>18),v=y+(I^g&(E^I))+b[0]+3921069994&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^I&(y^E))+b[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=I+(y^E&(g^y))+b[10]+38016083&4294967295,I=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(I^g))+b[15]+3634488961&4294967295,E=I+(v<<14&4294967295|v>>>18),v=y+(I^g&(E^I))+b[4]+3889429448&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^I&(y^E))+b[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=I+(y^E&(g^y))+b[14]+3275163606&4294967295,I=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(I^g))+b[3]+4107603335&4294967295,E=I+(v<<14&4294967295|v>>>18),v=y+(I^g&(E^I))+b[8]+1163531501&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^I&(y^E))+b[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=I+(y^E&(g^y))+b[2]+4243563512&4294967295,I=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(I^g))+b[7]+1735328473&4294967295,E=I+(v<<14&4294967295|v>>>18),v=y+(I^g&(E^I))+b[12]+2368359562&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(y^E^I)+b[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=I+(g^y^E)+b[8]+2272392833&4294967295,I=g+(v<<11&4294967295|v>>>21),v=E+(I^g^y)+b[11]+1839030562&4294967295,E=I+(v<<16&4294967295|v>>>16),v=y+(E^I^g)+b[14]+4259657740&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^I)+b[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=I+(g^y^E)+b[4]+1272893353&4294967295,I=g+(v<<11&4294967295|v>>>21),v=E+(I^g^y)+b[7]+4139469664&4294967295,E=I+(v<<16&4294967295|v>>>16),v=y+(E^I^g)+b[10]+3200236656&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^I)+b[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=I+(g^y^E)+b[0]+3936430074&4294967295,I=g+(v<<11&4294967295|v>>>21),v=E+(I^g^y)+b[3]+3572445317&4294967295,E=I+(v<<16&4294967295|v>>>16),v=y+(E^I^g)+b[6]+76029189&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^I)+b[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=I+(g^y^E)+b[12]+3873151461&4294967295,I=g+(v<<11&4294967295|v>>>21),v=E+(I^g^y)+b[15]+530742520&4294967295,E=I+(v<<16&4294967295|v>>>16),v=y+(E^I^g)+b[2]+3299628645&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(E^(y|~I))+b[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=I+(y^(g|~E))+b[7]+1126891415&4294967295,I=g+(v<<10&4294967295|v>>>22),v=E+(g^(I|~y))+b[14]+2878612391&4294967295,E=I+(v<<15&4294967295|v>>>17),v=y+(I^(E|~g))+b[5]+4237533241&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~I))+b[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=I+(y^(g|~E))+b[3]+2399980690&4294967295,I=g+(v<<10&4294967295|v>>>22),v=E+(g^(I|~y))+b[10]+4293915773&4294967295,E=I+(v<<15&4294967295|v>>>17),v=y+(I^(E|~g))+b[1]+2240044497&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~I))+b[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=I+(y^(g|~E))+b[15]+4264355552&4294967295,I=g+(v<<10&4294967295|v>>>22),v=E+(g^(I|~y))+b[6]+2734768916&4294967295,E=I+(v<<15&4294967295|v>>>17),v=y+(I^(E|~g))+b[13]+1309151649&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~I))+b[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=I+(y^(g|~E))+b[11]+3174756917&4294967295,I=g+(v<<10&4294967295|v>>>22),v=E+(g^(I|~y))+b[2]+718787259&4294967295,E=I+(v<<15&4294967295|v>>>17),v=y+(I^(E|~g))+b[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,_.g[2]=_.g[2]+E&4294967295,_.g[3]=_.g[3]+I&4294967295}s.prototype.v=function(_,g){g===void 0&&(g=_.length);const y=g-this.blockSize,b=this.C;let E=this.h,I=0;for(;I<g;){if(E==0)for(;I<=y;)r(this,_,I),I+=this.blockSize;if(typeof _=="string"){for(;I<g;)if(b[E++]=_.charCodeAt(I++),E==this.blockSize){r(this,b),E=0;break}}else for(;I<g;)if(b[E++]=_[I++],E==this.blockSize){r(this,b),E=0;break}}this.h=E,this.o+=g},s.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;g=this.o*8;for(var y=_.length-8;y<_.length;++y)_[y]=g&255,g/=256;for(this.v(_),_=Array(16),g=0,y=0;y<4;++y)for(let b=0;b<32;b+=8)_[g++]=this.g[y]>>>b&255;return _};function o(_,g){var y=c;return Object.prototype.hasOwnProperty.call(y,_)?y[_]:y[_]=g(_)}function a(_,g){this.h=g;const y=[];let b=!0;for(let E=_.length-1;E>=0;E--){const I=_[E]|0;b&&I==g||(y[E]=I,b=!1)}this.g=y}var c={};function h(_){return-128<=_&&_<128?o(_,function(g){return new a([g|0],g<0?-1:0)}):new a([_|0],_<0?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return V(d(-_));const g=[];let y=1;for(let b=0;_>=y;b++)g[b]=_/y|0,y*=4294967296;return new a(g,0)}function m(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return V(m(_.substring(1),g));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let b=p;for(let I=0;I<_.length;I+=8){var E=Math.min(8,_.length-I);const v=parseInt(_.substring(I,I+E),g);E<8?(E=d(Math.pow(g,E)),b=b.j(E).add(d(v))):(b=b.j(y),b=b.add(d(v)))}return b}var p=h(0),T=h(1),w=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-V(this).m();let _=0,g=1;for(let y=0;y<this.g.length;y++){const b=this.i(y);_+=(b>=0?b:4294967296+b)*g,g*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(D(this))return"-"+V(this).toString(_);const g=d(Math.pow(_,6));var y=this;let b="";for(;;){const E=O(y,g).g;y=x(y,E.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(_);if(y=E,R(y))return I+b;for(;I.length<6;)I="0"+I;b=I+b}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(let g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function D(_){return _.h==-1}n.l=function(_){return _=x(this,_),D(_)?-1:R(_)?0:1};function V(_){const g=_.g.length,y=[];for(let b=0;b<g;b++)y[b]=~_.g[b];return new a(y,~_.h).add(T)}n.abs=function(){return D(this)?V(this):this},n.add=function(_){const g=Math.max(this.g.length,_.g.length),y=[];let b=0;for(let E=0;E<=g;E++){let I=b+(this.i(E)&65535)+(_.i(E)&65535),v=(I>>>16)+(this.i(E)>>>16)+(_.i(E)>>>16);b=v>>>16,I&=65535,v&=65535,y[E]=v<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function x(_,g){return _.add(V(g))}n.j=function(_){if(R(this)||R(_))return p;if(D(this))return D(_)?V(this).j(V(_)):V(V(this).j(_));if(D(_))return V(this.j(V(_)));if(this.l(w)<0&&_.l(w)<0)return d(this.m()*_.m());const g=this.g.length+_.g.length,y=[];for(var b=0;b<2*g;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(let E=0;E<_.g.length;E++){const I=this.i(b)>>>16,v=this.i(b)&65535,he=_.i(E)>>>16,ie=_.i(E)&65535;y[2*b+2*E]+=v*ie,k(y,2*b+2*E),y[2*b+2*E+1]+=I*ie,k(y,2*b+2*E+1),y[2*b+2*E+1]+=v*he,k(y,2*b+2*E+1),y[2*b+2*E+2]+=I*he,k(y,2*b+2*E+2)}for(_=0;_<g;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=g;_<2*g;_++)y[_]=0;return new a(y,0)};function k(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function F(_,g){this.g=_,this.h=g}function O(_,g){if(R(g))throw Error("division by zero");if(R(_))return new F(p,p);if(D(_))return g=O(V(_),g),new F(V(g.g),V(g.h));if(D(g))return g=O(_,V(g)),new F(V(g.g),g.h);if(_.g.length>30){if(D(_)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=T,b=g;b.l(_)<=0;)y=$(y),b=$(b);var E=B(y,1),I=B(b,1);for(b=B(b,2),y=B(y,2);!R(b);){var v=I.add(b);v.l(_)<=0&&(E=E.add(y),I=v),b=B(b,1),y=B(y,1)}return g=x(_,E.j(g)),new F(E,g)}for(E=p;_.l(g)>=0;){for(y=Math.max(1,Math.floor(_.m()/g.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),I=d(y),v=I.j(g);D(v)||v.l(_)>0;)y-=b,I=d(y),v=I.j(g);R(I)&&(I=T),E=E.add(I),_=x(_,v)}return new F(E,_)}n.B=function(_){return O(this,_).h},n.and=function(_){const g=Math.max(this.g.length,_.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)&_.i(b);return new a(y,this.h&_.h)},n.or=function(_){const g=Math.max(this.g.length,_.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)|_.i(b);return new a(y,this.h|_.h)},n.xor=function(_){const g=Math.max(this.g.length,_.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)^_.i(b);return new a(y,this.h^_.h)};function $(_){const g=_.g.length+1,y=[];for(let b=0;b<g;b++)y[b]=_.i(b)<<1|_.i(b-1)>>>31;return new a(y,_.h)}function B(_,g){const y=g>>5;g%=32;const b=_.g.length-y,E=[];for(let I=0;I<b;I++)E[I]=g>0?_.i(I+y)>>>g|_.i(I+y+1)<<32-g:_.i(I+y);return new a(E,_.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Yl=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ot=a}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xl,In,Zl,Es,Kr,ec,tc,nc;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ms=="object"&&ms];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break e;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var u=[],f;for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&u.push([f,l[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function h(i,l,u){return i.call.apply(i.bind,arguments)}function d(i,l,u){return d=h,d.apply(null,arguments)}function m(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function p(i,l){function u(){}u.prototype=l.prototype,i.Z=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,A,S){for(var N=Array(arguments.length-2),G=2;G<arguments.length;G++)N[G-2]=arguments[G];return l.prototype[A].apply(f,N)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function w(i){const l=i.length;if(l>0){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function R(i,l){for(let f=1;f<arguments.length;f++){const A=arguments[f];var u=typeof A;if(u=u!="object"?u:A?Array.isArray(A)?"array":u:"null",u=="array"||u=="object"&&typeof A.length=="number"){u=i.length||0;const S=A.length||0;i.length=u+S;for(let N=0;N<S;N++)i[u+N]=A[N]}else i.push(A)}}class D{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function V(i){a.setTimeout(()=>{throw i},0)}function x(){var i=_;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class k{constructor(){this.h=this.g=null}add(l,u){const f=F.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var F=new D(()=>new O,i=>i.reset());class O{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let $,B=!1,_=new k,g=()=>{const i=Promise.resolve(void 0);$=()=>{i.then(y)}};function y(){for(var i;i=x();){try{i.h.call(i.g)}catch(u){V(u)}var l=F;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}B=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,l),a.removeEventListener("test",u,l)}catch{}return i})();function v(i){return/^[\s\xa0]*$/.test(i)}function he(i,l){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}p(he,E),he.prototype.init=function(i,l){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&he.Z.h.call(this)},he.prototype.h=function(){he.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ie="closure_listenable_"+(Math.random()*1e6|0),Ke=0;function Mt(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++Ke,this.da=this.fa=!1}function Xn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Zn(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function Pu(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function io(i){const l={};for(const u in i)l[u]=i[u];return l}const oo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ao(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let S=0;S<oo.length;S++)u=oo[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function es(i){this.src=i,this.g={},this.h=0}es.prototype.add=function(i,l,u,f,A){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const N=cr(i,l,f,A);return N>-1?(l=i[N],u||(l.fa=!1)):(l=new Mt(l,this.src,S,!!f,A),l.fa=u,i.push(l)),l};function lr(i,l){const u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=A>=0)&&Array.prototype.splice.call(f,A,1),S&&(Xn(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function cr(i,l,u,f){for(let A=0;A<i.length;++A){const S=i[A];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==f)return A}return-1}var ur="closure_lm_"+(Math.random()*1e6|0),hr={};function lo(i,l,u,f,A){if(Array.isArray(l)){for(let S=0;S<l.length;S++)lo(i,l[S],u,f,A);return null}return u=ho(u),i&&i[ie]?i.J(l,u,c(f)?!!f.capture:!1,A):Du(i,l,u,!1,f,A)}function Du(i,l,u,f,A,S){if(!l)throw Error("Invalid event type");const N=c(A)?!!A.capture:!!A;let G=fr(i);if(G||(i[ur]=G=new es(i)),u=G.add(l,u,f,N,S),u.proxy)return u;if(f=Vu(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)I||(A=N),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(uo(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Vu(){function i(u){return l.call(i.src,i.listener,u)}const l=xu;return i}function co(i,l,u,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)co(i,l[S],u,f,A);else f=c(f)?!!f.capture:!!f,u=ho(u),i&&i[ie]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],u=cr(l,u,f,A),u>-1&&(Xn(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=fr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=cr(l,u,f,A)),(u=i>-1?l[i]:null)&&dr(u))}function dr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[ie])lr(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(uo(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=fr(l))?(lr(u,i),u.h==0&&(u.src=null,l[ur]=null)):Xn(i)}}}function uo(i){return i in hr?hr[i]:hr[i]="on"+i}function xu(i,l){if(i.da)i=!0;else{l=new he(l,this);const u=i.listener,f=i.ha||i.src;i.fa&&dr(i),i=u.call(f,l)}return i}function fr(i){return i=i[ur],i instanceof es?i:null}var mr="__closure_events_fn_"+(Math.random()*1e9>>>0);function ho(i){return typeof i=="function"?i:(i[mr]||(i[mr]=function(l){return i.handleEvent(l)}),i[mr])}function Ee(){b.call(this),this.i=new es(this),this.M=this,this.G=null}p(Ee,b),Ee.prototype[ie]=!0,Ee.prototype.removeEventListener=function(i,l,u,f){co(this,i,l,u,f)};function we(i,l){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new E(l,i);else if(l instanceof E)l.target=l.target||i;else{var A=l;l=new E(f,i),ao(l,A)}A=!0;let S,N;if(u)for(N=u.length-1;N>=0;N--)S=l.g=u[N],A=ts(S,f,!0,l)&&A;if(S=l.g=i,A=ts(S,f,!0,l)&&A,A=ts(S,f,!1,l)&&A,u)for(N=0;N<u.length;N++)S=l.g=u[N],A=ts(S,f,!1,l)&&A}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const u=i.g[l];for(let f=0;f<u.length;f++)Xn(u[f]);delete i.g[l],i.h--}}this.G=null},Ee.prototype.J=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Ee.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function ts(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let S=0;S<l.length;++S){const N=l[S];if(N&&!N.da&&N.capture==u){const G=N.listener,de=N.ha||N.src;N.fa&&lr(i.i,N),A=G.call(de,f)!==!1&&A}}return A&&!f.defaultPrevented}function Nu(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function fo(i){i.g=Nu(()=>{i.g=null,i.i&&(i.i=!1,fo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ku extends b{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:fo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){b.call(this),this.h=i,this.g={}}p(on,b);var mo=[];function po(i){Zn(i.g,function(l,u){this.g.hasOwnProperty(u)&&dr(l)},i),i.g={}}on.prototype.N=function(){on.Z.N.call(this),po(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=a.JSON.stringify,Lu=a.JSON.parse,Mu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function go(){}function yo(){}var an={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gr(){E.call(this,"d")}p(gr,E);function yr(){E.call(this,"c")}p(yr,E);var vt={},vo=null;function ns(){return vo=vo||new Ee}vt.Ia="serverreachability";function _o(i){E.call(this,vt.Ia,i)}p(_o,E);function ln(i){const l=ns();we(l,new _o(l))}vt.STAT_EVENT="statevent";function Eo(i,l){E.call(this,vt.STAT_EVENT,i),this.stat=l}p(Eo,E);function Se(i){const l=ns();we(l,new Eo(l,i))}vt.Ja="timingevent";function To(i,l){E.call(this,vt.Ja,i),this.size=l}p(To,E);function cn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function un(){this.g=!0}un.prototype.ua=function(){this.g=!1};function Ou(i,l,u,f,A,S){i.info(function(){if(i.g)if(S){var N="",G=S.split("&");for(let Y=0;Y<G.length;Y++){var de=G[Y].split("=");if(de.length>1){const pe=de[0];de=de[1];const Fe=pe.split("_");N=Fe.length>=2&&Fe[1]=="type"?N+(pe+"="+de+"&"):N+(pe+"=redacted&")}}}else N=null;else N=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+N})}function Fu(i,l,u,f,A,S,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+S+" "+N})}function Ot(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+qu(i,u)+(f?" "+f:"")})}function $u(i,l){i.info(function(){return"TIMEOUT: "+l})}un.prototype.info=function(){};function qu(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return pr(S)}catch{return l}}var ss={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Io;function vr(){}p(vr,go),vr.prototype.g=function(){return new XMLHttpRequest},Io=new vr;function hn(i){return encodeURIComponent(String(i))}function Bu(i){var l=1;i=i.split(":");const u=[];for(;l>0&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function Ye(i,l,u,f){this.j=i,this.i=l,this.l=u,this.S=f||1,this.V=new on(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ao}function Ao(){this.i=null,this.g="",this.h=!1}var wo={},_r={};function Er(i,l,u){i.M=1,i.A=is(Oe(l)),i.u=u,i.R=!0,So(i,null)}function So(i,l){i.F=Date.now(),rs(i),i.B=Oe(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),$o(u.i,"t",f),i.C=0,u=i.j.L,i.h=new Ao,i.g=sa(i.j,u?l:null,!i.u),i.P>0&&(i.O=new ku(d(i.Y,i,i.g),i.P)),l=i.V,u=i.g,f=i.ba;var A="readystatechange";Array.isArray(A)||(A&&(mo[0]=A.toString()),A=mo);for(let S=0;S<A.length;S++){const N=lo(u,A[S],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=i.J?io(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),ln(),Ou(i.i,i.v,i.B,i.l,i.S,i.u)}Ye.prototype.ba=function(i){i=i.target;const l=this.O;l&&et(i)==3?l.j():this.Y(i)},Ye.prototype.Y=function(i){try{if(i==this.g)e:{const G=et(this.g),de=this.g.ya(),Y=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Ho(this.g)))){this.K||G!=4||de==7||(de==8||Y<=0?ln(3):ln(2)),Tr(this);var l=this.g.ca();this.X=l;var u=Uu(this);if(this.o=l==200,Fu(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(f)){var S=f;break t}}S=null}if(i=S)Ot(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,br(this,i);else{this.o=!1,this.m=3,Se(12),_t(this),dn(this);break e}}if(this.R){i=!0;let pe;for(;!this.K&&this.C<u.length;)if(pe=ju(this,u),pe==_r){G==4&&(this.m=4,Se(14),i=!1),Ot(this.i,this.l,null,"[Incomplete Response]");break}else if(pe==wo){this.m=4,Se(15),Ot(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Ot(this.i,this.l,pe,null),br(this,pe);if(Ro(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||u.length!=0||this.h.h||(this.m=1,Se(16),i=!1),this.o=this.o&&i,!i)Ot(this.i,this.l,u,"[Invalid Chunked Response]"),_t(this),dn(this);else if(u.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Dr(N),N.P=!0,Se(11))}}else Ot(this.i,this.l,u,null),br(this,u);G==4&&_t(this),this.o&&!this.K&&(G==4?Zo(this.j,this):(this.o=!1,rs(this)))}else sh(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Se(12)):(this.m=0,Se(13)),_t(this),dn(this)}}}catch{}finally{}};function Uu(i){if(!Ro(i))return i.g.la();const l=Ho(i.g);if(l==="")return"";let u="";const f=l.length,A=et(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return _t(i),dn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,u+=i.h.i.decode(l[S],{stream:!(A&&S==f-1)});return l.length=0,i.h.g+=u,i.C=0,i.h.g}function Ro(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function ju(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?_r:(u=Number(l.substring(u,f)),isNaN(u)?wo:(f+=1,f+u>l.length?_r:(l=l.slice(f,f+u),i.C=f+u,l)))}Ye.prototype.cancel=function(){this.K=!0,_t(this)};function rs(i){i.T=Date.now()+i.H,Co(i,i.H)}function Co(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=cn(d(i.aa,i),l)}function Tr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Ye.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?($u(this.i,this.B),this.M!=2&&(ln(),Se(17)),_t(this),this.m=2,dn(this)):Co(this,this.T-i)};function dn(i){i.j.I==0||i.K||Zo(i.j,i)}function _t(i){Tr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,po(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function br(i,l){try{var u=i.j;if(u.I!=0&&(u.g==i||Ir(u.h,i))){if(!i.L&&Ir(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)us(u),ls(u);else break e;Pr(u),Se(18)}}else u.xa=A[1],0<u.xa-u.K&&A[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=cn(d(u.Va,u),6e3));Vo(u.h)<=1&&u.ta&&(u.ta=void 0)}else Tt(u,11)}else if((i.L||u.g==i)&&us(u),!v(l))for(A=u.Ba.g.parse(l),l=0;l<A.length;l++){let Y=A[l];const pe=Y[0];if(!(pe<=u.K))if(u.K=pe,Y=Y[1],u.I==2)if(Y[0]=="c"){u.M=Y[1],u.ba=Y[2];const Fe=Y[3];Fe!=null&&(u.ka=Fe,u.j.info("VER="+u.ka));const bt=Y[4];bt!=null&&(u.za=bt,u.j.info("SVER="+u.za));const tt=Y[5];tt!=null&&typeof tt=="number"&&tt>0&&(f=1.5*tt,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const nt=i.g;if(nt){const ds=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var S=f.h;S.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ar(S,S.h),S.h=null))}if(f.G){const Vr=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(f.wa=Vr,ee(f.J,f.G,Vr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var N=i;if(f.na=na(f,f.L?f.ba:null,f.W),N.L){xo(f.h,N);var G=N,de=f.O;de&&(G.H=de),G.D&&(Tr(G),rs(G)),f.g=N}else Yo(f);u.i.length>0&&cs(u)}else Y[0]!="stop"&&Y[0]!="close"||Tt(u,7);else u.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Tt(u,7):Cr(u):Y[0]!="noop"&&u.l&&u.l.qa(Y),u.A=0)}}ln(4)}catch{}}var zu=class{constructor(i,l){this.g=i,this.map=l}};function Po(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Do(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Vo(i){return i.h?1:i.g?i.g.size:0}function Ir(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Ar(i,l){i.g?i.g.add(l):i.h=l}function xo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Po.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function No(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.G);return l}return w(i.i)}var ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gu(i,l){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let A,S=null;f>=0?(A=i[u].substring(0,f),S=i[u].substring(f+1)):A=i[u],l(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Xe(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof Xe?(this.l=i.l,fn(this,i.j),this.o=i.o,this.g=i.g,mn(this,i.u),this.h=i.h,wr(this,qo(i.i)),this.m=i.m):i&&(l=String(i).match(ko))?(this.l=!1,fn(this,l[1]||"",!0),this.o=pn(l[2]||""),this.g=pn(l[3]||"",!0),mn(this,l[4]),this.h=pn(l[5]||"",!0),wr(this,l[6]||"",!0),this.m=pn(l[7]||"")):(this.l=!1,this.i=new yn(null,this.l))}Xe.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(gn(l,Lo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(gn(l,Lo,!0),"@"),i.push(hn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(gn(u,u.charAt(0)=="/"?Ju:Qu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",gn(u,Ku)),i.join("")},Xe.prototype.resolve=function(i){const l=Oe(this);let u=!!i.j;u?fn(l,i.j):u=!!i.o,u?l.o=i.o:u=!!i.g,u?l.g=i.g:u=i.u!=null;var f=i.h;if(u)mn(l,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=l.h.lastIndexOf("/");A!=-1&&(f=l.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let N=0;N<A.length;){const G=A[N++];G=="."?f&&N==A.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&N==A.length&&S.push("")):(S.push(G),f=!0)}f=S.join("/")}else f=A}return u?l.h=f:u=i.i.toString()!=="",u?wr(l,qo(i.i)):u=!!i.m,u&&(l.m=i.m),l};function Oe(i){return new Xe(i)}function fn(i,l,u){i.j=u?pn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function mn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function wr(i,l,u){l instanceof yn?(i.i=l,Yu(i.i,i.l)):(u||(l=gn(l,Wu)),i.i=new yn(l,i.l))}function ee(i,l,u){i.i.set(l,u)}function is(i){return ee(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function pn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function gn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Hu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Hu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Lo=/[#\/\?@]/g,Qu=/[#\?:]/g,Ju=/[#\?]/g,Wu=/[#\?@]/g,Ku=/#/g;function yn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Et(i){i.g||(i.g=new Map,i.h=0,i.i&&Gu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=yn.prototype,n.add=function(i,l){Et(this),this.i=null,i=Ft(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Mo(i,l){Et(i),l=Ft(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Oo(i,l){return Et(i),l=Ft(i,l),i.g.has(l)}n.forEach=function(i,l){Et(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)};function Fo(i,l){Et(i);let u=[];if(typeof l=="string")Oo(i,l)&&(u=u.concat(i.g.get(Ft(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)u=u.concat(i[l]);return u}n.set=function(i,l){return Et(this),this.i=null,i=Ft(this,i),Oo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Fo(this,i),i.length>0?String(i[0]):l):l};function $o(i,l,u){Mo(i,l),u.length>0&&(i.i=null,i.g.set(Ft(i,l),w(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let f=0;f<l.length;f++){var u=l[f];const A=hn(u);u=Fo(this,u);for(let S=0;S<u.length;S++){let N=A;u[S]!==""&&(N+="="+hn(u[S])),i.push(N)}}return this.i=i.join("&")};function qo(i){const l=new yn;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function Ft(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Yu(i,l){l&&!i.j&&(Et(i),i.i=null,i.g.forEach(function(u,f){const A=f.toLowerCase();f!=A&&(Mo(this,f),$o(this,A,u))},i)),i.j=l}function Xu(i,l){const u=new un;if(a.Image){const f=new Image;f.onload=m(Ze,u,"TestLoadImage: loaded",!0,l,f),f.onerror=m(Ze,u,"TestLoadImage: error",!1,l,f),f.onabort=m(Ze,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=m(Ze,u,"TestLoadImage: timeout",!1,l,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Zu(i,l){const u=new un,f=new AbortController,A=setTimeout(()=>{f.abort(),Ze(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?Ze(u,"TestPingServer: ok",!0,l):Ze(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Ze(u,"TestPingServer: error",!1,l)})}function Ze(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function eh(){this.g=new Mu}function Sr(i){this.i=i.Sb||null,this.h=i.ab||!1}p(Sr,go),Sr.prototype.g=function(){return new os(this.i,this.h)};function os(i,l){Ee.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(os,Ee),n=os.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,_n(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?vn(this):_n(this),this.readyState==3&&Bo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,vn(this))},n.Na=function(i){this.g&&(this.response=i,vn(this))},n.ga=function(){this.g&&vn(this)};function vn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,_n(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function _n(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Uo(i){let l="";return Zn(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Rr(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Uo(u),typeof i=="string"?u!=null&&hn(u):ee(i,l,u))}function re(i){Ee.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(re,Ee);var th=/^https?$/i,nh=["POST","PUT"];n=re.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Io.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){jo(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),A=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(nh,l,void 0)>=0)||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of u)this.g.setRequestHeader(S,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){jo(this,S)}};function jo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,zo(i),as(i)}function zo(i){i.A||(i.A=!0,we(i,"complete"),we(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,we(this,"complete"),we(this,"abort"),as(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Go(this):this.Xa())},n.Xa=function(){Go(this)};function Go(i){if(i.h&&typeof o<"u"){if(i.v&&et(i)==4)setTimeout(i.Ca.bind(i),0);else if(we(i,"readystatechange"),et(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=S===0){let N=String(i.D).match(ko)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!th.test(N?N.toLowerCase():"")}u=f}if(u)we(i,"complete"),we(i,"success");else{i.o=6;try{var A=et(i)>2?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.ca()+"]",zo(i)}}finally{as(i)}}}}function as(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,l||we(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function et(i){return i.g?i.g.readyState:0}n.ca=function(){try{return et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Lu(l)}};function Ho(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function sh(i){const l={};i=(i.g&&et(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(v(i[f]))continue;var u=Bu(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[A]||[];l[A]=S,S.push(u)}Pu(l,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function En(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Qo(i){this.za=0,this.i=[],this.j=new un,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=En("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=En("baseRetryDelayMs",5e3,i),this.Za=En("retryDelaySeedMs",1e4,i),this.Ta=En("forwardChannelMaxRetries",2,i),this.va=En("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Po(i&&i.concurrentRequestLimit),this.Ba=new eh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Qo.prototype,n.ka=8,n.I=1,n.connect=function(i,l,u,f){Se(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=na(this,null,this.W),cs(this)};function Cr(i){if(Jo(i),i.I==3){var l=i.V++,u=Oe(i.J);if(ee(u,"SID",i.M),ee(u,"RID",l),ee(u,"TYPE","terminate"),Tn(i,u),l=new Ye(i,i.j,l),l.M=2,l.A=is(Oe(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=l.A,u=!0),u||(l.g=sa(l.j,null),l.g.ea(l.A)),l.F=Date.now(),rs(l)}ta(i)}function ls(i){i.g&&(Dr(i),i.g.cancel(),i.g=null)}function Jo(i){ls(i),i.v&&(a.clearTimeout(i.v),i.v=null),us(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function cs(i){if(!Do(i.h)&&!i.m){i.m=!0;var l=i.Ea;$||g(),B||($(),B=!0),_.add(l,i),i.D=0}}function rh(i,l){return Vo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=cn(d(i.Ea,i,l),ea(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const A=new Ye(this,this.j,i);let S=this.o;if(this.U&&(S?(S=io(S),ao(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Ko(this,A,l),u=Oe(this.J),ee(u,"RID",i),ee(u,"CVER",22),this.G&&ee(u,"X-HTTP-Session-Id",this.G),Tn(this,u),S&&(this.R?l="headers="+hn(Uo(S))+"&"+l:this.u&&Rr(u,this.u,S)),Ar(this.h,A),this.Ra&&ee(u,"TYPE","init"),this.S?(ee(u,"$req",l),ee(u,"SID","null"),A.U=!0,Er(A,u,null)):Er(A,u,l),this.I=2}}else this.I==3&&(i?Wo(this,i):this.i.length==0||Do(this.h)||Wo(this))};function Wo(i,l){var u;l?u=l.l:u=i.V++;const f=Oe(i.J);ee(f,"SID",i.M),ee(f,"RID",u),ee(f,"AID",i.K),Tn(i,f),i.u&&i.o&&Rr(f,i.u,i.o),u=new Ye(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),l&&(i.i=l.G.concat(i.i)),l=Ko(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ar(i.h,u),Er(u,f,l)}function Tn(i,l){i.H&&Zn(i.H,function(u,f){ee(l,f,u)}),i.l&&Zn({},function(u,f){ee(l,f,u)})}function Ko(i,l,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var A=i.i;let G=-1;for(;;){const de=["count="+u];G==-1?u>0?(G=A[0].g,de.push("ofs="+G)):G=0:de.push("ofs="+G);let Y=!0;for(let pe=0;pe<u;pe++){var S=A[pe].g;const Fe=A[pe].map;if(S-=G,S<0)G=Math.max(0,A[pe].g-100),Y=!1;else try{S="req"+S+"_"||"";try{var N=Fe instanceof Map?Fe:Object.entries(Fe);for(const[bt,tt]of N){let nt=tt;c(tt)&&(nt=pr(tt)),de.push(S+bt+"="+encodeURIComponent(nt))}}catch(bt){throw de.push(S+"type="+encodeURIComponent("_badmap")),bt}}catch{f&&f(Fe)}}if(Y){N=de.join("&");break e}}N=void 0}return i=i.i.splice(0,u),l.G=i,N}function Yo(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;$||g(),B||($(),B=!0),_.add(l,i),i.A=0}}function Pr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=cn(d(i.Da,i),ea(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Xo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=cn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Se(10),ls(this),Xo(this))};function Dr(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Xo(i){i.g=new Ye(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=Oe(i.na);ee(l,"RID","rpc"),ee(l,"SID",i.M),ee(l,"AID",i.K),ee(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&ee(l,"TO",i.ia),ee(l,"TYPE","xmlhttp"),Tn(i,l),i.u&&i.o&&Rr(l,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=is(Oe(l)),u.u=null,u.R=!0,So(u,i)}n.Va=function(){this.C!=null&&(this.C=null,ls(this),Pr(this),Se(19))};function us(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Zo(i,l){var u=null;if(i.g==l){us(i),Dr(i),i.g=null;var f=2}else if(Ir(i.h,l))u=l.G,xo(i.h,l),f=1;else return;if(i.I!=0){if(l.o)if(f==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var A=i.D;f=ns(),we(f,new To(f,u)),cs(i)}else Yo(i);else if(A=l.m,A==3||A==0&&l.X>0||!(f==1&&rh(i,l)||f==2&&Pr(i)))switch(u&&u.length>0&&(l=i.h,l.i=l.i.concat(u)),A){case 1:Tt(i,5);break;case 4:Tt(i,10);break;case 3:Tt(i,6);break;default:Tt(i,2)}}}function ea(i,l){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*l}function Tt(i,l){if(i.j.info("Error code "+l),l==2){var u=d(i.bb,i),f=i.Ua;const A=!f;f=new Xe(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fn(f,"https"),is(f),A?Xu(f.toString(),u):Zu(f.toString(),u)}else Se(2);i.I=0,i.l&&i.l.pa(l),ta(i),Jo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function ta(i){if(i.I=0,i.ja=[],i.l){const l=No(i.h);(l.length!=0||i.i.length!=0)&&(R(i.ja,l),R(i.ja,i.i),i.h.i.length=0,w(i.i),i.i.length=0),i.l.oa()}}function na(i,l,u){var f=u instanceof Xe?Oe(u):new Xe(u);if(f.g!="")l&&(f.g=l+"."+f.g),mn(f,f.u);else{var A=a.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const S=new Xe(null);f&&fn(S,f),l&&(S.g=l),A&&mn(S,A),u&&(S.h=u),f=S}return u=i.G,l=i.wa,u&&l&&ee(f,u,l),ee(f,"VER",i.ka),Tn(i,f),f}function sa(i,l,u){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new re(new Sr({ab:u})):new re(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ra(){}n=ra.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function hs(){}hs.prototype.g=function(i,l){return new De(i,l)};function De(i,l){Ee.call(this),this.g=new Qo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!v(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new $t(this)}p(De,Ee),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Cr(this.g)},De.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=pr(i),i=u);l.i.push(new zu(l.Ya++,i)),l.I==3&&cs(l)},De.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,De.Z.N.call(this)};function ia(i){gr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}p(ia,gr);function oa(){yr.call(this),this.status=1}p(oa,yr);function $t(i){this.g=i}p($t,ra),$t.prototype.ra=function(){we(this.g,"a")},$t.prototype.qa=function(i){we(this.g,new ia(i))},$t.prototype.pa=function(i){we(this.g,new oa)},$t.prototype.oa=function(){we(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,nc=function(){return new hs},tc=function(){return ns()},ec=vt,Kr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,Es=ss,bo.COMPLETE="complete",Zl=bo,yo.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,In=yo,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,Xl=re}).apply(typeof ms<"u"?ms:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn="12.10.0";function If(n){tn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Gl("@firebase/firestore");function qt(){return Ct.logLevel}function M(n,...e){if(Ct.logLevel<=W.DEBUG){const t=e.map(Ii);Ct.debug(`Firestore (${tn}): ${n}`,...t)}}function Je(n,...e){if(Ct.logLevel<=W.ERROR){const t=e.map(Ii);Ct.error(`Firestore (${tn}): ${n}`,...t)}}function Pt(n,...e){if(Ct.logLevel<=W.WARN){const t=e.map(Ii);Ct.warn(`Firestore (${tn}): ${n}`,...t)}}function Ii(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,sc(n,s,t)}function sc(n,e,t){let s=`FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Je(s),new Error(s)}function K(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||sc(e,r,s)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Af{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class wf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Sf{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let o=new at;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new at,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new at)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(K(typeof s.accessToken=="string",31837,{l:s}),new rc(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class Rf{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Cf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Rf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,of(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const s=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ba(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ba(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Df(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function H(n,e){return n<e?-1:n>e?1:0}function Yr(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return Mr(r)===Mr(o)?H(r,o):Mr(r)?1:-1}return H(n.length,e.length)}const Vf=55296,xf=57343;function Mr(n){const e=n.charCodeAt(0);return e>=Vf&&e<=xf}function Qt(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="__name__";class $e{constructor(e,t,s){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&U(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return $e.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $e?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=$e.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return H(e.length,t.length)}static compareSegments(e,t){const s=$e.isNumericId(e),r=$e.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?$e.extractNumericId(e).compare($e.extractNumericId(t)):Yr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ot.fromString(e.substring(4,e.length-2))}}class Z extends $e{construct(e,t,s){return new Z(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const Nf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends $e{construct(e,t,s){return new ve(e,t,s)}static isValidIdentifier(e){return Nf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ia}static keyField(){return new ve([Ia])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(o(),r++)}if(o(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Z.fromString(e))}static fromName(e){return new q(Z.fromString(e).popFirst(5))}static empty(){return new q(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kf(n,e,t,s){if(e===!0&&s===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Aa(n){if(!q.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wa(n){if(q.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hs(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e){const t={typeString:n};return e&&(t.value=e),t}function Gn(n,e){if(!oc(n))throw new L(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new L(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=-62135596800,Ra=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ra);return new te(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sa)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ra}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gn(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:ce("string",te._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new te(0,0))}static max(){return new j(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=-1;function Lf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=j.fromTimestamp(s===1e9?new te(t+1,0):new te(t,s));return new ct(r,q.empty(),e)}function Mf(n){return new ct(n.readTime,n.key,Mn)}class ct{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ct(j.min(),q.empty(),Mn)}static max(){return new ct(j.max(),q.empty(),Mn)}}function Of(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Ff)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,o=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++o,a&&o===r&&t()}),(h=>s(h)))})),a=!0,o===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,o)=>{s.push(t.call(this,r,o))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next((m=>{a[d]=m,++c,c===o&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new P(((s,r)=>{const o=()=>{e()===!0?t().next((()=>{o()}),r):s()};o()}))}}function qf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=-1;function Js(n){return n==null}function xs(n){return n===0&&1/n==-1/0}function Bf(n){return typeof n=="number"&&Number.isInteger(n)&&!xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="";function Uf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ca(e)),e=jf(n.get(t),e);return Ca(e)}function jf(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case ac:t+="";break;default:t+=o}}return t}function Ca(n){return n+ac+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ps(this.root,e,this.comparator,!0)}}class ps{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??ye.RED,this.left=r??ye.EMPTY,this.right=o??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new ye(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Da(this.data.getIterator())}getIteratorFrom(e){return new Da(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Da{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new me(ve.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qt(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new cc("Invalid base64 string: "+o):o}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const zf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=zf.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ht(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="server_timestamp",hc="__type__",dc="__previous_value__",fc="__local_write_time__";function Si(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[hc])==null?void 0:s.stringValue)===uc}function Ws(n){const e=n.mapValue.fields[dc];return Si(e)?Ws(e):e}function On(n){const e=ut(n.mapValue.fields[fc].timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,s,r,o,a,c,h,d,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=p}}const Ns="(default)";class Fn{constructor(e,t){this.projectId=e,this.database=t||Ns}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database===Ns}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}function Hf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="__type__",Qf="__max__",gs={mapValue:{}},pc="__vector__",ks="value";function dt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Si(n)?4:Wf(n)?9007199254740991:Jf(n)?10:11:U(28295,{value:n})}function Ge(n,e){if(n===e)return!0;const t=dt(n);if(t!==dt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return On(n).isEqual(On(e));case 3:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=ut(r.timestampValue),c=ut(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,o){return ht(r.bytesValue).isEqual(ht(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,o){return oe(r.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(r.geoPointValue.longitude)===oe(o.geoPointValue.longitude)})(n,e);case 2:return(function(r,o){if("integerValue"in r&&"integerValue"in o)return oe(r.integerValue)===oe(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=oe(r.doubleValue),c=oe(o.doubleValue);return a===c?xs(a)===xs(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Qt(n.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:case 11:return(function(r,o){const a=r.mapValue.fields||{},c=o.mapValue.fields||{};if(Pa(a)!==Pa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ge(a[h],c[h])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function $n(n,e){return(n.values||[]).find((t=>Ge(t,e)))!==void 0}function Jt(n,e){if(n===e)return 0;const t=dt(n),s=dt(e);if(t!==s)return H(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const c=oe(o.integerValue||o.doubleValue),h=oe(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,e);case 3:return Va(n.timestampValue,e.timestampValue);case 4:return Va(On(n),On(e));case 5:return Yr(n.stringValue,e.stringValue);case 6:return(function(o,a){const c=ht(o),h=ht(a);return c.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=H(c[d],h[d]);if(m!==0)return m}return H(c.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const c=H(oe(o.latitude),oe(a.latitude));return c!==0?c:H(oe(o.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return xa(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var T,w,R,D;const c=o.fields||{},h=a.fields||{},d=(T=c[ks])==null?void 0:T.arrayValue,m=(w=h[ks])==null?void 0:w.arrayValue,p=H(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((D=m==null?void 0:m.values)==null?void 0:D.length)||0);return p!==0?p:xa(d,m)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===gs.mapValue&&a===gs.mapValue)return 0;if(o===gs.mapValue)return 1;if(a===gs.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let p=0;p<h.length&&p<m.length;++p){const T=Yr(h[p],m[p]);if(T!==0)return T;const w=Jt(c[h[p]],d[m[p]]);if(w!==0)return w}return H(h.length,m.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Va(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=ut(n),s=ut(e),r=H(t.seconds,s.seconds);return r!==0?r:H(t.nanos,s.nanos)}function xa(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=Jt(t[r],s[r]);if(o)return o}return H(t.length,s.length)}function Wt(n){return Xr(n)}function Xr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ut(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ht(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=Xr(o);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Xr(t.fields[a])}`;return r+"}"})(n.mapValue):U(61005,{value:n})}function Ts(n){switch(dt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ws(n);return e?16+Ts(e):16;case 5:return 2*n.stringValue.length;case 6:return ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,o)=>r+Ts(o)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return gt(s.fields,((o,a)=>{r+=o.length+Ts(a)})),r})(n.mapValue);default:throw U(13486,{value:n})}}function Na(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Zr(n){return!!n&&"integerValue"in n}function Ri(n){return!!n&&"arrayValue"in n}function ka(n){return!!n&&"nullValue"in n}function La(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bs(n){return!!n&&"mapValue"in n}function Jf(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mc])==null?void 0:s.stringValue)===pc}function Dn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return gt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Dn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dn(n.arrayValue.values[t]);return e}return{...n}}function Wf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dn(t)}setAll(e){let t=ve.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Dn(a):r.push(c.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];bs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){gt(t,((r,o)=>e[r]=o));for(const r of s)delete e[r]}clone(){return new Pe(Dn(this.value))}}function gc(n){const e=[];return gt(n.fields,((t,s)=>{const r=new ve([t]);if(bs(s)){const o=gc(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)})),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,s,r,o,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,j.min(),j.min(),j.min(),Pe.empty(),0)}static newFoundDocument(e,t,s,r){return new Ae(e,1,t,j.min(),s,r,0)}static newNoDocument(e,t){return new Ae(e,2,t,j.min(),j.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,j.min(),j.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.position=e,this.inclusive=t}}function Ma(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=q.comparator(q.fromName(a.referenceValue),t.key):s=Jt(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ge(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{}class le extends yc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Xf(e,t,s):t==="array-contains"?new tm(e,s):t==="in"?new nm(e,s):t==="not-in"?new sm(e,s):t==="array-contains-any"?new rm(e,s):new le(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Zf(e,s):new em(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jt(t,this.value)):t!==null&&dt(this.value)===dt(t)&&this.matchesComparison(Jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Me extends yc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Me(e,t)}matches(e){return vc(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vc(n){return n.op==="and"}function _c(n){return Yf(n)&&vc(n)}function Yf(n){for(const e of n.filters)if(e instanceof Me)return!1;return!0}function ei(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+Wt(n.value);if(_c(n))return n.filters.map((e=>ei(e))).join(",");{const e=n.filters.map((t=>ei(t))).join(",");return`${n.op}(${e})`}}function Ec(n,e){return n instanceof le?(function(s,r){return r instanceof le&&s.op===r.op&&s.field.isEqual(r.field)&&Ge(s.value,r.value)})(n,e):n instanceof Me?(function(s,r){return r instanceof Me&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((o,a,c)=>o&&Ec(a,r.filters[c])),!0):!1})(n,e):void U(19439)}function Tc(n){return n instanceof le?(function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`})(n):n instanceof Me?(function(t){return t.op.toString()+" {"+t.getFilters().map(Tc).join(" ,")+"}"})(n):"Filter"}class Xf extends le{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zf extends le{constructor(e,t){super(e,"in",t),this.keys=bc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class em extends le{constructor(e,t){super(e,"not-in",t),this.keys=bc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>q.fromName(s.referenceValue)))}class tm extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ri(t)&&$n(t.arrayValue,this.value)}}class nm extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$n(this.value.arrayValue,t)}}class sm extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$n(this.value.arrayValue,t)}}class rm extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ri(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$n(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t=null,s=[],r=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function Fa(n,e=null,t=[],s=[],r=null,o=null,a=null){return new im(n,e,t,s,r,o,a)}function Ci(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ei(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(o){return o.field.canonicalString()+o.dir})(s))).join(","),Js(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Wt(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Wt(s))).join(",")),e.Te=t}return e.Te}function Pi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ec(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oa(n.startAt,e.startAt)&&Oa(n.endAt,e.endAt)}function ti(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t=null,s=[],r=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function om(n,e,t,s,r,o,a,c){return new Hn(n,e,t,s,r,o,a,c)}function Di(n){return new Hn(n)}function $a(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function am(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ic(n){return n.collectionGroup!==null}function Vn(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(ve.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Ms(o,s))})),t.has(ve.keyField().canonicalString())||e.Ie.push(new Ms(ve.keyField(),s))}return e.Ie}function Be(n){const e=z(n);return e.Ee||(e.Ee=lm(e,Vn(n))),e.Ee}function lm(n,e){if(n.limitType==="F")return Fa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const o=r.dir==="desc"?"asc":"desc";return new Ms(r.field,o)}));const t=n.endAt?new Ls(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ls(n.startAt.position,n.startAt.inclusive):null;return Fa(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ni(n,e){const t=n.filters.concat([e]);return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function si(n,e,t){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ks(n,e){return Pi(Be(n),Be(e))&&n.limitType===e.limitType}function Ac(n){return`${Ci(Be(n))}|lt:${n.limitType}`}function Bt(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Tc(r))).join(", ")}]`),Js(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Wt(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Wt(r))).join(",")),`Target(${s})`})(Be(n))}; limitType=${n.limitType})`}function Ys(n,e){return e.isFoundDocument()&&(function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):q.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)})(n,e)&&(function(s,r){for(const o of Vn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,h){const d=Ma(a,c,h);return a.inclusive?d<=0:d<0})(s.startAt,Vn(s),r)||s.endAt&&!(function(a,c,h){const d=Ma(a,c,h);return a.inclusive?d>=0:d>0})(s.endAt,Vn(s),r))})(n,e)}function cm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wc(n){return(e,t)=>{let s=!1;for(const r of Vn(n)){const o=um(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function um(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):(function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Jt(h,d):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){gt(this.inner,((t,s)=>{for(const[r,o]of s)e(r,o)}))}isEmpty(){return lc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new se(q.comparator);function We(){return hm}const Sc=new se(q.comparator);function An(...n){let e=Sc;for(const t of n)e=e.insert(t.key,t);return e}function Rc(n){let e=Sc;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function wt(){return xn()}function Cc(){return xn()}function xn(){return new Nt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const dm=new se(q.comparator),fm=new me(q.comparator);function Q(...n){let e=fm;for(const t of n)e=e.add(t);return e}const mm=new me(H);function pm(){return mm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(e)?"-0":e}}function Pc(n){return{integerValue:""+n}}function gm(n,e){return Bf(e)?Pc(e):Vi(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this._=void 0}}function ym(n,e,t){return n instanceof qn?(function(r,o){const a={fields:{[hc]:{stringValue:uc},[fc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Si(o)&&(o=Ws(o)),o&&(a.fields[dc]=o),{mapValue:a}})(t,e):n instanceof Bn?Vc(n,e):n instanceof Un?xc(n,e):(function(r,o){const a=Dc(r,o),c=qa(a)+qa(r.Ae);return Zr(a)&&Zr(r.Ae)?Pc(c):Vi(r.serializer,c)})(n,e)}function vm(n,e,t){return n instanceof Bn?Vc(n,e):n instanceof Un?xc(n,e):t}function Dc(n,e){return n instanceof Os?(function(s){return Zr(s)||(function(o){return!!o&&"doubleValue"in o})(s)})(e)?e:{integerValue:0}:null}class qn extends Xs{}class Bn extends Xs{constructor(e){super(),this.elements=e}}function Vc(n,e){const t=Nc(e);for(const s of n.elements)t.some((r=>Ge(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Un extends Xs{constructor(e){super(),this.elements=e}}function xc(n,e){let t=Nc(e);for(const s of n.elements)t=t.filter((r=>!Ge(r,s)));return{arrayValue:{values:t}}}class Os extends Xs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function qa(n){return oe(n.integerValue||n.doubleValue)}function Nc(n){return Ri(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t){this.field=e,this.transform=t}}function Em(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Bn&&r instanceof Bn||s instanceof Un&&r instanceof Un?Qt(s.elements,r.elements,Ge):s instanceof Os&&r instanceof Os?Ge(s.Ae,r.Ae):s instanceof qn&&r instanceof qn})(n.transform,e.transform)}class Tm{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Is(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zs{}function kc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xi(n.key,ke.none()):new Qn(n.key,n.data,ke.none());{const t=n.data,s=Pe.empty();let r=new me(ve.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new yt(n.key,s,new Ve(r.toArray()),ke.none())}}function bm(n,e,t){n instanceof Qn?(function(r,o,a){const c=r.value.clone(),h=Ua(r.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof yt?(function(r,o,a){if(!Is(r.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ua(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Lc(r)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Nn(n,e,t,s){return n instanceof Qn?(function(o,a,c,h){if(!Is(o.precondition,a))return c;const d=o.value.clone(),m=ja(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof yt?(function(o,a,c,h){if(!Is(o.precondition,a))return c;const d=ja(o.fieldTransforms,h,a),m=a.data;return m.setAll(Lc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(o,a,c){return Is(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Im(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=Dc(s.transform,r||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(s.field,o))}return t||null}function Ba(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Qt(s,r,((o,a)=>Em(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qn extends Zs{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class yt extends Zs{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Ua(n,e,t){const s=new Map;K(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,c=e.data.field(o.field);s.set(o.field,vm(a,c,t[r]))}return s}function ja(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,ym(o,a,e))}return s}class xi extends Zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Am extends Zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&bm(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Nn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Nn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Cc();return this.mutations.forEach((r=>{const o=e.get(r.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(r.key)?null:c;const h=kc(a,c);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(j.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Q())}isEqual(e){return this.batchId===e.batchId&&Qt(this.mutations,e.mutations,((t,s)=>Ba(t,s)))&&Qt(this.baseMutations,e.baseMutations,((t,s)=>Ba(t,s)))}}class Ni{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){K(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return dm})();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Ni(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,J;function Cm(n){switch(n){case C.OK:return U(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function Mc(n){if(n===void 0)return Je("GRPC error has no .code"),C.UNKNOWN;switch(n){case ae.OK:return C.OK;case ae.CANCELLED:return C.CANCELLED;case ae.UNKNOWN:return C.UNKNOWN;case ae.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ae.INTERNAL:return C.INTERNAL;case ae.UNAVAILABLE:return C.UNAVAILABLE;case ae.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ae.NOT_FOUND:return C.NOT_FOUND;case ae.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ae.ABORTED:return C.ABORTED;case ae.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ae.DATA_LOSS:return C.DATA_LOSS;default:return U(39323,{code:n})}}(J=ae||(ae={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new ot([4294967295,4294967295],0);function za(n){const e=Pm().encode(n),t=new Yl;return t.update(e),new Uint8Array(t.digest())}function Ga(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ot([t,s],0),new ot([r,o],0)]}class ki{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wn(`Invalid padding: ${t}`);if(s<0)throw new wn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ot.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(ot.fromNumber(s)));return r.compare(Dm)===1&&(r=new ot([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=za(e),[s,r]=Ga(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new ki(o,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=za(e),[s,r]=Ga(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Jn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new er(j.min(),r,new se(H),We(),Q())}}class Jn{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Jn(s,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Oc{constructor(e,t){this.targetId=e,this.Ce=t}}class Fc{constructor(e,t,s=_e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Ha{constructor(){this.ve=0,this.Fe=Qa(),this.Me=_e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),s=Q();return this.Fe.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:U(38017,{changeType:o})}})),new Jn(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Qa()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Vm{constructor(e){this.Ge=e,this.ze=new Map,this.je=We(),this.He=ys(),this.Je=ys(),this.Ze=new se(H)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(ti(o))if(s===0){const a=new q(o.path);this.et(t,a,Ae.newNoDocument(a,j.min()))}else K(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),h=c?this.ct(c,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,c;try{a=ht(s).toUint8Array()}catch(h){if(h instanceof cc)return Pt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ki(a,r,o)}catch(h){return Pt(h instanceof wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const c=this.ot(a);if(c){if(o.current&&ti(c.target)){const h=new q(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ae.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}}));let s=Q();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const r=new er(e,t,this.Ze,this.je,s);return this.je=We(),this.He=ys(),this.Je=ys(),this.Ze=new se(H),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ha,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new me(H),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new me(H),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ha),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ys(){return new se(q.comparator)}function Qa(){return new se(q.comparator)}const xm={asc:"ASCENDING",desc:"DESCENDING"},Nm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},km={and:"AND",or:"OR"};class Lm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ri(n,e){return n.useProto3Json||Js(e)?e:{value:e}}function Fs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $c(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Mm(n,e){return Fs(n,e.toTimestamp())}function Ue(n){return K(!!n,49232),j.fromTimestamp((function(t){const s=ut(t);return new te(s.seconds,s.nanos)})(n))}function Li(n,e){return ii(n,e).canonicalString()}function ii(n,e){const t=(function(r){return new Z(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function qc(n){const e=Z.fromString(n);return K(Gc(e),10190,{key:e.toString()}),e}function oi(n,e){return Li(n.databaseId,e.path)}function Or(n,e){const t=qc(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Uc(t))}function Bc(n,e){return Li(n.databaseId,e)}function Om(n){const e=qc(n);return e.length===4?Z.emptyPath():Uc(e)}function ai(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Uc(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ja(n,e,t){return{name:oi(n,e),fields:t.value.mapValue.fields}}function Fm(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(K(m===void 0||typeof m=="string",58123),_e.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),_e.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?C.UNKNOWN:Mc(d.code);return new L(m,d.message||"")})(a);t=new Fc(s,r,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Or(n,s.document.name),o=Ue(s.document.updateTime),a=s.document.createTime?Ue(s.document.createTime):j.min(),c=new Pe({mapValue:{fields:s.document.fields}}),h=Ae.newFoundDocument(r,o,a,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new As(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Or(n,s.document),o=s.readTime?Ue(s.readTime):j.min(),a=Ae.newNoDocument(r,o),c=s.removedTargetIds||[];t=new As([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Or(n,s.document),o=s.removedTargetIds||[];t=new As([],o,r,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new Rm(r,o),c=s.targetId;t=new Oc(c,a)}}return t}function $m(n,e){let t;if(e instanceof Qn)t={update:Ja(n,e.key,e.value)};else if(e instanceof xi)t={delete:oi(n,e.key)};else if(e instanceof yt)t={update:Ja(n,e.key,e.data),updateMask:Jm(e.fieldMask)};else{if(!(e instanceof Am))return U(16599,{dt:e.type});t={verify:oi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(o,a){const c=a.transform;if(c instanceof qn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Un)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Os)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw U(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,o){return o.updateTime!==void 0?{updateTime:Mm(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U(27497)})(n,e.precondition)),t}function qm(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map((t=>(function(r,o){let a=r.updateTime?Ue(r.updateTime):Ue(o);return a.isEqual(j.min())&&(a=Ue(o)),new Tm(a,r.transformResults||[])})(t,e)))):[]}function Bm(n,e){return{documents:[Bc(n,e.path)]}}function Um(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Bc(n,r);const o=(function(d){if(d.length!==0)return zc(Me.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:Ut(T.field),direction:Gm(T.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ri(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function jm(n){let e=Om(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){K(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=(function(p){const T=jc(p);return T instanceof Me&&_c(T)?T.getFilters():[T]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((T=>(function(R){return new Ms(jt(R.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(T)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let T;return T=typeof p=="object"?p.value:p,Js(T)?null:T})(t.limit));let h=null;t.startAt&&(h=(function(p){const T=!!p.before,w=p.values||[];return new Ls(w,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(p){const T=!p.before,w=p.values||[];return new Ls(w,T)})(t.endAt)),om(e,r,a,o,c,"F",h,d)}function zm(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jc(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=jt(t.unaryFilter.field);return le.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=jt(t.unaryFilter.field);return le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jt(t.unaryFilter.field);return le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jt(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return le.create(jt(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Me.create(t.compositeFilter.filters.map((s=>jc(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function Gm(n){return xm[n]}function Hm(n){return Nm[n]}function Qm(n){return km[n]}function Ut(n){return{fieldPath:n.canonicalString()}}function jt(n){return ve.fromServerFormat(n.fieldPath)}function zc(n){return n instanceof le?(function(t){if(t.op==="=="){if(La(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NAN"}};if(ka(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(La(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NAN"}};if(ka(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(t.field),op:Hm(t.op),value:t.value}}})(n):n instanceof Me?(function(t){const s=t.getFilters().map((r=>zc(r)));return s.length===1?s[0]:{compositeFilter:{op:Qm(t.op),filters:s}}})(n):U(54877,{filter:n})}function Jm(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Gc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Hc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,s,r,o=j.min(),a=j.min(),c=_e.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new st(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.yt=e}}function Km(n){const e=jm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?si(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.Sn=new Xm}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(ct.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(ct.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Xm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new me(Z.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new me(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qc=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Qc,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Kt(0)}static ar(){return new Kt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="LruGarbageCollector",Zm=1048576;function Ya([n,e],[t,s]){const r=H(n,t);return r===0?H(e,s):r}class ep{constructor(e){this.Pr=e,this.buffer=new me(Ya),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ya(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tp{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(Ka,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sn(t)?M(Ka,"Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Ar(3e5)}))}}class np{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Qs.ce);const s=new ep(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Wa)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wa):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(o=p,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(d=Date.now(),qt()<=W.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${p} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:p}))))}}function sp(n,e){return new np(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.changes=new Nt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Nn(s.mutation,r,Ve.empty(),te.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Q()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Q()){const r=wt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((o=>{let a=An();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=wt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Q())))}populateOverlays(e,t,s){const r=[];return s.forEach((o=>{t.has(o)||r.push(o)})),this.documentOverlayCache.getOverlays(e,r).next((o=>{o.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let o=We();const a=xn(),c=(function(){return xn()})();return t.forEach(((h,d)=>{const m=s.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof yt)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Nn(m.mutation,d,m.mutation.getFieldMask(),te.now())):a.set(d.key,Ve.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>c.set(d,new ip(m,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=xn();let r=new se(((a,c)=>a-c)),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let m=s.get(h)||Ve.empty();m=c.applyToLocalView(d,m),s.set(h,m);const p=(r.get(c.batchId)||Q()).add(h);r=r.insert(c.batchId,p)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,p=Cc();m.forEach((T=>{if(!o.has(T)){const w=kc(t.get(T),s.get(T));w!==null&&p.set(T,w),o=o.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return P.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return am(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ic(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):P.resolve(wt());let c=Mn,h=o;return a.next((d=>P.forEach(d,((m,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next((T=>{h=h.insert(m,T)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,h,d,Q()))).next((m=>({batchId:c,changes:Rc(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((s=>{let r=An();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=An();return this.indexManager.getCollectionParents(e,o).next((c=>P.forEach(c,(h=>{const d=(function(p,T){return new Hn(T,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((m=>{m.forEach(((p,T)=>{a=a.insert(p,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ae.newInvalidDocument(m)))}));let c=An();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&Nn(m.mutation,d,Ve.empty(),te.now()),Ys(t,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Ue(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:Km(r.bundledQuery),readTime:Ue(r.readTime)}})(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.overlays=new se(q.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=wt();return P.forEach(t,(r=>this.getOverlay(e,r).next((o=>{o!==null&&s.set(r,o)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,o)=>{this.bt(e,t,o)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=wt(),o=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>s&&r.set(h.getKey(),h)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new se(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=o.get(d.largestBatchId);m===null&&(m=wt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=wt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=r)););return P.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Sm(t,s));let o=this.Lr.get(t);o===void 0&&(o=Q(),this.Lr.set(t,o)),this.Lr.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.kr=new me(ge.Kr),this.qr=new me(ge.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ge(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new q(new Z([])),s=new ge(t,e),r=new ge(t,e+1),o=[];return this.qr.forEachInRange([s,r],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new q(new Z([])),s=new ge(t,e),r=new ge(t,e+1);let o=Q();return this.qr.forEachInRange([s,r],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ge(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return q.comparator(e.key,t.key)||H(e.Hr,t.Hr)}static Ur(e,t){return H(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new me(ge.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wm(o,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Jr=this.Jr.add(new ge(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),o=r<0?0:r;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?wi:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ge(t,0),r=new ge(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new me(H);return t.forEach((r=>{const o=new ge(r,0),a=new ge(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(c=>{s=s.add(c.Hr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;q.isDocumentKey(o)||(o=o.child(""));const a=new ge(new q(o),0);let c=new me(H);return this.Jr.forEachWhile((h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(h.Hr)),!0)}),a),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){K(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,(r=>{const o=new ge(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new ge(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.ti=e,this.docs=(function(){return new se(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let s=We();return t.forEach((r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Ae.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=We();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Of(Mf(m),s)<=0||(r.has(m.key)||Ys(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,s,r){U(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new dp(this)}getSize(e){return P.resolve(this.size)}}class dp extends rp{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.persistence=e,this.ri=new Nt((t=>Ci(t)),Pi),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.ii=0,this.si=new Mi,this.targetCount=0,this.oi=Kt._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Kt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),P.waitFor(o).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((a=>{o.push(r.markPotentiallyOrphaned(e,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){this._i={},this.overlays={},this.ai=new Qs(0),this.ui=!1,this.ui=!0,this.ci=new cp,this.referenceDelegate=e(this),this.li=new fp(this),this.indexManager=new Ym,this.remoteDocumentCache=(function(r){return new hp(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Wm(t),this.Pi=new ap(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new up(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new mp(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((o=>this.referenceDelegate.Ii(r).next((()=>o)))).toPromise().then((o=>(r.raiseOnCommittedEvent(),o)))}Ei(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class mp extends $f{constructor(e){super(),this.currentSequenceNumber=e}}class Oi{constructor(e){this.persistence=e,this.Ri=new Mi,this.Ai=null}static Vi(e){return new Oi(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((o=>this.di.add(o.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=q.fromPath(s);return this.mi(e,r).next((o=>{o||t.removeEntry(r,j.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class $s{constructor(e,t){this.persistence=e,this.fi=new Nt((s=>Uf(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=sp(this,t)}static Vi(e,t){return new $s(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((o=>o?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,o.removeEntry(a,j.min()))})))).next((()=>o.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ts(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=Q(),r=Q();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Fi(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return nd()?8:qf(ed())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.gs(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(e,t,r,s).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new pp;return this.ys(e,t,a).next((c=>{if(o.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>o.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(qt()<=W.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Bt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(qt()<=W.DEBUG&&M("QueryEngine","Query:",Bt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(qt()<=W.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Bt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):P.resolve())}gs(e,t){if($a(t))return P.resolve(null);let s=Be(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=si(t,null,"F"),s=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=Q(...o);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((h=>{const d=this.bs(t,c);return this.Ss(t,d,a,h.readTime)?this.gs(e,si(t,null,"F")):this.Ds(e,d,t,h)}))))})))))}ps(e,t,s,r){return $a(t)||r.isEqual(j.min())?P.resolve(null):this.fs.getDocuments(e,s).next((o=>{const a=this.bs(t,o);return this.Ss(t,a,s,r)?P.resolve(null):(qt()<=W.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Bt(t)),this.Ds(e,a,t,Lf(r,Mn)).next((c=>c)))}))}bs(e,t){let s=new me(wc(e));return t.forEach(((r,o)=>{Ys(e,o)&&(s=s.add(o))})),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ys(e,t,s){return qt()<=W.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Bt(t)),this.fs.getDocumentsMatchingQuery(e,t,ct.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="LocalStore",yp=3e8;class vp{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new se(H),this.Fs=new Nt((o=>Ci(o)),Pi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new op(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function _p(n,e,t,s){return new vp(n,e,t,s)}async function Wc(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((o=>(r=o,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((o=>{const a=[],c=[];let h=Q();for(const d of r){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(s,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Ep(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,m){const p=d.batch,T=p.keys();let w=P.resolve();return T.forEach((R=>{w=w.next((()=>m.getEntry(h,R))).next((D=>{const V=d.docVersions.get(R);K(V!==null,48541),D.version.compareTo(V)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(h,p)))})(t,s,e,o).next((()=>o.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let h=Q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Kc(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Tp(n,e){const t=z(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((m,p)=>{const T=r.get(p);if(!T)return;c.push(t.li.removeMatchingKeys(o,m.removedDocuments,p).next((()=>t.li.addMatchingKeys(o,m.addedDocuments,p))));let w=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(_e.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):m.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(m.resumeToken,s)),r=r.insert(p,w),(function(D,V,x){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=yp?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(T,w,m)&&c.push(t.li.updateTargetData(o,w))}));let h=We(),d=Q();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(bp(o,a,e.documentUpdates).next((m=>{h=m.Bs,d=m.Ls}))),!s.isEqual(j.min())){const m=t.li.getLastRemoteSnapshotVersion(o).next((p=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,s)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(t.vs=r,o)))}function bp(n,e,t){let s=Q(),r=Q();return t.forEach((o=>s=s.add(o))),e.getEntries(n,s).next((o=>{let a=We();return t.forEach(((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(j.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):M($i,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{Bs:a,Ls:r}}))}function Ip(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=wi),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Ap(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((o=>o?(r=o,P.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new st(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function li(n,e,t){const s=z(n),r=s.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!sn(a))throw a;M($i,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Xa(n,e,t){const s=z(n);let r=j.min(),o=Q();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const p=z(h),T=p.Fs.get(m);return T!==void 0?P.resolve(p.vs.get(T)):p.li.getTargetData(d,m)})(s,a,Be(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:j.min(),t?o:Q()))).next((c=>(wp(s,cm(e),c),{documents:c,ks:o})))))}function wp(n,e,t){let s=n.Ms.get(e)||j.min();t.forEach(((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)})),n.Ms.set(e,s)}class Za{constructor(){this.activeTargetIds=pm()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sp{constructor(){this.vo=new Za,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Za,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="ConnectivityMonitor";class tl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(el,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(el,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs=null;function ci(){return vs===null?vs=(function(){return 268435456+Math.round(2147483648*Math.random())})():vs++,"0x"+vs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="RestConnection",Cp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Pp{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Ns?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,o){const a=ci(),c=this.Qo(e,t.toUriEncodedString());M(Fr,`Sending RPC '${e}' ${a}:`,c,s);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,r,o);const{host:d}=new URL(c),m=Ti(d);return this.zo(e,c,h,s,m).then((p=>(M(Fr,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Pt(Fr,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",s),p}))}jo(e,t,s,r,o,a){return this.Wo(e,t,s,r,o)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+tn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,o)=>e[o]=r)),s&&s.headers.forEach(((r,o)=>e[o]=r))}Qo(e,t){const s=Cp[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection",bn=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Gt extends Pp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gt.c_){const e=tc();bn(e,ec.STAT_EVENT,(t=>{t.stat===Kr.PROXY?M(Te,"STAT_EVENT: detected buffering proxy"):t.stat===Kr.NOPROXY&&M(Te,"STAT_EVENT: detected no buffering proxy")})),Gt.c_=!0}}zo(e,t,s,r,o){const a=ci();return new Promise(((c,h)=>{const d=new Xl;d.setWithCredentials(!0),d.listenOnce(Zl.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Es.NO_ERROR:const p=d.getResponseJson();M(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Es.TIMEOUT:M(Te,`RPC '${e}' ${a} timed out`),h(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const T=d.getStatus();if(M(Te,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let w=d.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const D=(function(x){const k=x.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(k)>=0?k:C.UNKNOWN})(R.status);h(new L(D,R.message))}else h(new L(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new L(C.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Te,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);M(Te,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=ci(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=o.join("");M(Te,`Creating RPC '${e}' stream ${r}: ${d}`,c);const m=a.createWebChannel(d,c);this.I_(m);let p=!1,T=!1;const w=new Dp({Ho:R=>{T?M(Te,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(p||(M(Te,`Opening RPC '${e}' stream ${r} transport.`),m.open(),p=!0),M(Te,`RPC '${e}' stream ${r} sending:`,R),m.send(R))},Jo:()=>m.close()});return bn(m,In.EventType.OPEN,(()=>{T||(M(Te,`RPC '${e}' stream ${r} transport opened.`),w.i_())})),bn(m,In.EventType.CLOSE,(()=>{T||(T=!0,M(Te,`RPC '${e}' stream ${r} transport closed`),w.o_(),this.E_(m))})),bn(m,In.EventType.ERROR,(R=>{T||(T=!0,Pt(Te,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),w.o_(new L(C.UNAVAILABLE,"The operation could not be completed")))})),bn(m,In.EventType.MESSAGE,(R=>{var D;if(!T){const V=R.data[0];K(!!V,16349);const x=V,k=(x==null?void 0:x.error)||((D=x[0])==null?void 0:D.error);if(k){M(Te,`RPC '${e}' stream ${r} received error:`,k);const F=k.status;let O=(function(_){const g=ae[_];if(g!==void 0)return Mc(g)})(F),$=k.message;F==="NOT_FOUND"&&$.includes("database")&&$.includes("does not exist")&&$.includes(this.databaseId.database)&&Pt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=C.INTERNAL,$="Unknown error status: "+F+" with message "+k.message),T=!0,w.o_(new L(O,$)),m.close()}else M(Te,`RPC '${e}' stream ${r} received:`,V),w.__(V)}})),Gt.u_(),setTimeout((()=>{w.s_()}),0),w}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return nc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){return new Gt(n)}function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){return new Lm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.c_=!1;class Yc{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="PersistentStream";class Xc{constructor(e,t,s,r,o,a,c,h){this.Ci=e,this.b_=s,this.S_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new L(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(nl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(nl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xp extends Xc{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Fm(this.serializer,e),s=(function(o){if(!("targetChange"in o))return j.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?Ue(a.readTime):j.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=ai(this.serializer),t.addTarget=(function(o,a){let c;const h=a.target;if(c=ti(h)?{documents:Bm(o,h)}:{query:Um(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$c(o,a.resumeToken);const d=ri(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=Fs(o,a.snapshotVersion.toTimestamp());const d=ri(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=zm(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=ai(this.serializer),t.removeTarget=e,this.K_(t)}}class Np extends Xc{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=qm(e.writeResults,e.commitTime),s=Ue(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ai(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>$m(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{}class Lp extends kp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,ii(t,s),r,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())}))}jo(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,ii(t,s),r,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Mp(n,e,t,s){return new Lp(n,e,t,s)}class Op{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Je(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="RemoteStore";class Fp{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{kt(this)&&(M(Dt,"Restarting streams for network reachability change."),await(async function(h){const d=z(h);d.Ea.add(4),await Wn(d),d.Va.set("Unknown"),d.Ea.delete(4),await nr(d)})(this))}))})),this.Va=new Op(s,r)}}async function nr(n){if(kt(n))for(const e of n.Ra)await e(!0)}async function Wn(n){for(const e of n.Ra)await e(!1)}function Zc(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ji(t)?Ui(t):rn(t).O_()&&Bi(t,e))}function qi(n,e){const t=z(n),s=rn(t);t.Ia.delete(e),s.O_()&&eu(t,e),t.Ia.size===0&&(s.O_()?s.L_():kt(t)&&t.Va.set("Unknown"))}function Bi(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rn(n).Z_(e)}function eu(n,e){n.da.$e(e),rn(n).X_(e)}function Ui(n){n.da=new Vm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),rn(n).start(),n.Va.ua()}function ji(n){return kt(n)&&!rn(n).x_()&&n.Ia.size>0}function kt(n){return z(n).Ea.size===0}function tu(n){n.da=void 0}async function $p(n){n.Va.set("Online")}async function qp(n){n.Ia.forEach(((e,t)=>{Bi(n,e)}))}async function Bp(n,e){tu(n),ji(n)?(n.Va.ha(e),Ui(n)):n.Va.set("Unknown")}async function Up(n,e,t){if(n.Va.set("Online"),e instanceof Fc&&e.state===2&&e.cause)try{await(async function(r,o){const a=o.cause;for(const c of o.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.da.removeTarget(c))})(n,e)}catch(s){M(Dt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qs(n,s)}else if(e instanceof As?n.da.Xe(e):e instanceof Oc?n.da.st(e):n.da.tt(e),!t.isEqual(j.min()))try{const s=await Kc(n.localStore);t.compareTo(s)>=0&&await(function(o,a){const c=o.da.Tt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(_e.EMPTY_BYTE_STRING,m.snapshotVersion)),eu(o,h);const p=new st(m.target,h,d,m.sequenceNumber);Bi(o,p)})),o.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){M(Dt,"Failed to raise snapshot:",s),await qs(n,s)}}async function qs(n,e,t){if(!sn(e))throw e;n.Ea.add(1),await Wn(n),n.Va.set("Offline"),t||(t=()=>Kc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Dt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await nr(n)}))}function nu(n,e){return e().catch((t=>qs(n,t,e)))}async function sr(n){const e=z(n),t=ft(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wi;for(;jp(e);)try{const r=await Ip(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,zp(e,r)}catch(r){await qs(e,r)}su(e)&&ru(e)}function jp(n){return kt(n)&&n.Ta.length<10}function zp(n,e){n.Ta.push(e);const t=ft(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function su(n){return kt(n)&&!ft(n).x_()&&n.Ta.length>0}function ru(n){ft(n).start()}async function Gp(n){ft(n).ra()}async function Hp(n){const e=ft(n);for(const t of n.Ta)e.ea(t.mutations)}async function Qp(n,e,t){const s=n.Ta.shift(),r=Ni.from(s,e,t);await nu(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await sr(n)}async function Jp(n,e){e&&ft(n).Y_&&await(async function(s,r){if((function(a){return Cm(a)&&a!==C.ABORTED})(r.code)){const o=s.Ta.shift();ft(s).B_(),await nu(s,(()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r))),await sr(s)}})(n,e),su(n)&&ru(n)}async function sl(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),M(Dt,"RemoteStore received new credentials");const s=kt(t);t.Ea.add(3),await Wn(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await nr(t)}async function Wp(n,e){const t=z(n);e?(t.Ea.delete(2),await nr(t)):e||(t.Ea.add(2),await Wn(t),t.Va.set("Unknown"))}function rn(n){return n.ma||(n.ma=(function(t,s,r){const o=z(t);return o.sa(),new xp(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:$p.bind(null,n),Yo:qp.bind(null,n),t_:Bp.bind(null,n),J_:Up.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),ji(n)?Ui(n):n.Va.set("Unknown")):(await n.ma.stop(),tu(n))}))),n.ma}function ft(n){return n.fa||(n.fa=(function(t,s,r){const o=z(t);return o.sa(),new Np(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Gp.bind(null,n),t_:Jp.bind(null,n),ta:Hp.bind(null,n),na:Qp.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await sr(n)):(await n.fa.stop(),n.Ta.length>0&&(M(Dt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,c=new zi(e,t,a,r,o);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gi(n,e){if(Je("AsyncQueue",`${e}: ${n}`),sn(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{static emptySet(e){return new Ht(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=An(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ht;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.ga=new se(q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Yt{constructor(e,t,s,r,o,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Yt(e,t,Ht.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Yp{constructor(){this.queries=il(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=z(t),o=r.queries;r.queries=il(),o.forEach(((a,c)=>{for(const h of c.ba)h.onError(s)}))})(this,new L(C.ABORTED,"Firestore shutting down"))}}function il(){return new Nt((n=>Ac(n)),Ks)}async function iu(n,e){const t=z(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Sa()&&e.Da()&&(s=2):(o=new Kp,s=e.Da()?0:1);try{switch(s){case 0:o.wa=await t.onListen(r,!0);break;case 1:o.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Gi(a,`Initialization of query '${Bt(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,o),o.ba.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Hi(t)}async function ou(n,e){const t=z(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.ba.indexOf(e);a>=0&&(o.ba.splice(a,1),o.ba.length===0?r=e.Da()?0:1:!o.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Xp(n,e){const t=z(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const c of a.ba)c.Fa(r)&&(s=!0);a.wa=r}}s&&Hi(t)}function Zp(n,e,t){const s=z(n),r=s.queries.get(e);if(r)for(const o of r.ba)o.onError(t);s.queries.delete(e)}function Hi(n){n.Ca.forEach((e=>{e.next()}))}var ui,ol;(ol=ui||(ui={})).Ma="default",ol.Cache="cache";class au{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Yt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Yt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ui.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.key=e}}class cu{constructor(e){this.key=e}}class eg{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Q(),this.mutatedKeys=Q(),this.eu=wc(e),this.tu=new Ht(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new rl,r=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,p)=>{const T=r.get(m),w=Ys(this.query,p)?p:null,R=!!T&&this.mutatedKeys.has(T.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;T&&w?T.data.isEqual(w.data)?R!==D&&(s.track({type:3,doc:w}),V=!0):this.su(T,w)||(s.track({type:2,doc:w}),V=!0,(h&&this.eu(w,h)>0||d&&this.eu(w,d)<0)&&(c=!0)):!T&&w?(s.track({type:0,doc:w}),V=!0):T&&!w&&(s.track({type:1,doc:T}),V=!0,(h||d)&&(c=!0)),V&&(w?(a=a.add(w),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Ss:c,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,p)=>(function(w,R){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:V})}};return D(w)-D(R)})(m.type,p.type)||this.eu(m.doc,p.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],h=this.Ya.size===0&&this.current&&!r?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new Yt(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Q(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new cu(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new lu(s))})),t}cu(e){this.Za=e.ks,this.Ya=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Yt.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Qi="SyncEngine";class tg{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ng{constructor(e){this.key=e,this.hu=!1}}class sg{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Nt((c=>Ac(c)),Ks),this.Iu=new Map,this.Eu=new Set,this.Ru=new se(q.comparator),this.Au=new Map,this.Vu=new Mi,this.du={},this.mu=new Map,this.fu=Kt.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function rg(n,e,t=!0){const s=pu(n);let r;const o=s.Tu.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.lu()):r=await uu(s,e,t,!0),r}async function ig(n,e){const t=pu(n);await uu(t,e,!0,!1)}async function uu(n,e,t,s){const r=await Ap(n.localStore,Be(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return s&&(c=await og(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Zc(n.remoteStore,r),c}async function og(n,e,t,s,r){n.pu=(p,T,w)=>(async function(D,V,x,k){let F=V.view.ru(x);F.Ss&&(F=await Xa(D.localStore,V.query,!1).then((({documents:_})=>V.view.ru(_,F))));const O=k&&k.targetChanges.get(V.targetId),$=k&&k.targetMismatches.get(V.targetId)!=null,B=V.view.applyChanges(F,D.isPrimaryClient,O,$);return ll(D,V.targetId,B.au),B.snapshot})(n,p,T,w);const o=await Xa(n.localStore,e,!0),a=new eg(e,o.ks),c=a.ru(o.documents),h=Jn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,h);ll(n,t,d.au);const m=new tg(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function ag(n,e,t){const s=z(n),r=s.Tu.get(e),o=s.Iu.get(r.targetId);if(o.length>1)return s.Iu.set(r.targetId,o.filter((a=>!Ks(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await li(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&qi(s.remoteStore,r.targetId),hi(s,r.targetId)})).catch(nn)):(hi(s,r.targetId),await li(s.localStore,r.targetId,!0))}async function lg(n,e){const t=z(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),qi(t.remoteStore,s.targetId))}async function cg(n,e,t){const s=gg(n);try{const r=await(function(a,c){const h=z(a),d=te.now(),m=c.reduce(((w,R)=>w.add(R.key)),Q());let p,T;return h.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let R=We(),D=Q();return h.xs.getEntries(w,m).next((V=>{R=V,R.forEach(((x,k)=>{k.isValidDocument()||(D=D.add(x))}))})).next((()=>h.localDocuments.getOverlayedDocuments(w,R))).next((V=>{p=V;const x=[];for(const k of c){const F=Im(k,p.get(k.key).overlayedDocument);F!=null&&x.push(new yt(k.key,F,gc(F.value.mapValue),ke.exists(!0)))}return h.mutationQueue.addMutationBatch(w,d,x,c)})).next((V=>{T=V;const x=V.applyToLocalDocumentSet(p,D);return h.documentOverlayCache.saveOverlays(w,V.batchId,x)}))})).then((()=>({batchId:T.batchId,changes:Rc(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,h){let d=a.du[a.currentUser.toKey()];d||(d=new se(H)),d=d.insert(c,h),a.du[a.currentUser.toKey()]=d})(s,r.batchId,t),await Kn(s,r.changes),await sr(s.remoteStore)}catch(r){const o=Gi(r,"Failed to persist write");t.reject(o)}}async function hu(n,e){const t=z(n);try{const s=await Tp(t.localStore,e);e.targetChanges.forEach(((r,o)=>{const a=t.Au.get(o);a&&(K(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?K(a.hu,14607):r.removedDocuments.size>0&&(K(a.hu,42227),a.hu=!1))})),await Kn(t,s,e)}catch(s){await nn(s)}}function al(n,e,t){const s=z(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((o,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const h=z(a);h.onlineState=c;let d=!1;h.queries.forEach(((m,p)=>{for(const T of p.ba)T.va(c)&&(d=!0)})),d&&Hi(h)})(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ug(n,e,t){const s=z(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),o=r&&r.key;if(o){let a=new se(q.comparator);a=a.insert(o,Ae.newNoDocument(o,j.min()));const c=Q().add(o),h=new er(j.min(),new Map,new se(H),a,c);await hu(s,h),s.Ru=s.Ru.remove(o),s.Au.delete(e),Ji(s)}else await li(s.localStore,e,!1).then((()=>hi(s,e,t))).catch(nn)}async function hg(n,e){const t=z(n),s=e.batch.batchId;try{const r=await Ep(t.localStore,e);fu(t,s,null),du(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Kn(t,r)}catch(r){await nn(r)}}async function dg(n,e,t){const s=z(n);try{const r=await(function(a,c){const h=z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next((p=>(K(p!==null,37113),m=p.keys(),h.mutationQueue.removeMutationBatch(d,p)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(s.localStore,e);fu(s,e,t),du(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Kn(s,r)}catch(r){await nn(r)}}function du(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function fu(n,e,t){const s=z(n);let r=s.du[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function hi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||mu(n,s)}))}function mu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(qi(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ji(n))}function ll(n,e,t){for(const s of t)s instanceof lu?(n.Vu.addReference(s.key,e),fg(n,s)):s instanceof cu?(M(Qi,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||mu(n,s.key)):U(19791,{wu:s})}function fg(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(Qi,"New document in limbo: "+t),n.Eu.add(s),Ji(n))}function Ji(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(Z.fromString(e)),s=n.fu.next();n.Au.set(s,new ng(t)),n.Ru=n.Ru.insert(t,s),Zc(n.remoteStore,new st(Be(Di(t.path)),s,"TargetPurposeLimboResolution",Qs.ce))}}async function Kn(n,e,t){const s=z(n),r=[],o=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,h)=>{a.push(s.pu(h,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const p=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){r.push(d);const p=Fi.Es(h.targetId,d);o.push(p)}})))})),await Promise.all(a),s.Pu.J_(r),await(async function(h,d){const m=z(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(d,(T=>P.forEach(T.Ts,(w=>m.persistence.referenceDelegate.addReference(p,T.targetId,w))).next((()=>P.forEach(T.Is,(w=>m.persistence.referenceDelegate.removeReference(p,T.targetId,w)))))))))}catch(p){if(!sn(p))throw p;M($i,"Failed to update sequence numbers: "+p)}for(const p of d){const T=p.targetId;if(!p.fromCache){const w=m.vs.get(T),R=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(R);m.vs=m.vs.insert(T,D)}}})(s.localStore,o))}async function mg(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){M(Qi,"User change. New user:",e.toKey());const s=await Wc(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((c=>{c.forEach((h=>{h.reject(new L(C.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Kn(t,s.Ns)}}function pg(n,e){const t=z(n),s=t.Au.get(e);if(s&&s.hu)return Q().add(s.key);{let r=Q();const o=t.Iu.get(e);if(!o)return r;for(const a of o){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function pu(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ug.bind(null,e),e.Pu.J_=Xp.bind(null,e.eventManager),e.Pu.yu=Zp.bind(null,e.eventManager),e}function gg(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dg.bind(null,e),e}class Bs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return _p(this.persistence,new gp,e.initialUser,this.serializer)}Cu(e){return new Jc(Oi.Vi,this.serializer)}Du(e){return new Sp}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bs.provider={build:()=>new Bs};class yg extends Bs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){K(this.persistence.referenceDelegate instanceof $s,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new tp(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Jc((s=>$s.Vi(s,t)),this.serializer)}}class di{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>al(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mg.bind(null,this.syncEngine),await Wp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Yp})()}createDatastore(e){const t=tr(e.databaseInfo.databaseId),s=Vp(e.databaseInfo);return Mp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,o,a,c){return new Fp(s,r,o,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>al(this.syncEngine,t,0)),(function(){return tl.v()?new tl:new Rp})())}createSyncEngine(e,t){return(function(r,o,a,c,h,d,m){const p=new sg(r,o,a,c,h,d);return m&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const o=z(r);M(Dt,"RemoteStore shutting down."),o.Ea.add(5),await Wn(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}di.provider={build:()=>new di};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="FirestoreClient";class vg{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=Ai.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,(async a=>{M(mt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(M(mt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gi(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function qr(n,e){n.asyncQueue.verifyOperationInProgress(),M(mt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Wc(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function cl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _g(n);M(mt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>sl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>sl(e.remoteStore,r))),n._onlineComponents=e}async function _g(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(mt,"Using user provided OfflineComponentProvider");try{await qr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Pt("Error using user provided cache. Falling back to memory cache: "+t),await qr(n,new Bs)}}else M(mt,"Using default OfflineComponentProvider"),await qr(n,new yg(void 0));return n._offlineComponents}async function yu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(mt,"Using user provided OnlineComponentProvider"),await cl(n,n._uninitializedComponentsProvider._online)):(M(mt,"Using default OnlineComponentProvider"),await cl(n,new di))),n._onlineComponents}function Eg(n){return yu(n).then((e=>e.syncEngine))}async function fi(n){const e=await yu(n),t=e.eventManager;return t.onListen=rg.bind(null,e.syncEngine),t.onUnlisten=ag.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ig.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lg.bind(null,e.syncEngine),t}function Tg(n,e,t,s){const r=new gu(s),o=new au(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>iu(await fi(n),o))),()=>{r.Nu(),n.asyncQueue.enqueueAndForget((async()=>ou(await fi(n),o)))}}function bg(n,e,t={}){const s=new at;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const m=new gu({next:T=>{m.Nu(),a.enqueueAndForget((()=>ou(o,p))),T.fromCache&&h.source==="server"?d.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),p=new au(c,m,{includeMetadataChanges:!0,Ka:!0});return iu(o,p)})(await fi(n),n.asyncQueue,e,t,s))),s.promise}function Ig(n,e){const t=new at;return n.asyncQueue.enqueueAndForget((async()=>cg(await Eg(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="ComponentProvider",ul=new Map;function wg(n,e,t,s,r){return new Gf(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,vu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="firestore.googleapis.com",hl=!0;class dl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_u,this.ssl=hl}else this.host=e.host,this.ssl=e.ssl??hl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zm)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Af;switch(s.type){case"firstParty":return new Cf(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ul.get(t);s&&(M(Ag,"Removing Datastore"),ul.delete(t),s.terminate())})(this),Promise.resolve()}}function Sg(n,e,t,s={}){var d;n=qe(n,rr);const r=Ti(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Wh(`https://${c}`),Zh("Firestore",!0)),o.host!==_u&&o.host!==c&&Pt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:r,emulatorOptions:s};if(!Ps(h,a)&&(n._setSettings(h),s.mockUserToken)){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=Ie.MOCK_USER;else{m=Kh(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ie(T)}n._authCredentials=new wf(new rc(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lt(this.firestore,e,this._query)}}class ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Gn(t,ue._jsonSchema))return new ue(e,s||null,new q(Z.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:ce("string",ue._jsonSchemaVersion),referencePath:ce("string")};class lt extends Lt{constructor(e,t,s){super(e,t,Di(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new q(e))}withConverter(e){return new lt(this.firestore,e,this._path)}}function Br(n,e,...t){if(n=ze(n),ic("collection","path",e),n instanceof rr){const s=Z.fromString(e,...t);return wa(s),new lt(n,null,s)}{if(!(n instanceof ue||n instanceof lt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Z.fromString(e,...t));return wa(s),new lt(n.firestore,null,s)}}function At(n,e,...t){if(n=ze(n),arguments.length===1&&(e=Ai.newId()),ic("doc","path",e),n instanceof rr){const s=Z.fromString(e,...t);return Aa(s),new ue(n,null,new q(s))}{if(!(n instanceof ue||n instanceof lt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Z.fromString(e,...t));return Aa(s),new ue(n.firestore,n instanceof lt?n.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="AsyncQueue";class ml{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yc(this,"async_queue_retry"),this._c=()=>{const s=$r();s&&M(fl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=$r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=$r();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new at;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!sn(e))throw e;M(fl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",pl(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=zi.createAndSchedule(this,e,t,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&U(47125,{Pc:pl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function pl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Vt extends rr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new ml,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ml(e),this._firestoreClient=void 0,await e}}}function Rg(n,e){const t=typeof n=="object"?n:uf(),s=typeof n=="string"?n:Ns,r=rf(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Qh("firestore");o&&Sg(r,...o)}return r}function Wi(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cg(n),n._firestoreClient}function Cg(n){var s,r,o,a;const e=n._freezeSettings(),t=wg(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new vg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ne(_e.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ne(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ne._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gn(e,Ne._jsonSchema))return Ne.fromBase64String(e.bytes)}}Ne._jsonSchemaVersion="firestore/bytes/1.0",Ne._jsonSchema={type:ce("string",Ne._jsonSchemaVersion),bytes:ce("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:je._jsonSchemaVersion}}static fromJSON(e){if(Gn(e,je._jsonSchema))return new je(e.latitude,e.longitude)}}je._jsonSchemaVersion="firestore/geoPoint/1.0",je._jsonSchema={type:ce("string",je._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Le._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gn(e,Le._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Le(e.vectorValues);throw new L(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Le._jsonSchemaVersion="firestore/vectorValue/1.0",Le._jsonSchema={type:ce("string",Le._jsonSchemaVersion),vectorValues:ce("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=/^__.*__$/;class Dg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qn(e,this.data,t,this.fieldTransforms)}}class Eu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new yt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:n})}}class Yi{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Yi({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Us(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Tu(this.dataSource)&&Pg.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Vg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||tr(e)}createContext(e,t,s,r=!1){return new Yi({dataSource:e,methodName:t,targetDoc:s,path:ve.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xi(n){const e=n._freezeSettings(),t=tr(n._databaseId);return new Vg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xg(n,e,t,s,r,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,e,t,r);eo("Data must be an object, but it was:",a,s);const c=bu(s,a);let h,d;if(o.merge)h=new Ve(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const p of o.mergeFields){const T=Xt(e,p,t);if(!a.contains(T))throw new L(C.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);wu(m,T)||m.push(T)}h=new Ve(m),d=a.fieldTransforms.filter((p=>h.covers(p.field)))}else h=null,d=a.fieldTransforms;return new Dg(new Pe(c),h,d)}class or extends ir{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof or}}class Zi extends ir{_toFieldTransform(e){return new _m(e.path,new qn)}isEqual(e){return e instanceof Zi}}function Ng(n,e,t,s){const r=n.createContext(1,e,t);eo("Data must be an object, but it was:",r,s);const o=[],a=Pe.empty();gt(s,((h,d)=>{const m=Au(e,h,t);d=ze(d);const p=r.childContextForFieldPath(m);if(d instanceof or)o.push(m);else{const T=Yn(d,p);T!=null&&(o.push(m),a.set(m,T))}}));const c=new Ve(o);return new Eu(a,c,r.fieldTransforms)}function kg(n,e,t,s,r,o){const a=n.createContext(1,e,t),c=[Xt(e,s,t)],h=[r];if(o.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)c.push(Xt(e,o[T])),h.push(o[T+1]);const d=[],m=Pe.empty();for(let T=c.length-1;T>=0;--T)if(!wu(d,c[T])){const w=c[T];let R=h[T];R=ze(R);const D=a.childContextForFieldPath(w);if(R instanceof or)d.push(w);else{const V=Yn(R,D);V!=null&&(d.push(w),m.set(w,V))}}const p=new Ve(d);return new Eu(m,p,a.fieldTransforms)}function Lg(n,e,t,s=!1){return Yn(t,n.createContext(s?4:3,e))}function Yn(n,e){if(Iu(n=ze(n)))return eo("Unsupported field value:",e,n),bu(n,e);if(n instanceof ir)return(function(s,r){if(!Tu(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const c of s){let h=Yn(c,r.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(s,r){if((s=ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return gm(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=te.fromDate(s);return{timestampValue:Fs(r.serializer,o)}}if(s instanceof te){const o=new te(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fs(r.serializer,o)}}if(s instanceof je)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ne)return{bytesValue:$c(r.serializer,s._byteString)};if(s instanceof ue){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Li(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Le)return(function(a,c){const h=a instanceof Le?a.toArray():a;return{mapValue:{fields:{[mc]:{stringValue:pc},[ks]:{arrayValue:{values:h.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return Vi(c.serializer,m)}))}}}}}})(s,r);if(Hc(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Hs(s)}`)})(n,e)}function bu(n,e){const t={};return lc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gt(n,((s,r)=>{const o=Yn(r,e.childContextForField(s));o!=null&&(t[s]=o)})),{mapValue:{fields:t}}}function Iu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof je||n instanceof Ne||n instanceof ue||n instanceof ir||n instanceof Le||Hc(n))}function eo(n,e,t){if(!Iu(t)||!oc(t)){const s=Hs(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Xt(n,e,t){if((e=ze(e))instanceof Ki)return e._internalPath;if(typeof e=="string")return Au(n,e);throw Us("Field path arguments must be of type string or ",n,!1,void 0,t)}const Mg=new RegExp("[~\\*/\\[\\]]");function Au(n,e,t){if(e.search(Mg)>=0)throw Us(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ki(...e.split("."))._internalPath}catch{throw Us(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Us(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new L(C.INVALID_ARGUMENT,c+n+h)}function wu(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{convertValue(e,t="none"){switch(dt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return gt(e,((r,o)=>{s[r]=this.convertValue(o,t)})),s}convertVectorValue(e){var s,r,o;const t=(o=(r=(s=e.fields)==null?void 0:s[ks].arrayValue)==null?void 0:r.values)==null?void 0:o.map((a=>oe(a.doubleValue)));return new Le(t)}convertGeoPoint(e){return new je(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ws(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(On(e));default:return null}}convertTimestamp(e){const t=ut(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Z.fromString(e);K(Gc(s),9688,{name:e});const r=new Fn(s.get(1),s.get(3)),o=new q(s.popFirst(5));return r.isEqual(t)||Je(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Og{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ne(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function gl(){return new Zi("serverTimestamp")}const yl="@firebase/firestore",vl="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const o of s)if(o in r&&typeof r[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Xt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fg extends Su{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class no{}class $g extends no{}function qg(n,e,...t){let s=[];e instanceof no&&s.push(e),s=s.concat(t),(function(o){const a=o.filter((h=>h instanceof so)).length,c=o.filter((h=>h instanceof ar)).length;if(a>1||a>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class ar extends $g{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ar(e,t,s)}_apply(e){const t=this._parse(e);return Cu(e._query,t),new Lt(e.firestore,e.converter,ni(e._query,t))}_parse(e){const t=Xi(e.firestore);return(function(o,a,c,h,d,m,p){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){bl(p,m);const R=[];for(const D of p)R.push(Tl(h,o,D));T={arrayValue:{values:R}}}else T=Tl(h,o,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||bl(p,m),T=Lg(c,a,p,m==="in"||m==="not-in");return le.create(d,m,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function El(n,e,t){const s=e,r=Xt("where",n);return ar._create(r,s,t)}class so extends no{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new so(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Me.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,o){let a=r;const c=o.getFlattenedFilters();for(const h of c)Cu(a,h),a=ni(a,h)})(e._query,t),new Lt(e.firestore,e.converter,ni(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Tl(n,e,t){if(typeof(t=ze(t))=="string"){if(t==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ic(e)&&t.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Z.fromString(t));if(!q.isDocumentKey(s))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Na(n,new q(s))}if(t instanceof ue)return Na(n,t._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hs(t)}.`)}function bl(n,e){if(!Array.isArray(n)||n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cu(n,e){const t=(function(r,o){for(const a of r)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Bg(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Sn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class St extends Su{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Xt("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=St._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}St._jsonSchemaVersion="firestore/documentSnapshot/1.0",St._jsonSchema={type:ce("string",St._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class ws extends St{data(e={}){return super.data(e)}}class Rt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Sn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ws(this._firestore,this._userDataWriter,s.key,s,new Sn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const h=new ws(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Sn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new ws(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Sn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Ug(c.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ai.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ug(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt._jsonSchemaVersion="firestore/querySnapshot/1.0",Rt._jsonSchema={type:ce("string",Rt._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};function jg(n){n=qe(n,Lt);const e=qe(n.firestore,Vt),t=Wi(e),s=new to(e);return Ru(n._query),bg(t,n._query).then((r=>new Rt(e,s,n,r)))}function Ur(n,e,t,...s){n=qe(n,ue);const r=qe(n.firestore,Vt),o=Xi(r);let a;return a=typeof(e=ze(e))=="string"||e instanceof Ki?kg(o,"updateDoc",n._key,e,t,s):Ng(o,"updateDoc",n._key,e),ro(r,[a.toMutation(n._key,ke.exists(!0))])}function Il(n){return ro(qe(n.firestore,Vt),[new xi(n._key,ke.none())])}function Al(n,e){const t=qe(n.firestore,Vt),s=At(n),r=Bg(n.converter,e),o=Xi(n.firestore);return ro(t,[xg(o,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,ke.exists(!1))]).then((()=>s))}function wl(n,...e){var d,m,p;n=ze(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||_l(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(_l(e[s])){const T=e[s];e[s]=(d=T.next)==null?void 0:d.bind(T),e[s+1]=(m=T.error)==null?void 0:m.bind(T),e[s+2]=(p=T.complete)==null?void 0:p.bind(T)}let o,a,c;if(n instanceof ue)a=qe(n.firestore,Vt),c=Di(n._key.path),o={next:T=>{e[s]&&e[s](zg(a,n,T))},error:e[s+1],complete:e[s+2]};else{const T=qe(n,Lt);a=qe(T.firestore,Vt),c=T._query;const w=new to(a);o={next:R=>{e[s]&&e[s](new Rt(a,w,T,R))},error:e[s+1],complete:e[s+2]},Ru(n._query)}const h=Wi(a);return Tg(h,c,r,o)}function ro(n,e){const t=Wi(n);return Ig(t,e)}function zg(n,e,t){const s=t.docs.get(e._key),r=new to(n);return new St(n,r,e._key,s,new Sn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){If(cf),Vs(new kn("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new Vt(new Sf(s.getProvider("auth-internal")),new Pf(a,s.getProvider("app-check-internal")),Hf(a,r),a);return o={useFetchStreams:t,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),zt(yl,vl,e),zt(yl,vl,"esm2020")})();const Gg={apiKey:"AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",authDomain:"comebiblia-43643.firebaseapp.com",projectId:"comebiblia-43643",storageBucket:"comebiblia-43643.firebasestorage.app",messagingSenderId:"704190300094",appId:"1:704190300094:web:0a726168ed731032d803ef",measurementId:"G-DZPX4SB193"},Hg=Jl(Gg),He=Rg(Hg);function Qg(n){const e=Re(),t=localStorage.getItem("bb_player_id")||w();localStorage.setItem("bb_player_id",t);let s=null,r=null,o=null,a=null,c="p1",h=10,d=null,m=!1,p={fiftyfifty:!0,freeze:!0,double:!0},T=!1;function w(){return"user_"+Math.random().toString(36).substr(2,9)}function R(){var _;n.innerHTML=`
      <div class="bible-battle-game">
        <div class="radar-container">
          <div class="radar-circle"></div>
          <div class="radar-scan"></div>
          <div class="radar-avatar">${e.avatar}</div>
        </div>
        <h3 class="text-center mt-md">Buscando Oponente...</h3>
        <p class="text-muted text-center text-sm">Emparejando en la arena de fe</p>
        <button class="btn btn-secondary btn-block mt-lg" id="btn-cancel-match">Cancelar</button>
      </div>
    `,(_=document.getElementById("btn-cancel-match"))==null||_.addEventListener("click",()=>{a&&a(),fe("home")}),D()}async function D(){const _=Br(He,"bb_queue"),g=qg(_,El("status","==","waiting"),El("uid","!=",t)),y=await jg(g);if(y.empty){c="p1";const b=await Al(Br(He,"bb_queue"),{uid:t,name:e.name,avatar:e.avatar,status:"waiting",createdAt:gl()});a=wl(At(He,"bb_queue",b.id),E=>{if(E.exists()&&E.data().status==="matched"){const I=E.data().matchId;a(),Il(b),V(I)}})}else{const b=y.docs[0],E=b.data();c="p2";const I=xe([...Cn.easy,...Cn.medium]).slice(0,5),v=await Al(Br(He,"bb_matches"),{status:"starting",p1:{uid:E.uid,name:E.name,avatar:E.avatar,score:0,currentQ:0,lastAnswered:-1},p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},questions:I,startTime:gl()});await Ur(At(He,"bb_queue",b.id),{status:"matched",matchId:v.id}),V(v.id)}}function V(_){s=_,o=wl(At(He,"bb_matches",_),g=>{g.exists()&&(r=g.data(),r.status==="starting"?x("playing"):k())})}async function x(_){s&&await Ur(At(He,"bb_matches",s),{status:_})}function k(){if(!r)return;const _=r[c],y=r[c==="p1"?"p2":"p1"],b=_.currentQ;if(b>=5||r.status==="ended"){clearInterval(d),B();return}const E=r.questions[b];n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${_.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${_.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${y.avatar}</div>
            <div class="bb-name">${y.name}</div>
            <div class="bb-score">${y.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${h/10*100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${b+1}/5</div>
          <h3 class="bb-question">${E.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${E.options.map((I,v)=>`
            <button class="btn btn-option" data-ans="${v}">${I}</button>
          `).join("")}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${p.fiftyfifty?"":"disabled"}" id="p-5050" ${p.fiftyfifty?"":"disabled"}>✂️ 50/50</button>
          <button class="btn btn-powerup ${p.freeze?"":"disabled"}" id="p-freeze" ${p.freeze?"":"disabled"}>❄️ Hielo</button>
          <button class="btn btn-powerup ${p.double?"":"disabled"}" id="p-double" ${p.double?"":"disabled"}>🔥 X2</button>
        </div>
      </div>
    `,m=!1,F(),O(E.answer)}function F(){clearInterval(d),h=10;const _=n.querySelector(".timer-fill");d=setInterval(async()=>{h-=.1,_&&(_.style.width=`${h/10*100}%`),h<=0&&(clearInterval(d),m||$(-1,-1))},100)}function O(_){var g,y,b;n.querySelectorAll(".btn-option").forEach(E=>{E.addEventListener("click",I=>{if(m)return;m=!0;const v=parseInt(E.dataset.ans);$(v,_)})}),(g=document.getElementById("p-5050"))==null||g.addEventListener("click",()=>{if(!p.fiftyfifty||m)return;p.fiftyfifty=!1;let I=Array.from(n.querySelectorAll(".btn-option")).filter(v=>parseInt(v.dataset.ans)!==_);xe(I).slice(0,2).forEach(v=>v.style.visibility="hidden"),document.getElementById("p-5050").classList.add("disabled")}),(y=document.getElementById("p-double"))==null||y.addEventListener("click",()=>{!p.double||m||(p.double=!1,T=!0,document.getElementById("p-double").classList.add("disabled"),ne("¡Próximo acierto duplicado!","info"))}),(b=document.getElementById("p-freeze"))==null||b.addEventListener("click",()=>{p.freeze&&(p.freeze=!1,document.getElementById("p-freeze").classList.add("disabled"),ne("❄️ Efecto visual de Hielo","info"))})}async function $(_,g){clearInterval(d);let y=0;_===g?(y=Math.floor(h*10*(T?2:1)),ne("¡Correcto!","success")):ne("¡Incorrecto!","warning"),T=!1;const b=r[c],E={};E[`${c}.score`]=b.score+y,E[`${c}.currentQ`]=b.currentQ+1,E[`${c}.lastAnswered`]=_,await Ur(At(He,"bb_matches",s),E)}function B(){var I,v;o&&o();const _=r[c],y=r[c==="p1"?"p2":"p1"],b=_.score>y.score,E=_.score===y.score;b&&(zs(100),js(50)),n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${b?"🏆":E?"🤝":"😢"}</div>
        <h2 class="results-title">${b?"¡Victoria!":E?"¡Empate!":"¡Derrota!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${_.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${y.name}</b> (${y.score} pts)</p>
        </div>

        <div class="results-rewards">
          ${b?'<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div>':'<p class="text-sm">¡Continúa entrenando tu conocimiento!</p>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(I=document.getElementById("btn-play-again-bb"))==null||I.addEventListener("click",()=>{R()}),(v=document.getElementById("btn-go-home"))==null||v.addEventListener("click",()=>{fe("home")}),setTimeout(()=>{c==="p1"&&Il(At(He,"bb_matches",s))},5e3)}R()}pt({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Rh});pt({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:Ch});pt({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Ph});pt({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:$l});pt({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Vh});pt({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:xh});pt({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:Mh});pt({id:"bible-battle",name:"Bible Battle 1v1",icon:"⚔️",description:"Trivia competitiva 1vs1 en tiempo real",difficulty:"alta",render:Qg});xt("home",n=>yh(n));xt("verse",n=>_h(n));xt("profile",n=>bh(n));xt("achievements",n=>Ih(n));xt("settings",n=>Ah(n));xt("ranking",n=>wh(n));xt("game",(n,e)=>{const t=Nl(e.gameId);if(t&&t.render)return t.render(n);n.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const Jg=["home","verse","profile","achievements","settings"],Wg={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function Kg(n,e={}){document.querySelectorAll(".nav-btn").forEach(c=>{c.classList.toggle("active",c.dataset.screen===n)});const s=document.getElementById("header-title");if(s)if(n==="game"&&e.gameId){const c=Nl(e.gameId);s.textContent=c?c.name:"Juego"}else s.textContent=Wg[n]||"Bible Games";const r=document.getElementById("btn-back"),o=!Jg.includes(n);r&&r.classList.toggle("hidden",!o);const a=document.getElementById("bottom-nav");a&&a.classList.toggle("hidden",o),Gs()}function Sl(){var e;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),ih(Kg),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.screen;s&&fe(s)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{fe("home")}),Gs(),oh("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Sl):Sl();
