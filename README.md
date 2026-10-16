
<div align="center">

# 📰 Bangla News 24

### A Bengali News Reading Experience Built with Next.js

A news-focused web application that organizes Bengali articles into readable sections and provides dedicated pages for individual stories.

[View Source Code](https://github.com/ForhadRimon80/bangla-news-24)

</div>

---

## Overview

Bangla News 24 is a Bengali-language news interface developed with Next.js, React, TypeScript, and Tailwind CSS. It fetches article and section data from an external news API and presents stories through a structured, reader-friendly layout.

The project focuses on API integration, dynamic routes, reusable components, and localized content presentation.

**Note:** This is an independently developed news interface that consumes an external news API. It is not presented as an official BBC product or affiliated news publisher.

## Key Features

- **API-powered homepage:** Fetch and display news sections and article cards from an external API.
- **Featured stories:** Give prominent placement to leading articles.
- **Section-based navigation:** Organize news into browsable topic sections.
- **Curated content:** Filter selected promotional sections from the homepage feed.
- **Dynamic article pages:** Load individual articles using a Next.js dynamic route.
- **Rich article content:** Render article text, subheadings, images, captions, author information, and publication dates where available.
- **Bengali date formatting:** Display dates using the `bn-BD` locale and the Dhaka time zone in article views.
- **Reusable UI:** Separate components for the header, navigation, article cards, featured news, and most-read content.
- **Responsive styling:** Layouts and components styled with Tailwind CSS and DaisyUI.

## Tech Stack

| Area | Technologies |
|------|--------------|
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, DaisyUI |
| Data | External REST API |
| Typography | Noto Serif Bengali |

## API Integration

The application consumes an external REST API for news sections and individual articles:

```text
GET https://news-api-v2.vercel.app/api/news/sections
GET https://news-api-v2.vercel.app/api/article/{newsId}
```

API availability and content are managed by the external provider. The application does not claim ownership of third-party news content.

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16
- npm
- Internet access for the external news API

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ForhadRimon80/bangla-news-24.git
cd bangla-news-24
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
├── app/
│   ├── page.tsx             # News homepage
│   ├── news/
│   │   └── [newsId]/
│   │       └── page.tsx     # Dynamic article details
│   └── layout.tsx           # Shared layout
│
└── components/             # Reusable UI components
```

## What This Project Demonstrates

- Server-side data fetching with Next.js App Router
- Working with REST API responses and TypeScript interfaces
- Dynamic routing and missing-article handling with `notFound()`
- Rendering structured article content and images
- Filtering and organizing sections for an editorial-style homepage
- Bengali localization and readable content presentation

## Future Improvements

- News search and topic filters
- Bookmarking and reading history
- Automated tests and accessibility improvements
- More robust API loading and error states

## Author

**Farhad Rimon**

- **GitHub:** [ForhadRimon80](https://github.com/ForhadRimon80)
- **LinkedIn:** [Farhad Rimon](https://www.linkedin.com/in/farhad-rimon-7487b5201/)

Built to practice modern frontend development, API integration, and Bengali-language content presentation.
