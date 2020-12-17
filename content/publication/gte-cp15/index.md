---
title: "Generalized Totalizer Encoding for Pseudo-Boolean Constraints"
authors:
- admin
- Ruben Martins
- Vasco Manquinho
date: "2015-07-01T00:00:00Z"
doi: "10.1007/978-3-319-23219-5_15"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Principles and Practice of Constraint Programming*"
publication_short: "CP 2015"

abstract: Pseudo-Boolean constraints, also known as 0-1 Integer Linear Constraints, are used to model many real-world problems. A common approach to solve these constraints is to encode them into a SAT formula. The runtime of the SAT solver on such formula is sensitive to the manner in which the given pseudo-Boolean constraints are encoded. In this paper, we propose generalized Totalizer encoding (GTE), which is an arc-consistency preserving extension of the Totalizer encoding to pseudo-Boolean constraints. Unlike some other encodings, the number of auxiliary variables required for GTE does not depend on the magnitudes of the coefficients. Instead, it depends on the number of distinct combinations of these coefficients. We show the superiority of GTE with respect to other encodings when large pseudo-Boolean constraints have low number of distinct coefficients. Our experimental results also show that GTE remains competitive even when the pseudo-Boolean constraints do not have this characteristic. 

# Summary. An optional shortened abstract.
summary: This paper describes Generalized Totalizer Encoding (GTE) to encode Pseudo-Boolean Constraints. This encoding led Open-WBO to win accolades in MaxSAT evaluations and Pseudo-Boolean evaluations.

tags:
- Constraint Programming
featured: false

#links:
# - name: "Slides"
#   url: "slides/CP18_Slides.pdf"

url_pdf: https://arxiv.org/pdf/1507.05920.pdf
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

