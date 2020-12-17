---
title: Pinaka
summary: A symbolic execution engine
tags:
- Formal Verification
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
url_code: "https://github.com/sbjoshi/Pinaka"
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


## Pinaka: Symbolic Execution meets Incremental Solving

Symbolic execution as well as incremental solving has been quite well known concepts to the researchers and students working in the field of Formal Methods. 

Today I am going to write about [Pinaka](https://github.com/sbjoshi/Pinaka), a symbolic execution engine that combines symbolic execution with incremental solving in a fairly simple fashion.

#### Incremental Solving

Many modern day constraint solvers, such as SAT and SMT solvers support incremental solving in some fashion.
Say, for some problem, we require solutions for the following set of formulas: $\varphi, \varphi \wedge \Delta_1,  \varphi \wedge \Delta_1 \wedge \Delta_2$

One of the ways to solve these is to create a solver instance for each of these formulas separately and ask the solver for a solution for each of these separately. Note however, that any assignment/model/interpretation that does not satisfy $\varphi$ is not going to satisfy the other two. Similarly, any assignment that does not satisfy $\varphi\wedge\Delta_1$ is not going to satisfy the last formula. Essentially, adding more constraints to the existing formula is going to preserve the fact that assignments that _falsifies_ a formula continue to do so even after more constraints are added.

It would result in a huge performance gain, if we use the same solver instance to solve all the three formulas. When we reuse the solver instance, the internal state of the solver including variable and clause activity scores, learned clauses, etc., are carried over and reused for the next query.

This way of solving a set of formulas with successive queries to the same solver will be denoted as _partial incremental mode_.

Now, suppose we have the following set of formulas: $\varphi \wedge \Delta_1, \varphi \wedge \Delta_2, \varphi \wedge \Delta_3$. Note that, though $\varphi$ remains common, it is no longer the case that one formula is just addition of constraints over the other. The second formula can be obtained from the first by _deleting_ $\Delta_1$ and adding $\Delta_2$. However, the moment you delete a set of constraints, the assignment that used to falsify the old formula may no longer falsify the new formula. Therefore, the search space that was discarded earlier by the solver has to be explored again. The internal state of the solver can not easily be reused in such a scenario. 

However, many modern day solvers have another trick up their sleeve, called _assumptions_.  Assumptions are a list of literals that can be logically thought of as added unit clauses.  When you know that some constraint may no longer be required for successive queries, you can add that constraint being enforced by an assumption. Therefore, the first formula, can be rewritten as $\varphi \wedge (b_1 \implies \Delta_1) \wedge [b_1]$. Here, $[b_1]$ is an assumption, which can logically be thought as a unit clause. Therefore, making this formula _equisatisfiable_ to $\varphi \wedge \Delta_1$. To transform, the first formula to the second one, now we can add $(b_2\implies \Delta_2)$ and change the set of assumptions to $[\neg b_1,b_2]$. So the second formula now looks like:

$$\varphi \wedge (b_1\implies \Delta_1) \wedge (b2\implies \Delta_2) \wedge [\neg b_1,b_2]$$.

When you think that assumptions are logically just unit clauses, then the above formula in some sense _deletes_ $\Delta_1$ because the premise of the implicant is _false_. Therefore, we are transforming one formula to the next just by adding $(b_i \implies \Delta_i)$ and changing assumptions. Note that we are changing $[b_1]$ to $[\neg b_1]$, which looks like we are _deleting_ $b_1$ and adding $\neg b_1$, but solvers treat assumptions in a spacial manner internally. It is still the case that the assignment that _falsifies_ the first formula may no longer falsify the second formula. However, using assumptions still allow a lot of information pertaining to $\varphi$ to be carried over to the next query. Thus, assumptions allow us to salvage at least some information, which would be lost if we were to create a different solver instance for each query.

Of course, adding such $(b_i \implies \Delta_i)$ for a lot of successive queries result in degradation of performance because of large memory footprint and slower iteration over internal data-structures. However, assumptions allows us to reuse a solver instance and can give great performance benefits if the common subformula $\varphi$ is very large and $\Delta_i$ are small and few in numbers.

This way of using the same solver instance for successive queries will be denoted as _full incremental mode_.

#### Symbolic Execution

Let's take a look at a motivating example for symbolic execution.

Look at the subroutine `foo` given below. Note that the _assertion violation_ will happen only when variable `y` gets `-10` as its value at `line 1`. Assuming an `int` to be of  `32` bits, and if you were to test this subroutine by generating values of `y` uniformly randomly and running `foo`, then the probability of you finding the bug will be $2^{-32}$.   
``` c
1 void foo(int y) {
2   int x=10;
3   x=x+y;
4   if(x==0) {
5     x=x+1;
6     if(y<-10)
7       x=x-1;
8   }
9   else {
10    x=0;
11  }
12  assert(x==0);
13 }
```
The problem with testing, as mentioned above, is that a single run only exposes program behaviour for a single input value along a single path.

In symbolic execution, it is possible to explore program behaviour for a set of input values along a single path. We will not talk about multi-path symbolic execution in this post.

Symbolic execution uses a predicate at every program point along a path to represent the set of values program variables can take along the given path. This predicate is also often called a _symbolic state_.

For example,  the symbolic state after _executing_ lines `1-3`  would be :

$$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0  \quad (1) $$ 

Here, $x_0,x_1,y_0$ are symbolic /mathematical variables that represent the set of values that the corresponding program variable can take at corresponding program points. For example, $(x_0,10), (x_1,11),(y_0,3)$ as a program state is not possible after executing line `3` as it does not satisfy the predicate mentioned above. On the other hand $(x_0,10),(x_1,12),(y_0,2)$ satisfies the predicate, indicating that after executing lines `1-3` program variable `x` can be `12` and `y` can be `2`. Similarly, $(x_0,10),(x_1,0),(y_0,-10)$ is also a solution to the predicate indicating that `x` taking the value `0` and `y` taking the value `-10` at line `4` is a possibility.

Line `4` is a branch and gives rise to two symbolic states.
Symbolic state for the _then_ branch is:
 $$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0\wedge x_1=0\quad(2)$$
  
  The symbolic state for the _else_ branch is:
   $$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0\wedge x_1\neq0\quad(3)$$. 

*Pinaka* being a single path execution engine, maintains a worklist of symbolic states that are yet to be explored further. Therefore, at a branch, it picks one state to be explored further and puts the other one on the worklist. Say, it picked the symbolic state for the _then_ branch. *Pinaka* also employs _eager feasibility checks_. In other words, at every branch, it poses a query to a constraint solver whether the symbolic state is _feasible_ or not. If there is no solution to the predicate, then the corresponding symbolic state is deemed to be _infeasible_, indicating that in an actual/concrete execution, it is not possible for the control to reach this point.

In our example, _then_ branch  at line `4` is feasible. Symbolic state for the _then_ branch at line `6`would be:

$$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0\wedge x_1=0 \\ \wedge x_2=x_1+1 \wedge y_0<-10 \quad(4) $$

Symblic state for (implicit) `else`  at line `8` would be:
 $$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0\wedge x_1=0 \\ \wedge x_2=x_1+1 \wedge y_0\geq -10 \quad(5) $$

*Pinaka* uses incremental solving aggressively. Note that the symbolic state for _then_ branch at line `4` is of the form $\varphi$ and the symbolic state for the _then_ branch at line `6` differs by two additional constraint $x_2=x_1+1 \wedge y_0<-10$ which can be considered as  $\Delta_1$ as mentioned in earlier section. Therefore, along a single path, *Pinaka* continues to reuse the same solver instance as long as the symbolic state remains feasible.

Observe that this symbolic state given in $(4)$ above is infeasible and therefore, in a real execution line `7` is unreachable irrespective of the input value of `y`. 

In the _DFS (depth first search)_ exploration strategy, _Pinaka_ picks the last unexplored symbolic state from the list. This can easily be achieved when we operate the worklist of symbolic states pending further exploration in a LIFO (Last In First Out) manner. In this example, it would pick the symbolic state mentioned at (5) above, corresponding to the if condition being _false_ at line `6`. 

In the _partial-incremental_ mode, once a symbolic state is found to be infeasible, a new solver instance is created to explore the yet unexplored symbolic state, in this case, (5) above.

In the _full incremental mode_,  the predicate/formula at line `6` would have looked like the following:
$$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0 \\ \wedge (b_1 \implies x_1=0)  \wedge (b_1 \implies x_2=x_1+1) \\ \wedge (b_1 \implies (b_2 \implies y_0<-10)) \wedge [b_1,b_2] \quad(6) $$

Notice that a new assumption is added for every branch condition as later we may want to _backtrack_ from a _then_ branch and explore an _else_ branch. So in the full incremental mode, the same solver instance will be reused after the symbolic state at line `6` for the _then_ branch is found to be infeasible. For the _else_ branch, the formula would look like the following:
$$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0 \\ \wedge (b_1 \implies x_1=0)  \wedge (b_1 \implies x_2=x_1+1) \\ \wedge (b_1 \implies (b_2 \implies y_0<-10)) \\
\wedge (b_1 \implies (\neg b_2 \implies y\geq -10))
\wedge [b_1,\neg b_2] \quad(7) $$

Once the symbolic execution has gone through the path depicted by lines `1-6, 8,11` we have to check for assertion violation. Essentially, we again want to know, if there is any set of values that program variables can take that can result in assertion violation. This can be done by asking if the following symbolic state is feasible:


 $$y_0 \wedge x_0 = 10 \wedge x_1 = x_0 + y_0\wedge x_1=0 \\ \wedge x_2=x_1+1 \wedge y_0\geq -10 \wedge x_2\neq 0 \quad(8) $$

Observe that we negated the condition inside the assertion as we want to know if the program variables can take a set of values that violates (negates) the condition given in the assertion. Note that (8) above is satisfiable with $(y_0,-10)$, thus revealing that `foo` can fail if the value of the parameter `y` is `-10`. 

Number of paths in a program can grow exponentially in proportion to the number of branches in the program. This path explosion problem can pose quite a problem for single-path symbolic execution engines such as _Pinaka_. Eager infeasibility checks employed by _Pinaka_ gives it tremendous performance boost as all the paths beyond an infeasible symbolic state is discarded. However, doing eager infeasibility checks would mean that every time a branch is encountered, a solver query has to be fired. Since querying a solver is expensive, increasing the number of queries can pose another challenge. That is when integration of incremental solving can provide tremendous benefit.

#### Termination

Loops and recursions are primary programming constructs in a programming language that causes non-termination in a program.

_Pinaka_ performs loop-unrolling and function in-lining lazily and on-demand. This feature allows it to be used to check for termination in some cases. 

Let's take a look at the following program fragment:
```c
1 while(x < 10) {
2    y = y + 1;
3    if(y < 5) {
4       x = x + 1
5    }
6 }

```

Note that for all the values of `x` and `y`, if they satisfy $x-y>5 \vee x\geq 10$, this loop will terminate. It may not terminate otherwise. However, _Pinaka_ does not compute this relation. Instead, it treats the loop condition just as a branch. So the loop will keep being unrolled on-demand as long as the symbolic state at line `1` continues to remain feasible. In another words, if there is any set of values for `x` and `y` which would make it possible for the loop to iterate at least one more time, _Pinaka_ will also go around the loop symbolically executing the loop at least one more time. As a consequence, for a program which does not violate any assertions (safe programs), _Pinaka_ will terminate only if the program itself is terminating. Of course, we are assuming that the solver queries themselves terminate and _Pinaka_ does not run out of memory and time.

For programs, that may violate assertions, this guarantee does not hold. Since if _Pinaka_ finds an assertion violation along some path, it will terminate even if there exist paths in the programs which are non-terminating. 

#### Do it yourself

Those who want to try this example out and compare testing against symbolic execution, following is the C++ program for testing:

``` cpp
#include<random>
#include<limits>
#include<iostream>
#include<cassert>
void foo(int y) {
        int x=10;
        x=x+y;
        if(x==0) {
                x=x+1;
                if(y<-10)
                        x=x-1;
        }
        else {  
                x=0;
        }
        assert(x==0);
}
int main()
{

        std::random_device rseed;
        std::mt19937 rng(rseed());
        std::uniform_int_distribution<int> dist(std::numeric_limits<int>::min(),std::numeric_limits<int>::max());
        unsigned i=0;
        unsigned max=1000000;
        //unsigned max=std::numeric_limits<unsigned>::max();
        while(i<max)
        {
                std::cout<< "i : " << i << std::endl;
                foo(dist(rng));
                i++;
        };
        return 0;
}

```

Compile, run and observe using the following commands:
```
$ g++ -o footest filename.cpp
$ ./footest 2>&1 > foorun.log
$ tail foorun.log
```

I could not trigger the assertion violation when I tried. In contrast when you run _Pinaka_ using the following command  you will get assertion violation notification in a fraction of a second.
```
$ pinaka --function foo filename.c
```
#### References

* _Pinaka_ binaries are available [here](https://github.com/sbjoshi/Pinaka). Pinaka performed reasonably well and quite fast in [SVCOMP 2019](https://sv-comp.sosy-lab.org/2019/results/results-verified/) and [SVCOMP 2020](https://sv-comp.sosy-lab.org/2020/results/results-verified/)
*  You may also refer to the following paper: Eti Chaudhary and Saurabh Joshi, "[Pinaka: Symbolic Execution meets Incremental Solving](https://link.springer.com/chapter/10.1007/978-3-030-17502-3_20)", TOOLympics, TACAS (3), LNCS Vol. 11529, pp. 234--238, 2019. Pre-print version is available on [arXiv](https://arxiv.org/pdf/1903.02309.pdf).


