// Theme switching logic
const themeSelect = document.getElementById('theme-select');
document.body.classList.add('theme-electric'); // Default theme

themeSelect.addEventListener('change', (e) => {
  document.body.classList.remove('theme-electric', 'theme-warm', 'theme-swiss');
  switch (e.target.value) {
    case 'electric':
      document.body.classList.add('theme-electric');
      break;
    case 'warm':
      document.body.classList.add('theme-warm');
      break;
    case 'swiss':
      document.body.classList.add('theme-swiss');
      break;
  }
});

// Compliment generation logic
const generateBtn = document.getElementById('generate-btn');
const complimentText = document.getElementById('compliment-text');
const scenarioInput = document.getElementById('scenario-input');
const vibeSelect = document.getElementById('vibe-select');

// Dummy compliments for fallback/mock
const fallbackCompliments = {
  heartfelt: [
    'You radiate positivity wherever you go!',
    'Your kindness brightens every room.',
    'You make the world a better place.',
  ],
  roast: [
    'You debug like a ninja... after three coffees.',
    'Your code is almost as clean as your desk. Almost.',
    'You have the rare gift of making bugs run away in fear.',
  ],
  professional: [
    'Your work ethic sets a new standard.',
    'You bring excellence to every project.',
    'Your leadership inspires your team.',
  ],
  motivational: [
    'You turn challenges into opportunities!',
    'Every step you take is progress.',
    'Your determination is unstoppable.',
  ],
};

// Typewriter effect function
function typeWriter(text, element, speed = 30) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Mock API call (simulates async OpenAI fetch)
// To use real API, replace this function and uncomment fetch logic below
function fetchCompliment(scenario, vibe) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Pick a random compliment from fallback
      const compliments = fallbackCompliments[vibe] || fallbackCompliments.heartfelt;
      const compliment = compliments[Math.floor(Math.random() * compliments.length)];
      // Optionally, add scenario context
      resolve(`${compliment} (${scenario})`);
    }, 2000);
  });

  // Example structure for real API call:
  /*
  return fetch('https://api.openai.com/v1/your-endpoint', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: `Give a ${vibe} compliment for: ${scenario}`,
      ...
    })
  })
  .then(res => res.json())
  .then(data => data.choices[0].text);
  */
}

// Generate compliment on button click
generateBtn.addEventListener('click', async () => {
  const scenario = scenarioInput.value.trim() || 'your situation';
  const vibe = vibeSelect.value;
  complimentText.textContent = 'Thinking...';
  generateBtn.disabled = true;

  // Fetch compliment (mocked)
  const compliment = await fetchCompliment(scenario, vibe);

  // Typewriter effect
  typeWriter(compliment, complimentText, 30);

  generateBtn.disabled = false;
});

// Share/Download logic using html-to-image
const downloadBtn = document.getElementById('download-btn');
const complimentCard = document.getElementById('compliment-card');

downloadBtn.addEventListener('click', () => {
  htmlToImage
    .toPng(complimentCard)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'compliment.png';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      alert('Download failed. Please try again.');
      console.error('Download error:', error);
    });
});
