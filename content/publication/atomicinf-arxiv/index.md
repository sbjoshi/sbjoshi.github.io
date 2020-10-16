---
title: "Automatically finding atomic regions for fixing bugs in Concurrent Programs"
authors:
- admin
- Akash Lal
author_notes:
- Author list is in alphabetical order of their last names
date: "2014-03-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*Computational Research Repository*"
publication_short: "arXiv"

abstract: "This paper presents a technique for automatically constructing a fix for buggy concurrent programs: given a concurrent program that does not satisfy user-provided assertions, we infer atomic blocks that fix the program. An atomic block protects a piece of code and ensures that it runs without interruption from other threads. Our technique uses a verification tool as a subroutine to find the smallest atomic regions that remove all bugs in a given program. Keeping the atomic regions small allows for maximum concurrency. We have implemented our approach in a tool called AtomicInf. A user of AtomicInf can choose between strong and weak atomicity semantics for the inferred fix. While the former is simpler to find, the latter provides more information about the bugs that got fixed.  We ran AtomicInf on several benchmarks and came up with the smallest and the most precise atomic regions in all of them. We implemented an earlier technique to our setting and observed that AtomicInf is 1.7 times faster on an average as compared to an earlier approach."

# Summary. An optional shortened abstract.
summary: 

tags:
- Formal Verification
- Automated Program Repair
featured: 

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: https://arxiv.org/pdf/1403.1749.pdf
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

