# Track Specification: Build core Eleventy site with publication list and technical blog foundations

## 1. Overview
This track focuses on setting up the fundamental structure of the new SBJoshi personal homepage using Eleventy (11ty). It establishes the core systems for managing publications and a technical blog, ensuring they are easy to maintain and compatible with GitHub Pages.

## 2. Goals
*   Initialize a high-performance Eleventy project.
*   Implement a robust, Markdown-based publication management system (with BibTeX support).
*   Create a simple, elegant technical blog foundation.
*   Ensure the site is fully compatible with GitHub Pages and automated via GitHub Actions.
*   Achieve high performance and SEO optimization from the start.

## 3. Features
*   **Eleventy Setup:** Base configuration, folder structure, and build pipeline.
*   **Publication System:**
    *   Data-driven publication list (e.g., from BibTeX or YAML).
    *   Categorization (e.g., Journal, Conference, Preprint).
    *   Filtering/Searching capabilities.
*   **Technical Blog:**
    *   Markdown-based post creation.
    *   List view and individual post pages.
*   **Deployment:** GitHub Actions workflow for automated build and deploy.

## 4. Technical Details
*   **SSG:** Eleventy (11ty).
*   **Language:** JavaScript (Node.js).
*   **Styling:** Vanilla CSS / CSS Modules.
*   **Content:** Markdown / BibTeX for publications.
*   **Hosting:** GitHub Pages.

## 5. Acceptance Criteria
*   The site builds successfully and is served via GitHub Pages.
*   Publications are correctly parsed and displayed with working links.
*   Blog posts can be added via Markdown and are rendered correctly.
*   Lighthouse performance score is > 90.
*   Site is fully responsive and accessible.
