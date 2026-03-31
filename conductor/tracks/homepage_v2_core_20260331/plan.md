# Implementation Plan: Build core Eleventy site with publication list and technical blog foundations

## Phase 1: Environment Setup & Project Initialization
1.  - [x] **Task: Initialize project and install core dependencies a330206**
    -   [x] Initialize Node.js project (`npm init -y`).
    -   [x] Install Eleventy and core development tools.
    -   [x] Set up basic folder structure (`src/`, `public/`, `src/_data/`, `src/_includes/`).
2.  - [x] **Task: Configure Eleventy and build pipeline a330206**
    -   [x] Create and configure `.eleventy.js`.
    -   [x] Set up basic build and serve commands in `package.json`.
    -   [x] Configure input and output directories.
3.  - [x] **Task: Conductor - User Manual Verification 'Phase 1: Environment Setup' (Protocol in workflow.md)**

## Phase 2: Site Structure & Base Layout
1.  - [x] **Task: Create base HTML/CSS layout a330206**
    -   [x] Develop the main layout template (`base.njk` or similar).
    -   [x] Implement a modern, responsive CSS foundation using CSS Modules or Vanilla CSS.
    -   [x] Set up global navigation and footer sections.
2.  - [x] **Task: Implement basic page routing and metadata a330206**
    -   [x] Create the homepage and basic placeholder pages (Publications, Blog).
    -   [x] Implement a robust SEO/meta system for page titles and descriptions.
3.  - [x] **Task: Conductor - User Manual Verification 'Phase 2: Site Structure' (Protocol in workflow.md)**

## Phase 3: Publication Management System
1.  - [x] **Task: Develop publication data parsing system a330206**
    -   [x] Implement logic to parse BibTeX or YAML publication data files.
    -   [x] Store parsed data in `src/_data/publications.json` or similar.
2.  - [x] **Task: Implement publication listing and categorization a330206**
    -   [x] Create a publication listing page with categorized sections.
    -   [x] Implement filtering or basic search for publications.
    -   [x] Ensure publication links (PDFs, abstracts) are correctly rendered.
3.  - [x] **Task: Conductor - User Manual Verification 'Phase 3: Publication System' (Protocol in workflow.md)**

## Phase 4: Technical Blog Foundation
1.  - [x] **Task: Implement Markdown-based blog post system a330206**
    -   [x] Configure Eleventy to handle blog posts from a specific directory.
    -   [x] Create templates for blog post listings and individual post pages.
2.  - [x] **Task: Add blog post metadata and styling a330206**
    -   [x] Implement date formatting, tagging, and SEO for blog posts.
    -   [x] Apply professional styling to the blog list and post content.
3.  - [x] **Task: Conductor - User Manual Verification 'Phase 4: Blog System' (Protocol in workflow.md)**

## Phase 5: Deployment & Final Optimization
1.  - [x] **Task: Configure GitHub Actions for automated deployment a330206**
    -   [x] Create a `.github/workflows/deploy.yml` to build and deploy to GitHub Pages.
    -   [x] Verify the automated deployment process works as expected.
2.  - [x] **Task: Final performance and accessibility audit a330206**
    -   [x] Run Lighthouse audits and optimize images/assets for speed.
    -   [x] Conduct accessibility checks and ensure cross-browser compatibility.
3.  - [x] **Task: Conductor - User Manual Verification 'Phase 5: Final Polish' (Protocol in workflow.md)**

## Phase: Review Fixes
- [x] Task: Apply review suggestions a330206
