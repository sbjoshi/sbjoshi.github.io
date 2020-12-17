---
title: "Open-WBO-Inc: Approximation Strategies for Incomplete Weighted MaxSAT"
authors:
- admin
- Prateek Kumar
- Sukrut Rao
- Ruben Martins
author_notes:
- Author name are listed in alphabetical order of their last names grouped within institutions
date: "2019-09-01T00:00:00Z"
doi: "10.3233/SAT190118"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-10T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Journal of Satisfiability, Boolean Modelling and Computation*(11)"
publication_short: "JSAT"

abstract: Incomplete MaxSAT solving aims to quickly find a solution that attempts to minimize the sum of the weights of unsatisfied soft clauses without providing any optimality guarantees. In this paper, we propose two approximation strategies for improving incomplete weighted MaxSAT solving. In one of the strategies, we cluster the weights and approximate them with a representative weight. In another strategy, we break up the problem of minimizing the sum of weights of unsatisfiable clauses into multiple minimization subproblems. We have implemented these strategies in a tool Open-WBO-Inc. Using the subproblem minimization strategy, Open-WBO-Inc placed first and second in the weighted incomplete tracks in the MaxSAT Evaluation 2018 whereas the strategy based on weight approximation was placed fourth. We compare these strategies with the best incomplete MaxSAT solvers on benchmarks taken from MaxSAT Evaluation 2017 and MaxSAT Evaluation 2018 and show that the strategies proposed are competitive with the best of the solvers.

# Summary. An optional shortened abstract.
summary: This paper presents a couple of incomplete Weighted MaxSAT solving techniques along with analysis on the deviation to the optimal value.

tags:
- Constraint Programming
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: https://content.iospress.com/download/journal-on-satisfiability-boolean-modeling-and-computation/sat190118?id=journal-on-satisfiability-boolean-modeling-and-computation%2Fsat190118
url_code: https://github.com/sbjoshi/Open-WBO-Inc
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
projects: [openwboinc]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

