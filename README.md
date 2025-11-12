# 🎵 Musical Academy App

The **Musical Academy App** is a next-generation, immersive **music learning platform** built using the power of **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.
It blends **modern web design**, **smooth performance**, and **a passion for music education** into one stunning experience. This web application represents a **digital music school** designed for aspiring musicians, learners, and creators who want to explore, learn, and grow through rhythm and melody.
From dynamic course listings to interactive animations, every detail in this app has been crafted to make learning music feel as **inspiring and vibrant** as the art itself.

---

## 🚀 Features

- 🎸 **Interactive Hero Section** with smooth transitions
- 🎼 **Dynamic Courses** with 3D hover effects
- 🎓 **Instructor Showcase** with profile cards
- 📅 **Upcoming Webinars** section
- 💬 **Voices of Harmony**
- 💌 **Contact Page** with clean layout & violet line effects
- ⚡ Fully responsive and animation-rich UI

---

## 🧱 Tech Stack

| Category   | Technology                                                               |
| ---------- | ------------------------------------------------------------------------ |
| Frontend   | [Next.js 14 (App Router)](https://nextjs.org/)                           |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)                                 |
| Animations | [Framer Motion / Motion One](https://www.framer.com/motion/)             |
| Components | [shadcn/ui](https://ui.shadcn.com/), [Lucide Icons](https://lucide.dev/) |
| Language   | TypeScript                                                               |
| Data       | Local JSON (music_courses.json)                                          |

---

## 🖼️ Pages & Components

### 🏠 Home Page (`/`)

Components included:

- `HeroSection` → Engaging tagline + CTA + animated background
- `FeatureCourses` → Top featured music courses
- `MusicalMastery` → “Why Choose Us” section
- `VoicesOfHarmony` → Testimonials carousel
- `Webinars` → Upcoming events and sessions
- `Instructors` → Instructor showcase section
- `Footer` → Academy links and contact info

---

### 🎹 Courses Page (`/courses`)

- Displays all available music courses from `music_courses.json`
- 3D animated course cards
- Includes name, image, and short description
- Responsive grid layout built with Tailwind CSS

---

### 📞 Contact Page (`/contact`)

- Clean and modern contact layout
- Violet accent underline animations on hover
- Includes contact links, support info, and social handles

---

## ✨ What Makes It Special

- 🎼 **Immersive User Experience** – Fluid transitions, motion-based UI, and elegant design bring a sense of rhythm to the interface.  
- 🎹 **Feature-Rich Design** – Includes a hero section, featured courses, testimonials, webinars, instructors, and a responsive contact form.  
- 💫 **Modern Tech Stack** – Built with **Next.js 14 (App Router)** for performance, **Tailwind CSS** for styling, and **Framer Motion** for animations.  
- 🧠 **Smart Component Structure** – Every UI element, from cards to motion effects, is modular and reusable.  
- 🌈 **Visually Captivating** – Uses gradient backgrounds, dynamic shadows, and minimal color palettes for a premium aesthetic.  
- 🎓 **Educational Focus** – Designed to simulate the feel of a professional online music academy, ready for expansion into real-world functionality.

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/musical-academy-app.git

# Navigate to the project folder
cd musical-academy-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📁 Project Structure

```
musical-academy-app/
│
├── public/
│ └── images/
│
├── src/
│ ├── app/
│ │ ├── contact/ # Contact page
│ │ ├── courses/ # Courses page
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx # Home page
│ │
│ ├── components/
│ │ ├── FeatureCourses.tsx
│ │ ├── Footer.tsx
│ │ ├── HeroSection.tsx
│ │ ├── Instructors.tsx
│ │ ├── MusicalMastery.tsx
│ │ ├── Navbar.tsx
│ │ ├── VoicesOfHarmony.tsx
│ │ ├── Webinars.tsx
│ │ └── ui/
│ │ ├── background-boxes.tsx
│ │ ├── infinite-moving-cards.tsx
│ │ ├── 3d-card.tsx
│ │ ├── background-beams.tsx
│ │ └── ...
│ │
│ ├── data/
│ │ └── music_courses.json
│ │
│ └── lib/
│   └── utils.ts
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
