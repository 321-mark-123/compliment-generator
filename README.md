# The Delight Deck 🃏

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-Vanilla_JS-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

**A high-performance, framework-free digital card generator designed to boost morale.**

[**🚀 View Live Demo**](https://your-username.github.io/your-repo-name)

---

## 📖 About The Project

**The Delight Deck** is a frontend portfolio piece demonstrating that complex, interactive, and beautiful web applications can be built without the overhead of heavy JavaScript frameworks like React or Vue.

The application serves as a "digital pick-me-up," generating context-aware compliments and timed "Dad Jokes" presented on a dynamically generated playing card. It features a custom physics-based particle engine and viral sharing mechanics.

### Key Features

* **🃏 Poker Card UI:** A responsive, skeuomorphic card interface with dynamic corner iconography and colors.
* **✨ Custom Physics Engine:** A lightweight, dependency-free HTML5 Canvas particle system (0kb overhead compared to Three.js).
* **⏱️ Timed Content:** Asynchronous handling of "Setup" and "Punchline" for comedic timing.
* **📸 Viral Sharing:** Browser-side generation of downloadable PNG snapshots using `html-to-image`.
* **🧠 Mock AI Engine:** Simulates API latency and asynchronous data fetching patterns.

---

## 🛠️ Tech Stack

This project was intentionally built using **Vanilla JavaScript** to demonstrate mastery of core web fundamentals.

| Component | Technology | Reasoning |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure and accessibility (ARIA). |
| **Styling** | CSS3 | CSS Custom Properties (Variables) for theming, Flexbox for layout. |
| **Logic** | ES6+ JavaScript | Async/Await, DOM Manipulation, Modules. |
| **Visuals** | HTML5 Canvas | High-performance 2D rendering for the background. |
| **Export** | html-to-image | Client-side DOM rasterization for social sharing. |

---

## ⚙️ Installation & Usage

Because this project relies on static files, no build step (Webpack/Vite) is strictly necessary, though a local server is recommended to avoid CORS issues with the image generation library.

1. **Clone the repository**

    ```bash
    git clone [https://github.com/yourusername/delight-deck.git](https://github.com/yourusername/delight-deck.git)
    cd delight-deck
    ```

2. **Run locally**
    * **Option A (VS Code):** Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
    * **Option B (Python):**

        ```bash
        python3 -m http.server 8000
        # Open localhost:8000 in your browser
        ```

---

## 🧠 Engineering Decisions

### 1. Canvas vs. Three.js

**Decision:** I chose to write a custom particle loop using the Canvas API instead of importing Three.js.
**Reasoning:** Three.js adds ~600kb to the bundle size. For a background effect, a custom 50-line class in Vanilla JS achieves the same visual result with <1kb footprint and significantly higher performance on mobile devices.

### 2. Asynchronous "Punchline" Timing

**Decision:** Jokes are split into `setup` and `punchline` with a `setTimeout` delay.
**Reasoning:** Good UX isn't just about speed; it's about pacing. The delay mimics natural conversation and increases the perceived value of the content, while technically demonstrating handling of async UI states.

### 3. DOM Rasterization

**Decision:** Using `html-to-image` to screenshot the DOM element rather than drawing the card on Canvas.
**Reasoning:** Drawing text wrapping and complex CSS borders on Canvas is brittle. Rasterizing the DOM allows us to use CSS for styling the card and simply "photograph" it, ensuring the downloaded image exactly matches what the user sees on screen.

---

## 🔮 Future Improvements

* **Real LLM Integration:** Replace the mock engine with a serverless function connecting to the OpenAI API for truly infinite, context-aware compliments.
* **Sound Effects:** Add the Web Audio API to play a "card flip" sound on generation.
* **PWA Support:** Add a `manifest.json` and Service Worker to allow installation on mobile devices.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with ❤️ by [Your Name]*
