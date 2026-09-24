---
title: "C++26 Contracts - Part 2"
date: 2026-04-12
tags: ["Formal Verification", "Programming Languages", "C++", "Formal Specification"]
summary: "Opinion on C++26 Contracts feature"
---

Alright, so for the second part, I am writing some notes and observations as I go along reading the [draft paper](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2900r14.pdf), therefore, it is possible that some of my observations may not be accurate if clarifications or addendum is provided later on those aspects.

- > Any number of function contract specifiers, in any order, may be specified on a function declaration.
Precondition specifiers do not have to precede postcondition specifiers but may be freely intermingled
with them: (Section 3.2.1, page 18)
 ```cpp
        void f()
        pre (a)
        post (b)
        pre (c); // OK
 ```

 Yes, the programmer is being provided freedom to freely intermingle `pre` and `post`, but wouldn't it make more sense to mandate that all `pre` must be before `post`? Might improve readability. Of course, one can argue that this would allow programmers to write those _preconditions_ and _postconditions_ which are expressed in terms of the same set of program variables.

 One more reason becomes evident in their choice in providing this flexiblity in the following:

 > Evaluation of preconditions and postcondition assertions will still be done in their respective lexical
order; (Section 3.2.1, page 19)

Since if the _implementation_ decide to provide semantics of _enforce_, the order in which the _preconditions_ and _postconditions_ appear might matter. But if that is indeed the case, I believe it would violate the following principle:

> Principle 8 : Independence of Contract Assertions
> The result of evaluating a contract assertion should never affect the result of evaluating any
other contract assertions. (Section 3.1.2)

Therefore, apart from allowing freedom to specify assertions that are based on same set of program variables, there is no upside in providing this flexibility which I believe, might hamper readability.

- > All three kinds of contract assertions (pre, post, and contract_assert) permit attributes that
appertain to the introduced contract assertion. We do not propose to add any such attributes to
the C++ Standard itself, yet this permission can be useful for vendor-specific extensions to the
functionality provided by this proposal. The syntactic location for such attributes specific to contract
assertions is between the pre, post, or contract_assert and the predicate (Section 3.2.3, page 19)
```cpp
void f() {
        int i = get_i();
        contract_assert [[analyzer::prove_this]] (i > 0);
// ...
}
```

Ok, so while they did not made the attributes as part of the standard, they did leave the door open for _vendor-specific extensions_ to add attributes on the contract that can be used by static analyzers. This addresses some of the concerns raised in my [earlier post](/posts/cpp26-contracts-1/).


- >Any function declaration is a first declaration if no other declarations of the same function are
reachable from that declaration; otherwise, it is a redeclaration. The sequence of function contract
specifiers on a first declaration of a function introduces the corresponding function contract assertions
that apply to that function.
It is ill-formed, no diagnostic required (IFNDR) if multiple first declarations for the same function
are in different translation units that do not have the same sequence of function contract specifiers.
A redeclaration of a function shall have either no function contract specifiers or the same sequence
of function contract specifiers as any first declaration reachable from it; otherwise, the program is
ill-formed.

It is indeed quite important to put this restriction to ensure that contracts that are spread across multiple declarations are not inconsistent.

- >If the predicate of a precondition assertion on a constructor or a postcondition assertion on a
destructor names a nonstatic data member of that class directly, i.e., without using an explicit
`this->`, the program is ill-formed: (Section 3.3.4, page 21)
```cpp
struct X {
        int i = 0;
        bool f();
        X()
	pre (i == 0) // error
	pre (f()) // error
	pre (check(&this->i)) // OK
	pre (this->f()) // OK
	{}
	~X()
	pre (i == 0) // OK
	post (i == 0) // error
	post (f()) // error
	post (check(&this->i)) // OK
	post (this->f()); // OK
};
```

This seems ok, until you remember that the paper also mentions the following:

> Each contract assertion has a point of evaluation based on its kind and syntactic position. Precon-
dition assertions are evaluated immediately after function parameters are initialized and before
entering the function body. Postcondition assertions are evaluated immediately after local variables
in the function are destroyed when a function returns normally. (Section 2.2, page 10-11)

One just wonders then, if the _object_ semantically begins to exist only at the _end_ of the constructor, is it valid to use `this` in an expression when the point of evaluation of the precondition is before the function body starts? One can ask similar question for postcondition on a destructor as well.

It turns out, there is always a _catch_. 

> During the above situations, members, bases, and the object itself are not within their lifetimes;
accessing any of these objects or doing anything that depends on the dynamic type of these objects
(such as dynamic_cast, typeid, invoking a virtual member function, or accessing a member of a
virtual base class) will, therefore, have undefined behavior. To minimize the probability of such
undefined behavior being introduced accidentally, naming a nonstatic data member directly, i.e.,
without using an explicit this->, is ill-formed in these cases 
>
> However, doing so
remains possible with an explicit this->.
Preserving this possibility is important because the value of this and the address of its nonstatic
data members are all quite useful in contract assertions, with no need to access the values of the
objects at those locations (which will be outside their lifetimes). For example, these addresses could
be used to verify that the under-construction object is being placed in a specific, allowed memory
range. However, to avoid undefined behavior, care must be taken to use only the addresses of these
objects in the predicate and never to access their values: (Section 3.6.2, page 51)

Meaning that you can only use `this` in a fashion where you are not really accessing the values of the non-static members.
