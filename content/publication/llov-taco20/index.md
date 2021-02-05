---
title: "LLOV: A Fast Static Data-Race Checker for OpenMP Programs"
authors:
- Utpal Bora
- Santanu Das
- Pankaj Kukreja
- admin
- Ramakrishna Upadrasta
- Sanjay V Rajopadhye
date: "2020-09-01T00:00:00Z"
doi: "10.1145/3418597"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*ACM Transaction on Architecture and Code Optimization*"
publication_short: "ACM TACO"

abstract: "In the era of Exascale computing, writing efficient parallel programs is indispensable and at the same time, writing sound parallel programs is very difficult. Specifying parallelism with frameworks such as OpenMP is relatively easy, but data races in these programs are an important source of bugs. In this paper, we propose LLOV, a fast, lightweight, language agnostic, and static data race checker for OpenMP programs based on the LLVM compiler framework. We compare LLOV with other state-of-the-art data race checkers on a variety of well-established benchmarks. We show that the precision, accuracy, and the F1 score of LLOV is comparable to other checkers while being orders of magnitude faster. To the best of our knowledge, LLOV is the only tool among the state-of-the-art data race checkers that can verify a C/C++ or FORTRAN program to be data race free."

# Summary. An optional shortened abstract.
summary: This paper presents a tool, LLOV, which leverages polyhedral compilation for fast data-race checking for OpenMP Programs.

tags:
- Program Analysis
featured: false

links:
 - name: "pre-print"
   url: "https://arxiv.org/pdf/1912.12189.pdf"

url_pdf: https://dl.acm.org/doi/pdf/10.1145/3418597
url_code: https://github.com/utpalbora/LLOV
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: https://www.youtube.com/watch?v=kyD4ysn8ljE&t=1h3m00s

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
projects: [llov]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

