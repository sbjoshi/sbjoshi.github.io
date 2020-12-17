---
title: GPURepair
summary: A tool for automated repair of CUDA and OpenCL kernels
tags:
- Formal Verification
- Automated Program Repair
date: "2018-01-01T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

#image:
#  caption: Photo by rawpixel on Unsplash
#  focal_point: Smart

links:
#- icon: twitter
#  icon_pack: fab
#  name: Follow
#  url: https://twitter.com/georgecushen
url_code: "https://github.com/cs17resch01003/gpurepair"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
#slides: example
---

## GPURepair

GPURepair is a tool that can propose a fix to data-race and barrier-divergence errors in CUDA and OpenCL kernels. It uses [GPUVerify](https://github.com/mc-imperial/gpuverify) as an oracle. It can also propose a fix for inter-block data-race in CUDA kernels using _CUDA Cooperative Groups_.


