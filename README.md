# SBJoshi Personal Homepage v2

Personal homepage for researcher and engineer, featuring a rich publication library and a technical blog. Built with performance, accessibility, and simplicity in mind.

## 🚀 Features

-   **Eleventy (11ty)**: Fast, flexible static site generator.
-   **Rich Publication System**: Managed via YAML (`src/_data/publications.yaml`) with support for multiple links (DOI, Paper, Slides, Video, etc.) and associated files.
-   **Technical Blog**: Write posts using Markdown in `src/posts/`.
-   **Modern UI**: Clean, professional design using BEM-based vanilla CSS.
-   **Automated Deployment**: Seamless delivery to GitHub Pages via GitHub Actions.
-   **Comprehensive Testing**: Unit tests for data integrity and schema validation using Ava.

## 🛠 Local Development

### Prerequisites

-   **Node.js**: Version 20 or higher.
-   **npm**: Standard package manager.

### Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/sbjoshi/homepage_v2.git
    cd homepage_v2
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm start
    ```
    The site will be available at `http://localhost:8080`.

### Building

To generate the static site in the `_site/` directory:
```bash
npm run build
```

## 🧪 Testing

The project uses [Ava](https://github.com/avajs/ava) for unit testing.

Run all tests:
```bash
npm test
```

Tests cover:
-   Metadata completeness.
-   Publication data schema validation.
-   Publication rendering logic.
-   Data integrity between BibTeX and YAML.

## 📝 Data Management

### Global Metadata

Update site-wide information (title, description, base URL) in `src/_data/metadata.json`.

### Publications

Publications are stored in `src/_data/publications.yaml`. Each entry supports:
-   **Metadata**: `id`, `type`, `title`, `author`, `year`, `venue`, `doi`.
-   **Links**: `paper`, `slides`, `video`, `github`, `arxiv`, etc.
-   **Files**: `pdf`, `markdown`, `video`.

### Blog Posts

Add new Markdown files to `src/posts/`. Ensure they have the required frontmatter:
```markdown
---
title: "Your Post Title"
date: 2026-03-31
tags: ["general", "technical"]
---
Your content here...
```

## 🌐 Deployment to GitHub Pages

The site is configured for automatic deployment using GitHub Actions.

### Corresponding GitHub Action

The deployment logic is defined in [`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml). This workflow:
1.  Triggers on every push to the `main` branch.
2.  Sets up Node.js.
3.  Installs dependencies and builds the site.
4.  Uploads the `_site/` artifact and deploys it to GitHub Pages.

### Enabling GitHub Pages

To make the deployment work, ensure your repository is configured correctly:

1.  Go to your repository on GitHub.
2.  Navigate to **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  Once selected, the next push to `main` will automatically trigger the deployment.

---
&copy; 2026 SBJoshi. Built with Eleventy.
