(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const V={};let me=null,Q=null,Z=null;function R(e,a){V[e]=a}function I(e,a={}){Q&&(Q(),Q=null),me=e,window.location.hash=e;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",V[e]){const o=V[e](t,a);typeof o=="function"&&(Q=o)}Z&&Z(e,a)}}function Le(e){Z=e}function $e(e="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||e;t!==me&&V[t]&&I(t)});const a=window.location.hash.slice(1)||e;I(a)}const ee="bgc_";function ve(e,a){try{return localStorage.setItem(ee+e,JSON.stringify(a)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function pe(e,a=null){try{const t=localStorage.getItem(ee+e);return t?JSON.parse(t):a}catch(t){return console.warn("Storage load failed:",t),a}}function Ie(){Object.keys(localStorage).filter(a=>a.startsWith(ee)).forEach(a=>localStorage.removeItem(a))}const ge="player",fe={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},createdAt:Date.now()},B=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],le=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],De=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let S=null;function k(){return S||(S=pe(ge,{...fe})),{...S}}function j(){ve(ge,S)}function be(e){S||k(),S.name=e.trim()||"Jugador",j()}function Ce(e){S||k(),S.avatar=e,j()}function ae(e){S||k(),S.xp+=e;let a=!1;for(;S.level<B.length&&S.xp>=B[S.level];)S.level++,a=!0;return j(),a}function se(e){S||k(),S.coins+=e,j(),X()}function z(e,a,t=0){S||k(),S.totalGamesPlayed++,S.totalScore+=a,S.totalCorrectAnswers+=t,S.gamesCompleted[e]||(S.gamesCompleted[e]=0),S.gamesCompleted[e]++,(!S.bestScores[e]||a>S.bestScores[e])&&(S.bestScores[e]=a),j()}function Ne(){const e=k();if(e.level>=B.length)return{current:e.xp,needed:e.xp,progress:1};const a=B[e.level-1]||0,t=B[e.level],o=(e.xp-a)/(t-a);return{current:e.xp-a,needed:t-a,progress:Math.min(o,1)}}function ke(e=null){const a=e||k().level;return le[Math.min(a-1,le.length-1)]}function qe(){return[...De]}function Me(){S={...fe,createdAt:Date.now()},j(),X()}function X(){const e=document.getElementById("coin-count");if(e){const a=k();e.textContent=a.coins}}const te=[];function O(e){te.push(e)}function Pe(){return[...te]}function he(e){return te.find(a=>a.id===e)}const Y=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function ye(){const e=new Date,a=Math.floor((e-new Date(e.getFullYear(),0,0))/864e5);return Y[a%Y.length]}function Re(e,a=[]){return Y.filter(n=>!a.includes(n.ref)).sort(()=>Math.random()-.5).slice(0,e)}const Oe=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function Ee(){const e=k(),a=[...Oe,{name:e.name,avatar:e.avatar,score:e.totalScore,level:e.level,isCurrentPlayer:!0}];return a.sort((t,o)=>o.score-t.score),a.map((t,o)=>({...t,position:o+1}))}function oe(){const e=Ee(),a=e.find(t=>t.isCurrentPlayer);return(a==null?void 0:a.position)||e.length}function Je(e){var i,f;const a=k(),t=ye(),o=Pe(),n=oe(),s=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];e.innerHTML=`
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
          <div class="stat-value">#${n}</div>
          <div class="stat-label">Ranking</div>
        </div>
      </div>

      <div class="verse-card-home" id="verse-card-home">
        <div class="verse-text">"${t.text}"</div>
        <div class="verse-ref">— ${t.ref}</div>
      </div>

      <div class="section-title">🎮 Juegos</div>
      <div class="games-grid">
        ${o.map((m,b)=>`
          <div class="game-card" data-game-id="${m.id}">
            <div class="game-card-icon" style="background: ${s[b%s.length]}">
              ${m.icon}
            </div>
            <div class="game-card-info">
              <h3>${m.name}</h3>
              <p>${m.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${m.difficulty}">${m.difficulty==="easy"?"Fácil":m.difficulty==="medium"?"Medio":"Difícil"}</span>
                ${a.bestScores[m.id]?`<span class="text-sm text-muted">Mejor: ${a.bestScores[m.id]}</span>`:""}
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
  `,e.querySelectorAll(".game-card").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.gameId;I("game",{gameId:b})})}),(i=document.getElementById("verse-card-home"))==null||i.addEventListener("click",()=>{I("verse")}),(f=document.getElementById("btn-ranking"))==null||f.addEventListener("click",()=>{I("ranking")})}function $(e,a="info",t=3e3){const o=document.getElementById("toast-container");if(!o)return;const n=document.createElement("div");n.className=`toast toast-${a}`;const s={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};n.innerHTML=`<span>${s[a]||"📢"}</span><span>${e}</span>`,o.appendChild(n),setTimeout(()=>{n.classList.add("removing"),setTimeout(()=>n.remove(),300)},t)}function je(e,a,t=[]){const o=document.getElementById("modal-overlay");if(!o)return;const n=t.map(s=>`<button class="btn ${s.class||"btn-primary"} btn-block" id="modal-btn-${s.id}">${s.label}</button>`).join("");o.innerHTML=`
    <div class="modal">
      <h2>${e}</h2>
      <p>${a}</p>
      <div class="flex flex-col gap-sm">${n}</div>
    </div>
  `,o.classList.remove("hidden"),t.forEach(s=>{const i=document.getElementById(`modal-btn-${s.id}`);i&&i.addEventListener("click",()=>{o.classList.add("hidden"),s.onClick&&s.onClick()})})}function M(e){const a=[...e];for(let t=a.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[a[t],a[o]]=[a[o],a[t]]}return a}function de(e){return e>=1e3?(e/1e3).toFixed(1)+"K":e.toString()}function Be(e){var o,n;const a=ye(),t=Re(5,[a.ref]);e.innerHTML=`
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
  `,(o=document.getElementById("btn-share-verse"))==null||o.addEventListener("click",()=>{var i;const s=`"${a.text}" — ${a.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:s}).catch(()=>{}):(i=navigator.clipboard)==null||i.writeText(s).then(()=>{$("Versículo copiado al portapapeles","success")})}),(n=document.getElementById("btn-copy-verse"))==null||n.addEventListener("click",()=>{var i;const s=`"${a.text}" — ${a.ref}`;(i=navigator.clipboard)==null||i.writeText(s).then(()=>{$("Versículo copiado ✅","success")}).catch(()=>{$("No se pudo copiar","error")})})}const Ae="achievements",ne=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let F=null;function re(){return F||(F=pe(Ae,{})),F}function C(e){const a=re();if(a[e])return!1;const t=ne.find(o=>o.id===e);return t?(a[e]={unlockedAt:Date.now()},F=a,ve(Ae,a),$(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function xe(){return Object.keys(re()).length}function Se(){return ne.length}function ze(){const e=re();return ne.map(a=>{var t;return{...a,unlocked:!!e[a.id],unlockedAt:((t=e[a.id])==null?void 0:t.unlockedAt)||null}})}function _e(){const e=k();e.totalGamesPlayed>=1&&C("first_game"),e.totalGamesPlayed>=5&&C("games_5"),e.totalGamesPlayed>=25&&C("games_25"),e.totalGamesPlayed>=100&&C("games_100"),e.level>=5&&C("level_5"),e.level>=10&&C("level_10"),e.coins>=500&&C("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(o=>(e.gamesCompleted[o]||0)>0)&&C("all_games"),(e.gamesCompleted.trivia||0)>=10&&C("trivia_10"),(e.gamesCompleted.characters||0)>=5&&C("character_5"),(e.gamesCompleted["verse-complete"]||0)>=10&&C("verse_master"),(e.gamesCompleted["word-search"]||0)>=5&&C("word_hunter"),(e.gamesCompleted.memory||0)>=5&&C("memory_king")}function Ue(e){var m,b,p;const a=k(),t=Ne(),o=ke(),n=xe(),s=Se(),i=oe(),f=qe();e.innerHTML=`
    <div class="profile-screen">
      <div class="profile-header-card">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar" id="profile-avatar">${a.avatar}</div>
          <button class="profile-avatar-edit" id="btn-change-avatar">✏️</button>
        </div>
        <h2 class="profile-name" id="profile-name">${a.name}</h2>
        <div class="profile-level-badge">
          <span class="level-number">Nivel ${a.level}</span>
          <span class="level-name">${o}</span>
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
          <div class="profile-stat-value">#${i}</div>
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
            <span class="stats-value">${n} / ${s}</span>
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
          ${f.map(r=>`
            <button class="avatar-option ${r===a.avatar?"selected":""}" data-avatar="${r}">${r}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,(m=document.getElementById("btn-change-avatar"))==null||m.addEventListener("click",()=>{var r;(r=document.getElementById("avatar-picker"))==null||r.classList.toggle("hidden")}),(b=document.getElementById("btn-close-avatar-picker"))==null||b.addEventListener("click",()=>{var r;(r=document.getElementById("avatar-picker"))==null||r.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.avatar;Ce(d),document.getElementById("profile-avatar").textContent=d,document.querySelectorAll(".avatar-option").forEach(c=>c.classList.remove("selected")),r.classList.add("selected"),$("Avatar actualizado ✅","success")})}),(p=document.getElementById("btn-edit-name"))==null||p.addEventListener("click",()=>{const r=prompt("Ingresa tu nombre:",a.name);r&&r.trim()&&(be(r.trim()),document.getElementById("profile-name").textContent=r.trim(),$("Nombre actualizado ✅","success"))})}function Ge(e){const a=ze(),t=xe(),o=Se(),n=Math.round(t/o*100);e.innerHTML=`
    <div class="achievements-screen">
      <div class="achievements-header">
        <div class="achievements-progress-ring">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-gold)" stroke-width="8"
              stroke-dasharray="${2*Math.PI*52}"
              stroke-dashoffset="${2*Math.PI*52*(1-n/100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="achievements-progress-text">
            <span class="achievements-count">${t}</span>
            <span class="achievements-total">/ ${o}</span>
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
  `}function He(e){var o,n;const a=k();e.innerHTML=`
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
  `,(o=document.getElementById("setting-name"))==null||o.addEventListener("click",()=>{const s=prompt("Ingresa tu nombre:",a.name);s&&s.trim()&&(be(s.trim()),document.getElementById("display-name").textContent=s.trim(),$("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",s=>{s.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(n=document.getElementById("btn-reset-data"))==null||n.addEventListener("click",()=>{je("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{Ie(),Me(),$("Datos borrados","info"),I("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function Qe(e){const a=Ee(),t=oe(),o=["🥇","🥈","🥉"];e.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${a.slice(0,3).map((n,s)=>`
            <div class="podium-item podium-${s+1} ${n.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${n.avatar}</div>
              <div class="podium-medal">${o[s]}</div>
              <div class="podium-name">${n.name}</div>
              <div class="podium-score">${de(n.score)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${t}</strong>
      </div>

      <div class="ranking-list">
        ${a.map((n,s)=>`
          <div class="ranking-row ${n.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${s<3?o[s]:`#${n.position}`}
            </div>
            <div class="ranking-avatar">${n.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${n.name} ${n.isCurrentPlayer?"(Tú)":""}</div>
              <div class="ranking-level">Nivel ${n.level}</div>
            </div>
            <div class="ranking-score">${de(n.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const W={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function Fe(e,a,t="easy"){const n={easy:1,medium:1.5,hard:2}[t]||1,s=Math.floor(a*.5*n),i=Math.floor(a*n);return{coins:Math.max(s,5),xp:Math.max(i,10)}}function _(e,a,t=0,o="easy"){const n=Fe(e,a,o);se(n.coins);const s=ae(n.xp);if(s){const i=k();$(`🎉 ¡Subiste al nivel ${i.level}!`,"reward")}return setTimeout(()=>_e(),500),{...n,leveledUp:s}}function Ve(e){const o=[...W.easy.map(l=>({...l,diff:"easy"})),...W.medium.map(l=>({...l,diff:"medium"})),...W.hard.map(l=>({...l,diff:"hard"}))],n=M(o).slice(0,10);let s=0,i=0,f=0,m=0,b=null,p=20,r=!1;function d(){const l=n[s];r=!1,p=20;const g={easy:"Fácil",medium:"Medio",hard:"Difícil"},A={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};e.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${s+1} / 10</span>
            <span class="trivia-score">⭐ ${i}</span>
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
            <span id="timer-text" class="timer-text">${p}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${A[l.diff]}">${g[l.diff]}</span>
          <span class="text-sm text-muted">${l.category}</span>
        </div>

        <div class="trivia-question">${l.q}</div>

        <div class="trivia-options">
          ${l.options.map((v,y)=>`
            <button class="trivia-option" data-index="${y}">
              <span class="option-letter">${String.fromCharCode(65+y)}</span>
              <span>${v}</span>
            </button>
          `).join("")}
        </div>

        ${m>=3?`<div class="streak-indicator">🔥 ¡Racha de ${m}!</div>`:""}
      </div>
    `,c(),e.querySelectorAll(".trivia-option").forEach(v=>{v.addEventListener("click",()=>{if(r)return;const y=parseInt(v.dataset.index);u(y,l)})})}function c(){clearInterval(b);const l=document.getElementById("timer-ring"),g=2*Math.PI*42;b=setInterval(()=>{p--;const A=document.getElementById("timer-text");if(A&&(A.textContent=p),l){const v=g*(1-p/20);l.setAttribute("stroke-dashoffset",v),p<=5&&l.setAttribute("stroke","var(--color-error)")}p<=0&&(clearInterval(b),h())},1e3)}function u(l,g){r=!0,clearInterval(b);const A=e.querySelectorAll(".trivia-option"),v=l===g.answer;if(A.forEach((y,E)=>{y.disabled=!0,E===g.answer&&y.classList.add("correct"),E===l&&!v&&y.classList.add("wrong")}),v){f++,m++;const y=Math.floor(p*2),E={easy:10,medium:20,hard:30},w=10+y+(E[g.diff]||0);i+=w,m>=3&&C("streak_3"),p>=17&&C("fast_answer")}else m=0;setTimeout(()=>{s++,s<10?d():x()},1500)}function h(){r=!0,m=0;const l=n[s];e.querySelectorAll(".trivia-option").forEach((A,v)=>{A.disabled=!0,v===l.answer&&A.classList.add("correct")}),$("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{s++,s<10?d():x()},1500)}function x(){var v,y;clearInterval(b);const l=Math.round(f/10*100);l===100&&C("perfect_trivia");const g=_("trivia",i,f,"easy");z("trivia",i,f);const A=l>=80?"🏆":l>=60?"😊":l>=40?"🤔":"📖";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${A}</div>
        <h2 class="results-title">${l>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${i}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${f}/10</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${l}%</span>
            <span class="results-stat-label">Precisión</span>
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
    `,(v=document.getElementById("btn-play-again"))==null||v.addEventListener("click",()=>{I("game",{gameId:"trivia"})}),(y=document.getElementById("btn-go-home"))==null||y.addEventListener("click",()=>{I("home")})}return d(),()=>{clearInterval(b)}}const K=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function Ye(e){const t=M([...K]).slice(0,5);let o=0,n=0,s=0,i=0;function f(){const r=t[o];i=0;const d=K.filter(h=>h.name!==r.name).map(h=>h.name),c=M(d).slice(0,3),u=M([r.name,...c]);m(r,u)}function m(r,d){var h;const c=r.clues.slice(0,i+1),u=Math.max(50-i*10,10);e.innerHTML=`
      <div class="characters-game">
        <div class="characters-header">
          <div class="characters-progress">
            <span>Personaje ${o+1} / 5</span>
            <span class="characters-score">⭐ ${n}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${o/5*100}%"></div>
          </div>
        </div>

        <div class="characters-clue-counter">
          <span>Pista ${i+1} de ${r.clues.length}</span>
          <span class="text-muted">Valor: ${u} pts</span>
        </div>

        <div class="characters-clues">
          ${c.map((x,l)=>`
            <div class="clue-card ${l===i?"clue-new":""}">
              <span class="clue-number">${l+1}</span>
              <span>${x}</span>
            </div>
          `).join("")}
        </div>

        ${i<r.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${d.map(x=>`
            <button class="characters-option" data-name="${x}">${x}</button>
          `).join("")}
        </div>
      </div>
    `,(h=document.getElementById("btn-more-clue"))==null||h.addEventListener("click",()=>{i++,m(r,d)}),e.querySelectorAll(".characters-option").forEach(x=>{x.addEventListener("click",()=>{const l=x.dataset.name;b(l,r)})})}function b(r,d,c){const u=r===d.name;if(e.querySelectorAll(".characters-option").forEach(h=>{h.disabled=!0,h.dataset.name===d.name&&h.classList.add("correct"),h.dataset.name===r&&!u&&h.classList.add("wrong")}),u){s++;const h=Math.max(50-i*10,10);n+=h,$(`✅ ¡Correcto! +${h} pts`,"success")}else $(`❌ Era: ${d.name}`,"error");setTimeout(()=>{o++,o<5?f():p()},1800)}function p(){var c,u;const r=_("characters",n,s,"medium");z("characters",n,s);const d=s>=4?"🕵️":s>=3?"😊":"📖";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${d}</div>
        <h2 class="results-title">${s>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${n}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${s}/5</span>
            <span class="results-stat-label">Adivinados</span>
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
    `,(c=document.getElementById("btn-play-again"))==null||c.addEventListener("click",()=>{I("game",{gameId:"characters"})}),(u=document.getElementById("btn-go-home"))==null||u.addEventListener("click",()=>{I("home")})}f()}function Xe(e){const t=M([...Y]).slice(0,5);let o=0,n=0,s=0;function i(b){const p=b.text.split(" "),r=Math.min(3,Math.max(2,Math.floor(p.length/5))),d=[];for(;d.length<r;){const g=Math.floor(Math.random()*p.length);!d.includes(g)&&p[g].length>3&&d.push(g)}d.sort((g,A)=>g-A);const c=[],u=[];p.forEach((g,A)=>{if(d.includes(A)){const v=g.replace(/[.,;:!?¡¿"']/g,""),y=g.replace(v,"");c.push({type:"blank",original:v,punct:y,index:u.length}),u.push(v)}else c.push({type:"word",text:g})});const x=M(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(g=>!u.includes(g.toLowerCase()))).slice(0,2),l=M([...u,...x]);return{blankedWords:c,missingWords:u,allOptions:l}}function f(){const b=t[o],{blankedWords:p,missingWords:r,allOptions:d}=i(b);let c=new Array(r.length).fill(null);function u(){var x;e.innerHTML=`
        <div class="verse-complete-game">
          <div class="verse-complete-header">
            <div class="trivia-progress">
              <span>Versículo ${o+1} / 5</span>
              <span class="trivia-score">⭐ ${n}</span>
            </div>
            <div class="trivia-progress-bar">
              <div class="trivia-progress-fill" style="width: ${o/5*100}%"></div>
            </div>
          </div>

          <div class="verse-complete-ref">📖 ${b.ref}</div>

          <div class="verse-complete-text">
            ${p.map(l=>{if(l.type==="word")return`<span class="vc-word">${l.text}</span>`;{const g=c[l.index];return`<span class="vc-blank ${g?"filled":""}" data-blank="${l.index}">${g||"___"}${l.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${d.map(l=>{const g=c.includes(l);return`<button class="vc-option ${g?"used":""}" data-word="${l}" ${g?"disabled":""}>${l}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${c.includes(null)?"disabled":""}" id="btn-check-verse" ${c.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,e.querySelectorAll(".vc-blank.filled").forEach(l=>{l.addEventListener("click",()=>{const g=parseInt(l.dataset.blank);c[g]=null,u()})}),e.querySelectorAll(".vc-option:not([disabled])").forEach(l=>{l.addEventListener("click",()=>{const g=l.dataset.word,A=c.indexOf(null);A!==-1&&(c[A]=g,u())})}),(x=document.getElementById("btn-check-verse"))==null||x.addEventListener("click",()=>{h(r)})}function h(x){let l=!0;x.forEach((g,A)=>{var v;((v=c[A])==null?void 0:v.toLowerCase())!==g.toLowerCase()&&(l=!1)}),l?(s++,n+=30,$("✅ ¡Correcto! +30 pts","success")):$(`❌ Respuesta: ${x.join(", ")}`,"error"),setTimeout(()=>{o++,o<5?f():m()},2e3)}u()}function m(){var r,d;const b=_("verse-complete",n,s,"medium");z("verse-complete",n,s);const p=s>=4?"📖":s>=2?"😊":"🙏";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${p}</div>
        <h2 class="results-title">${s>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${n}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${s}/5</span>
            <span class="results-stat-label">Completados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${b.coins} monedas</div>
          <div class="reward-item">⭐ +${b.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(r=document.getElementById("btn-play-again"))==null||r.addEventListener("click",()=>{I("game",{gameId:"verse-complete"})}),(d=document.getElementById("btn-go-home"))==null||d.addEventListener("click",()=>{I("home")})}f()}const We=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","PACIENCIA","BONDAD","FE","MANSEDUMBRE","TEMPLANZA","BENIGNIDAD","PERDON","PIEDAD"]},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","SANTIAGO","ANDRES","FELIPE","SIMON","BARTOLOME","JUDAS","TADEO","FELIPE"]},{theme:"Libros del Antiguo Testamento",words:["GENESIS","EXODO","LEVITICO","NUMEROS","DEUTERONOMIO","JOSUE","JUECES","RUT","SAMUEL","REYES","SALMOS"]},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER","ABRAHAM","ISAAC","JACOB","JOSE","SAMUEL","DANIEL","SANSÓN"]},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN","JERUSALEN","NAZARET","JERICO","EGIPTO","BETEL","CANAN","GOLGOTA"]},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON","AMOR","JUSTICIA","SANTIDAD","HONESTIDAD","HUMILDAD","FE"]},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS","JEREMIAS","EZEQUIEL","OSEAS","MALAQUIAS","AMOS","MIQUEAS","HABACUC"]},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA","AGUILA","TORO","CABALLO","LOBO","SERPIENTE","CORDERO"]},{theme:"Reyes de la Biblia",words:["DAVID","SAUL","SALOMON","JOSIAS","EZEQUIAS","ACAB","ROBOAM","OZIAS","HERODES","FELESTINO","BALAC"]},{theme:"Milagros de Jesús",words:["VINO","PAN","AGUA","VISTA","VIDA","PESCA","CALMA","LAZARO","PIES","OREJA","HIJA"]}];function we(e){a();function a(){e.innerHTML=`
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
    `,e.querySelectorAll(".btn-difficulty").forEach(o=>{o.addEventListener("click",n=>{const s=o.dataset.level;t(s)})})}function t(o){const s={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[o],i=s.size,f=M([...We])[0],m=M([...f.words]).slice(0,s.wordCount);let b=[],p=[],r=!1,d=[],c=0,u=Date.now();function h(){b=Array.from({length:i},()=>Array.from({length:i},()=>""));const v=s.directions;m.forEach(E=>{let w=!1,P=0;for(;!w&&P<100;){P++;const N=v[Math.floor(Math.random()*v.length)],T=Math.floor(Math.random()*i),L=Math.floor(Math.random()*i),D=T+N[0]*(E.length-1),U=L+N[1]*(E.length-1);if(D<0||D>=i||U<0||U>=i)continue;let G=!0;for(let q=0;q<E.length;q++){const J=T+N[0]*q,H=L+N[1]*q;if(b[J][H]!==""&&b[J][H]!==E[q]){G=!1;break}}if(G){for(let q=0;q<E.length;q++){const J=T+N[0]*q,H=L+N[1]*q;b[J][H]=E[q]}w=!0}}});const y="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let E=0;E<i;E++)for(let w=0;w<i;w++)b[E][w]===""&&(b[E][w]=y[Math.floor(Math.random()*y.length)])}function x(){e.innerHTML=`
        <div class="word-search-game">
          <div class="ws-header">
            <div class="ws-theme">
              <span class="ws-theme-icon">📚</span>
              <span>${f.theme} (${o.toUpperCase()})</span>
            </div>
            <div class="ws-found">${p.length} / ${m.length}</div>
          </div>

          <div class="ws-words-list">
            ${m.map(y=>`
              <span class="ws-word ${p.includes(y)?"found":""}">${y}</span>
            `).join("")}
          </div>

          <div class="ws-grid" id="ws-grid">
            ${b.map((y,E)=>y.map((w,P)=>`
                <div class="ws-cell" data-row="${E}" data-col="${P}">${w}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const v=document.getElementById("ws-grid");v&&(v.style.gridTemplateColumns=`repeat(${i}, 1fr)`),l()}function l(){const v=document.getElementById("ws-grid");if(!v)return;const y=T=>{const L=T.touches?T.touches[0]:T,D=document.elementFromPoint(L.clientX,L.clientY);return D&&D.classList.contains("ws-cell")?{row:parseInt(D.dataset.row),col:parseInt(D.dataset.col),el:D}:null},E=T=>{T.preventDefault(),r=!0,d=[];const L=y(T);L&&(d.push(L),L.el.classList.add("cell-selected"))},w=T=>{if(!r)return;T.preventDefault();const L=y(T);L&&!d.some(D=>D.row===L.row&&D.col===L.col)&&(d.length===1||N(L))&&(d.push(L),L.el.classList.add("cell-selected"))},P=()=>{r&&(r=!1,g(),document.querySelectorAll(".cell-selected").forEach(T=>T.classList.remove("cell-selected")),d=[])};function N(T){if(d.length<1)return!0;const L=d[0],D=d[d.length-1],U=Math.sign(D.row-L.row),G=Math.sign(D.col-L.col),q=D.row+U,J=D.col+G;return T.row===q&&T.col===J}v.addEventListener("mousedown",E),v.addEventListener("mousemove",w),window.addEventListener("mouseup",P),v.addEventListener("touchstart",E,{passive:!1}),v.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",P)}function g(){if(d.length<2)return;const v=d.map(w=>b[w.row][w.col]).join(""),y=v.split("").reverse().join(""),E=m.find(w=>(w===v||w===y)&&!p.includes(w));if(E){p.push(E),c+=25,d.forEach(N=>{const T=document.querySelector(`.ws-cell[data-row="${N.row}"][data-col="${N.col}"]`);T&&T.classList.add("cell-found")});const w=Array.from(document.querySelectorAll(".ws-word")).find(N=>N.textContent===E);w&&w.classList.add("found");const P=document.querySelector(".ws-found");if(P&&(P.textContent=`${p.length} / ${m.length}`),$(`✅ ¡Encontraste "${E}"!`,"success"),p.length===m.length){const N=Math.max(0,60-Math.floor((Date.now()-u)/1e3));c+=N,setTimeout(A,1e3)}}}function A(){var y,E;const v=_("word-search",c,p.length,o);z("word-search",c,p.length),e.innerHTML=`
        <div class="game-results">
          <div class="results-emoji">🔤</div>
          <h2 class="results-title">¡Sopa Completada!</h2>

          <div class="results-score-circle">
            <span class="results-score-value">${c}</span>
            <span class="results-score-label">puntos</span>
          </div>

          <div class="results-stats">
            <div class="results-stat">
              <span class="results-stat-value">${p.length}</span>
              <span class="results-stat-label">Palabras</span>
            </div>
            <div class="results-stat">
              <span class="results-stat-value">${Math.floor((Date.now()-u)/1e3)}s</span>
              <span class="results-stat-label">Tiempo</span>
            </div>
          </div>

          <div class="results-rewards">
            <div class="reward-item">🪙 +${v.coins} monedas</div>
            <div class="reward-item">⭐ +${v.xp} XP</div>
          </div>

          <div class="results-actions">
            <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
            <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
          </div>
        </div>
      `,(y=document.getElementById("btn-play-again"))==null||y.addEventListener("click",()=>{we(e)}),(E=document.getElementById("btn-go-home"))==null||E.addEventListener("click",()=>{I("home")})}h(),x()}}function Ze(e){const o=M([...K]).slice(0,6).map((u,h)=>[{id:h,type:"name",text:u.name,icon:"👤",pairId:h},{id:h,type:"clue",text:u.clues[0],icon:"💡",pairId:h}]).flat(),n=M(o);let s=[],i=[],f=0,m=0,b=Date.now(),p=!0;function r(){e.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${i.length}/6</span>
            <span>🔄 ${f} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${n.map((u,h)=>`
            <div class="memory-card ${i.includes(u.pairId)?"matched":""} ${s.includes(h)?"flipped":""}"
                 data-index="${h}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${u.icon}</span>
                  <span class="memory-card-text">${u.text}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".memory-card").forEach(u=>{u.addEventListener("click",()=>{if(!p)return;const h=parseInt(u.dataset.index);d(h)})})}function d(u){if(s.includes(u)||i.includes(n[u].pairId)||s.length>=2)return;s.push(u);const h=e.querySelector(`.memory-card[data-index="${u}"]`);if(h&&h.classList.add("flipped"),s.length===2){f++,p=!1;const[x,l]=s,g=n[x],A=n[l];g.pairId===A.pairId&&g.type!==A.type?(i.push(g.pairId),m+=Math.max(30-f,10),setTimeout(()=>{var y,E;(y=document.querySelector(`.memory-card[data-index="${x}"]`))==null||y.classList.add("matched"),(E=document.querySelector(`.memory-card[data-index="${l}"]`))==null||E.classList.add("matched");const v=e.querySelector(".memory-stats");v&&(v.innerHTML=`<span>🎯 ${i.length}/6</span><span>🔄 ${f} movimientos</span>`),s=[],p=!0,$("✅ ¡Par encontrado!","success"),i.length===6&&setTimeout(c,800)},600)):setTimeout(()=>{var y,E;(y=document.querySelector(`.memory-card[data-index="${x}"]`))==null||y.classList.remove("flipped"),(E=document.querySelector(`.memory-card[data-index="${l}"]`))==null||E.classList.remove("flipped");const v=e.querySelector(".memory-stats");v&&(v.innerHTML=`<span>🎯 ${i.length}/6</span><span>🔄 ${f} movimientos</span>`),s=[],p=!0},1e3)}}function c(){var g,A;const u=Math.floor((Date.now()-b)/1e3),h=Math.max(0,120-u);m+=h;const x=_("memory",m,i.length,"easy");z("memory",m,i.length);const l=f<=12?"🧠":f<=18?"😊":"🃏";e.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${l}</div>
        <h2 class="results-title">${f<=12?"¡Memoria increíble!":"¡Bien jugado!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${m}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${f}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${u}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${x.coins} monedas</div>
          <div class="reward-item">⭐ +${x.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(g=document.getElementById("btn-play-again"))==null||g.addEventListener("click",()=>{I("game",{gameId:"memory"})}),(A=document.getElementById("btn-go-home"))==null||A.addEventListener("click",()=>{I("home")})}r()}const Te={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function Ke(e){ie(e)}function ie(e){e.innerHTML=`
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(Te).map(a=>`
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
  `,e.querySelectorAll(".btn-start-story").forEach(a=>{a.addEventListener("click",t=>{const o=t.target.dataset.id;ea(e,o)})})}function ea(e,a){const t=Te[a];let o=t.startNode||"start";function n(){var m;const s=t.nodes[o];if(!s){console.error(`Node not found: ${o}`);return}const i=s.image||t.cover;if(s.isEnd){aa(e,t,s);return}e.innerHTML=`
      <div class="story-play-container" style="background-image: url('${i}')">
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
    `,(m=document.getElementById("btn-exit-story"))==null||m.addEventListener("click",()=>{ie(e)});const f=document.getElementById("story-text-box");sa(s.text,f,()=>{const b=document.getElementById("story-choices-container");b&&s.choices&&s.choices.forEach(p=>{const r=document.createElement("button");r.className="btn btn-option btn-glass fade-in",r.textContent=p.text,r.addEventListener("click",()=>{o=p.nextNode,n()}),b.appendChild(r)})})}n()}function aa(e,a,t){var o;se(a.reward),ae(a.xp),$(`¡Historia completada! +${a.reward} monedas`,"success"),e.innerHTML=`
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
  `,(o=document.getElementById("btn-finish-story"))==null||o.addEventListener("click",()=>{ie(e)})}function sa(e,a,t,o=25){let n=0;a.innerHTML="";function s(){n<e.length?(a.innerHTML+=e.charAt(n),n++,setTimeout(s,o)):t&&t()}s()}const ce=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'}];function ta(e){let a=i(),t=[],o=6,n=6,s=!1;function i(){const r=Math.floor(Math.random()*ce.length);return ce[r]}function f(){if(s){p();return}const r=a.word.toUpperCase();if(r.split("").every(c=>t.includes(c)||c===" ")){b(!0);return}if(o<=0){b(!1);return}e.innerHTML=`
      <div class="hangman-game">
        <div class="hm-header">
          <div class="hm-category">🏷️ ${a.category}</div>
          <div class="hm-lives">
            ${Array.from({length:n},(c,u)=>`
              <span class="hm-heart ${u<o?"filled":"empty"}">❤️</span>
            `).join("")}
          </div>
        </div>

        <div class="hm-hint-container">
          <p class="hm-hint">💡 Pista: <span>${a.hint}</span></p>
        </div>

        <div class="hm-word-display" id="hm-word-display">
          ${r.split("").map(c=>`
            <div class="hm-letter-box ${c===" "?"hm-space":""}">
              ${t.includes(c)||c===" "?c:"_"}
            </div>
          `).join("")}
        </div>

        <div class="hm-keyboard" id="hm-keyboard">
          ${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map(c=>`
            <button class="btn btn-keyboard" 
                    data-letter="${c}" 
                    ${t.includes(c)?"disabled":""}>
              ${c}
            </button>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".btn-keyboard").forEach(c=>{c.addEventListener("click",u=>{const h=u.target.dataset.letter;m(h)})})}function m(r){if(t.includes(r))return;t.push(r),a.word.toUpperCase().includes(r)?$("¡Correcto!","success"):(o--,$("¡Letra incorrecta!","warning")),f()}function b(r){s=!0,r&&(se(50),ae(25)),p(r)}function p(r){var d;e.innerHTML=`
      <div class="hangman-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">${r?"🎉":"😢"}</div>
          <h2>${r?"¡Victoria!":"¡Fin del Juego!"}</h2>
          
          <p class="hm-result-word">La palabra era: <span>${a.word}</span></p>
          
          <div class="hm-verse-box">
            <h4>📖 Contexto Bíblico:</h4>
            <p>${a.verse}</p>
          </div>

          <div class="reward-summary">
            ${r?`
              <div class="reward-item">💰 <span>+50</span></div>
              <div class="reward-item">⭐ <span>+25 XP</span></div>
            `:'<p class="text-muted">No te rindas, ¡sigue aprendiendo!</p>'}
          </div>

          <button class="btn btn-primary btn-block" id="btn-restart-hm">
            Jugar de Nuevo
          </button>
        </div>
      </div>
    `,(d=document.getElementById("btn-restart-hm"))==null||d.addEventListener("click",()=>{a=i(),t=[],o=6,s=!1,f()})}f()}O({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Ve});O({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:Ye});O({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Xe});O({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:we});O({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Ze});O({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:Ke});O({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:ta});R("home",e=>Je(e));R("verse",e=>Be(e));R("profile",e=>Ue(e));R("achievements",e=>Ge(e));R("settings",e=>He(e));R("ranking",e=>Qe(e));R("game",(e,a)=>{const t=he(a.gameId);if(t&&t.render)return t.render(e);e.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const oa=["home","verse","profile","achievements","settings"],na={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function ra(e,a={}){document.querySelectorAll(".nav-btn").forEach(f=>{f.classList.toggle("active",f.dataset.screen===e)});const o=document.getElementById("header-title");if(o)if(e==="game"&&a.gameId){const f=he(a.gameId);o.textContent=f?f.name:"Juego"}else o.textContent=na[e]||"Bible Games";const n=document.getElementById("btn-back"),s=!oa.includes(e);n&&n.classList.toggle("hidden",!s);const i=document.getElementById("bottom-nav");i&&i.classList.toggle("hidden",s),X()}function ue(){var a;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),Le(ra),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.screen;o&&I(o)})}),(a=document.getElementById("btn-back"))==null||a.addEventListener("click",()=>{I("home")}),X(),$e("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();
