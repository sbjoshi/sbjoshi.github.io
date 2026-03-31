# Implementation Plan: Rich Publication Data Support

## Phase 1: Infrastructure & Data Schema Update [checkpoint: 95bbfab]
1.  - [x] Task: Update global metadata to support publication site URL 3d5eb51
2.  - [x] Task: Create YAML schema definition for rich publications da12566
3.  - [x] Task: Implement unit tests for YAML data parsing in Eleventy d28a7d5
4.  - [x] Task: Integrate YAML data parsing into Eleventy's data cascade a7247d2
5.  - [x] Task: Conductor - User Manual Verification 'Phase 1: Infrastructure & Data Schema Update' (Protocol in workflow.md) 95bbfab

## Phase 2: Data Migration [checkpoint: 59c5e95]
1.  - [x] Task: Write failing tests for BibTeX to YAML conversion script 3de3d71
2.  - [x] Task: Implement Node.js conversion utility in `scripts/migrate-pubs.js` 3de3d71
3.  - [x] Task: Convert existing `src/data/publications.bib` to `src/_data/publications.yaml` 9fb4498
4.  - [x] Task: Verify data integrity after migration b2995d7
5.  - [x] Task: Conductor - User Manual Verification 'Phase 2: Data Migration' (Protocol in workflow.md) 59c5e95

## Phase 3: UI & Template Enhancement [checkpoint: 1066434]
1.  - [x] Task: Integrate icon system (e.g., SVG sprites) for resource types c04da52
2.  - [x] Task: Write tests for publication macro rendering with multiple links a9aff5d
3.  - [x] Task: Update `src/_includes/macros/pub-item.njk` to support rich resources f3d011a
4.  - [x] Task: Enhance styling in `src/assets/css/main.css` for icons and action buttons 3c1e483
5.  - [x] Task: Conductor - User Manual Verification 'Phase 3: UI & Template Enhancement' (Protocol in workflow.md) 1066434

## Phase 4: Final Validation
1.  - [x] Task: Run automated link checker on built site dac20c6
2.  - [ ] Task: Verify mobile responsiveness of rich publication items
3.  - [ ] Task: Perform SEO and accessibility audit for new links/icons
4.  - [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Validation' (Protocol in workflow.md)
