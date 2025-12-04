// --- CONFIG & DATA ---

// The user requested 50 jokes.
const jokes = [
  { s: 'Why do programmers prefer dark mode?', p: 'Because light attracts bugs.' },
  { s: 'How many programmers does it take to change a light bulb?', p: "None, that's a hardware problem." },
  { s: 'Why did the scarecrow win an award?', p: 'He was outstanding in his field.' },
  { s: 'What do you call a fake noodle?', p: 'An Impasta.' },
  { s: 'Why did the bicycle fall over?', p: 'Because it was two-tired.' },
  { s: 'What do you call a bear with no teeth?', p: 'A gummy bear.' },
  { s: "Why don't skeletons fight each other?", p: "They don't have the guts." },
  { s: 'What do you call a factory that makes okay products?', p: 'A satisfactory.' },
  { s: 'Why did the math book look sad?', p: 'Because it had too many problems.' },
  { s: "What do you call cheese that isn't yours?", p: 'Nacho cheese.' },
  { s: "Why couldn't the leopard play hide and seek?", p: 'Because he was always spotted.' },
  { s: 'What do you call a sleeping bull?', p: 'A bulldozer.' },
  { s: 'Why do seagulls fly over the sea?', p: 'Because if they flew over the bay, they’d be bagels.' },
  { s: 'What did the ocean say to the beach?', p: 'Nothing, it just waved.' },
  { s: 'Why did the golfer bring two pairs of pants?', p: 'In case he got a hole in one.' },
  { s: 'What do you call a snowman with a six-pack?', p: 'An abdominal snowman.' },
  { s: 'Why did the invisible man turn down the job offer?', p: "He couldn't see himself doing it." },
  { s: 'What do you call a fish wearing a bowtie?', p: 'Sofishticated.' },
  { s: 'Why was the belt arrested?', p: 'For holding up a pair of pants.' },
  { s: 'What do you call a pile of cats?', p: 'A meowtain.' },
  { s: 'Why did the tomato turn red?', p: 'Because it saw the salad dressing.' },
  { s: 'What do you call a dinosaur with an extensive vocabulary?', p: 'A Thesaurus.' },
  { s: "Why don't eggs tell jokes?", p: 'They might crack up.' },
  { s: 'What kind of shoes do ninjas wear?', p: 'Sneakers.' },
  { s: 'Why did the cookie go to the hospital?', p: 'He was feeling crummy.' },
  { s: 'What do you call a belt made out of watches?', p: 'A waist of time.' },
  { s: 'Why did the computer go to the doctor?', p: 'It had a virus.' },
  { s: 'What do you call a pig that does karate?', p: 'A pork chop.' },
  { s: 'Why are elevator jokes so good?', p: 'They work on so many levels.' },
  { s: 'What do you get when you cross a vampire and a snowman?', p: 'Frostbite.' },
  { s: 'Why was the broom late?', p: 'It over-swept.' },
  { s: 'What do you call a funny mountain?', p: 'Hill-arious.' },
  { s: 'Why do bees have sticky hair?', p: 'Because they use honeycombs.' },
  { s: 'What did one wall say to the other?', p: "I'll meet you at the corner." },
  { s: "Why can't you give Elsa a balloon?", p: 'Because she will let it go.' },
  { s: 'What do you call a magic dog?', p: 'A Labracadabrador.' },
  { s: 'Why did the student eat his homework?', p: 'Because the teacher said it was a piece of cake.' },
  { s: 'What falls, but never needs a bandage?', p: 'The rain.' },
  { s: 'I was going to tell a time-travel joke...', p: "But you didn't like it." },
  { s: "What do you call a can opener that doesn't work?", p: "A can't opener." },
  { s: 'Why did the melon jump into the lake?', p: 'It wanted to be a water-melon.' },
  { s: "What do you call a duck that gets all A's?", p: 'A wise quacker.' },
  { s: 'Why did the banana go to the doctor?', p: "It wasn't peeling well." },
  { s: 'What do you call a pony with a cough?', p: 'A little horse.' },
  { s: 'Where do pencils go on vacation?', p: 'Pencil-vania.' },
  { s: 'Why did the picture go to jail?', p: 'Because it was framed.' },
  { s: 'What do you call a sad strawberry?', p: 'A blueberry.' },
  { s: "Why couldn't the bicycle stand up by itself?", p: 'It was two tired.' },
  { s: 'What did the zero say to the eight?', p: 'Nice belt!' },
  { s: 'Why do cows wear bells?', p: "Because their horns don't work." },
];

