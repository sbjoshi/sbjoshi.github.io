---
title: "Property-Driven Fence Insertion Using Reorder Bounded Model Checking"
authors:
- admin
- Daniel Kroening
author_notes:
- Author list is in alphabetical order of their last names
date: "2015-06-01T00:00:00Z"
doi: "10.1007/978-3-319-19249-9_19"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Symposium on Formal Methods*"
publication_short: "FM 2015"

abstract: Modern architectures provide weaker memory consistency guarantees than sequential consistency. These weaker guarantees allow programs to exhibit behaviours where the program statements appear to have executed out of program order. Fortunately, modern architectures provide memory barriers (fences) to enforce the program order between a pair of statements if needed. Due to the intricate semantics of weak memory models, the placement of fences is challenging even for experienced programmers. Too few fences lead to bugs whereas overuse of fences results in performance degradation. This motivates automated placement of fences. Tools that restore sequential consistency in the program may insert more fences than necessary for the program to be correct. Therefore, we propose a property-driven technique that introduces "reorder-bounded exploration" to identify the smallest number of program locations for fence placement. We implemented our technique on top of CBMC; however, in principle, our technique is generic enough to be used with any model checker. Our experimental results show that our technique is faster and solves more instances of relevant benchmarks as compared to earlier approaches. 

# Summary. An optional shortened abstract.
summary: This paper introduces Re-Order Bounded Model Checking to efficiently repair programs on weak memory models.

tags:
- Formal Verification
- Program Analysis
- Automated Program Repair
featured: false

#links:
# - name: "Slides"
#   url: "slides/CP18_Slides.pdf"

url_pdf: https://arxiv.org/pdf/1407.7443.pdf
url_code: http://www.cprover.org/glue
url_dataset: ''
url_poster: ''
url_project: ''
url_slides:  ''
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

