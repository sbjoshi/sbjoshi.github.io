# Design Document: Core Eleventy Site with Blog & Publications

**Date**: 2026-03-31
**Topic**: homepage-v2-core-20260331
**Design Depth**: Standard
**Task Complexity**: Medium

## 1. Problem Statement
Build a high-performance personal homepage using Eleventy that serves as a central hub for publications and a technical blog. The current workflow for managing publications is manual and disconnected; we need a unified, data-driven system that parses BibTeX/YAML sources into a filterable static list.

## 2. Requirements
### Functional
1. **BibTeX Parsing**: Transform a `.bib` file into a list of objects accessible in templates.
2. **Blog Engine**: Markdown posts with auto-generated list pages (pagination ready).
3. **Navigation**: Simple, accessible header/footer across all pages.

### Non-Functional
1. **Performance**: Static rendering for < 200ms TTFB on GitHub Pages.
2. **Accessibility**: WCAG 2.1 AA compliance (semantic HTML, ARIA roles).
3. **SEO**: Automated meta-tags, OpenGraph support, and sitemap generation.

## 3. Approach
### Selected Approach: Pragmatic Static Eleventy
- **Summary**: A lean, standard Eleventy structure with a custom JavaScript data file for parsing BibTeX/YAML, Nunjucks layouts, and a single BEM-based CSS file.
- **Rationale**: This avoids plugin bloat while ensuring a robust connection between BibTeX and Nunjucks templates.

### Decision Matrix
| Criterion | Weight | Approach 1: Pragmatic Static | Approach 2: Plugin-Centric |
|-----------|--------|------------------------------|----------------------------|
| Performance | 30% | 5: Pure static, no overhead. | 4: Minor plugin overhead. |
| Maintainability| 40% | 5: Direct control of data mapping. | 3: Dependency management. |
| Speed to Live | 30% | 4: Requires initial script setup. | 5: Faster initial features. |
| **Weighted Total** | | **4.7** | **3.8** |

## 4. Architecture
### Data Flow
- `src/data/publications.bib` -> **JS Parser** (`.11tydata.js`) -> `collections.publications` -> **Nunjucks Macros** -> `dist/publications/index.html`.
- `src/posts/*.md` -> **Eleventy Collections** -> `src/_includes/layouts/post.njk` -> `dist/posts/*.html`.

### Key Interfaces
- **Pub Macro**: Nunjucks macro rendering citations with BIB/PDF links.
- **Global Styles**: Single CSS entry point for blog and publications using BEM.

## 5. Agent Team
1. **architect**: Finalize directory structure and data strategy.
2. **coder**: Implement Eleventy setup, BibTeX parsing, and blog.
3. **design_system_engineer**: Build accessible components and BEM styles.
4. **tester**: Validate performance, accessibility, and content.

## 6. Risk Assessment
1. **BibTeX Parsing Complexity**: Use `bibtex-parse-js` and robust fallback fields.
2. **GitHub Pages Build Time**: Utilize incremental builds and optimized data scripts.

## 7. Success Criteria
- GitHub Actions build < 3 minutes.
- Lighthouse scores > 90 across Performance, Accessibility, SEO.
- 100% of `.bib` content rendered with working links.
