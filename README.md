<h1 align="center">🌿 Cotton Weed Detection Website</h1>

<p align="center">
  A research showcase web application presenting an AI-powered cotton weed detection system.<br/>
  Built to communicate model results, dataset details, and project findings to a wider audience.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/YOLOv8-Model-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge"/>
</p>

---

## 📌 Overview

This is the **research presentation website** for the Cotton Weed Detection project, developed at **Sukkur IBA University** as part of an academic research initiative in precision agriculture. The site presents an AI-based weed detection system trained on the **CottonWeeds dataset (Kaggle)** that classifies cotton field images into three categories — healthy cotton, Black Pigweed (*Trianthema portulacastrum*), and Nutgrass (*Cyperus rotundus*).

> **Model:** YOLOv8 Classification (YOLOv8-cls) — trained to 98.5%+ average precision across all target classes.

> **Note:** The website is a **static research showcase** — it displays real detection result images and model metrics but does not run live inference. For real on-device AI inference, see the [Flutter Mobile App](#-related-projects).

---

## ⚙️ How It Works

| Step | Stage | Description |
|------|-------|-------------|
| 1 | **Dataset** | 7,578 labeled images across 3 classes sourced from the CottonWeeds Kaggle dataset |
| 2 | **Model Training** | YOLOv8-cls trained on RGB images at 224×224 resolution with data augmentation |
| 3 | **Evaluation** | Model evaluated on held-out test set — achieving 98.5%+ average precision |
| 4 | **Presentation** | Results, confidence scores, and architecture details displayed on this website |

---

## 📁 Project Structure

```
Cotton-Weed-Detection-Website/
│
├── public/
│   └── assets/
│       ├── crop/                  # Cotton crop reference images
│       ├── weeds/                 # Weed class reference images
│       ├── results/               # Detection result screenshots
│       ├── team/                  # Team member photos
│       └── model-architecture.png # Model diagram
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx         # Sticky navbar with smooth scroll
│   │   │   ├── Hero.tsx           # Landing hero section
│   │   │   ├── About.tsx          # Project overview & features
│   │   │   ├── Dataset.tsx        # Dataset stats & class cards
│   │   │   ├── Model.tsx          # Architecture description
│   │   │   ├── Results.tsx        # Detection result gallery + lightbox
│   │   │   ├── Team.tsx           # Team member cards
│   │   │   ├── Footer.tsx         # Footer with legal modals
│   │   │   └── LegalModal.tsx     # Privacy & Terms modal
│   │   └── App.tsx
│   ├── styles/
│   │   ├── theme.css              # CSS custom properties & design tokens
│   │   ├── tailwind.css           # Tailwind base import
│   │   ├── fonts.css              # Google Fonts import
│   │   └── index.css              # Global styles entry
│   └── main.tsx
│
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18` and npm

### Steps

**Step 1 — Clone the repository**
```bash
git clone https://github.com/Usmansarwar143/Cotton-weed-detection-website.git
cd Cotton-weed-detection-website
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Start the development server**
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

**Step 4 — Build for production (optional)**
```bash
npm run build
```

---

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| **React 18** | UI component framework |
| **TypeScript** | Type-safe component development |
| **Vite 6** | Build tool and dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Radix UI** | Accessible headless UI primitives |
| **MUI (Material UI)** | Additional UI components |
| **Lucide React** | Icon library |
| **Framer Motion** | Scroll and entry animations |
| **Recharts** | Data visualization charts |
| **Sonner** | Toast notification system |

---

## 🌱 Dataset

| Property | Details |
|----------|---------|
| **Source** | CottonWeeds Dataset — [Kaggle](https://www.kaggle.com/datasets/puneetsaini11/cottonweeds) |
| **Total Images** | 7,578 labeled field images |
| **Target Classes** | Cotton Crop, Black Pigweed (*Trianthema portulacastrum*), Nutgrass (*Cyperus rotundus*) |
| **Model** | YOLOv8 Classification (YOLOv8-cls) |
| **Avg Precision** | 98.5%+ across all classes |
| **Input Resolution** | 224 × 224 RGB |

---

## ⚠️ Tips for Best Results

- View the site on a **desktop browser** for the full experience — all sections are responsive but optimized for wider screens
- The **Results section** supports a lightbox — click any detection image to view it full size
- All navigation links use **smooth scroll** — click any nav item to jump to that section
- The site loads a **background image from Unsplash** — an internet connection is required for the Hero section to display correctly

---

## 👥 Team

| Name | Role | Links |
|------|------|-------|
| **Muhammad Usman Sarwar** | Project Developer | [GitHub](https://github.com/Usmansarwar143) · [LinkedIn](https://www.linkedin.com/in/muhammad-usman-018535253) · [Portfolio](https://Usmansarwar143.github.io/portfolio) |
| **Sibgha Mursaleen** | Project Developer | [GitHub](https://github.com/SibghaMursaleen) · [LinkedIn](https://www.linkedin.com/in/sibgha-mursaleen-4567aa253) · [Portfolio](https://sibghamursaleen.vercel.app/) |


**Institution:** Sukkur IBA University — Department of Computer Systems Engineering

---

## 🔗 Related Projects

This website is part of a larger Cotton Weed Detection system:

| Repository | Description |
|------------|-------------|
| **[Cotton Weed Detection Website](https://github.com/Usmansarwar143/Cotton-weed-detection-website)** *(this repo)* | Research showcase website built with React & Vite |
| **[Cotton Weed Detection App](https://github.com/Usmansarwar143/Cotton-weed-detection-app)** | Flutter mobile app with real TFLite on-device inference |

---

## 📄 License

This project is released under the [MIT License](LICENSE) — free to use, modify, and distribute.

---

<p align="center">
  Built with 🌿 React &nbsp;·&nbsp; Vite &nbsp;·&nbsp; Tailwind CSS &nbsp;·&nbsp; Sukkur IBA University
</p>
