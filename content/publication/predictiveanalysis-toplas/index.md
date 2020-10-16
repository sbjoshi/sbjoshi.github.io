---
title: "Precise Predictive Analysis for Discovering Communication Deadlocks in MPI Programs"
authors:
- Vojtech Forejt
- admin
- Daniel Kroening
- Ganesh Narayanaswamy
- Subodh Sharma
author_notes:
- Author name are listed in alphabetical order of their last names
date: "2017-09-01T00:00:00Z"
doi: "10.1016/j.dam.2020.08.018"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*ACM Transactions on Programming Languages and Systems*(39)"
publication_short: "TOPLAS"

abstract: The Message Passing Interface (MPI) is the standard API for parallelization in high-performance and scientific computing. Communication deadlocks are a frequent problem in MPI programs, and this article addresses the problem of discovering such deadlocks. We begin by showing that if an MPI program is single path, the problem of discovering communication deadlocks is NP-complete. We then present a novel propositional encoding scheme that captures the existence of communication deadlocks. The encoding is based on modeling executions with partial orders and implemented in a tool called MOPPER. The tool executes an MPI program, collects the trace, builds a formula from the trace using the propositional encoding scheme, and checks its satisfiability. Finally, we present experimental results that quantify the benefit of the approach in comparison to other analyzers and demonstrate that it offers a scalable solution for single-path programs.

# Summary. An optional shortened abstract.
summary: This paper shows NP-completeness of deadlock detection in certain class of MPI programs. It also presents encoding to analyze a class of MPI programs with respect to deadlocks.

tags:
- Formal Verification
- Program Analysis
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: "/papers/toplas2017-mpi.pdf"
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

