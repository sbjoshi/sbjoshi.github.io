---
title: "Equivalence Checking of a Floating-Point Unit Against a High-Level C Model"
authors:
- Rajdeep Mukherjee
- admin
- Andreas Griesmayer
- Daniel Kroening
- Tom Melham
date: "2016-07-01T00:00:00Z"
doi: "10.1007/978-3-319-48989-6_33"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Symposium on Formal Methods*"
publication_short: "FM 2016"

abstract:  Semiconductor companies have increasingly adopted a methodology that starts with a system-level design specification in C/C++/SystemC. This model is extensively simulated to ensure correct functionality and performance. Later, a Register Transfer Level (RTL) implementation is created in Verilog, either manually by a designer or automatically by a high-level synthesis tool. It is essential to check that the C and Verilog programs are consistent. In this paper, we present a two-step approach, embodied in two equivalence checking tools, VERIFOX and HW-CBMC, to validate designs at the software and RTL levels, respectively. VERIFOX is used for equivalence checking of an untimed software model in C against a high-level reference model in C. HW-CBMC verifies the equivalence of a Verilog RTL implementation against an untimed software model in C. To evaluate our tools, we applied them to a commercial floating-point arithmetic unit (FPU) from ARM and an open-source dual-path floating-point adder. 

# Summary. An optional shortened abstract.
summary: This paper describes an efficient technique for equivalence checking of a real-world Floating Point Unit.

tags:
- Formal Verification
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: https://arxiv.org/pdf/1609.00169.pdf
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

