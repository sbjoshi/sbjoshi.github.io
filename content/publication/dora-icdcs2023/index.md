---
title: "DORA: Distributed Agreement with Simple Majority"
authors:
- Prasanth Chakka
- admin
- Aniket Kate
- Joshua Tobkin
- David Yang
author_notes:
- Author name are listed in alphabetical order of their last names
date: "2023-06-07T00:00:00Z"
doi: "10.1109/ICDCS57875.2023.00025"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-06-07T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Distributed Computing Systems 2023*"
publication_short: "ICDCS 2023"

abstract:  Oracle networks feeding off-chain information to a blockchain are required to solve a distributed agreement problem since these networks receive information from multiple sources and at different times. We make a key observation that in most cases, the value obtained by oracle network nodes from multiple information sources are in close proximity. We deﬁne a notion of agreement distance and leverage the availability of a state machine replication (SMR) service to solve this distributed agreement problem with an honest simple majority of nodes instead of the conventional requirement of an honest super majority of nodes. Values from multiple nodes being in close proximity, therefore, forming a coherent cluster, is one of the keys to its efﬁciency. Our asynchronous protocol also embeds a fallback mechanism if the coherent cluster formation fails.  Through simulations using real-world exchange data from seven prominent exchanges, we show that even for very small agreement distance values, the protocol would be able to form coherent clusters and therefore, can safely tolerate up to 1/2 fraction of Byzantine nodes. We also show that, for a small statistical error, it is possible to choose the size of the oracle network to be signiﬁcantly smaller than the entire system tolerating up to a 1/3 fraction of Byzantine failures. This allows the oracle network to operate much more efﬁciently and horizontally scale much better.

# Summary. An optional shortened abstract.
summary: This paper provides a distributed Byzantine agreement with honest simple majority when State Machine Replication (SMR) is available as an ordering primitive.

tags:
- Distributed Systems
- Blockchain
featured: false

links:
 - name: "ICDCS 2023 version"
   url: "https://ieeexplore.ieee.org/document/10272471"

url_pdf: https://arxiv.org/pdf/2305.03903.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=i9ySrtZD6sM'

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

