# AnimeVibe

AnimeVibe is a responsive multi-page anime streaming platform built with **Minista, JavaScript, JSX and SCSS**.

The project focuses on component-based UI development, reusable architecture, responsive layouts, interactive JavaScript modules, data-driven rendering and maintainable project organization.

## Live Demo

**[AnimeVibe](https://danilyakimenko.github.io/anime-vibe/)**

---


## Commands
npm install

<br>

npm run dev

<br>

npm run build            # прод-сборка в dist

<br>

npm run preview            # локальный просмотр прод-сборки

---

## Overview

AnimeVibe is a frontend project that implements the interface of a modern anime streaming platform.

The application contains multiple pages and reusable UI elements such as sliders, search, notifications popup, filters, tabs, accordions.

The main focus during development was not only on visual implementation, but also on building a structured and reusable frontend architecture.

---

## Pages

The project includes the following pages:

<div align="left">

* **Home** — hero section, featured content, categories, collections and supported devices.

<br>

<img width="1996" height="5953" alt="Home" src="https://github.com/user-attachments/assets/22435570-3d4a-4634-8ef9-b11e749be2ad" />

<br><br>

* **Movies** — movie catalog with banners, cards and filtering controls.

<br>

<img width="1996" height="6375" alt="Movies" src="https://github.com/user-attachments/assets/9ad9fc69-b8cf-45df-93d9-5cef635177d1" />

<br><br>

* **Movie** — detailed movie information, genres, ratings, cast, reviews and episodes.

<br>

<img width="1996" height="7113" alt="Movie" src="https://github.com/user-attachments/assets/cfb744e0-db67-44a6-a0ca-2c2f5c8a6d93" />

<br><br>

* **Subscriptions** — subscription plans and plan comparison.

<br>

<img width="1996" height="3333" alt="Subscriptions" src="https://github.com/user-attachments/assets/e348719b-951a-4481-ade1-9887c36d1178" />

<br><br>

* **Support** — support information and FAQ.

<br>

<img width="1996" height="3139" alt="Support" src="https://github.com/user-attachments/assets/d84cfe2b-7ff4-4b1a-bba6-1e41792d6064" />

</div>

---


---

## Tech Stack

### Core

* **Minista** — static site generation and JSX-based component architecture
* **JavaScript (ES6+)** — application logic and interactive functionality
* **SCSS** — styling and responsive layouts
* **Vite** — development and build tooling

### Libraries

* **Swiper** — sliders
* **IMask** — input masking
* **classnames** — conditional CSS class management
* **PostCSS** — CSS processing
* **@a1rth/css-normalize** — CSS normalization

### Deployment

* **GitHub Pages**

---

## Architecture

The project is organized into several layers with clearly separated responsibilities:

```text
src/
├── assets/
├── components/
├── constants/
├── layouts/
├── modules/
├── pages/
├── sections/
├── styles/
└── utils/
```

### Components

The `components` directory contains reusable UI components.

Examples:

* `Accordion`
* `AccordionGroup`
* `Badge`
* `BurgerButton`
* `Button`
* `CategoryCard`
* `Checkbox`
* `DeviceCard`
* `EpisodeCard`
* `Field`
* `Grid`
* `Icon`
* `Logo`
* `MovieBannerCard`
* `MovieCard`
* `NotificationsMenu`
* `PersonCard`
* `PlanCard`
* `Preloader`
* `Ratings`
* `RatingView`
* `ReviewCard`
* `ScrollToTopButton`
* `SearchMenu`
* `SearchMenuCard`
* `Seasons`
* `Select`
* `Slider`
* `Socials`
* `Specifications`
* `Table`
* `Tabs`
* `Tags`

Each component is isolated in its own directory and usually contains its JSX, SCSS and entry file.

This makes components easier to reuse and maintain across different pages.

---

## Page Sections

Larger page blocks are separated into the `sections` directory.

```text
sections/
├── Banner/
├── Carousel/
├── Categories/
├── Collections/
├── Devices/
├── Hero/
├── MovieBanner/
├── MovieDetails/
├── MoviesBanner/
├── Plans/
├── PlansComparison/
├── Questions/
└── Support/
```

Sections combine reusable components into larger pieces of page functionality.

For example, `MovieDetails` combines components responsible for movie information, ratings, cast, genres, reviews and related content.

This approach keeps individual page files relatively small and makes complex UI sections reusable.

---

## Layout

Global page structure is separated into the `layouts` directory.

The layout layer contains:

* `Header`
* `Footer`
* `Content`
* `Sections`
* global layout configuration

Navigation items, footer links, notifications and search data are stored separately from the layout components.

---

## JavaScript Architecture

Interactive behavior is separated from the visual components and organized in the `modules` directory.

Implemented modules include:

* `SearchMenu`
* `NotificationsMenu`
* `OverlayMenu`
* `Preloader`
* `ScrollToTopButton`
* `SelectCollection`
* `SliderCollection`
* `TabsCollection`
* `VideoPlayerCollection`
* `InputMaskCollection`

A reusable `BaseComponent` is used as a foundation for JavaScript modules.

This allows UI markup and interactive behavior to remain separated:

```text
JSX Components
      ↓
UI structure
      ↓
JavaScript Modules
      ↓
Interactive behavior
```

---

## Interactive Features

The project includes the following working functionality:

### Search

* Search menu
* Search input
* Search results
* Dynamic filtering of available content
* Search result cards

### Navigation

* Responsive burger menu
* Overlay navigation
* Notifications menu
* Scroll-to-top functionality

### Content Navigation

* Responsive sliders and carousels
* Tabs
* Select controls
* Accordions
* Seasons navigation

### Video Player

A custom video player interface with interactive controls is implemented as a separate JavaScript module.

### Forms

Input fields include masking functionality implemented with **IMask**.

### UI States

Interactive components use dedicated state classes to manage states such as active, visible and locked elements.

---

## Data-Driven Rendering

Repeated content is separated into dedicated data modules rather than being duplicated directly inside JSX.

Examples include:

```text
carouselItems.js
categoryItems.js
collectionItems.js
deviceItems.js
movieCards.js
planItems.js
questionItems.js
castItems.js
genresItems.js
ratingItems.js
reviewItems.js
tagsItems.js
```

Components consume these data structures and generate the required markup dynamically.

For example, collections of cards, reviews, navigation items and other repeated elements can be rendered using array methods instead of manually duplicating markup.

This makes the interface easier to extend and update.

---

## Responsive Design

The interface is designed for different viewport sizes, including desktop, tablet and mobile layouts.

Responsive behavior is implemented using:

* SCSS media queries;
* reusable media-query helpers;
* flexible layouts;
* responsive grids;
* adaptive sliders;
* mobile navigation;
* responsive cards and sections.

Shared responsive utilities are located in the global SCSS architecture.

---

## SCSS Architecture

Global styles are separated from component and section styles.

```text
styles/
├── fonts.scss
├── globals.scss
├── index.js
├── utils.scss
├── variables.scss
└── helpers/
    ├── constants.scss
    ├── functions.scss
    ├── media.scss
    ├── mixins.scss
    └── index.scss
```

The project uses:

* variables;
* reusable mixins;
* SCSS functions;
* media-query helpers;
* global utility styles;
* component-specific styles.

Most components and sections have their own SCSS file, reducing the amount of global styling and keeping styles close to the related UI.

---

## Asset Management

Assets are organized by their purpose:

```text
assets/
├── favicons/
├── fonts/
├── images/
│   ├── carousel/
│   ├── cast/
│   ├── categories/
│   ├── devices/
│   ├── general/
│   ├── logo/
│   ├── movie-banner/
│   ├── posters/
│   └── rating/
├── sprite/
└── videos/
```

The project uses:

* SVG icons;
* SVG sprite assets;
* WebP images;
* JPEG images;
* custom Manrope fonts;
* video assets;
* favicon and web manifest assets.

---

## Utility Layer

Common helper functions are isolated in the `utils` directory.

Examples include:

* URL generation;
* extracting attributes from selectors;
* generating IDs from titles;
* handling URL parameters;
* pixel-to-rem conversion.

This prevents repeated utility logic from being implemented inside individual components.

---

## Development Approach

Several frontend development principles were applied throughout the project.

### Component Reusability

Repeated UI elements are extracted into reusable components rather than duplicated across pages.

### Separation of Responsibilities

The project separates:

* pages;
* layouts;
* sections;
* reusable components;
* JavaScript behavior;
* utilities;
* styles;
* content data.

### Data-Driven UI

Repeated content is stored in JavaScript data structures and rendered through reusable components.

### Modular JavaScript

Interactive functionality is divided into independent modules instead of being implemented inside one large JavaScript file.

### Responsive Architecture

Responsive behavior is handled through shared SCSS helpers and component-level styles rather than isolated page-specific solutions.

---

## Project Structure

```text
src/
│
├── assets/          # Images, fonts, SVGs, videos and other assets
│
├── components/      # Reusable UI components
│
├── constants/       # Shared JavaScript constants
│
├── layouts/         # Global page layout and navigation
│
├── modules/         # Interactive JavaScript modules
│
├── pages/           # Application pages
│
├── sections/        # Large reusable page sections
│
├── styles/          # Global SCSS architecture
│
└── utils/           # Reusable utility functions
```

---

## Build & Deployment

The project uses Minista for development and static site generation.

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Deployment

The project is deployed to GitHub Pages using the `gh-pages` package:

```bash
npm run deploy
```

---

## Current Scope

AnimeVibe is currently a frontend-focused project.

Content is represented through local data modules rather than a production backend or external API.

The current implementation focuses on:

* UI development;
* component architecture;
* responsive design;
* client-side interactions;
* reusable JavaScript modules;
* static page generation;
* frontend build and deployment workflow.

---

## Possible Future Improvements

The project architecture can be extended with:

* integration with a real anime API;
* user authentication;
* user profiles;
* favorites and watchlists;
* persistent watch history;
* backend integration;
* real subscription management;
* server-side data;
* API-based search;
* loading and error states for remote data.

---

## What This Project Demonstrates

AnimeVibe demonstrates practical experience with:

* Minista and JSX-based component development;
* modern JavaScript;
* reusable component architecture;
* DOM manipulation and event handling;
* modular JavaScript;
* responsive web development;
* SCSS architecture;
* data-driven rendering;
* interactive UI development;
* third-party library integration;
* static site generation;
* Vite-based tooling;
* GitHub Pages deployment.
