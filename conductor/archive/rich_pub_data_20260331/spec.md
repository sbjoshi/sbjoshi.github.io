# Track Specification: Rich Publication Data Support

### 1. Overview
This track involves transitioning the publication management system from a rigid BibTeX-only structure to a flexible YAML-based system. This new system will support "rich" entries, allowing each publication to be associated with multiple external URLs (slides, videos, repositories) and local files (PDFs, supplementary materials).

### 2. Functional Requirements
*   **YAML Data Source**: Replace or augment the existing `publications.bib` with a YAML-based data structure (e.g., `src/_data/publications.yaml`).
*   **Rich Resource Schema**: Support a variety of resource types, including:
    *   **Links**: Slides, Video, GitHub, Talk, Paper, arXiv.
    *   **Files**: PDFs, Markdown files, Video files.
    *   **Custom Resources**: Allow for arbitrary key-value pairs for future-proofing.
*   **Migration Utility**: Develop a Node.js script to parse the existing `src/data/publications.bib` and convert it into the new YAML format, preserving all existing metadata.
*   **Enhanced UI Rendering**: Update the Nunjucks templates and CSS to:
    *   Display meaningful icons for each resource type.
    *   Provide a clear text-based list or action buttons for primary resources (e.g., "Download PDF").
    *   Maintain responsive design and high accessibility for all links.

### 3. Technical Requirements
*   **SSG Integration**: Ensure Eleventy's data cascade correctly handles the new YAML file and exposes the rich resource arrays to the templates.
*   **Icon Library**: Integrate a lightweight icon system (e.g., SVGs or a specialized font) to represent different resource types visually.
*   **Migration Script**: Use `bibtex-parse-js` or similar to handle the initial conversion.

### 4. Acceptance Criteria
*   The migration script accurately converts the current `.bib` file to YAML without data loss.
*   Publications are rendered in the UI with their full set of associated links and files.
*   Links are functional and open in the appropriate context (e.g., external links in new tabs).
*   The site build remains fast and passes all existing validation checks.

### 5. Out of Scope
*   Automated fetching of citation data from external sources (e.g., Google Scholar API).
*   A browser-based CMS for adding new publications.
