# Project Mandates: sbjoshi.github.io

This repository is a personal portfolio site built with [Eleventy (11ty)](https://www.11ty.dev/). Adherence to these mandates ensures architectural consistency and minimizes context overhead.

## 1. Context & Token Efficiency

To minimize token usage and focus on actionable source code:

- **Exclude Generated/Binary/Large Files:** Always exclude `_site/`, `node_modules/`, `package-lock.json`, and all `.pdf` files from `grep_search`, `glob`, and `read_file` operations.
- **Scoped Searching:** Prefer searching within `src/` and `tests/` directories. Avoid root-level searches unless searching for configuration files (`.eleventy.js`, `package.json`).
- **Data Minimization:** Avoid reading large data files in `src/_data/` (e.g., `publications.yaml`, `projects.yaml`) in their entirety. Use targeted `read_file` with line ranges or `grep_search` to find specific entries.

## 2. Engineering Standards & Tooling

- **Validation Command:** After any structural or logic change, you **MUST** run `npm run build` (Eleventy build) to ensure the site compiles correctly.
- **Testing:** For changes to logic (filters, shortcodes, data processing), use `npm test` (AVA) to verify correctness.
- **Dependency Management:** Do not add new dependencies to `package.json` without explicit user permission.

## 3. Content & Data Conventions

### Blog Posts (`src/posts/`)
- **Format:** All posts must be in Markdown (`.md`) with YAML frontmatter.
- **Strict Frontmatter Schema:**
  - `title`: "Double Quoted String"
  - `date`: YYYY-MM-DD
  - `tags`: ["Array", "of", "Strings"]
  - `summary`: "Double Quoted String"
- **Quoting:** Use double quotes for all string values in the frontmatter.

### Data Files (`src/_data/`)
- **Format:** Prefer YAML for structured lists (e.g., `experience.yaml`) and JSON for metadata (`metadata.json`).
- **Naming:** Enforce **strict snake_case** for all keys/attributes (e.g., `company_url`, `start_date`).

## 4. Security & PII

- **Public Repository:** This is a public repository. Personally Identifiable Information (PII) such as professional emails, public social links, and academic history in `src/_data/` is expected and intentional. 
- **Secret Protection:** Never commit or process private secrets, API keys, or unpublished contact information.

## 5. Architectural Guidance

- **Eleventy Layouts:** Layouts are located in `src/_includes/layouts/`.
- **Data Cascades:** Eleventy's data cascade flows from `src/_data/`, directory-level data files (`*.json`), and frontmatter.
- **Filters/Plugins:** Custom logic is defined in `.eleventy.js`.
