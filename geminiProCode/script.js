/* =========================================
   1. Configuration & Selectors
   ========================================= */
const elements = {
  scenarioInput: document.getElementById('scenario'),
  vibeSelect: document.getElementById('vibe'),
  generateBtn: document.getElementById('generate-btn'),
  resultText: document.getElementById('result-text'),
  footerVibe: document.getElementById('footer-vibe'),
  downloadBtn: document.getElementById('download-btn'),
  card: document.getElementById('compliment-card'),
  loader: document.querySelector('.loader'),
  btnText: document.querySelector('.btn-text'),
  themeBtns: document.querySelectorAll('.theme-btn'),
};

// Mock Database for fallback/demo purposes
const mockCompliments = {
  heartfelt: [
    'Your ability to persevere through {scenario} is genuinely inspiring to everyone around you.',
    'The world is a little bit brighter because you handled {scenario} with such grace.',
  ],
  roast: [
    'Wow, you finally did {scenario}? I guess miracles really do happen.',
    'Look at you doing {scenario}. Someone give this human a participation trophy!',
  ],
  professional: [
    'Your execution of {scenario} demonstrates exceptional leadership and competency.',
    'The strategic approach you took to {scenario} adds immense value to the team.',
  ],
  motivational: [
    'You crushed {scenario}! You are an unstoppable force of nature!',
    "This is just the beginning. After mastering {scenario}, there is nothing you can't do.",
  ],
};

/* =========================================
   2. Logic: Theme Switcher
   ========================================= */
function switchTheme(themeName) {
  // Remove all theme classes from body
  document.body.classList.remove('theme-electric', 'theme-warm', 'theme-swiss');
  // Add the selected theme class
  document.body.classList.add(`theme-${themeName}`);

  // Update active button state
  elements.themeBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.theme === themeName);
  });
}

// Attach listeners to theme buttons
elements.themeBtns.forEach((btn) => {
  btn.addEventListener('click', () => switchTheme(btn.dataset.theme));
});

/* =========================================
   3. Logic: Typewriter Effect
   ========================================= */
function typeWriter(text, element, speed = 30) {
  element.innerHTML = ''; // Clear existing text
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Animation complete, show download button
      elements.downloadBtn.classList.remove('hidden');
    }
  }

  type();
}

/* =========================================
   4. Logic: API Engine (Mocked)
   ========================================= */
async function generateCompliment(scenario, vibe) {
  // Simulating API Latency
  return new Promise((resolve) => {
    setTimeout(() => {
      // 1. Get random string from mock DB
      const options = mockCompliments[vibe];
      const randomPick = options[Math.floor(Math.random() * options.length)];

      // 2. Inject user scenario (basic context replacement)
      // If user input is empty, use a generic fallback
      const safeScenario = scenario.trim() || 'that thing you did';
      const finalClean = randomPick.replace('{scenario}', safeScenario);

      resolve(finalClean);
    }, 2000); // 2 second delay to mimic AI "thinking"
  });
}

/* =========================================
   5. Event Listeners & Execution
   ========================================= */
elements.generateBtn.addEventListener('click', async () => {
  const scenario = elements.scenarioInput.value;
  const vibe = elements.vibeSelect.value;

  // UI: Set Loading State
  elements.generateBtn.disabled = true;
  elements.btnText.textContent = 'AI is thinking...';
  elements.downloadBtn.classList.add('hidden'); // Hide download until done
  elements.resultText.textContent = ''; // Clear previous

  try {
    // Fetch Data
    const text = await generateCompliment(scenario, vibe);

    // Update Card Footer
    elements.footerVibe.textContent = `${vibe} Mode`;

    // Trigger Typewriter
    typeWriter(text, elements.resultText);
  } catch (error) {
    elements.resultText.textContent = 'Oops. The AI is having a bad day. Try again.';
  } finally {
    // UI: Reset State
    elements.generateBtn.disabled = false;
    elements.btnText.textContent = 'Generate Compliment';
  }
});

/* =========================================
   6. Viral Feature: Image Generation
   ========================================= */
elements.downloadBtn.addEventListener('click', () => {
  const card = elements.card;

  // Scale up for better quality on retina displays
  const options = {
    quality: 0.95,
    backgroundColor: getComputedStyle(document.body).getPropertyValue('--card-bg').trim(),
    pixelRatio: 2,
  };

  htmlToImage
    .toPng(card, options)
    .then(function (dataUrl) {
      // Create a fake link to trigger download
      const link = document.createElement('a');
      link.download = `compliment-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
      alert('Could not generate image. Please try again.');
    });
});

// Initialize active state on default theme button
document.querySelector('[data-theme="electric"]').classList.add('active');
