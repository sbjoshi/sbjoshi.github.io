---
title: "Anomaly Detection in Data Plane Systems using Packet Execution Paths"
authors:
- Archit Sanghi
- Praveen Tammana
- admin
- Krishna P Kadiyala
author_notes: ""
date: "2021-08-25T00:00:00Z"
doi: "10.1145/3472873.3472880"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-06-25T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*ACM SIGCOMM workshop on Secure Programmable network INfrastructure*"
publication_short: "ACM SIGCOMM SPIN 2021"

abstract: Programmable data planes provide exciting opportunities to realize fast, accurate, and data-driven control-loop decisions. Many data plane systems have been proposed for handling network dynamics (congestion, failures) in near real-time. The core of these systems has packet-processing data-plane algorithms that continuously monitor traffic and respond automatically. Despite their benefits, automatic response to network events lead to an increase in potential sources of inputs, and hence, an increase in attack surface. This paper takes a step towards securing such systems by (1) identifying possible attacks on recently proposed data-driven data-plane systems; and (2) designing a scalable tool for detecting such attacks at run time. Our approach models plausible expected behavior and uses the model as a reference to check whether the system is under attack. We conduct preliminary experiments to demonstrate the feasibility of our detection methodology.
# Summary. An optional shortened abstract.
summary: This paper describes a statistical analysis based technique to detect certain kinds of attack on the programmable data planes.

tags:
- Cybersecurity
- Statistical Analysis
featured: false

#links:
# - name: "Slides"
#   url: "slides/CP18_Slides.pdf"

url_pdf: 'papers/p4anomaly-spin-2021.pdf'
url_code: ''
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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

