---
title: "OpenMP aware MHP Analysis for Improved Static Data-Race Detection"
authors:
- Utpal Bora
- Shraiysh Vaishay
- admin
- Ramakrishna Upadrasta
date: "2021-11-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-11-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Workshop on the LLVM Compiler Infrastructure in HPC*"
publication_short: "LLVM HPC 2021"

abstract: "Data races, a major source of bugs in concurrent programs, can result in loss of manpower and time as well as data loss due to system failures. OpenMP, the de facto shared memory parallelism framework used in the HPC community, also suffers from data races. To detect race conditions in OpenMP programs and improve turnaround time and/or developer productivity, we present a data flow analysis based, fast, static data race checker in the LLVM compiler framework. Our tool can detect races in the presence or absence of explicit barriers, with implicit or explicit synchronization. In addition, our tool effectively works for the OpenMP target offloading constructs and also supports the frequently used OpenMP constructs.  We formalize and provide a data flow analysis framework to perform Phase Interval Analysis (PIA) of OpenMP programs.  Phase intervals are then used to compute the MHP (and its complement NHP) sets for the programs, which, in turn, are used to detect data races statically.  We evaluate our work using multiple OpenMP race detection benchmarks and real world applications. Our experiments show that the checker is comparable to the state-of-the-art in various performance metrics with around 90 percent accuracy, almost perfect recall, and significantly lower runtime and memory footprint."

# Summary. An optional shortened abstract.
summary: This paper employs MHP analysis inside LLOV, to increase coverage of OpenMP pragmas for data-race checking for OpenMP Programs.

tags:
- Program Analysis
featured: false

links:
 - name: "pre-print"
   url: "https://arxiv.org/pdf/2111.04259.pdf"

url_pdf: ''
url_code: https://github.com/utpalbora/LLOV
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
projects: [llov]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

