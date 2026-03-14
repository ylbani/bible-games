(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const U={};let te=null,_=null,V=null;function C(e,s){U[e]=s}function T(e,s={}){_&&(_(),_=null),te=e,window.location.hash=e;const o=document.getElementById("main-content");if(o){if(o.innerHTML="",o.className="main-content screen-enter",U[e]){const i=U[e](o,s);typeof i=="function"&&(_=i)}V&&V(e,s)}}function ge(e){V=e}function fe(e="home"){window.addEventListener("hashchange",()=>{const o=window.location.hash.slice(1)||e;o!==te&&U[o]&&T(o)});const s=window.location.hash.slice(1)||e;T(s)}const Z="bgc_";function oe(e,s){try{return localStorage.setItem(Z+e,JSON.stringify(s)),!0}catch(o){return console.warn("Storage save failed:",o),!1}}function ne(e,s=null){try{const o=localStorage.getItem(Z+e);return o?JSON.parse(o):s}catch(o){return console.warn("Storage load failed:",o),s}}function be(){Object.keys(localStorage).filter(s=>s.startsWith(Z)).forEach(s=>localStorage.removeItem(s))}const ie="player",re={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},createdAt:Date.now()},D=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],ee=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],ye=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let $=null;function I(){return $||($=ne(ie,{...re})),{...$}}function P(){oe(ie,$)}function le(e){$||I(),$.name=e.trim()||"Jugador",P()}function he(e){$||I(),$.avatar=e,P()}function Ee(e){$||I(),$.xp+=e;let s=!1;for(;$.level<D.length&&$.xp>=D[$.level];)$.level++,s=!0;return P(),s}function we(e){$||I(),$.coins+=e,P(),z()}function J(e,s,o=0){$||I(),$.totalGamesPlayed++,$.totalScore+=s,$.totalCorrectAnswers+=o,$.gamesCompleted[e]||($.gamesCompleted[e]=0),$.gamesCompleted[e]++,(!$.bestScores[e]||s>$.bestScores[e])&&($.bestScores[e]=s),P()}function Se(){const e=I();if(e.level>=D.length)return{current:e.xp,needed:e.xp,progress:1};const s=D[e.level-1]||0,o=D[e.level],i=(e.xp-s)/(o-s);return{current:e.xp-s,needed:o-s,progress:Math.min(i,1)}}function $e(e=null){const s=e||I().level;return ee[Math.min(s-1,ee.length-1)]}function Ae(){return[...ye]}function Te(){$={...re,createdAt:Date.now()},P(),z()}function z(){const e=document.getElementById("coin-count");if(e){const s=I();e.textContent=s.coins}}const X=[];function N(e){X.push(e)}function ke(){return[...X]}function ce(e){return X.find(s=>s.id===e)}const G=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function de(){const e=new Date,s=Math.floor((e-new Date(e.getFullYear(),0,0))/864e5);return G[s%G.length]}function Le(e,s=[]){return G.filter(t=>!s.includes(t.ref)).sort(()=>Math.random()-.5).slice(0,e)}const Ie=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function ue(){const e=I(),s=[...Ie,{name:e.name,avatar:e.avatar,score:e.totalScore,level:e.level,isCurrentPlayer:!0}];return s.sort((o,i)=>i.score-o.score),s.map((o,i)=>({...o,position:i+1}))}function Y(){const e=ue(),s=e.find(o=>o.isCurrentPlayer);return(s==null?void 0:s.position)||e.length}function xe(e){var l,u;const s=I(),o=de(),i=ke(),t=Y(),a=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];e.innerHTML=`
    <div class="home-screen">
      <div class="home-welcome">
        <span class="welcome-emoji">✝️</span>
        <h2>¡Hola, ${s.name}!</h2>
        <p>¿Listo para aprender jugando?</p>
      </div>

      <div class="home-stats">
        <div class="stat-card">
          <div class="stat-value">${s.level}</div>
          <div class="stat-label">Nivel</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${s.totalGamesPlayed}</div>
          <div class="stat-label">Jugados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">#${t}</div>
          <div class="stat-label">Ranking</div>
        </div>
      </div>

      <div class="verse-card-home" id="verse-card-home">
        <div class="verse-text">"${o.text}"</div>
        <div class="verse-ref">— ${o.ref}</div>
      </div>

      <div class="section-title">🎮 Juegos</div>
      <div class="games-grid">
        ${i.map((f,w)=>`
          <div class="game-card" data-game-id="${f.id}">
            <div class="game-card-icon" style="background: ${a[w%a.length]}">
              ${f.icon}
            </div>
            <div class="game-card-info">
              <h3>${f.name}</h3>
              <p>${f.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${f.difficulty}">${f.difficulty==="easy"?"Fácil":f.difficulty==="medium"?"Medio":"Difícil"}</span>
                ${s.bestScores[f.id]?`<span class="text-sm text-muted">Mejor: ${s.bestScores[f.id]}</span>`:""}
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
  `,e.querySelectorAll(".game-card").forEach(f=>{f.addEventListener("click",()=>{const w=f.dataset.gameId;T("game",{gameId:w})})}),(l=document.getElementById("verse-card-home"))==null||l.addEventListener("click",()=>{T("verse")}),(u=document.getElementById("btn-ranking"))==null||u.addEventListener("click",()=>{T("ranking")})}function L(e,s="info",o=3e3){const i=document.getElementById("toast-container");if(!i)return;const t=document.createElement("div");t.className=`toast toast-${s}`;const a={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};t.innerHTML=`<span>${a[s]||"📢"}</span><span>${e}</span>`,i.appendChild(t),setTimeout(()=>{t.classList.add("removing"),setTimeout(()=>t.remove(),300)},o)}function qe(e,s,o=[]){const i=document.getElementById("modal-overlay");if(!i)return;const t=o.map(a=>`<button class="btn ${a.class||"btn-primary"} btn-block" id="modal-btn-${a.id}">${a.label}</button>`).join("");i.innerHTML=`
    <div class="modal">
      <h2>${e}</h2>
      <p>${s}</p>
      <div class="flex flex-col gap-sm">${t}</div>
    </div>
  `,i.classList.remove("hidden"),o.forEach(a=>{const l=document.getElementById(`modal-btn-${a.id}`);l&&l.addEventListener("click",()=>{i.classList.add("hidden"),a.onClick&&a.onClick()})})}function q(e){const s=[...e];for(let o=s.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[s[o],s[i]]=[s[i],s[o]]}return s}function se(e){return e>=1e3?(e/1e3).toFixed(1)+"K":e.toString()}function Ce(e){var i,t;const s=de(),o=Le(5,[s.ref]);e.innerHTML=`
    <div class="verse-screen">
      <div class="verse-of-day-card">
        <div class="verse-badge">📅 Versículo del Día</div>
        <blockquote class="verse-main-text">"${s.text}"</blockquote>
        <cite class="verse-main-ref">— ${s.ref}</cite>
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
        ${o.map(a=>`
          <div class="verse-list-item">
            <div class="verse-list-text">"${a.text}"</div>
            <div class="verse-list-ref">— ${a.ref}</div>
          </div>
        `).join("")}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `,(i=document.getElementById("btn-share-verse"))==null||i.addEventListener("click",()=>{var l;const a=`"${s.text}" — ${s.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:a}).catch(()=>{}):(l=navigator.clipboard)==null||l.writeText(a).then(()=>{L("Versículo copiado al portapapeles","success")})}),(t=document.getElementById("btn-copy-verse"))==null||t.addEventListener("click",()=>{var l;const a=`"${s.text}" — ${s.ref}`;(l=navigator.clipboard)==null||l.writeText(a).then(()=>{L("Versículo copiado ✅","success")}).catch(()=>{L("No se pudo copiar","error")})})}const me="achievements",W=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let Q=null;function K(){return Q||(Q=ne(me,{})),Q}function k(e){const s=K();if(s[e])return!1;const o=W.find(i=>i.id===e);return o?(s[e]={unlockedAt:Date.now()},Q=s,oe(me,s),L(`🏆 ¡Logro desbloqueado: ${o.name}!`,"reward"),!0):!1}function ve(){return Object.keys(K()).length}function pe(){return W.length}function Me(){const e=K();return W.map(s=>{var o;return{...s,unlocked:!!e[s.id],unlockedAt:((o=e[s.id])==null?void 0:o.unlockedAt)||null}})}function Pe(){const e=I();e.totalGamesPlayed>=1&&k("first_game"),e.totalGamesPlayed>=5&&k("games_5"),e.totalGamesPlayed>=25&&k("games_25"),e.totalGamesPlayed>=100&&k("games_100"),e.level>=5&&k("level_5"),e.level>=10&&k("level_10"),e.coins>=500&&k("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(i=>(e.gamesCompleted[i]||0)>0)&&k("all_games"),(e.gamesCompleted.trivia||0)>=10&&k("trivia_10"),(e.gamesCompleted.characters||0)>=5&&k("character_5"),(e.gamesCompleted["verse-complete"]||0)>=10&&k("verse_master"),(e.gamesCompleted["word-search"]||0)>=5&&k("word_hunter"),(e.gamesCompleted.memory||0)>=5&&k("memory_king")}function De(e){var f,w,E;const s=I(),o=Se(),i=$e(),t=ve(),a=pe(),l=Y(),u=Ae();e.innerHTML=`
    <div class="profile-screen">
      <div class="profile-header-card">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar" id="profile-avatar">${s.avatar}</div>
          <button class="profile-avatar-edit" id="btn-change-avatar">✏️</button>
        </div>
        <h2 class="profile-name" id="profile-name">${s.name}</h2>
        <div class="profile-level-badge">
          <span class="level-number">Nivel ${s.level}</span>
          <span class="level-name">${i}</span>
        </div>
      </div>

      <div class="xp-bar-container">
        <div class="xp-bar-label">
          <span>XP</span>
          <span>${o.current} / ${o.needed}</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width: ${Math.round(o.progress*100)}%"></div>
        </div>
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🪙</div>
          <div class="profile-stat-value">${s.coins}</div>
          <div class="profile-stat-label">Monedas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🎮</div>
          <div class="profile-stat-value">${s.totalGamesPlayed}</div>
          <div class="profile-stat-label">Partidas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">✅</div>
          <div class="profile-stat-value">${s.totalCorrectAnswers}</div>
          <div class="profile-stat-label">Correctas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🏆</div>
          <div class="profile-stat-value">#${l}</div>
          <div class="profile-stat-label">Ranking</div>
        </div>
      </div>

      <div class="profile-section">
        <div class="section-title">📊 Estadísticas</div>
        <div class="stats-list">
          <div class="stats-row">
            <span>Puntuación Total</span>
            <span class="stats-value">${s.totalScore.toLocaleString()}</span>
          </div>
          <div class="stats-row">
            <span>Logros Desbloqueados</span>
            <span class="stats-value">${t} / ${a}</span>
          </div>
          <div class="stats-row">
            <span>Juegos Distintos</span>
            <span class="stats-value">${Object.keys(s.gamesCompleted).length} / 5</span>
          </div>
          <div class="stats-row">
            <span>Miembro Desde</span>
            <span class="stats-value">${new Date(s.createdAt).toLocaleDateString("es")}</span>
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
          ${u.map(d=>`
            <button class="avatar-option ${d===s.avatar?"selected":""}" data-avatar="${d}">${d}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,(f=document.getElementById("btn-change-avatar"))==null||f.addEventListener("click",()=>{var d;(d=document.getElementById("avatar-picker"))==null||d.classList.toggle("hidden")}),(w=document.getElementById("btn-close-avatar-picker"))==null||w.addEventListener("click",()=>{var d;(d=document.getElementById("avatar-picker"))==null||d.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(d=>{d.addEventListener("click",()=>{const y=d.dataset.avatar;he(y),document.getElementById("profile-avatar").textContent=y,document.querySelectorAll(".avatar-option").forEach(S=>S.classList.remove("selected")),d.classList.add("selected"),L("Avatar actualizado ✅","success")})}),(E=document.getElementById("btn-edit-name"))==null||E.addEventListener("click",()=>{const d=prompt("Ingresa tu nombre:",s.name);d&&d.trim()&&(le(d.trim()),document.getElementById("profile-name").textContent=d.trim(),L("Nombre actualizado ✅","success"))})}function Je(e){const s=Me(),o=ve(),i=pe(),t=Math.round(o/i*100);e.innerHTML=`
    <div class="achievements-screen">
      <div class="achievements-header">
        <div class="achievements-progress-ring">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-gold)" stroke-width="8"
              stroke-dasharray="${2*Math.PI*52}"
              stroke-dashoffset="${2*Math.PI*52*(1-t/100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="achievements-progress-text">
            <span class="achievements-count">${o}</span>
            <span class="achievements-total">/ ${i}</span>
          </div>
        </div>
        <p class="achievements-subtitle">Logros Desbloqueados</p>
      </div>

      <div class="achievements-grid">
        ${s.map(a=>`
          <div class="achievement-card ${a.unlocked?"unlocked":"locked"}">
            <div class="achievement-icon">${a.unlocked?a.icon:"🔒"}</div>
            <div class="achievement-info">
              <div class="achievement-name">${a.name}</div>
              <div class="achievement-desc">${a.desc}</div>
              ${a.unlocked?`<div class="achievement-unlocked-date">✅ ${new Date(a.unlockedAt).toLocaleDateString("es")}</div>`:`<div class="achievement-reward">🪙 +${a.coins}</div>`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ne(e){var o,i;const s=I();e.innerHTML=`
    <div class="settings-screen">
      <div class="settings-group">
        <div class="settings-group-title">👤 Jugador</div>
        <div class="settings-item" id="setting-name">
          <div class="settings-item-left">
            <span class="settings-icon">✏️</span>
            <span>Nombre del Jugador</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted" id="display-name">${s.name}</span>
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
              <input type="checkbox" id="toggle-dark" checked disabled>
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
  `,(o=document.getElementById("setting-name"))==null||o.addEventListener("click",()=>{const t=prompt("Ingresa tu nombre:",s.name);t&&t.trim()&&(le(t.trim()),document.getElementById("display-name").textContent=t.trim(),L("Nombre actualizado ✅","success"))}),(i=document.getElementById("btn-reset-data"))==null||i.addEventListener("click",()=>{qe("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{be(),Te(),L("Datos borrados","info"),T("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function Re(e){const s=ue(),o=Y(),i=["🥇","🥈","🥉"];e.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${s.slice(0,3).map((t,a)=>`
            <div class="podium-item podium-${a+1} ${t.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${t.avatar}</div>
              <div class="podium-medal">${i[a]}</div>
              <div class="podium-name">${t.name}</div>
              <div class="podium-score">${se(t.score)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${o}</strong>
      </div>

      <div class="ranking-list">
        ${s.map((t,a)=>`
          <div class="ranking-row ${t.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${a<3?i[a]:`#${t.position}`}
            </div>
            <div class="ranking-avatar">${t.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${t.name} ${t.isCurrentPlayer?"(Tú)":""}</div>
              <div class="ranking-level">Nivel ${t.level}</div>
            </div>
            <div class="ranking-score">${se(t.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const F={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function Be(e,s,o="easy"){const t={easy:1,medium:1.5,hard:2}[o]||1,a=Math.floor(s*.5*t),l=Math.floor(s*t);return{coins:Math.max(a,5),xp:Math.max(l,10)}}function R(e,s,o=0,i="easy"){const t=Be(e,s,i);we(t.coins);const a=Ee(t.xp);if(a){const l=I();L(`🎉 ¡Subiste al nivel ${l.level}!`,"reward")}return setTimeout(()=>Pe(),500),{...t,leveledUp:a}}function Oe(e){const i=[...F.easy.map(n=>({...n,diff:"easy"})),...F.medium.map(n=>({...n,diff:"medium"})),...F.hard.map(n=>({...n,diff:"hard"}))],t=q(i).slice(0,10);let a=0,l=0,u=0,f=0,w=null,E=20,d=!1;function y(){const n=t[a];d=!1,E=20;const r={easy:"Fácil",medium:"Medio",hard:"Difícil"},b={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};e.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${a+1} / 10</span>
            <span class="trivia-score">⭐ ${l}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${a/10*100}%"></div>
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
            <span id="timer-text" class="timer-text">${E}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${b[n.diff]}">${r[n.diff]}</span>
          <span class="text-sm text-muted">${n.category}</span>
        </div>

        <div class="trivia-question">${n.q}</div>

        <div class="trivia-options">
          ${n.options.map((m,v)=>`
            <button class="trivia-option" data-index="${v}">
              <span class="option-letter">${String.fromCharCode(65+v)}</span>
              <span>${m}</span>
            </button>
          `).join("")}
        </div>

        ${f>=3?`<div class="streak-indicator">🔥 ¡Racha de ${f}!</div>`:""}
      </div>
    `,S(),e.querySelectorAll(".trivia-option").forEach(m=>{m.addEventListener("click",()=>{if(d)return;const v=parseInt(m.dataset.index);p(v,n)})})}function S(){clearInterval(w);const n=document.getElementById("timer-ring"),r=2*Math.PI*42;w=setInterval(()=>{E--;const b=document.getElementById("timer-text");if(b&&(b.textContent=E),n){const m=r*(1-E/20);n.setAttribute("stroke-dashoffset",m),E<=5&&n.setAttribute("stroke","var(--color-error)")}E<=0&&(clearInterval(w),c())},1e3)}function p(n,r){d=!0,clearInterval(w);const b=e.querySelectorAll(".trivia-option"),m=n===r.answer;if(b.forEach((v,h)=>{v.disabled=!0,h===r.answer&&v.classList.add("correct"),h===n&&!m&&v.classList.add("wrong")}),m){u++,f++;const v=Math.floor(E*2),h={easy:10,medium:20,hard:30},A=10+v+(h[r.diff]||0);l+=A,f>=3&&k("streak_3"),E>=17&&k("fast_answer")}else f=0;setTimeout(()=>{a++,a<10?y():g()},1500)}function c(){d=!0,f=0;const n=t[a];e.querySelectorAll(".trivia-option").forEach((b,m)=>{b.disabled=!0,m===n.answer&&b.classList.add("correct")}),L("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{a++,a<10?y():g()},1500)}function g(){var m,v;clearInterval(w);const n=Math.round(u/10*100);n===100&&k("perfect_trivia");const r=R("trivia",l,u,"easy");J("trivia",l,u);const b=n>=80?"🏆":n>=60?"😊":n>=40?"🤔":"📖";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${b}</div>
        <h2 class="results-title">${n>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${l}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${u}/10</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${n}%</span>
            <span class="results-stat-label">Precisión</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${r.coins} monedas</div>
          <div class="reward-item">⭐ +${r.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(m=document.getElementById("btn-play-again"))==null||m.addEventListener("click",()=>{T("game",{gameId:"trivia"})}),(v=document.getElementById("btn-go-home"))==null||v.addEventListener("click",()=>{T("home")})}return y(),()=>{clearInterval(w)}}const H=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function je(e){const o=q([...H]).slice(0,5);let i=0,t=0,a=0,l=0;function u(){const d=o[i];l=0;const y=H.filter(c=>c.name!==d.name).map(c=>c.name),S=q(y).slice(0,3),p=q([d.name,...S]);f(d,p)}function f(d,y){var c;const S=d.clues.slice(0,l+1),p=Math.max(50-l*10,10);e.innerHTML=`
      <div class="characters-game">
        <div class="characters-header">
          <div class="characters-progress">
            <span>Personaje ${i+1} / 5</span>
            <span class="characters-score">⭐ ${t}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${i/5*100}%"></div>
          </div>
        </div>

        <div class="characters-clue-counter">
          <span>Pista ${l+1} de ${d.clues.length}</span>
          <span class="text-muted">Valor: ${p} pts</span>
        </div>

        <div class="characters-clues">
          ${S.map((g,n)=>`
            <div class="clue-card ${n===l?"clue-new":""}">
              <span class="clue-number">${n+1}</span>
              <span>${g}</span>
            </div>
          `).join("")}
        </div>

        ${l<d.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${y.map(g=>`
            <button class="characters-option" data-name="${g}">${g}</button>
          `).join("")}
        </div>
      </div>
    `,(c=document.getElementById("btn-more-clue"))==null||c.addEventListener("click",()=>{l++,f(d,y)}),e.querySelectorAll(".characters-option").forEach(g=>{g.addEventListener("click",()=>{const n=g.dataset.name;w(n,d)})})}function w(d,y,S){const p=d===y.name;if(e.querySelectorAll(".characters-option").forEach(c=>{c.disabled=!0,c.dataset.name===y.name&&c.classList.add("correct"),c.dataset.name===d&&!p&&c.classList.add("wrong")}),p){a++;const c=Math.max(50-l*10,10);t+=c,L(`✅ ¡Correcto! +${c} pts`,"success")}else L(`❌ Era: ${y.name}`,"error");setTimeout(()=>{i++,i<5?u():E()},1800)}function E(){var S,p;const d=R("characters",t,a,"medium");J("characters",t,a);const y=a>=4?"🕵️":a>=3?"😊":"📖";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${y}</div>
        <h2 class="results-title">${a>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${t}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${a}/5</span>
            <span class="results-stat-label">Adivinados</span>
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
    `,(S=document.getElementById("btn-play-again"))==null||S.addEventListener("click",()=>{T("game",{gameId:"characters"})}),(p=document.getElementById("btn-go-home"))==null||p.addEventListener("click",()=>{T("home")})}u()}function _e(e){const o=q([...G]).slice(0,5);let i=0,t=0,a=0;function l(w){const E=w.text.split(" "),d=Math.min(3,Math.max(2,Math.floor(E.length/5))),y=[];for(;y.length<d;){const r=Math.floor(Math.random()*E.length);!y.includes(r)&&E[r].length>3&&y.push(r)}y.sort((r,b)=>r-b);const S=[],p=[];E.forEach((r,b)=>{if(y.includes(b)){const m=r.replace(/[.,;:!?¡¿"']/g,""),v=r.replace(m,"");S.push({type:"blank",original:m,punct:v,index:p.length}),p.push(m)}else S.push({type:"word",text:r})});const g=q(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(r=>!p.includes(r.toLowerCase()))).slice(0,2),n=q([...p,...g]);return{blankedWords:S,missingWords:p,allOptions:n}}function u(){const w=o[i],{blankedWords:E,missingWords:d,allOptions:y}=l(w);let S=new Array(d.length).fill(null);function p(){var g;e.innerHTML=`
        <div class="verse-complete-game">
          <div class="verse-complete-header">
            <div class="trivia-progress">
              <span>Versículo ${i+1} / 5</span>
              <span class="trivia-score">⭐ ${t}</span>
            </div>
            <div class="trivia-progress-bar">
              <div class="trivia-progress-fill" style="width: ${i/5*100}%"></div>
            </div>
          </div>

          <div class="verse-complete-ref">📖 ${w.ref}</div>

          <div class="verse-complete-text">
            ${E.map(n=>{if(n.type==="word")return`<span class="vc-word">${n.text}</span>`;{const r=S[n.index];return`<span class="vc-blank ${r?"filled":""}" data-blank="${n.index}">${r||"___"}${n.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${y.map(n=>{const r=S.includes(n);return`<button class="vc-option ${r?"used":""}" data-word="${n}" ${r?"disabled":""}>${n}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${S.includes(null)?"disabled":""}" id="btn-check-verse" ${S.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,e.querySelectorAll(".vc-blank.filled").forEach(n=>{n.addEventListener("click",()=>{const r=parseInt(n.dataset.blank);S[r]=null,p()})}),e.querySelectorAll(".vc-option:not([disabled])").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.word,b=S.indexOf(null);b!==-1&&(S[b]=r,p())})}),(g=document.getElementById("btn-check-verse"))==null||g.addEventListener("click",()=>{c(d)})}function c(g){let n=!0;g.forEach((r,b)=>{var m;((m=S[b])==null?void 0:m.toLowerCase())!==r.toLowerCase()&&(n=!1)}),n?(a++,t+=30,L("✅ ¡Correcto! +30 pts","success")):L(`❌ Respuesta: ${g.join(", ")}`,"error"),setTimeout(()=>{i++,i<5?u():f()},2e3)}p()}function f(){var d,y;const w=R("verse-complete",t,a,"medium");J("verse-complete",t,a);const E=a>=4?"📖":a>=2?"😊":"🙏";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${E}</div>
        <h2 class="results-title">${a>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${t}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${a}/5</span>
            <span class="results-stat-label">Completados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${w.coins} monedas</div>
          <div class="reward-item">⭐ +${w.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(d=document.getElementById("btn-play-again"))==null||d.addEventListener("click",()=>{T("game",{gameId:"verse-complete"})}),(y=document.getElementById("btn-go-home"))==null||y.addEventListener("click",()=>{T("home")})}u()}const Qe=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","FE","BONDAD"],difficulty:"easy"},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","JUDAS"],difficulty:"easy"},{theme:"Libros del Pentateuco",words:["GENESIS","EXODO","NUMEROS"],difficulty:"medium"},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER"],difficulty:"easy"},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN"],difficulty:"medium"},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON"],difficulty:"easy"},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS"],difficulty:"medium"},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA"],difficulty:"easy"},{theme:"Reyes de Israel",words:["DAVID","SAUL","JOSIAS"],difficulty:"medium"},{theme:"Milagros de Jesús",words:["VINO","PAN","VIDA","AGUA","SALUD"],difficulty:"easy"}];function Ue(e){const o=q([...Qe])[0],i=o.words;let t=[],a=[],l=!1,u=[],f=0,w=Date.now();function E(){t=Array.from({length:10},()=>Array.from({length:10},()=>""));const c=[[0,1],[1,0],[1,1],[0,-1],[-1,0]];i.forEach(n=>{let r=!1,b=0;for(;!r&&b<100;){b++;const m=c[Math.floor(Math.random()*c.length)],v=Math.floor(Math.random()*10),h=Math.floor(Math.random()*10),A=v+m[0]*(n.length-1),B=h+m[1]*(n.length-1);if(A<0||A>=10||B<0||B>=10)continue;let O=!0;for(let x=0;x<n.length;x++){const M=v+m[0]*x,j=h+m[1]*x;if(t[M][j]!==""&&t[M][j]!==n[x]){O=!1;break}}if(O){for(let x=0;x<n.length;x++){const M=v+m[0]*x,j=h+m[1]*x;t[M][j]=n[x]}r=!0}}});const g="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<10;n++)for(let r=0;r<10;r++)t[n][r]===""&&(t[n][r]=g[Math.floor(Math.random()*g.length)])}function d(){e.innerHTML=`
      <div class="word-search-game">
        <div class="ws-header">
          <div class="ws-theme">
            <span class="ws-theme-icon">📚</span>
            <span>${o.theme}</span>
          </div>
          <div class="ws-found">${a.length} / ${i.length}</div>
        </div>

        <div class="ws-words-list">
          ${i.map(g=>`
            <span class="ws-word ${a.includes(g)?"found":""}">${g}</span>
          `).join("")}
        </div>

        <div class="ws-grid" id="ws-grid">
          ${t.map((g,n)=>g.map((r,b)=>`
              <div class="ws-cell "
                   data-row="${n}" data-col="${b}">${r}</div>
            `).join("")).join("")}
        </div>

        <p class="text-sm text-muted text-center mt-md">Toca una letra para empezar y arrastra para seleccionar</p>
      </div>
    `;const c=document.getElementById("ws-grid");c&&(c.style.gridTemplateColumns="repeat(10, 1fr)"),y()}function y(){const c=document.getElementById("ws-grid");if(!c)return;const g=v=>{const h=v.touches?v.touches[0]:v,A=document.elementFromPoint(h.clientX,h.clientY);return A&&A.classList.contains("ws-cell")?{row:parseInt(A.dataset.row),col:parseInt(A.dataset.col),el:A}:null},n=v=>{v.preventDefault(),l=!0,u=[];const h=g(v);h&&(u.push(h),h.el.classList.add("cell-selected"))},r=v=>{if(!l)return;v.preventDefault();const h=g(v);h&&!u.some(A=>A.row===h.row&&A.col===h.col)&&(u.length===1||m(h))&&(u.push(h),h.el.classList.add("cell-selected"))},b=()=>{l&&(l=!1,S(),document.querySelectorAll(".cell-selected").forEach(v=>v.classList.remove("cell-selected")),u=[])};function m(v){if(u.length<1)return!0;const h=u[0],A=u[u.length-1],B=Math.sign(A.row-h.row),O=Math.sign(A.col-h.col),x=A.row+B,M=A.col+O;return v.row===x&&v.col===M}c.addEventListener("mousedown",n),c.addEventListener("mousemove",r),c.addEventListener("mouseup",b),c.addEventListener("touchstart",n,{passive:!1}),c.addEventListener("touchmove",r,{passive:!1}),c.addEventListener("touchend",b)}function S(){if(u.length<2)return;const c=u.map(r=>t[r.row][r.col]).join(""),g=c.split("").reverse().join(""),n=i.find(r=>(r===c||r===g)&&!a.includes(r));if(n){a.push(n),f+=20,u.forEach(m=>{const v=document.querySelector(`.ws-cell[data-row="${m.row}"][data-col="${m.col}"]`);v&&v.classList.add("cell-found")});const r=Array.from(document.querySelectorAll(".ws-word")).find(m=>m.textContent===n);r&&r.classList.add("found");const b=document.querySelector(".ws-found");if(b&&(b.textContent=`${a.length} / ${i.length}`),L(`✅ ¡Encontraste "${n}"!`,"success"),a.length===i.length){const m=Math.max(0,60-Math.floor((Date.now()-w)/1e3));f+=m,setTimeout(p,1e3)}}}function p(){var g,n;const c=R("word-search",f,a.length,o.difficulty);J("word-search",f,a.length),e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">🔤</div>
        <h2 class="results-title">¡Sopa Completada!</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${f}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${a.length}</span>
            <span class="results-stat-label">Palabras</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${Math.floor((Date.now()-w)/1e3)}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${c.coins} monedas</div>
          <div class="reward-item">⭐ +${c.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(g=document.getElementById("btn-play-again"))==null||g.addEventListener("click",()=>{T("game",{gameId:"word-search"})}),(n=document.getElementById("btn-go-home"))==null||n.addEventListener("click",()=>{T("home")})}E(),d()}function Ge(e){const i=q([...H]).slice(0,6).map((p,c)=>[{id:c,type:"name",text:p.name,icon:"👤",pairId:c},{id:c,type:"clue",text:p.clues[0],icon:"💡",pairId:c}]).flat(),t=q(i);let a=[],l=[],u=0,f=0,w=Date.now(),E=!0;function d(){e.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${l.length}/6</span>
            <span>🔄 ${u} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${t.map((p,c)=>`
            <div class="memory-card ${l.includes(p.pairId)?"matched":""} ${a.includes(c)?"flipped":""}"
                 data-index="${c}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${p.icon}</span>
                  <span class="memory-card-text">${p.text}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".memory-card").forEach(p=>{p.addEventListener("click",()=>{if(!E)return;const c=parseInt(p.dataset.index);y(c)})})}function y(p){if(a.includes(p)||l.includes(t[p].pairId)||a.length>=2)return;a.push(p);const c=e.querySelector(`.memory-card[data-index="${p}"]`);if(c&&c.classList.add("flipped"),a.length===2){u++,E=!1;const[g,n]=a,r=t[g],b=t[n];r.pairId===b.pairId&&r.type!==b.type?(l.push(r.pairId),f+=Math.max(30-u,10),setTimeout(()=>{var v,h;(v=document.querySelector(`.memory-card[data-index="${g}"]`))==null||v.classList.add("matched"),(h=document.querySelector(`.memory-card[data-index="${n}"]`))==null||h.classList.add("matched");const m=e.querySelector(".memory-stats");m&&(m.innerHTML=`<span>🎯 ${l.length}/6</span><span>🔄 ${u} movimientos</span>`),a=[],E=!0,L("✅ ¡Par encontrado!","success"),l.length===6&&setTimeout(S,800)},600)):setTimeout(()=>{var v,h;(v=document.querySelector(`.memory-card[data-index="${g}"]`))==null||v.classList.remove("flipped"),(h=document.querySelector(`.memory-card[data-index="${n}"]`))==null||h.classList.remove("flipped");const m=e.querySelector(".memory-stats");m&&(m.innerHTML=`<span>🎯 ${l.length}/6</span><span>🔄 ${u} movimientos</span>`),a=[],E=!0},1e3)}}function S(){var r,b;const p=Math.floor((Date.now()-w)/1e3),c=Math.max(0,120-p);f+=c;const g=R("memory",f,l.length,"easy");J("memory",f,l.length);const n=u<=12?"🧠":u<=18?"😊":"🃏";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${n}</div>
        <h2 class="results-title">${u<=12?"¡Memoria increíble!":"¡Bien jugado!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${f}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${u}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${p}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${g.coins} monedas</div>
          <div class="reward-item">⭐ +${g.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(r=document.getElementById("btn-play-again"))==null||r.addEventListener("click",()=>{T("game",{gameId:"memory"})}),(b=document.getElementById("btn-go-home"))==null||b.addEventListener("click",()=>{T("home")})}d()}N({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Oe});N({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:je});N({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:_e});N({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Ue});N({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Ge});C("home",e=>xe(e));C("verse",e=>Ce(e));C("profile",e=>De(e));C("achievements",e=>Je(e));C("settings",e=>Ne(e));C("ranking",e=>Re(e));C("game",(e,s)=>{const o=ce(s.gameId);if(o&&o.render)return o.render(e);e.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const ze=["home","verse","profile","achievements","settings"],Fe={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function Ve(e,s={}){document.querySelectorAll(".nav-btn").forEach(u=>{u.classList.toggle("active",u.dataset.screen===e)});const i=document.getElementById("header-title");if(i)if(e==="game"&&s.gameId){const u=ce(s.gameId);i.textContent=u?u.name:"Juego"}else i.textContent=Fe[e]||"Bible Games";const t=document.getElementById("btn-back"),a=!ze.includes(e);t&&t.classList.toggle("hidden",!a);const l=document.getElementById("bottom-nav");l&&l.classList.toggle("hidden",a),z()}function ae(){var e;ge(Ve),document.querySelectorAll(".nav-btn").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.screen;o&&T(o)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{T("home")}),z(),fe("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ae):ae();
