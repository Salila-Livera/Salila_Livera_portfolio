# Livera Portfolio - Modern Personal Portfolio

A high-end, modern personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Responsive Design**: Mobile-first approach ensuring a perfect look on all devices.
- **Glassmorphism UI**: Beautiful translucent cards and elements with backdrop blurs.
- **Smooth Animations**: Powered by Framer Motion for scroll reveals, hover effects, and transitions.
- **Interactive Sections**:
  - **Hero**: Animated background and text gradients.
  - **About**: Profile story and key highlights.
  - **Services**: Interactive service cards.
  - **Skills**: Animated progress bars and tech marquee.
  - **Experience**: Vertical timeline of professional journey.
  - **Projects**: Filterable grid with hover zoom and link buttons.
  - **Testimonials**: Elegant carousel for client feedback.
  - **Contact**: Integrated form (ready for EmailJS).
- **SEO Optimized**: Pre-configured meta tags and clean heading hierarchy.
- **Custom Loading Screen**: Premium entrance animation.

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 2. Installation
Clone the repository (or download the files) and navigate to the project directory:

```bash
# Navigate to project folder
cd "Livera Porfolio"

# Install dependencies
npm install
```

### 3. Running the Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### 4. Setting up EmailJS (Optional)
To make the contact form functional:
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create a service and a template.
3. Update the credentials in `src/components/Contact.jsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scroll**: React Scroll
- **Email Service**: @emailjs/browser

## 🎨 Customization

- **Colors**: Update the `@theme` variables in `src/index.css`.
- **Content**: Most content is stored in arrays at the top of each component file for easy editing.
- **Images**: Replace images in the `public/` directory or update URLs in the components.

---
Built with ❤️ by PshycoLab IT Solutions
