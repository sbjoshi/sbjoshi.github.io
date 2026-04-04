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

### Limitations of C++ contracts

> _Note that not all parts of a contract can be specified via contract assertions, and of those that can,
some cannot be checked at run time without violating the complexity guarantees of the function (e.g.,
the precondition of binary search that the input range is sorted), without additional instrumentation
(e.g., a precondition that a pair of pointers denotes a valid range), or at all (e.g., a precondition
that a passed-in function, if called, will return). Therefore, we do not expect that function contract
assertions can, in general, specify the entire plain-language contract of a function; however, they
should always specify a subset of the plain-language contract._ -- page 9, 2nd last paragraph of the paper

It seems that the committee has designed C++ contracts specification, purely from run-time checking point of view. Otherwise, why worry about _runtime complexity_ of contract checking? The example of binary search suggesting that _sortedness_ property checking has linear computational complexity as opposed to searching inside a sorted range, which is just logarithmic.

As a formal verification researcher, this is a missed opportunity. Why? Verification engineers cry at the top of their lungs for developers to provide _specifications_, and designing a standardized syntax in the language itself would perhaps encourage more programmers to write formal specs and perhaps adopt incorporating static analysis/formal verification tools in the development life cycle.

Even if a contract can not be checked at run-time without violating run-time complexity guarantees or even if it perhaps can not be checked at all (thanks to _the Turing's halting problem_), it acts as a unambiguous documentation inside the code which in itself adds a lot of value.

For example,
```cpp 
template <std::ranges::random_access_range R, typename T>
requires std::totally_ordered_with<T, std::ranges::range_value_t<R>>
bool does_exist(const T& val, const R& r) [[pre: forall int i, j : (0 <= i && i < j && j < std::ranges::size(r)) ==> r[i] <= r[j]]]; 
```

Yes, I know. Some of you may point out that the proposed syntax for _precondition_ is 

```cpp
return_type fun_name(parameters) pre(condition)
```

But indeed in [P0542R5](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0542r5.html), similar syntax has existed. They just used `expects` instead of `pre`.

Yes, I also know that there is no such thing as `forall` in C++. What I am trying to say is that just defining a standard syntax, say with the additional keywords `forall`, `exists` and operators `==>` to signify logical implication would have been a fantastic addition even though the same can not be checked at run time.

Let programmers use `pre()` syntax when they want run time checking and use `[[pre: ]]` syntax when they want it to be used by static analyzers only.

Given that C++ compiler is quite mature now, in terms of doing a lot of things at static time, including `constexpr`, `static_assert` and now compile time reflections, may be the compiler may attempt to _prove_ the `pre` or `post` conditions and issue a _warning_ if it fails to do so.

### Features _not_ proposed

- >_The ability to refer to the original values of     parameters and other entities during the evaluation
of the predicate of a postcondition_ -- Section 2.3, page 11, 3rd clause

What?! If you look at the literature, _most_ of the examples of postconditions have some version of `old(var)`, where it refersto the value of `var` at the beginning of the method but might have changed now inside the method. This is extremely crucial for one to be able to provide a _strong_ postcondition, which is often a make or break in proving the program correctness.

- >The ability to express the desired evaluation semantic directly on the contract assertion -- Section 2.3, page 11, 5th clause

A language, which has given the freedom to programmers, not only to shoot their own foot, but obliterate themselves with a bazooka is now saying it won't allow you to define your own semantics of evaluation, out of the four (a) _ignore_ (b) _observe (c) _enforce_, and (d) _quick-enforce_.

Section 3.5.4 does define what these four different semantics mean but Section 3.5.5 leaves it to the _implementation_, as in the compiler to choose which of the four will be used instead of giving this choice to the developer.

Perhaps they could have at least given a choice globally, as in provide a flag `-fcontract-semantics=ignore` and all of the contracts will use the same evaluation semantics instead of giving an option to the programmer to annotate at each contract, which semantics they would like to choose for that particular contract assertion.

Since we are talking about evaluation semantics, let us look at **Principle 5 : Independence from Chosen Semantic**

> Which evaluation semantic will be used for any given evaluation of a contract assertion and
whether that evaluation semantic is a checking semantic should generally not be detectable at
compile time; such detection might result in different programs being executed when contract
checks are enabled. -- Section 3.1.1, page 13

Let us also look at the paragraph that follows:

> When the above principles are violated, a contained program could be substantially changed by
using Contracts in such a way. Therefore, we discourage this ability and have removed a number of
places where, by adding even the simplest contract assertion, a program could, at compile time,
implicitly be changed and thus made potentially **incorrect**.

I do not even know what this paragraph _mean_. The reference to the word **incorrect** here, alludes that there is some inherent assumption about what a **correct** program is, but that is _exactly_ what contracts intend to define! I am just confused about what the authors wanted to convey here.


- >The ability to express postconditions of functions that do not exit normally, e.g., a postcondition
that a function does or does not exit via an exception -- Section 2.3, 7th clause, page 11

It is often important to be able to write contracts that specifies when a method takes unusual paths, for example [`aborts_if`](https://aptos.dev/build/smart-contracts/prover/spec-lang#aborts_if-condition) in [`Move Specification Language`](https://aptos.dev/build/smart-contracts/prover/spec-lang) does provide a way to formally specify if the method is going to `abort` conditionally.

Yes, Move Specification Language is a separate langauge and the Move Compiler completely ignores the specs. It is only used by the [Move Prover](https://aptos.dev/build/smart-contracts/prover). I really like when proving correctness is not an aferthought. One can't fault the C++ language designers though as the tooling for proving software correctness was scarce at the time of inception of the language.

- >• The ability to write a contract predicate that cannot be evaluated at run time, e.g., because it
calls a function with no definition -- Section 2.3, 8th clause, page 12

This takes away the ability to use _function summaries_. While we may not have implementation of a method, for the static analyzers as long as we can provide the contracts it may satisfy provide an essential aid to prove program correctness.

- > The ability to express invariants

Ah! Being able to express invariants, especially on a class can be quite vital. [Boost Contract Library](https://www.boost.org/doc/libs/latest/libs/contract/doc/html/index.html) does support it. Invariant avaiable with Boost, was indeed helpful in debugging the example that I used in my [talk](https://youtu.be/_eoZ4OfHypU?t=3234).

### Guiding principles

I agree with most of the guiding/design principles for contracts noted down in Section 3.1 of the paper. 

- **Principle 6: Destructive Side Effects** 
> Contract assertions whose predicates, when evaluated, could affect the correctness of the
program should not be supported.

I completely agree here. Contracts are just specifications, which, _in theory_, never get evaluated but used as a reference to check if the implementation is _correct_. It does not make any sense then, to have a side-effect during the contract checking, which can potentially crash your program!

An important point to note here is that the contract themselves could be _wrong_! How do I define the _correctness_ of something that itself is defining the _correctness_ of the program? Seems like a recusion here! However, this happens all the time. In my courses, such as, _Software Verification_ or even _Principles of Programming Languages_, I ask my students to write preconditions, postconditions and invariants. Heck, this is even asked in the exam! It is not surprising that some of them would get it wrong.

_Wrong_ could mean various things here. Precondition not being weak enough, postconditions and invariants not being strong enough to be able to prove the program correctness, or worse, would allow a program to be proven correct when it is not. Meaning that even though the program satisfies the contracts, it violates the specification that was intended but was not written.

In the example above, if I had written
```cpp
 [[pre : forall int i, j : (0 < i && i < j && j < std::ranges::size(r)) ==> r[i] <= r[j]]]
 ```

 it would allow the following array to meet the precondition
 ```cpp
 {30,1,2,3,4,5}
 ```
 but this violates the _intended_ property of _sortedness_ that we wanted to check. And such mistakes can happen due to a small typo by using `<` instead of `<=`.

 - **Principle 14: Choose Ill-Formed to Enable Flexible Evolution**
 > _When no clear consensus has become apparent regarding the proper solution to a problem
that Contracts could address, the relevant constructs are left ill-formed._

From the design point of view, while things are still _evolving_ in terms of defining the semantics, this is understandable.

One point though is that C++ contracts are _evolving_ even though they were never made part of the langauge since 2004 as noted in [Section 2.6, P2899R1](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2899r1.pdf). It is kind of disappointing that it took so long before they are made part of the language. Even then, one can't shake the feeling of ``_too little, too late_''.

It is noted in the wild that the creator of the language, _Bjarne Stroustrup_ had remarked, ``_the adopted C++26 contract feature is neither minimal nor viable_''. I kind of agree with his view point but I would have loved to know details about why he thought so.

I think this is enough for now. May be I will write another post with more of my opinion on various aspects of _C++26 Contracts_.

**Disclaimer**: _I have immense respect for C++ Standard committe members. Their perception of how the language is used by the community and the knowledge of the language and semantics itself is far greater than mine. The post is just an opinion piece, or what I wished C++ contracts had supported._