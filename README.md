# 📖 Digital Memory Book & Anniversary Scrapbook

An interactive, editorial-style 3D digital memory book and anniversary website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

![Anniversary Scrapbook Screenshot](docs/screenshot.png)

---

## 🎨 Easy Customization

All personal content is completely separated from the UI logic and isolated in a single configuration file:

👉 **`src/data/anniversaryData.ts`**
- **Couple Names & Subtitle:** Set `coupleNames` and custom greeting text.
- **Milestone Counter Date:** Configure `startDate` (`YYYY-MM-DDTHH:mm:ss`) to run a real-time live elapsed counter (years, months, days, hours, seconds).
- **Personal Photos & Videos:** Place your media into `public/images/` and reference them in the data array.
- **Relationship Milestones:** Add dates, polaroid captions, and locations for each chapter of your story.
- **Bucket List & Closing Letter:** Customize shared dreams and write an animated closing letter with an interactive envelope.

---

## ✨ Features

- **Editorial Scrapbook Layouts:** Single photo, duo spreads, and trio polaroid/scrapbook arrangements.
- **Live Counter & Timeline:** Tracks time together down to the second and showcases chronological relationship milestones.
- **Modal Lightbox:** Zoom into memories with smooth transitions.
- **Ambient Music Player:** Background audio playback with customizable play/pause controls.
- **Responsive 3D Experience:** Optimized for desktop, tablet, and mobile touch devices.

---

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License

Copyright © 2026 Anıl Aygün. All rights reserved.  
See [LICENSE](LICENSE) for terms of use.
