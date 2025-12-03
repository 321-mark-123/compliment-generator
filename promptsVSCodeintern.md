# prompts

## agent Auto mode

## erster prompt

act as a project strategist.what are the top 3 goals for a portfolio project that is a compliment generator

Top 3 Ziele

### Nutzerengagement & Delight:  

Fokus auf emotional positive, persönliche Erfahrungen, die Nutzerinnen zum Lächeln bringen.

#### Messbare Kriterien:  

durchschnittliche Sitzungsdauer ≥ 30s; Share-/Save-Rate ≥ 15–25% in Testgruppe; positive Nutzer-Feedback-Quote (z. B. 4/5 oder höher).
Beispiel-Features: personalisierte Ansprache (Name, Kontext), Ton‑Wahl (warm/witzig/formell), Vorschau + Share-Buttons.

### Technische Qualität & Deploy-Fähigkeit:

Sauberer Code, Tests und ein reproduzierbares Deployment, das im Portfolio demonstriert werden kann.

#### Messbare Kriterien:  

CI-Pipeline mit grünem Build; Unit-/Integrationstests (Ziel Coverage ≥ 70%); leichtes Deployment (Docker + Heroku/Netlify/Cloud Run).
Beispiel-Features: REST/GraphQL-API für Komplimente, einfache Rate‑Limit/Cache-Strategie, Logging/Monitoring.

### Produkt-Story & Nachweisbares Designdenken:  

Zeige Research, UX‑Entscheidungen und Iteration — nicht nur Endprodukt.

#### Messbare Kriterien:  

fertige Projekt-Case-Study (300–500 Wörter) + 2–3 Screenshots/Flow-Diagramme; A/B-Tests oder Nutzertests mit dokumentierten Insights.
Beispiel-Features: Onboarding-Flow, Experiment (z. B. formell vs. kumpelhaft) und kurze Analytics-Ansicht mit KPIs.

### Schnelle Feature-Map (zur Unterstützung der Ziele)  

Personalisierung: Name, Beziehungskontext, Anlass.
Ton‑/Stil-Controls: freundlich, professionell, witzig.
Sharing & Export: Link, Bild-Card, Kopieren.
Moderation/Safety: Blocklist, profanity filter, opt-out.
Metrics: einfache Dashboard-Seite mit Engagement-Metriken.

### Nächste Schritte (optional)  

Ich kann eine prägnante Portfolio‑Blurb/README mit Tech-Stack-Vorschlag erstellen (z. B. React + Node/Express + Docker). Möchtest du das?
Oder soll ich anhand dieser Ziele eine Minimal‑Viable‑Implementation (ein lauffähiges Demo-Repo) scaffolden?

## zweiter prompt

list the core functionality for this project  

## Kernfunktionen für den Compliment Generator

Die wichtigsten Funktionen, um die strategischen Ziele zu erreichen:

### 1. Personalisierung & Kontext

- Eingabefeld für Name, Anlass oder Stimmung
- Auswahl des Tons/Stils (z. B. herzlich, witzig, professionell)
- Kontextbasierte Generierung (z. B. "Ich habe ein Projekt abgeschlossen")

### 2. Komplimente-Engine

- Integration eines LLM (z. B. OpenAI/Gemini) für dynamische, kontextuelle Komplimente
- Fallback auf hochwertige, lokal gespeicherte Komplimente bei API-Ausfall
- REST/GraphQL-API für Komplimente (bei Backend)

### 3. UI/UX & Interaktion

- Streaming-Text-Effekt (Kompliment „tippt sich aus“)
- Dynamisches Theming je nach Ton/Stil
- Text-to-Speech (Vorlesen des Kompliments)
- History/Recall: Anzeige der letzten 5 Komplimente (localStorage)
- Vorschau und Share-Buttons

### 4. Sharing & Distribution

- Export als Bild (PNG-Card mit Kompliment und Branding)
- Permalink-System: Eindeutige URLs für jedes Kompliment
- Teilen über Social Media, Link oder Kopieren

### 5. Sicherheit & Qualität

- Profanity Filter für Eingaben und Ausgaben
- Rate Limiting (z. B. 5 Requests/Minute pro User)
- Logging und Monitoring (optional)
- Opt-out/Blocklist für unerwünschte Inhalte

### 6. Analytics & Produkt-Story

- Dashboard mit einfachen Metriken (z. B. Anzahl generierter Komplimente, Shares)
- Onboarding-Flow und A/B-Tests für UX-Optimierung

Diese Funktionen sorgen für ein überzeugendes, modernes Portfolio-Projekt mit echtem Produktwert.  

## Vorschlag: Modernes Farbschema & Font-Pairing

### Farbpalette (modern, freundlich, vielseitig)

- **Primär:** #4F8CFF (kräftiges, freundliches Blau)
- **Sekundär:** #FFB86B (warmes Apricot/Orange)
- **Akzent:** #6EE7B7 (frisches Mintgrün)
- **Hintergrund Hell:** #F7FAFC (fast weiß, sehr hell)
- **Hintergrund Dunkel:** #23272F (dunkles Anthrazit für Dark Mode)
- **Text:** #23272F (dunkel) / #F7FAFC (hell)

### Font Pairing

- **Headline:** `Poppins` (Google Fonts, modern, freundlich, sehr gut lesbar)
- **Body:** `Inter` (Google Fonts, neutral, klar, hervorragend für Fließtext)

**Beispiel CSS:**

```css
body {
  font-family: 'Inter', Arial, sans-serif;
  background: #F7FAFC;
  color: #23272F;
}
h1, h2, h3 {
  font-family: 'Poppins', Arial, sans-serif;
}
.primary {
  color: #4F8CFF;
}
.accent {
  color: #6EE7B7;
}
.button {
  background: #FFB86B;
  color: #23272F;
}
```

## prompt 4  

generate a prompt to create the code for this project, with all of this in mind, i also want to use static html, css, js without a front-end-framework like react.  
i want the prompt to be formattd with the role, task, context, and format  

Role: Senior Frontend Developer

Task: Create a modern, context-aware compliment generator using only static HTML, CSS, and JavaScript (kein Framework).

Context:

- Das Projekt soll eine hochwertige Portfolio-Demo sein und folgende Features enthalten:
  - Kontext-Eingabefeld (z. B. Stimmung, Anlass)
  - Vibe/Ton-Auswahl (herzlich, witzig, professionell, motivierend)
  - Integration einer LLM-API (z. B. OpenAI/Gemini) für dynamische Komplimente, mit Fallback auf statische Komplimente
  - Streaming-Text-Effekt (Typewriter)
  - Dynamisches Farbschema je nach Vibe
  - Text-to-Speech-Button
  - History (letzte 5 Komplimente, localStorage)
  - Export als PNG (html-to-image)
  - Permalink-System (optional, statisch simulierbar)
  - Profanity Filter und Rate Limiting (im Frontend demonstriert)
  - Modernes, freundliches Design: Farbpalette (#4F8CFF, #FFB86B, #6EE7B7, #F7FAFC, #23272F), Fonts: Poppins (Headline), Inter (Body)

Format:

- Erstelle eine einzelne, gut strukturierte HTML-Datei mit eingebettetem CSS und JavaScript.
- Kommentiere den Code, sodass die Features und Designentscheidungen nachvollziehbar sind.
- Keine externen Frameworks oder Build-Tools.
- Nutze Google Fonts für die Typografie.
- Zeige, wie die API-Integration und Fallback funktionieren (API-Key als Variable, Demo-Modus möglich).
