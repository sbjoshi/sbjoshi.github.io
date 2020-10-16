---
title: "The virtues of conflict: analysing modern concurrency"
authors:
- Ganesh Narayanaswamy
- admin
- Daniel Kroening
date: "2016-01-01T00:00:00Z"
doi: "10.1145/2851141.2851165"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming*"
publication_short: "PPoPP 2016"

abstract:  Modern shared memory multiprocessors permit reordering of memory operations for performance reasons. These reorderings are often a source of subtle bugs in programs written for such architectures. Traditional approaches to verify weak memory programs often rely on interleaving semantics, which is prone to state space explosion, and thus severely limits the scalability of the analysis. In recent times, there has been a renewed interest in modelling dynamic executions of weak memory programs using partial orders. However, such an approach typically requires ad-hoc mechanisms to correctly capture the data and control-flow choices/conflicts present in real-world programs. In this work, we propose a novel, conflict-aware, composable, truly concurrent semantics for programs written using C/C++ for modern weak memory architectures. We exploit our symbolic semantics based on general event structures to build an efficient decision procedure that detects assertion violations in bounded multi-threaded programs. Using a large, representative set of benchmarks, we show that our conflict-aware semantics outperforms the state-of-the-art partial-order based approaches. 

# Summary. An optional shortened abstract.
summary: This paper presents a different encoding that makes Bounded Model Checking faster for concurrent programs.

tags:
- Formal Verification
- Program Analysis
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: https://arxiv.org/pdf/1602.08321.pdf
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

