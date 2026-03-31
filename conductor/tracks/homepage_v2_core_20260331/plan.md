# Implementation Plan: Build core Eleventy site with publication list and technical blog foundations

## Phase 1: Environment Setup & Project Initialization
1.  - [ ] **Task: Initialize project and install core dependencies**
    -   [ ] Initialize Node.js project (`npm init -y`).
    -   [ ] Install Eleventy and core development tools.
    -   [ ] Set up basic folder structure (`src/`, `public/`, `src/_data/`, `src/_includes/`).
2.  - [ ] **Task: Configure Eleventy and build pipeline**
    -   [ ] Create and configure `.eleventy.js`.
    -   [ ] Set up basic build and serve commands in `package.json`.
    -   [ ] Configure input and output directories.
3.  - [ ] **Task: Conductor - User Manual Verification 'Phase 1: Environment Setup' (Protocol in workflow.md)**

## Phase 2: Site Structure & Base Layout
1.  - [ ] **Task: Create base HTML/CSS layout**
    -   [ ] Develop the main layout template (`base.njk` or similar).
    -   [ ] Implement a modern, responsive CSS foundation using CSS Modules or Vanilla CSS.
    -   [ ] Set up global navigation and footer sections.
2.  - [ ] **Task: Implement basic page routing and metadata**
    -   [ ] Create the homepage and basic placeholder pages (Publications, Blog).
    -   [ ] Implement a robust SEO/meta system for page titles and descriptions.
3.  - [ ] **Task: Conductor - User Manual Verification 'Phase 2: Site Structure' (Protocol in workflow.md)**

## Phase 3: Publication Management System
1.  - [ ] **Task: Develop publication data parsing system**
    -   [ ] Implement logic to parse BibTeX or YAML publication data files.
    -   [ ] Store parsed data in `src/_data/publications.json` or similar.
2.  - [ ] **Task: Implement publication listing and categorization**
    -   [ ] Create a publication listing page with categorized sections.
    -   [ ] Implement filtering or basic search for publications.
    -   [ ] Ensure publication links (PDFs, abstracts) are correctly rendered.
3.  - [ ] **Task: Conductor - User Manual Verification 'Phase 3: Publication System' (Protocol in workflow.md)**

## Phase 4: Technical Blog Foundation
1.  - [ ] **Task: Implement Markdown-based blog post system**
    -   [ ] Configure Eleventy to handle blog posts from a specific directory.
    -   [ ] Create templates for blog post listings and individual post pages.
2.  - [ ] **Task: Add blog post metadata and styling**
    -   [ ] Implement date formatting, tagging, and SEO for blog posts.
    -   [ ] Apply professional styling to the blog list and post content.
3.  - [ ] **Task: Conductor - User Manual Verification 'Phase 4: Blog System' (Protocol in workflow.md)**

## Phase 5: Deployment & Final Optimization
1.  - [ ] **Task: Configure GitHub Actions for automated deployment**
    -   [ ] Create a `.github/workflows/deploy.yml` to build and deploy to GitHub Pages.
    -   [ ] Verify the automated deployment process works as expected.
2.  - [ ] **Task: Final performance and accessibility audit**
    -   [ ] Run Lighthouse audits and optimize images/assets for speed.
    -   [ ] Conduct accessibility checks and ensure cross-browser compatibility.
3.  - [ ] **Task: Conductor - User Manual Verification 'Phase 5: Final Polish' (Protocol in workflow.md)**
