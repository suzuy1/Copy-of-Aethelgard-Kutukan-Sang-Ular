# Copy of Aethelgard: Kutukan Sang Ular

This project is a React application built with Vite and TypeScript, designed to showcase various sections of a fictional world named Aethelgard. It features interactive UI components and visual effects to create an immersive experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Sections:** Includes dedicated sections for Hero, Features, Lore, World, Characters, Bestiary, Media Gallery, and Call to Action.
- **Interactive UI:** Utilizes various React components for a rich user experience.
- **Visual Effects:** Incorporates background effects such as particles, rain, stars, and wind to enhance the aesthetic.
- **Responsive Design:** (Assumed, based on modern web development practices and component-based structure)
- **Scroll-to-Top Button:** For easy navigation.

## Technologies Used

- **React 19.2.0:** A JavaScript library for building user interfaces.
- **TypeScript 5.8.2:** A superset of JavaScript that adds static types.
- **Vite 6.2.0:** A fast build tool and development server.
- **React DOM 19.2.0:** Entry point to the DOM and server renderers for React.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (LTS version recommended)
-   npm (comes with Node.js) or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/suzuy1/Copy-of-Aethelgard-Kutukan-Sang-Ular.git
    cd copy-of-aethelgard_-kutukan-sang-ular
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

This project uses environment variables, specifically `GEMINI_API_KEY`. You need to create a `.env` file in the root of the project and add your Gemini API key:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

## Available Scripts

In the project directory, you can run:

-   **`npm run dev`**
    Runs the app in development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    The page will reload if you make edits. You will also see any lint errors in the console.

-   **`npm run build`**
    Builds the app for production to the `dist` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

-   **`npm run preview`**
    Serves the `dist` folder locally for a production preview.

## Project Structure

The project follows a standard React application structure:

```
.
├── public/
├── src/
│   ├── components/             # Reusable UI components and visual effects
│   │   ├── icons/              # SVG icons or icon components
│   │   ├── BestiarySection.tsx
│   │   ├── CharacterSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ImageWithLoader.tsx
│   │   ├── LoreSection.tsx
│   │   ├── MediaGallery.tsx
│   │   ├── Modal.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── RainEffect.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── StarryBackground.tsx
│   │   ├── Tooltip.tsx
│   │   ├── WindEffect.tsx
│   │   └── WorldSection.tsx
│   ├── App.tsx                 # Main application component
│   └── index.tsx               # Entry point for the React application
├── .gitignore                  # Specifies intentionally untracked files to ignore
├── index.html                  # Main HTML file
├── metadata.json               # Project metadata
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Records the exact versions of dependencies
├── README.md                   # This file
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite build configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

(Specify your project's license here, e.g., MIT, Apache 2.0, etc.)
