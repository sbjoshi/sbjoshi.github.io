---
title: "C++26 Contracts - Part 1"
date: 2026-04-02
tags: ["Formal Verification", "Programming Languages"]
summary: "Opinion on C++26 Contracts feature"
---

Ok, let me put a disclaimer up front, when I write _Part 1_ in the title, I am hoping that I would write more posts. Not that a lot more can not be written, but I don't write technical posts much, but I am hoping to write more and more as a programming language enthusiast.

I have been a formal verification researcher, so let me start with a motivating example, that I have always used in my lectures, when I was a faculty at IIT Hyderabad and in some of the talks (i.e., [CppIndiaCon 2021](https://www.youtube.com/watch?v=_eoZ4OfHypU) )

```cpp

#include <iostream>

int main () {
        std::cout << "Hello World!" << std::endl;
        return 0;
}
```

and I start by asking the question, what is wrong with this program? People typically try to spot a mistake in the syntax, but this program would compile just fine.

So what is wrong with this program?
Well, let me make the program _wrong_ without changing any of _executable lines_.

```cpp
// Write a C++ program that would print the first 5 Virahanka Numbers (popularly but incorrectly known as Fibonacci Numbers)

#include <iostream>

int main() {
        std::cout << "Hello World!" << std::endl;
        return 0;
}
```
The lesson is that we can not say something is _wrong_ or _right_ without first defining what does it mean for something to be _wrong_ or _right_. That is exactly what specifications do.

The single comment that I wrote above, is the specification for this program, which is described in [this working paper](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2900r14.pdf) as a _plain-language contract_ for this program.

In this post, I will only express some of my opinions about the proposal in the paper linked above.

