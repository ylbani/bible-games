(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const Q={};let oe=null,O=null,H=null;function D(e,a){Q[e]=a}function $(e,a={}){O&&(O(),O=null),oe=e,window.location.hash=e;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",Q[e]){const n=Q[e](t,a);typeof n=="function"&&(O=n)}H&&H(e,a)}}function he(e){H=e}function Ee(e="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||e;t!==oe&&Q[t]&&$(t)});const a=window.location.hash.slice(1)||e;$(a)}const Z="bgc_";function ne(e,a){try{return localStorage.setItem(Z+e,JSON.stringify(a)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function ie(e,a=null){try{const t=localStorage.getItem(Z+e);return t?JSON.parse(t):a}catch(t){return console.warn("Storage load failed:",t),a}}function xe(){Object.keys(localStorage).filter(a=>a.startsWith(Z)).forEach(a=>localStorage.removeItem(a))}const re="player",le={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},createdAt:Date.now()},P=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],ae=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],Se=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let w=null;function k(){return w||(w=ie(re,{...le})),{...w}}function C(){ne(re,w)}function ce(e){w||k(),w.name=e.trim()||"Jugador",C()}function we(e){w||k(),w.avatar=e,C()}function de(e){w||k(),w.xp+=e;let a=!1;for(;w.level<P.length&&w.xp>=P[w.level];)w.level++,a=!0;return C(),a}function ue(e){w||k(),w.coins+=e,C(),U()}function R(e,a,t=0){w||k(),w.totalGamesPlayed++,w.totalScore+=a,w.totalCorrectAnswers+=t,w.gamesCompleted[e]||(w.gamesCompleted[e]=0),w.gamesCompleted[e]++,(!w.bestScores[e]||a>w.bestScores[e])&&(w.bestScores[e]=a),C()}function Ae(){const e=k();if(e.level>=P.length)return{current:e.xp,needed:e.xp,progress:1};const a=P[e.level-1]||0,t=P[e.level],n=(e.xp-a)/(t-a);return{current:e.xp-a,needed:t-a,progress:Math.min(n,1)}}function $e(e=null){const a=e||k().level;return ae[Math.min(a-1,ae.length-1)]}function Te(){return[...Se]}function Le(){w={...le,createdAt:Date.now()},C(),U()}function U(){const e=document.getElementById("coin-count");if(e){const a=k();e.textContent=a.coins}}const X=[];function M(e){X.push(e)}function ke(){return[...X]}function me(e){return X.find(a=>a.id===e)}const G=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function ve(){const e=new Date,a=Math.floor((e-new Date(e.getFullYear(),0,0))/864e5);return G[a%G.length]}function Ie(e,a=[]){return G.filter(o=>!a.includes(o.ref)).sort(()=>Math.random()-.5).slice(0,e)}const qe=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function pe(){const e=k(),a=[...qe,{name:e.name,avatar:e.avatar,score:e.totalScore,level:e.level,isCurrentPlayer:!0}];return a.sort((t,n)=>n.score-t.score),a.map((t,n)=>({...t,position:n+1}))}function Y(){const e=pe(),a=e.find(t=>t.isCurrentPlayer);return(a==null?void 0:a.position)||e.length}function De(e){var l,u;const a=k(),t=ve(),n=ke(),o=Y(),s=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];e.innerHTML=`
    <div class="home-screen">
      <div class="home-welcome">
        <span class="welcome-emoji">✝️</span>
        <h2>¡Hola, ${a.name}!</h2>
        <p>¿Listo para aprender jugando?</p>
      </div>

      <div class="home-stats">
        <div class="stat-card">
          <div class="stat-value">${a.level}</div>
          <div class="stat-label">Nivel</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${a.totalGamesPlayed}</div>
          <div class="stat-label">Jugados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">#${o}</div>
          <div class="stat-label">Ranking</div>
        </div>
      </div>

      <div class="verse-card-home" id="verse-card-home">
        <div class="verse-text">"${t.text}"</div>
        <div class="verse-ref">— ${t.ref}</div>
      </div>

      <div class="section-title">🎮 Juegos</div>
      <div class="games-grid">
        ${n.map((p,E)=>`
          <div class="game-card" data-game-id="${p.id}">
            <div class="game-card-icon" style="background: ${s[E%s.length]}">
              ${p.icon}
            </div>
            <div class="game-card-info">
              <h3>${p.name}</h3>
              <p>${p.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${p.difficulty}">${p.difficulty==="easy"?"Fácil":p.difficulty==="medium"?"Medio":"Difícil"}</span>
                ${a.bestScores[p.id]?`<span class="text-sm text-muted">Mejor: ${a.bestScores[p.id]}</span>`:""}
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
  `,e.querySelectorAll(".game-card").forEach(p=>{p.addEventListener("click",()=>{const E=p.dataset.gameId;$("game",{gameId:E})})}),(l=document.getElementById("verse-card-home"))==null||l.addEventListener("click",()=>{$("verse")}),(u=document.getElementById("btn-ranking"))==null||u.addEventListener("click",()=>{$("ranking")})}function T(e,a="info",t=3e3){const n=document.getElementById("toast-container");if(!n)return;const o=document.createElement("div");o.className=`toast toast-${a}`;const s={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};o.innerHTML=`<span>${s[a]||"📢"}</span><span>${e}</span>`,n.appendChild(o),setTimeout(()=>{o.classList.add("removing"),setTimeout(()=>o.remove(),300)},t)}function Ne(e,a,t=[]){const n=document.getElementById("modal-overlay");if(!n)return;const o=t.map(s=>`<button class="btn ${s.class||"btn-primary"} btn-block" id="modal-btn-${s.id}">${s.label}</button>`).join("");n.innerHTML=`
    <div class="modal">
      <h2>${e}</h2>
      <p>${a}</p>
      <div class="flex flex-col gap-sm">${o}</div>
    </div>
  `,n.classList.remove("hidden"),t.forEach(s=>{const l=document.getElementById(`modal-btn-${s.id}`);l&&l.addEventListener("click",()=>{n.classList.add("hidden"),s.onClick&&s.onClick()})})}function q(e){const a=[...e];for(let t=a.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[a[t],a[n]]=[a[n],a[t]]}return a}function se(e){return e>=1e3?(e/1e3).toFixed(1)+"K":e.toString()}function Ce(e){var n,o;const a=ve(),t=Ie(5,[a.ref]);e.innerHTML=`
    <div class="verse-screen">
      <div class="verse-of-day-card">
        <div class="verse-badge">📅 Versículo del Día</div>
        <blockquote class="verse-main-text">"${a.text}"</blockquote>
        <cite class="verse-main-ref">— ${a.ref}</cite>
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
        ${t.map(s=>`
          <div class="verse-list-item">
            <div class="verse-list-text">"${s.text}"</div>
            <div class="verse-list-ref">— ${s.ref}</div>
          </div>
        `).join("")}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `,(n=document.getElementById("btn-share-verse"))==null||n.addEventListener("click",()=>{var l;const s=`"${a.text}" — ${a.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:s}).catch(()=>{}):(l=navigator.clipboard)==null||l.writeText(s).then(()=>{T("Versículo copiado al portapapeles","success")})}),(o=document.getElementById("btn-copy-verse"))==null||o.addEventListener("click",()=>{var l;const s=`"${a.text}" — ${a.ref}`;(l=navigator.clipboard)==null||l.writeText(s).then(()=>{T("Versículo copiado ✅","success")}).catch(()=>{T("No se pudo copiar","error")})})}const ge="achievements",W=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let z=null;function K(){return z||(z=ie(ge,{})),z}function L(e){const a=K();if(a[e])return!1;const t=W.find(n=>n.id===e);return t?(a[e]={unlockedAt:Date.now()},z=a,ne(ge,a),T(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function fe(){return Object.keys(K()).length}function be(){return W.length}function Me(){const e=K();return W.map(a=>{var t;return{...a,unlocked:!!e[a.id],unlockedAt:((t=e[a.id])==null?void 0:t.unlockedAt)||null}})}function Pe(){const e=k();e.totalGamesPlayed>=1&&L("first_game"),e.totalGamesPlayed>=5&&L("games_5"),e.totalGamesPlayed>=25&&L("games_25"),e.totalGamesPlayed>=100&&L("games_100"),e.level>=5&&L("level_5"),e.level>=10&&L("level_10"),e.coins>=500&&L("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(n=>(e.gamesCompleted[n]||0)>0)&&L("all_games"),(e.gamesCompleted.trivia||0)>=10&&L("trivia_10"),(e.gamesCompleted.characters||0)>=5&&L("character_5"),(e.gamesCompleted["verse-complete"]||0)>=10&&L("verse_master"),(e.gamesCompleted["word-search"]||0)>=5&&L("word_hunter"),(e.gamesCompleted.memory||0)>=5&&L("memory_king")}function Re(e){var p,E,y;const a=k(),t=Ae(),n=$e(),o=fe(),s=be(),l=Y(),u=Te();e.innerHTML=`
    <div class="profile-screen">
      <div class="profile-header-card">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar" id="profile-avatar">${a.avatar}</div>
          <button class="profile-avatar-edit" id="btn-change-avatar">✏️</button>
        </div>
        <h2 class="profile-name" id="profile-name">${a.name}</h2>
        <div class="profile-level-badge">
          <span class="level-number">Nivel ${a.level}</span>
          <span class="level-name">${n}</span>
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
          <div class="profile-stat-value">${a.coins}</div>
          <div class="profile-stat-label">Monedas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🎮</div>
          <div class="profile-stat-value">${a.totalGamesPlayed}</div>
          <div class="profile-stat-label">Partidas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">✅</div>
          <div class="profile-stat-value">${a.totalCorrectAnswers}</div>
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
            <span class="stats-value">${a.totalScore.toLocaleString()}</span>
          </div>
          <div class="stats-row">
            <span>Logros Desbloqueados</span>
            <span class="stats-value">${o} / ${s}</span>
          </div>
          <div class="stats-row">
            <span>Juegos Distintos</span>
            <span class="stats-value">${Object.keys(a.gamesCompleted).length} / 5</span>
          </div>
          <div class="stats-row">
            <span>Miembro Desde</span>
            <span class="stats-value">${new Date(a.createdAt).toLocaleDateString("es")}</span>
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
          ${u.map(c=>`
            <button class="avatar-option ${c===a.avatar?"selected":""}" data-avatar="${c}">${c}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,(p=document.getElementById("btn-change-avatar"))==null||p.addEventListener("click",()=>{var c;(c=document.getElementById("avatar-picker"))==null||c.classList.toggle("hidden")}),(E=document.getElementById("btn-close-avatar-picker"))==null||E.addEventListener("click",()=>{var c;(c=document.getElementById("avatar-picker"))==null||c.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.avatar;we(h),document.getElementById("profile-avatar").textContent=h,document.querySelectorAll(".avatar-option").forEach(S=>S.classList.remove("selected")),c.classList.add("selected"),T("Avatar actualizado ✅","success")})}),(y=document.getElementById("btn-edit-name"))==null||y.addEventListener("click",()=>{const c=prompt("Ingresa tu nombre:",a.name);c&&c.trim()&&(ce(c.trim()),document.getElementById("profile-name").textContent=c.trim(),T("Nombre actualizado ✅","success"))})}function Je(e){const a=Me(),t=fe(),n=be(),o=Math.round(t/n*100);e.innerHTML=`
    <div class="achievements-screen">
      <div class="achievements-header">
        <div class="achievements-progress-ring">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-gold)" stroke-width="8"
              stroke-dasharray="${2*Math.PI*52}"
              stroke-dashoffset="${2*Math.PI*52*(1-o/100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="achievements-progress-text">
            <span class="achievements-count">${t}</span>
            <span class="achievements-total">/ ${n}</span>
          </div>
        </div>
        <p class="achievements-subtitle">Logros Desbloqueados</p>
      </div>

      <div class="achievements-grid">
        ${a.map(s=>`
          <div class="achievement-card ${s.unlocked?"unlocked":"locked"}">
            <div class="achievement-icon">${s.unlocked?s.icon:"🔒"}</div>
            <div class="achievement-info">
              <div class="achievement-name">${s.name}</div>
              <div class="achievement-desc">${s.desc}</div>
              ${s.unlocked?`<div class="achievement-unlocked-date">✅ ${new Date(s.unlockedAt).toLocaleDateString("es")}</div>`:`<div class="achievement-reward">🪙 +${s.coins}</div>`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function je(e){var n,o;const a=k();e.innerHTML=`
    <div class="settings-screen">
      <div class="settings-group">
        <div class="settings-group-title">👤 Jugador</div>
        <div class="settings-item" id="setting-name">
          <div class="settings-item-left">
            <span class="settings-icon">✏️</span>
            <span>Nombre del Jugador</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted" id="display-name">${a.name}</span>
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
  `,(n=document.getElementById("setting-name"))==null||n.addEventListener("click",()=>{const s=prompt("Ingresa tu nombre:",a.name);s&&s.trim()&&(ce(s.trim()),document.getElementById("display-name").textContent=s.trim(),T("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",s=>{s.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(o=document.getElementById("btn-reset-data"))==null||o.addEventListener("click",()=>{Ne("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{xe(),Le(),T("Datos borrados","info"),$("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function _e(e){const a=pe(),t=Y(),n=["🥇","🥈","🥉"];e.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${a.slice(0,3).map((o,s)=>`
            <div class="podium-item podium-${s+1} ${o.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${o.avatar}</div>
              <div class="podium-medal">${n[s]}</div>
              <div class="podium-name">${o.name}</div>
              <div class="podium-score">${se(o.score)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${t}</strong>
      </div>

      <div class="ranking-list">
        ${a.map((o,s)=>`
          <div class="ranking-row ${o.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${s<3?n[s]:`#${o.position}`}
            </div>
            <div class="ranking-avatar">${o.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${o.name} ${o.isCurrentPlayer?"(Tú)":""}</div>
              <div class="ranking-level">Nivel ${o.level}</div>
            </div>
            <div class="ranking-score">${se(o.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const F={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function Be(e,a,t="easy"){const o={easy:1,medium:1.5,hard:2}[t]||1,s=Math.floor(a*.5*o),l=Math.floor(a*o);return{coins:Math.max(s,5),xp:Math.max(l,10)}}function J(e,a,t=0,n="easy"){const o=Be(e,a,n);ue(o.coins);const s=de(o.xp);if(s){const l=k();T(`🎉 ¡Subiste al nivel ${l.level}!`,"reward")}return setTimeout(()=>Pe(),500),{...o,leveledUp:s}}function Oe(e){const n=[...F.easy.map(i=>({...i,diff:"easy"})),...F.medium.map(i=>({...i,diff:"medium"})),...F.hard.map(i=>({...i,diff:"hard"}))],o=q(n).slice(0,10);let s=0,l=0,u=0,p=0,E=null,y=20,c=!1;function h(){const i=o[s];c=!1,y=20;const r={easy:"Fácil",medium:"Medio",hard:"Difícil"},b={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};e.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${s+1} / 10</span>
            <span class="trivia-score">⭐ ${l}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${s/10*100}%"></div>
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
            <span id="timer-text" class="timer-text">${y}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${b[i.diff]}">${r[i.diff]}</span>
          <span class="text-sm text-muted">${i.category}</span>
        </div>

        <div class="trivia-question">${i.q}</div>

        <div class="trivia-options">
          ${i.options.map((m,v)=>`
            <button class="trivia-option" data-index="${v}">
              <span class="option-letter">${String.fromCharCode(65+v)}</span>
              <span>${m}</span>
            </button>
          `).join("")}
        </div>

        ${p>=3?`<div class="streak-indicator">🔥 ¡Racha de ${p}!</div>`:""}
      </div>
    `,S(),e.querySelectorAll(".trivia-option").forEach(m=>{m.addEventListener("click",()=>{if(c)return;const v=parseInt(m.dataset.index);g(v,i)})})}function S(){clearInterval(E);const i=document.getElementById("timer-ring"),r=2*Math.PI*42;E=setInterval(()=>{y--;const b=document.getElementById("timer-text");if(b&&(b.textContent=y),i){const m=r*(1-y/20);i.setAttribute("stroke-dashoffset",m),y<=5&&i.setAttribute("stroke","var(--color-error)")}y<=0&&(clearInterval(E),d())},1e3)}function g(i,r){c=!0,clearInterval(E);const b=e.querySelectorAll(".trivia-option"),m=i===r.answer;if(b.forEach((v,x)=>{v.disabled=!0,x===r.answer&&v.classList.add("correct"),x===i&&!m&&v.classList.add("wrong")}),m){u++,p++;const v=Math.floor(y*2),x={easy:10,medium:20,hard:30},A=10+v+(x[r.diff]||0);l+=A,p>=3&&L("streak_3"),y>=17&&L("fast_answer")}else p=0;setTimeout(()=>{s++,s<10?h():f()},1500)}function d(){c=!0,p=0;const i=o[s];e.querySelectorAll(".trivia-option").forEach((b,m)=>{b.disabled=!0,m===i.answer&&b.classList.add("correct")}),T("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{s++,s<10?h():f()},1500)}function f(){var m,v;clearInterval(E);const i=Math.round(u/10*100);i===100&&L("perfect_trivia");const r=J("trivia",l,u,"easy");R("trivia",l,u);const b=i>=80?"🏆":i>=60?"😊":i>=40?"🤔":"📖";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${b}</div>
        <h2 class="results-title">${i>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

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
            <span class="results-stat-value">${i}%</span>
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
    `,(m=document.getElementById("btn-play-again"))==null||m.addEventListener("click",()=>{$("game",{gameId:"trivia"})}),(v=document.getElementById("btn-go-home"))==null||v.addEventListener("click",()=>{$("home")})}return h(),()=>{clearInterval(E)}}const V=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function ze(e){const t=q([...V]).slice(0,5);let n=0,o=0,s=0,l=0;function u(){const c=t[n];l=0;const h=V.filter(d=>d.name!==c.name).map(d=>d.name),S=q(h).slice(0,3),g=q([c.name,...S]);p(c,g)}function p(c,h){var d;const S=c.clues.slice(0,l+1),g=Math.max(50-l*10,10);e.innerHTML=`
      <div class="characters-game">
        <div class="characters-header">
          <div class="characters-progress">
            <span>Personaje ${n+1} / 5</span>
            <span class="characters-score">⭐ ${o}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${n/5*100}%"></div>
          </div>
        </div>

        <div class="characters-clue-counter">
          <span>Pista ${l+1} de ${c.clues.length}</span>
          <span class="text-muted">Valor: ${g} pts</span>
        </div>

        <div class="characters-clues">
          ${S.map((f,i)=>`
            <div class="clue-card ${i===l?"clue-new":""}">
              <span class="clue-number">${i+1}</span>
              <span>${f}</span>
            </div>
          `).join("")}
        </div>

        ${l<c.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${h.map(f=>`
            <button class="characters-option" data-name="${f}">${f}</button>
          `).join("")}
        </div>
      </div>
    `,(d=document.getElementById("btn-more-clue"))==null||d.addEventListener("click",()=>{l++,p(c,h)}),e.querySelectorAll(".characters-option").forEach(f=>{f.addEventListener("click",()=>{const i=f.dataset.name;E(i,c)})})}function E(c,h,S){const g=c===h.name;if(e.querySelectorAll(".characters-option").forEach(d=>{d.disabled=!0,d.dataset.name===h.name&&d.classList.add("correct"),d.dataset.name===c&&!g&&d.classList.add("wrong")}),g){s++;const d=Math.max(50-l*10,10);o+=d,T(`✅ ¡Correcto! +${d} pts`,"success")}else T(`❌ Era: ${h.name}`,"error");setTimeout(()=>{n++,n<5?u():y()},1800)}function y(){var S,g;const c=J("characters",o,s,"medium");R("characters",o,s);const h=s>=4?"🕵️":s>=3?"😊":"📖";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${h}</div>
        <h2 class="results-title">${s>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${o}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${s}/5</span>
            <span class="results-stat-label">Adivinados</span>
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
    `,(S=document.getElementById("btn-play-again"))==null||S.addEventListener("click",()=>{$("game",{gameId:"characters"})}),(g=document.getElementById("btn-go-home"))==null||g.addEventListener("click",()=>{$("home")})}u()}function Qe(e){const t=q([...G]).slice(0,5);let n=0,o=0,s=0;function l(E){const y=E.text.split(" "),c=Math.min(3,Math.max(2,Math.floor(y.length/5))),h=[];for(;h.length<c;){const r=Math.floor(Math.random()*y.length);!h.includes(r)&&y[r].length>3&&h.push(r)}h.sort((r,b)=>r-b);const S=[],g=[];y.forEach((r,b)=>{if(h.includes(b)){const m=r.replace(/[.,;:!?¡¿"']/g,""),v=r.replace(m,"");S.push({type:"blank",original:m,punct:v,index:g.length}),g.push(m)}else S.push({type:"word",text:r})});const f=q(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(r=>!g.includes(r.toLowerCase()))).slice(0,2),i=q([...g,...f]);return{blankedWords:S,missingWords:g,allOptions:i}}function u(){const E=t[n],{blankedWords:y,missingWords:c,allOptions:h}=l(E);let S=new Array(c.length).fill(null);function g(){var f;e.innerHTML=`
        <div class="verse-complete-game">
          <div class="verse-complete-header">
            <div class="trivia-progress">
              <span>Versículo ${n+1} / 5</span>
              <span class="trivia-score">⭐ ${o}</span>
            </div>
            <div class="trivia-progress-bar">
              <div class="trivia-progress-fill" style="width: ${n/5*100}%"></div>
            </div>
          </div>

          <div class="verse-complete-ref">📖 ${E.ref}</div>

          <div class="verse-complete-text">
            ${y.map(i=>{if(i.type==="word")return`<span class="vc-word">${i.text}</span>`;{const r=S[i.index];return`<span class="vc-blank ${r?"filled":""}" data-blank="${i.index}">${r||"___"}${i.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${h.map(i=>{const r=S.includes(i);return`<button class="vc-option ${r?"used":""}" data-word="${i}" ${r?"disabled":""}>${i}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${S.includes(null)?"disabled":""}" id="btn-check-verse" ${S.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,e.querySelectorAll(".vc-blank.filled").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.blank);S[r]=null,g()})}),e.querySelectorAll(".vc-option:not([disabled])").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.word,b=S.indexOf(null);b!==-1&&(S[b]=r,g())})}),(f=document.getElementById("btn-check-verse"))==null||f.addEventListener("click",()=>{d(c)})}function d(f){let i=!0;f.forEach((r,b)=>{var m;((m=S[b])==null?void 0:m.toLowerCase())!==r.toLowerCase()&&(i=!1)}),i?(s++,o+=30,T("✅ ¡Correcto! +30 pts","success")):T(`❌ Respuesta: ${f.join(", ")}`,"error"),setTimeout(()=>{n++,n<5?u():p()},2e3)}g()}function p(){var c,h;const E=J("verse-complete",o,s,"medium");R("verse-complete",o,s);const y=s>=4?"📖":s>=2?"😊":"🙏";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${y}</div>
        <h2 class="results-title">${s>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${o}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${s}/5</span>
            <span class="results-stat-label">Completados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${E.coins} monedas</div>
          <div class="reward-item">⭐ +${E.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(c=document.getElementById("btn-play-again"))==null||c.addEventListener("click",()=>{$("game",{gameId:"verse-complete"})}),(h=document.getElementById("btn-go-home"))==null||h.addEventListener("click",()=>{$("home")})}u()}const Ge=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","FE","BONDAD"],difficulty:"easy"},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","JUDAS"],difficulty:"easy"},{theme:"Libros del Pentateuco",words:["GENESIS","EXODO","NUMEROS"],difficulty:"medium"},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER"],difficulty:"easy"},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN"],difficulty:"medium"},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON"],difficulty:"easy"},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS"],difficulty:"medium"},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA"],difficulty:"easy"},{theme:"Reyes de Israel",words:["DAVID","SAUL","JOSIAS"],difficulty:"medium"},{theme:"Milagros de Jesús",words:["VINO","PAN","VIDA","AGUA","SALUD"],difficulty:"easy"}];function Ue(e){const t=q([...Ge])[0],n=t.words;let o=[],s=[],l=!1,u=[],p=0,E=Date.now();function y(){o=Array.from({length:10},()=>Array.from({length:10},()=>""));const d=[[0,1],[1,0],[1,1],[0,-1],[-1,0]];n.forEach(i=>{let r=!1,b=0;for(;!r&&b<100;){b++;const m=d[Math.floor(Math.random()*d.length)],v=Math.floor(Math.random()*10),x=Math.floor(Math.random()*10),A=v+m[0]*(i.length-1),j=x+m[1]*(i.length-1);if(A<0||A>=10||j<0||j>=10)continue;let _=!0;for(let I=0;I<i.length;I++){const N=v+m[0]*I,B=x+m[1]*I;if(o[N][B]!==""&&o[N][B]!==i[I]){_=!1;break}}if(_){for(let I=0;I<i.length;I++){const N=v+m[0]*I,B=x+m[1]*I;o[N][B]=i[I]}r=!0}}});const f="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<10;i++)for(let r=0;r<10;r++)o[i][r]===""&&(o[i][r]=f[Math.floor(Math.random()*f.length)])}function c(){e.innerHTML=`
      <div class="word-search-game">
        <div class="ws-header">
          <div class="ws-theme">
            <span class="ws-theme-icon">📚</span>
            <span>${t.theme}</span>
          </div>
          <div class="ws-found">${s.length} / ${n.length}</div>
        </div>

        <div class="ws-words-list">
          ${n.map(f=>`
            <span class="ws-word ${s.includes(f)?"found":""}">${f}</span>
          `).join("")}
        </div>

        <div class="ws-grid" id="ws-grid">
          ${o.map((f,i)=>f.map((r,b)=>`
              <div class="ws-cell "
                   data-row="${i}" data-col="${b}">${r}</div>
            `).join("")).join("")}
        </div>

        <p class="text-sm text-muted text-center mt-md">Toca una letra para empezar y arrastra para seleccionar</p>
      </div>
    `;const d=document.getElementById("ws-grid");d&&(d.style.gridTemplateColumns="repeat(10, 1fr)"),h()}function h(){const d=document.getElementById("ws-grid");if(!d)return;const f=v=>{const x=v.touches?v.touches[0]:v,A=document.elementFromPoint(x.clientX,x.clientY);return A&&A.classList.contains("ws-cell")?{row:parseInt(A.dataset.row),col:parseInt(A.dataset.col),el:A}:null},i=v=>{v.preventDefault(),l=!0,u=[];const x=f(v);x&&(u.push(x),x.el.classList.add("cell-selected"))},r=v=>{if(!l)return;v.preventDefault();const x=f(v);x&&!u.some(A=>A.row===x.row&&A.col===x.col)&&(u.length===1||m(x))&&(u.push(x),x.el.classList.add("cell-selected"))},b=()=>{l&&(l=!1,S(),document.querySelectorAll(".cell-selected").forEach(v=>v.classList.remove("cell-selected")),u=[])};function m(v){if(u.length<1)return!0;const x=u[0],A=u[u.length-1],j=Math.sign(A.row-x.row),_=Math.sign(A.col-x.col),I=A.row+j,N=A.col+_;return v.row===I&&v.col===N}d.addEventListener("mousedown",i),d.addEventListener("mousemove",r),d.addEventListener("mouseup",b),d.addEventListener("touchstart",i,{passive:!1}),d.addEventListener("touchmove",r,{passive:!1}),d.addEventListener("touchend",b)}function S(){if(u.length<2)return;const d=u.map(r=>o[r.row][r.col]).join(""),f=d.split("").reverse().join(""),i=n.find(r=>(r===d||r===f)&&!s.includes(r));if(i){s.push(i),p+=20,u.forEach(m=>{const v=document.querySelector(`.ws-cell[data-row="${m.row}"][data-col="${m.col}"]`);v&&v.classList.add("cell-found")});const r=Array.from(document.querySelectorAll(".ws-word")).find(m=>m.textContent===i);r&&r.classList.add("found");const b=document.querySelector(".ws-found");if(b&&(b.textContent=`${s.length} / ${n.length}`),T(`✅ ¡Encontraste "${i}"!`,"success"),s.length===n.length){const m=Math.max(0,60-Math.floor((Date.now()-E)/1e3));p+=m,setTimeout(g,1e3)}}}function g(){var f,i;const d=J("word-search",p,s.length,t.difficulty);R("word-search",p,s.length),e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">🔤</div>
        <h2 class="results-title">¡Sopa Completada!</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${p}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${s.length}</span>
            <span class="results-stat-label">Palabras</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${Math.floor((Date.now()-E)/1e3)}s</span>
            <span class="results-stat-label">Tiempo</span>
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
    `,(f=document.getElementById("btn-play-again"))==null||f.addEventListener("click",()=>{$("game",{gameId:"word-search"})}),(i=document.getElementById("btn-go-home"))==null||i.addEventListener("click",()=>{$("home")})}y(),c()}function Fe(e){const n=q([...V]).slice(0,6).map((g,d)=>[{id:d,type:"name",text:g.name,icon:"👤",pairId:d},{id:d,type:"clue",text:g.clues[0],icon:"💡",pairId:d}]).flat(),o=q(n);let s=[],l=[],u=0,p=0,E=Date.now(),y=!0;function c(){e.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${l.length}/6</span>
            <span>🔄 ${u} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${o.map((g,d)=>`
            <div class="memory-card ${l.includes(g.pairId)?"matched":""} ${s.includes(d)?"flipped":""}"
                 data-index="${d}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${g.icon}</span>
                  <span class="memory-card-text">${g.text}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".memory-card").forEach(g=>{g.addEventListener("click",()=>{if(!y)return;const d=parseInt(g.dataset.index);h(d)})})}function h(g){if(s.includes(g)||l.includes(o[g].pairId)||s.length>=2)return;s.push(g);const d=e.querySelector(`.memory-card[data-index="${g}"]`);if(d&&d.classList.add("flipped"),s.length===2){u++,y=!1;const[f,i]=s,r=o[f],b=o[i];r.pairId===b.pairId&&r.type!==b.type?(l.push(r.pairId),p+=Math.max(30-u,10),setTimeout(()=>{var v,x;(v=document.querySelector(`.memory-card[data-index="${f}"]`))==null||v.classList.add("matched"),(x=document.querySelector(`.memory-card[data-index="${i}"]`))==null||x.classList.add("matched");const m=e.querySelector(".memory-stats");m&&(m.innerHTML=`<span>🎯 ${l.length}/6</span><span>🔄 ${u} movimientos</span>`),s=[],y=!0,T("✅ ¡Par encontrado!","success"),l.length===6&&setTimeout(S,800)},600)):setTimeout(()=>{var v,x;(v=document.querySelector(`.memory-card[data-index="${f}"]`))==null||v.classList.remove("flipped"),(x=document.querySelector(`.memory-card[data-index="${i}"]`))==null||x.classList.remove("flipped");const m=e.querySelector(".memory-stats");m&&(m.innerHTML=`<span>🎯 ${l.length}/6</span><span>🔄 ${u} movimientos</span>`),s=[],y=!0},1e3)}}function S(){var r,b;const g=Math.floor((Date.now()-E)/1e3),d=Math.max(0,120-g);p+=d;const f=J("memory",p,l.length,"easy");R("memory",p,l.length);const i=u<=12?"🧠":u<=18?"😊":"🃏";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${i}</div>
        <h2 class="results-title">${u<=12?"¡Memoria increíble!":"¡Bien jugado!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${p}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${u}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${g}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${f.coins} monedas</div>
          <div class="reward-item">⭐ +${f.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(r=document.getElementById("btn-play-again"))==null||r.addEventListener("click",()=>{$("game",{gameId:"memory"})}),(b=document.getElementById("btn-go-home"))==null||b.addEventListener("click",()=>{$("home")})}c()}const ye={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function He(e){ee(e)}function ee(e){e.innerHTML=`
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(ye).map(a=>`
          <div class="story-card" id="story-${a.id}">
            <div class="story-card-cover" style="background-image: url('${a.cover}')">
              <div class="story-card-overlay">
                <span class="badge badge-difficulty">${a.difficulty}</span>
              </div>
            </div>
            <div class="story-card-content">
              <h3>${a.title}</h3>
              <p>${a.description}</p>
              <div class="story-card-footer">
                <span>💰 +${a.reward}</span>
                <span>⭐ +${a.xp} XP</span>
              </div>
              <button class="btn btn-primary btn-block btn-start-story" data-id="${a.id}">
                Comenzar Historia
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,e.querySelectorAll(".btn-start-story").forEach(a=>{a.addEventListener("click",t=>{const n=t.target.dataset.id;Ve(e,n)})})}function Ve(e,a){const t=ye[a];let n=t.startNode||"start";function o(){var p;const s=t.nodes[n];if(!s){console.error(`Node not found: ${n}`);return}const l=s.image||t.cover;if(s.isEnd){Ze(e,t,s);return}e.innerHTML=`
      <div class="story-play-container" style="background-image: url('${l}')">
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
    `,(p=document.getElementById("btn-exit-story"))==null||p.addEventListener("click",()=>{ee(e)});const u=document.getElementById("story-text-box");Xe(s.text,u,()=>{const E=document.getElementById("story-choices-container");E&&s.choices&&s.choices.forEach(y=>{const c=document.createElement("button");c.className="btn btn-option btn-glass fade-in",c.textContent=y.text,c.addEventListener("click",()=>{n=y.nextNode,o()}),E.appendChild(c)})})}o()}function Ze(e,a,t){var n;ue(a.reward),de(a.xp),T(`¡Historia completada! +${a.reward} monedas`,"success"),e.innerHTML=`
    <div class="story-play-container" style="background-image: url('${a.cover}')">
      <div class="story-overlay"></div>
      
      <div class="story-content-frame">
        <div class="story-end-card glass">
          <div class="story-end-icon">🎉</div>
          <h2>¡Fin de la Historia!</h2>
          <p class="story-text">${t.text}</p>
          <div class="reward-summary">
            <div class="reward-item">💰 <span>+${a.reward}</span></div>
            <div class="reward-item">⭐ <span>+${a.xp} XP</span></div>
          </div>
          <p class="message-muted">${t.message||""}</p>
          <button class="btn btn-primary btn-block mt-lg" id="btn-finish-story">
            Volver a Historias
          </button>
        </div>
      </div>
    </div>
  `,(n=document.getElementById("btn-finish-story"))==null||n.addEventListener("click",()=>{ee(e)})}function Xe(e,a,t,n=25){let o=0;a.innerHTML="";function s(){o<e.length?(a.innerHTML+=e.charAt(o),o++,setTimeout(s,n)):t&&t()}s()}M({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Oe});M({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:ze});M({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Qe});M({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Ue});M({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Fe});M({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:He});D("home",e=>De(e));D("verse",e=>Ce(e));D("profile",e=>Re(e));D("achievements",e=>Je(e));D("settings",e=>je(e));D("ranking",e=>_e(e));D("game",(e,a)=>{const t=me(a.gameId);if(t&&t.render)return t.render(e);e.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const Ye=["home","verse","profile","achievements","settings"],We={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function Ke(e,a={}){document.querySelectorAll(".nav-btn").forEach(u=>{u.classList.toggle("active",u.dataset.screen===e)});const n=document.getElementById("header-title");if(n)if(e==="game"&&a.gameId){const u=me(a.gameId);n.textContent=u?u.name:"Juego"}else n.textContent=We[e]||"Bible Games";const o=document.getElementById("btn-back"),s=!Ye.includes(e);o&&o.classList.toggle("hidden",!s);const l=document.getElementById("bottom-nav");l&&l.classList.toggle("hidden",s),U()}function te(){var a;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),he(Ke),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.screen;n&&$(n)})}),(a=document.getElementById("btn-back"))==null||a.addEventListener("click",()=>{$("home")}),U(),Ee("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",te):te();
