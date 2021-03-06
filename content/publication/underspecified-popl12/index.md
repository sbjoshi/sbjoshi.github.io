---
title: "Underspecified harnesses and interleaved bugs"
authors:
- admin
- Shuvendu Lahiri
- Akash Lal
author_notes:
- Author list is in alphabetical order of their names
date: "2012-01-01T00:00:00Z"
doi: "10.1145/2103656.2103662"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*ACM SIGPLAN-SIGACT Symposium on Principles Programming Languages*"
publication_short: "POPL 2012"

abstract:  Static assertion checking of open programs requires setting up a precise harness to capture the environment assumptions. For instance, a library may require a file handle to be properly initialized before it is passed into it. A harness is used to set up or specify the appropriate preconditions before invoking methods from the program. In the absence of a precise harness, even the most precise automated static checkers are bound to report numerous false alarms. This often limits the adoption of static assertion checking in the hands of a user.  In this work, we explore the possibility of automatically filtering away (or prioritizing) warnings that result from imprecision in the harness. We limit our attention to the scenario when one is interested in finding bugs due to concurrency. We define a warning to be an interleaved bug when it manifests on an input for which no sequential interleaving produces a warning. As we argue in the paper, limiting a static analysis to only consider interleaved bugs greatly reduces false positives during static concurrency analysis in the presence of an imprecise harness.  We formalize interleaved bugs as a differential analysis between the original program and its sequential version and provide various techniques for finding them. Our implementation CBugs demonstrates that the scheme of finding interleaved bugs can alleviate the need to construct precise harnesses while checking real-life concurrent programs.

# Summary. An optional shortened abstract.
summary: This paper presents a technique to find interleaved bugs even with incomplete harness.

tags:
- Formal Verification
- Program Analysis
featured: false

#links:
# - name: "CALDAM 2018 version"
#   url: "https://arxiv.org/pdf/1802.03634v1.pdf"

url_pdf: "papers/popl148-joshi.pdf"
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

