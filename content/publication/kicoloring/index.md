---
title: "On the tractability of $(k,i)$-coloring (Extended Journal Version)"
authors:
- Sriram Bhyravarapu
- admin
- Subrahmanyam Kalyanasundaram
- Anjeneya Swami Kare
author_notes:
- Author name are listed in alphabetical order of their last names
date: "2020-09-01T00:00:00Z"
doi: "10.1016/j.dam.2020.08.018"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-10T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Discrete Applied Mathematics*"
publication_short: "DAM"

abstract: In an undirected graph, a proper $(k,i)$-coloring is an assignment of a set of colors to each vertex such that any two adjacent vertices have at most common colors. The $(k,i)$-coloring problem is to compute the minimum number of colors required for a proper $(k,i)$-coloring. This is a generalization of the classical graph coloring problem.  We design a parameterized algorithm for the $(k,i)$-coloring problem with the size of the feedback vertex set as a parameter. Our algorithm does not use tree-width machinery, thus answering a question of Majumdar, Neogi, Raman and Tale [CALDAM 2017]. We also give a faster exact algorithm for $(k,k-1)$-coloring. From the hardness perspective, we show that the $(k,i)$-coloring problem is NP-complete for any fixed values $i$, $k$, whenever $i < k$, thereby settling a conjecture of Méndez-Díaz and Zabala (1999) and again asked by Majumdar, Neogi, Raman and Tale. The NP-completeness result improves the partial NP-completeness shown in the preliminary version of this paper published in CALDAM 2018.

# Summary. An optional shortened abstract.
summary: This paper is primarily about NP-completeness of $(k,i)$-coloring of graph and giving a parameterized algorithm for this problem using feedback vertex set as the parameter.

tags:
- CS Theory
featured: true

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: https://arxiv.org/pdf/1802.03634.pdf 
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
  caption: 'Reducing $(k,i)$-coloring to 3-SAT'
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