const cornerIcons = [
  '♠️',
  '♣️',
  '♥️',
  '♦️',
  '🚀',
  '🔥',
  '🦄',
  '⭐',
  '⚡',
  '🎲',
  '👾',
  '💎',
  '🧩',
  '🎈',
  '🍔',
  '🍕',
  '🎸',
  '🎧',
  '📷',
  '💡',
];
const cornerColors = ['#ff9a9e', '#a18cd1', '#fad0c4', '#ffecd2', '#fbc2eb', '#a6c1ee', '#84fab0', '#8fd3f4'];

// --- DOM ELEMENTS ---
const els = {
  setup: document.getElementById('setup-text'),
  punchline: document.getElementById('punchline-text'),
  cardTitle: document.getElementById('card-title'),
  corners: document.querySelectorAll('.card-corner'),
  input: document.getElementById('scenario'),
  btnComp: document.getElementById('btn-compliment'),
  btnJoke: document.getElementById('btn-joke'),
  btnDown: document.getElementById('btn-download'),
  captureArea: document.getElementById('capture-area'),
};

let punchlineTimer = null;

// --- FUNCTIONS ---

function randomizeCorners() {
  els.corners.forEach((corner) => {
    // Random Icon
    const icon = cornerIcons[Math.floor(Math.random() * cornerIcons.length)];
    // Random Pastel Color
    const color = cornerColors[Math.floor(Math.random() * cornerColors.length)];

    corner.innerHTML = `<span>${icon}</span>`;
    corner.style.backgroundColor = color;
  });
}

function resetCard() {
  clearTimeout(punchlineTimer);
  els.punchline.classList.remove('visible');
  els.punchline.classList.add('hidden');
  els.setup.textContent = 'Loading...';
  randomizeCorners();
}

// COMPLIMENT LOGIC
els.btnComp.addEventListener('click', () => {
  resetCard();
  els.cardTitle.textContent = 'COMPLIMENT';

  // Simulate API delay
  setTimeout(() => {
    const scenario = els.input.value || 'being awesome';
    els.setup.textContent = `Even when you're just ${scenario}, you somehow make it look effortless.`;
    els.btnDown.classList.remove('hidden');
  }, 600);
});

// JOKE LOGIC
els.btnJoke.addEventListener('click', () => {
  resetCard();
  els.cardTitle.textContent = 'DAD JOKE';

  // Get Random Joke
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  setTimeout(() => {
    els.setup.textContent = joke.s;
    els.punchline.textContent = joke.p;
    els.punchline.classList.remove('hidden');

    // Animate Punchline after 2 seconds
    punchlineTimer = setTimeout(() => {
      els.punchline.classList.add('visible');
      els.btnDown.classList.remove('hidden');
    }, 2000);
  }, 400);
});

// DOWNLOAD LOGIC
els.btnDown.addEventListener('click', () => {
  htmlToImage.toPng(els.captureArea).then(function (dataUrl) {
    const link = document.createElement('a');
    link.download = 'delight-card.png';
    link.href = dataUrl;
    link.click();
  });
});

/* ===========================
   VISUALS: Vanilla JS Particles
   (The "Three.js" Alternative)
   =========================== */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5; // X velocity
    this.vy = (Math.random() - 0.5) * 0.5; // Y velocity
    this.size = Math.random() * 2;
    this.alpha = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around screen
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = `rgba(129, 140, 248, ${this.alpha})`; // Indigo tint
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create 100 particles
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function animate() {
  // Semi-transparent clear for "trail" effect (optional, here disabled for performance)
  ctx.clearRect(0, 0, width, height);

  // Draw subtle gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  particles.forEach((p) => {
    p.update();
    p.draw();

    // Connect particles if close
    particles.forEach((p2) => {
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        ctx.strokeStyle = `rgba(129, 140, 248, ${0.1 - dist / 1000})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(animate);
}

animate();
