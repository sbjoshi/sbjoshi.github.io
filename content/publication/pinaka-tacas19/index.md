---
title: "Pinaka: Symbolic Execution Meets Incremental Solving - (Competition Contribution)"
authors:
- Eti Chaudhary
- admin
date: "2019-04-01T00:00:00Z"
doi: "10.1007/978-3-030-17502-3_20"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-10T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Tools and Algorithms for the Construction and Analysis of Systems*"
publication_short: "TACAS 2019"

abstract: The runtime performance of modern SAT solvers is deeply connected to the phase transition behavior of CNF formulas. While CNF solving has witnessed significant runtime improvement over the past two decades, the same does not hold for several other classes such as the conjunction of cardinality and XOR constraints, denoted as CARD-XOR formulas. The problem of determining the satisfiability of CARD-XOR formulas is a fundamental problem with a wide variety of applications ranging from discrete integration in the field of artificial intelligence to maximum likelihood decoding in coding theory. The runtime behavior of random CARD-XOR formulas is unexplored in prior work. In this paper, we present the first rigorous empirical study to characterize the runtime behavior of 1-CARD-XOR formulas. We show empirical evidence of a surprising phase-transition that follows a non-linear tradeoff between CARD and XOR constraints.  


# Summary. An optional shortened abstract.
summary: This paper describes, Pinaka, a symbolic execution engine that leverages incremental SAT solving.

tags:
- Formal Verification
featured: false

links:
 - name: "pre-print"
   url: "https://arxiv.org/pdf/1903.02309.pdf"
 - name: "Post on ACM India blog"
   url: "https://acm-fm-blog.blogspot.com/2020/04/pinaka-symbolic-execution-meets.html"

url_pdf: https://link.springer.com/content/pdf/10.1007%2F978-3-030-17502-3_20.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: https://sv-comp.sosy-lab.org/2019/talks/23_Pinaka.pdf
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
projects: [pinaka]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

