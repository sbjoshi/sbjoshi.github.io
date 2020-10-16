---
title: "Distributed Generalized Dynamic Barrier Synchronization"
authors:
- Shivali Agarwal
- admin
- R K Shyamasundar
date: "2011-01-01T00:00:00Z"
doi: "10.1007/978-3-642-17679-1_13"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Distributed Computing and Networking*"
publication_short: "ICDCN 2011"

abstract:  Barrier synchronization is widely used in shared-memory parallel programs to synchronize between phases of data-parallel algorithms. With proliferation of many-core processors, barrier synchronization has been adapted for higher level language abstractions in new languages such as X10 wherein the processes participating in barrier synchronization are not known a priori, and the processes in distinct “places” don’t share memory. Thus, the challenge here is to not only achieve barrier synchronization in a distributed setting without any centralized controller, but also to deal with dynamic nature of such a synchronization as processes are free to join and drop out at any synchronization phase. In this paper, we describe a solution for the generalized distributed barrier synchronization wherein processes can dynamically join or drop out of barrier synchronization; that is, participating processes are not known a priori. Using the policy of permitting a process to join only in the beginning of each phase, we arrive at a solution that ensures (i) Progress: a process executing phase k will enter phase k + 1 unless it wants to drop out of synchronization (assuming the phase execution of the processes terminate), and (ii) Starvation Freedom: a new process that wants to join a phase synchronization group that has already started, does so in a finite number of phases. The above protocol is further generalized to multiple groups of processes (possibly non-disjoint) engaged in barrier synchronization.

# Summary. An optional shortened abstract.
summary: 

tags:
- Program Analysis
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: "papers/icdcn2011.pdf"
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

