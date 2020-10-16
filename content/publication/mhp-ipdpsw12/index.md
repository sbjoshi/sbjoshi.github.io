---
title: "A New Method of {MHP} Analysis for Languages with Dynamic Barriers"
authors:
- admin
- R K Shyamasundar
- Sanjeev K Aggarwal
date: "2012-03-01T00:00:00Z"
doi: "10.1109/IPDPSW.2012.70"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Parallel and Distributed Processing Symposium Workshops*"
publication_short: "HIPS IPDPSW 2012"

abstract:  May-happen-in-parallel analysis is a very important analysis which enables several optimizations in parallel programs. Most of the work on MHP analysis has used forward flow analysis to compute \"parallel(n)\" -- set of nodes which may execute in parallel to a given node \"n\" -- including those approaches that addressed the issue for dynamic barrier languages. We propose a new approach to MHP analysis called "Phase Interval Analysis" (PIA) which computes phase intervals, corresponding to dynamic barriers, in which a statement may execute. PIA enables us to infer an order between two statements whenever it can establish that they can not execute in parallel. Because the ordering relation is transitive, we may also be able to infer indirect synchronization happening between two statements, even when they do not share a barrier. To the best of our knowledge, the issue of indirect synchronization has not been addressed prior to this work. We also compute condition functions under which different instances of the same statement may not execute in parallel, when the statements are nested within loops.

# Summary. An optional shortened abstract.
summary: This paper presents a technique to perform May-Happen-in-Parallel analysis for languages with Dynamic Barriers.

tags:
- Program Analysis
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: "papers/hips2012.pdf"
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

