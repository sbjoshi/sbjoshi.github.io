---
title: "LLOR: Automated Repair of OpenMP Programs"
authors:
- Utpal Bora
- admin
- Gautam Muduganti
- Ramakrishna Upadrasta
author_notes:
- Author names are listed in alphabetical order of their last names
date: "2025-01-23T00:00:00Z"
doi: "10.1007/978-3-031-82703-7_6"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-01-23T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*26th International Conference on Verification, Model Checking and Abstract Interpretation*"
publication_short: "VMCAI 2025"

abstract: In this paper, we present a technique for repairing data race errors in parallel programs written in C/C++ and Fortran using the OpenMP API. Our technique can also remove barriers that are deemed unnecessary for correctness. We implement these ideas in our tool called LLOR, which takes a language-independent approach to provide appropriate placements of synchronization constructs to avoid data races. To the best of our knowledge, LLOR is the only tool that can repair parallel programs that use the OpenMP API. We showcase the capabilities of LLOR by performing extensive experiments on 415 parallel programs. 

# Summary. An optional shortened abstract.
summary: This paper presents a tool and a technique to fix data-race in certain subset of OpenMP programs by suggesting barrier insertions.

tags:
- Formal Verification
- Automated Program Repair
- Program Analysis
featured: false

links:
 - name: "Paper"
   url: "https://doi.org/10.1007/978-3-031-82703-7_6"

url_pdf: https://arxiv.org/pdf/2411.14590
url_code: https://github.com/cs17resch01003/llor
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

