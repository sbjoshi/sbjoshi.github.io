---
title: "Approximation Strategies for Incomplete MaxSAT"
authors:
- admin
- Prateek Kumar
- Ruben Martins
- Sukrut Rao
author_notes:
- Author names are listed in alphabetical order of their last names
date: "2018-08-01T00:00:00Z"
doi: "10.1007/978-3-319-98334-9_15"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Principles and Practice of Constraint Programming*"
publication_short: "CP 2018"

abstract: Incomplete MaxSAT solving aims to quickly find a solution that attempts to minimize the sum of the weights of the unsatisfied soft clauses without providing any optimality guarantees.  In this paper, we propose two approximation strategies for improving incomplete MaxSAT solving. In one of the strategies, we cluster the weights and approximate them with a representative weight. In another strategy, we break up the problem of minimizing the sum of weights of unsatisfiable clauses into multiple minimization subproblems. Experimental results show that approximation strategies can be used to find better solutions than the best incomplete solvers in the MaxSAT Evaluation 2017. 

# Summary. An optional shortened abstract.
summary: This paper presents a couple of incomplete Weighted MaxSAT solving techniques that allowed _Open-WBO-Inc_ to win accolades in MaxSAT evaluations 2018 and MaxSAT evaluations 2019.

tags:
- Constraint Programming
featured: false

links:
 - name: "Slides"
   url: "slides/CP18_Slides.pdf"

url_pdf: "https://arxiv.org/pdf/1806.07164.pdf"
url_code: "https://github.com/sbjoshi/Open-WBO-Inc"
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
projects: [openwboinc]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

