# Implementation Plan: Rich Publication Data Support

## Phase 1: Infrastructure & Data Schema Update
1.  - [x] Task: Update global metadata to support publication site URL 3d5eb51
2.  - [x] Task: Create YAML schema definition for rich publications da12566
3.  - [x] Task: Implement unit tests for YAML data parsing in Eleventy d28a7d5
4.  - [x] Task: Integrate YAML data parsing into Eleventy's data cascade a7247d2
5.  - [ ] Task: Conductor - User Manual Verification 'Phase 1: Infrastructure & Data Schema Update' (Protocol in workflow.md)

## Phase 2: Data Migration
1.  - [ ] Task: Write failing tests for BibTeX to YAML conversion script
2.  - [ ] Task: Implement Node.js conversion utility in `scripts/migrate-pubs.js`
3.  - [ ] Task: Convert existing `src/data/publications.bib` to `src/_data/publications.yaml`
4.  - [ ] Task: Verify data integrity after migration
5.  - [ ] Task: Conductor - User Manual Verification 'Phase 2: Data Migration' (Protocol in workflow.md)

## Phase 3: UI & Template Enhancement
1.  - [ ] Task: Integrate icon system (e.g., SVG sprites) for resource types
2.  - [ ] Task: Write tests for publication macro rendering with multiple links
3.  - [ ] Task: Update `src/_includes/macros/pub-item.njk` to support rich resources
4.  - [ ] Task: Enhance styling in `src/assets/css/main.css` for icons and action buttons
5.  - [ ] Task: Conductor - User Manual Verification 'Phase 3: UI & Template Enhancement' (Protocol in workflow.md)

## Phase 4: Final Validation
1.  - [ ] Task: Run automated link checker on built site
2.  - [ ] Task: Verify mobile responsiveness of rich publication items
3.  - [ ] Task: Perform SEO and accessibility audit for new links/icons
4.  - [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Validation' (Protocol in workflow.md)
