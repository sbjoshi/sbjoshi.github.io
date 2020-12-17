---
title: "Incremental Cardinality Constraints for MaxSAT"
authors:
- Ruben Martins
- admin
- Vasco Manquinho
- Ines Lynce
date: "2014-07-01T00:00:00Z"
doi: "10.1007/978-3-319-10428-7_39"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Principles and Practice of Constraint Programming*"
publication_short: "CP 2014"

abstract:     Maximum Satisfiability (MaxSAT) is an optimization variant of the Boolean Satisfiability (SAT) problem. In general, MaxSAT algorithms perform a succession of SAT solver calls to reach an optimum solution making extensive use of cardinality constraints. Many of these algorithms are non-incremental in nature, i.e. at each iteration the formula is rebuilt and no knowledge is reused from one iteration to another. In this paper, we exploit the knowledge acquired across iterations using novel schemes to use cardinality constraints in an incremental fashion. We integrate these schemes with several MaxSAT algorithms. Our experimental results show a significant performance boost for these algo- rithms as compared to their non-incremental counterparts. These results suggest that incremental cardinality constraints could be beneficial for other constraint solving domains. 


# Summary. An optional shortened abstract.
summary: This paper describes techniques to incremental encode cardinality constraints. This led Open-WBO to win accolades in MaxSAT evaluations.

tags:
- Constraint Programming
featured: false

#links:
# - name: "Slides"
#   url: "slides/CP18_Slides.pdf"

url_pdf: https://arxiv.org/pdf/1408.4628.pdf
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

