// ====================================
// Interactive Stories Game Module
// ====================================

import { stories } from '../../data/stories.js';
import { addCoins, addXP } from '../../core/player.js';
import { showToast } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderStories(container) {
  // Initial state is story selection
  renderSelectionView(container);
}

function renderSelectionView(container) {
  container.innerHTML = `
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(stories).map(story => `
          <div class="story-card" id="story-${story.id}">
            <div class="story-card-cover" style="background-image: url('${story.cover}')">
              <div class="story-card-overlay">
                <span class="badge badge-difficulty">${story.difficulty}</span>
              </div>
            </div>
            <div class="story-card-content">
              <h3>${story.title}</h3>
              <p>${story.description}</p>
              <div class="story-card-footer">
                <span>💰 +${story.reward}</span>
                <span>⭐ +${story.xp} XP</span>
              </div>
              <button class="btn btn-primary btn-block btn-start-story" data-id="${story.id}">
                Comenzar Historia
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach click listeners to cards/buttons
  container.querySelectorAll('.btn-start-story').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const storyId = e.target.dataset.id;
      startStory(container, storyId);
    });
  });
}

function startStory(container, storyId) {
  const story = stories[storyId];
  let currentNodeId = story.startNode || 'start';

  function renderNode() {
    const node = story.nodes[currentNodeId];
    if (!node) {
      console.error(`Node not found: ${currentNodeId}`);
      return;
    }

    // Use node image if exists, otherwise fallback to story cover
    const bgImage = node.image || story.cover;

    if (node.isEnd) {
      renderEndNode(container, story, node);
      return;
    }

    container.innerHTML = `
      <div class="story-play-container" style="background-image: url('${bgImage}')">
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
    `;

    // Exit listener
    document.getElementById('btn-exit-story')?.addEventListener('click', () => {
      renderSelectionView(container);
    });

    // Typewriter effect for text
    const textBox = document.getElementById('story-text-box');
    typeWriter(node.text, textBox, () => {
      // Inject choices after text finishes typing
      const choicesContainer = document.getElementById('story-choices-container');
      if (choicesContainer && node.choices) {
        node.choices.forEach(choice => {
          const btn = document.createElement('button');
          btn.className = 'btn btn-option btn-glass fade-in';
          btn.textContent = choice.text;
          btn.addEventListener('click', () => {
            currentNodeId = choice.nextNode;
            renderNode();
          });
          choicesContainer.appendChild(btn);
        });
      }
    });

    }
    renderNode();
}

function renderEndNode(container, story, node) {
  // Give rewards once on story end node
  addCoins(story.reward);
  addXP(story.xp);
  showToast(`¡Historia completada! +${story.reward} monedas`, 'success');

  container.innerHTML = `
    <div class="story-play-container" style="background-image: url('${story.cover}')">
      <div class="story-overlay"></div>
      
      <div class="story-content-frame">
        <div class="story-end-card glass">
          <div class="story-end-icon">🎉</div>
          <h2>¡Fin de la Historia!</h2>
          <p class="story-text">${node.text}</p>
          <div class="reward-summary">
            <div class="reward-item">💰 <span>+${story.reward}</span></div>
            <div class="reward-item">⭐ <span>+${story.xp} XP</span></div>
          </div>
          <p class="message-muted">${node.message || ''}</p>
          <button class="btn btn-primary btn-block mt-lg" id="btn-finish-story">
            Volver a Historias
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-finish-story')?.addEventListener('click', () => {
    renderSelectionView(container);
  });
}

function typeWriter(text, element, callback, speed = 25) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}
