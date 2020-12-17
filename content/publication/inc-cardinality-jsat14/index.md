---
title: "On Using Incremental Encodings in Unsatisfiability-based MaxSAT Solving"
authors:
- Ruben Martins
- admin
- Vasco Manquinho
- Ines Lynce
date: "2015-11-01T00:00:00Z"
doi: "10.3233/sat190102"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Journal of Satisfiability, Boolean Modelling and Computation* (9)"
publication_short: "JSAT"

abstract: In recent years, unsatisfiability-based algorithms have become prevalent as state of the art for solving industrial instances of Maximum Satisfiability (MaxSAT). These algorithms perform a succession of unsatisfiable SAT solver calls until an optimal solution is found. In several of these algorithms, cardinality or pseudo-Boolean constraints are extended between iterations. However, in most cases, the formula provided to the SAT solver in each iteration must be rebuilt and no knowledge is reused from one iteration to the next.  This paper describes how to implement incremental unsatisfiability-based algorithms for MaxSAT. In particular, we detail and analyze our implementation of the MSU3 algorithm in the open-wbo framework that performed remarkably well in the MaxSAT Evaluation of 2014. Furthermore, we also propose to extend incrementality to weighted MaxSAT through an incremental encoding of pseudo-Boolean constraints. The experimental results show that the performance of MaxSAT algorithms can be greatly improved by exploiting the learned information and maintaining the internal state of the SAT solver between iterations. Finally, the proposed incremental encodings of cardinality and pseudo-Boolean constraints are not exclusive for MaxSAT usage and can be used in other domains.   


# Summary. An optional shortened abstract.
summary: This paper is an extended version of the CP 2014 paper where incremental encoding is extended to weighted MaxSAT.

tags:
- Constraint Programming
featured: false

#links:
# - name: "Slides"
#   url: "slides/CP18_Slides.pdf"

url_pdf: https://content.iospress.com/articles/journal-on-satisfiability-boolean-modeling-and-computation/sat190102
url_code: https://github.com/sat-group/open-wbo
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
projects: [openwbo]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

