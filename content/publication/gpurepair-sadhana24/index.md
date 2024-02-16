---
title: "GPURepair: Automated Repair of GPU Kernels (Extended Version)"
authors:
- admin
- Gautam Muduganti
author_notes:
- Author names are listed in alphabetical order of their last names
date: "2024-01-12T00:00:00Z"
doi: "10.1007/s12046-023-02291-0"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-01-10T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Sadhana - A Journal of Indian Academy of Sciences, Vol. 49*"
publication_short: "Sadhana, Vol. 49"

abstract: This paper presents a technique for repairing errors in GPU kernels written in CUDA or OpenCL due to data races and barrier divergence. Our novel extension to prior work can also remove barriers that are deemed unnecessary for correctness. We implement these ideas in our tool called GPURepair, which usesGPUVerify as the verification oracle for GPU kernels. We also extend GPUVerify to support CUDA Cooperative Groups, allowing GPURepair to suggest inter-block synchronization for repairing a CUDA kernel if deemed necessary. To the best of our knowledge, GPURepair is the only tool that can propose a fix for intrablockdata races and barrier divergence errors for both CUDA and OpenCL kernels. It is also the only tool that can propose fixes for inter-block data races in CUDA kernels. We perform extensive experiments on about 750 kernels and provide a comparison with prior work. We demonstrate the superiority of GPURepair through its capability to fix more kernels and its unique ability to remove redundant barriers and handle inter-block data races. We have also enhanced the initial version of GPURepair to support incremental solving during the repairprocess. This enhancement improves the performance of GPURepair by about 25% for the test suite that we have used. 

# Summary. An optional shortened abstract.
summary: This paper presents a tool and a technique to fix data-race and barrier divergence errors in CUDA and OpenCL programs.

tags:
- Formal Verification
featured: false

links:
 - name: "Paper"
   url: "https://www.ias.ac.in/describe/article/sadh/049/0010"

url_pdf: https://www.ias.ac.in/article/fulltext/sadh/049/0010
url_code: https://github.com/cs17resch01003/gpurepair
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: https://www.youtube.com/watch?v=WtOT31S-RA8&t=2h57m34s

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
projects: [gpurepair]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

