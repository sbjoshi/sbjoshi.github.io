---
title: Posts

# View.
#   1 = List
#   2 = Compact
#   3 = Card
view: 2

# Optional header image (relative to `static/media/` folder).
header:
  caption: ""
  image: ""
---

# How to use Pinaka 

Pinaka is a single-path symbolic execution engine, built on top of
[CPROVER](https://www.cprover.org) framework.

In the following text, we will show how to use Pinaka through various examples.

## Using ``assert`` to check properties

Pinaka verifies a program with respect to given specifications. These specifications are typically given as a set of program assertions using ``assert`` statements in the program. 

``` c
1 #include <assert.h>
2 int main()
3 {
4 	int a, b=5;
5	int c = a+b;
6	assert(c<100);
7	return 0;
8 }
```

Look at the example shown above. The C language standard does not
forbid the use of uninitialized variable, however, using uninitialized variables may lead to undefined behavior. Here, ``a`` is uninitialized and therefore, as per the C language standard, it is free to to take any value within the domain of ``int``.

As, you can observe, on ``line 6``, assertion has been given. Programmers or user of Pinaka is supposed to use ``assert`` to indicate what properties they want Pinaka to verify the program against. 

On the above program, the following command shall be issued:

``
pinaka filename.c
``

Pinaka will show the following output:

```
Running with 8 object bits, 56 offset bits (default)
Parsing /tmp/try4.c
<command-line>: warning: "__STDC_VERSION__" redefined
<built-in>: note: this is the location of the previous definition
Converting
Type-checking try4
Generating GOTO Program
Adding CPROVER library (x86_64)
Generic Property Instrumentation
Removal of function pointers and virtual functions
Depth First Search 
Full Incremental Mode
OUR FUNCTION CALLED 

 Number of dropped states: 0
Generated 1 VCC(s), 1 remaining after simplification
Number of SAT queries made: 0
Number of new SAT instances: 0
Number of total paths: 0
Number of feasible path: 1
Number of infeasible path: 0
Runtime: 0.036s total, 0.001s SAT
[main.assertion.1] assertion c<100: FAILED

** 1 of 1 failed
VERIFICATION FAILED (ReachSafety)
```

Note that without any assertions, Pinaka does not have any specification to verify the program. Therefore the following program would result in ``VERIFICATION SUCCESSFULL``.

```c

1 #include <assert.h>
2 int main()
3 {
4 	int a, b=5;
5	int c = a+b;
6	return 0;
7 }
```

``printf`` statements are irrelevant for Pinaka as it does not consider any ``printf`` as part of the specification.


## Verifying functions other than ``main`` and signed integer overflow check

By default, Pinaka assumes that the entry point, or starting point for analysis would be ``main`` subroutine. However, one can specify a subroutine other than ``main`` as well and verify the subroutine.

For example,
```c
int inc(int x)
{
   return ++x;
}

```

Let us assume that we want to check for signed integer overflow for ``inc`` subroutine. We should use the following command

``pinaka --signed-overflow-check --function inc filename.c``

Note, that we combined two command line options here.

1.  ``--signed-overflow-check`` tells Pinaka to use signed integer arithmetic overflow as the property to be verified. In such a case, we do not have to provide any ``assert`` statements in the program.
1. ``--function inc`` tells Pinaka to use subroutine ``inc`` as the starting point for the analysis. In this case, the source file need not have a ``main`` subroutine inside it. Even if it is present, it will be _ignored_ .

## Array index out-of-bounds check and showing the trace

Pinaka supports array index out-of-bounds check as in-built property.

For example,

```c
#include <assert.h>
int main()
{
   int a[] = {0,1,2,3,4};
   int i,sum=0;
   for (i=0;i<=5;i++)
   {
      sum+=a[i];
      assert(sum>=0);
   }
   return 0;
}
```

Let us first try without the array index out-of-bounds check.

``pinaka filename.c``

The result would be ``VERIFICATION FAILED`` because the ``sum`` can indeed become negative since ``a[5]`` can be ``-11`` or less. Note that the above program would compile successfully.

If we also want to see the trace/potential execution through which the program would fail we should issue the following command:

``pinaka --show-trace filename.c``

The trace would clearly show that the value for ``a[5]`` would be so much negative so that ``sum`` becomes negative. We can observe that this issue arises as the program tries to access an array index which is outside the legal range of the array.

To perform the array index out-of-bounds check, the following command shall be issued:

``pinaka --bounds-check --show-trace filename.c``

Now it will show that the upper bound on array index ``a`` is violated.

## Pinaka search modes

Pinaka supports various internal modes, each with having their own advantages and disadvantages in terms of speed and memory consumption.

For the search, two modes are supported, Since, Pinaka is a single path symbolic execution engine, the default mode of the search is _depth-first search_. If you wish to use _breadth-first search_ instead, please use the following command.

``pinaka --bfs filename.c``

Similarly, the default incremental mode of Pinaka is _full incremental mode_. If, you wish to use _partial incremental mode_, please use the following command.

``pinaka --partial-incremental filename.c``

Note that we __DO NOT__ recommend to use _partial incremental mode_ with _breadth-first search_ as it can quickly consume a lot of memory.

For SVCOMP, we found _partial incremental mode_ with the _deapth-first search_ to be the best combination to use. So the command to use this combination would be

``pinaka --partial-incremental filename.c``

## Bit-width options

Pinaka has options to specify the width for a word. For example, you can choose if the width of a word is 16-bit, 32-bit or 64 bit. Pinaka internally uses a technique called _bit-blasting_ to provide a bit-precise analysis of the program. For example, the specified bit-width would determine when to flag for an overflow, underflow for integers.

These options can be used as follows:

``pinaka --64 filename.c``

Similarly, to specify bit-width of 16 or 32 bits, one can use ``--16`` or ``--32`` respectively.

## Floating-point rounding modes

Pinaka supports four rounding modes for floating-point arithmetic. Floating-point modelling is compliant to IEEE 754 standard.

There are four rounding modes:

- Round to nearest (``--round-to-nearest``)
- Round to $+\infty$ (``--round-to-plus-inf``)
- Round to $-\infty$ (``--round-to-minus-inf``)
- Round to $0$ (``--round-to-zero``)

One can refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Floating-point_arithmetic) to know more about rounding modes.

## Divide by zero check

You can use ``--div-by-zero-check`` to tell Pinaka to detect potential division by zero.

```c
#include <assert.h>

int main()
{
        int a,b;

        int c = a/b;

        assert(c>0);

        return 0;
}

```

Look at the example above. There is a potential division by $0$ since ``b`` being an uninitialized variable, can potentially have the value of `0`.

You can use the following command to tell Pinaka to check for such errors as follows:

``pinaka --div-by-zero-check filename.c``

Note that, the assertion ``assert(c>0)`` will be shown as `OK` if the division by zero check is enabled. Because the assertion is after the division by zero error. The program is in an undefined state after the error, therefore, this result of `OK` should be ignored as Pinaka will already show that there is a division by zero error in the expression `int c=a/b`.

If you omit the flag for this check, it will correctly raise a warning for assertion violation.

``pinaka filename.c`` 

On the above program, this will correctly raise a warning of assertion `assert(c>0)` being violated.

Note that along the same path, if there are multiple properties, Pinaka will correctly identify the status of the first property and ignore the rest, therefore, reporting the status of `OK` for other properties.

For example,


```c
#include <assert.h>

int main()
{
        int a,b;

        int c = a/b;
        int d = c/a;

        assert(c>0);

        return 0;
}

```

for the above program, when you use ``--div-by-zero-check`` it will show error only on ``int c=a/b`` and the rest will be ignored or shown as `OK`.

## Pointer checks

Pinaka supports certain checks with respect to pointers. All of the checks mentioned below are done when you provide ``--pointer-check`` flag to Pinaka.

### Null-pointer check

```c
#include <assert.h>

#define NULL 0

int max (int *p, int *q)
{
        int tmp1=*p;
        int tmp2=*q;
      if (tmp1 > tmp2) return tmp1;
      else return tmp2;


}

int main()
{

        int *a=NULL;
        int b=5;
        int *c = &b;
        max(a,c);

        return 0;
}

```

Use the following command to run pointer-checks:

``pinaka --pointer-check filename.c``

It performs checks like NULL pointer dereference, invalid pointer usage, pointer use after deallocation of memory, pointer access outside the bounds, dangling pointer.

### Use-after-free check

```c
#include <assert.h>

#define NULL 0

int max (int *p, int *q)
{
        int tmp1=*p;
        int tmp2=*q;
      if (tmp1 > tmp2) return tmp1;
      else return tmp2;


}

int main()
{

        int *a=NULL;
        int b=5;
        int *c = &b;
//      max(a,c);

        a=malloc(10*sizeof(int));
        *a=10;
        free(a);
        *a=5;

        return 0;
}

```

### Dangling pointer check example
```c
#include <assert.h>

#define NULL 0
int a;
int *q=&a;
void foo ()
{

        int x;
        q=&x;

}

int main()
{

        int *a=NULL;
        int b=5;
        int *c = &b;
        foo();
        b = *q;


        return 0;
}
```

### Outside dynamic object bounds check
```c
#include <assert.h>

#define NULL 0
int a;
int *q=&a;
void foo ()
{

        int x;
        q=&x;

}

int main()
{

        int *a=NULL;
        int b=5;
        int *c = &b;

        q=malloc(4*sizeof(int));

        *(q+5)=5;

        return 0;
}

```

### Outside object bounds 

```c
#include <assert.h>

#define NULL 0
int a;
int *q=&a;
void foo ()
{

        int x;
        q=&x;

}

int main()
{

        int *a=NULL;
        int b=5;
        int *c = &b;
        int d[] = {1,2,3,4};

        q=d;

        *(q+10)=10;
        return 0;
}

```

## Memory leak detection

Pinaka can check for memory leaks (allocated memory not freed during the lifetime of the program). Provide ``--memory-leak-check`` flag to perform such a check.

```c
include <assert.h>

#define NULL 0
int a;
int *q=&a;
void foo ()
{

        int x;
        q=&x;

}

int main()
{

        int *a=NULL;
        int b=5;
        int *c = &b;
        int d[] = {1,2,3,4};

        q=malloc(4*sizeof(10));
        *q=5;
        q=d;

        *(q+1)=10;
        return 0;
}

```

Use the command

``pinaka --memory-leak-check filename.c``

## Note

Please note that Pinaka being a single-path symbolic-execution engine with early pruning will return as soon as the first violation of the given property is encountered. All the other properties will remain un-checked, and therefore, the status of the other properties, even if shown `OK` does not indicate that these properties hold.

## Termination check

Pinaka unrolls any loop/recursion on-the-fly and therefore, the termination of the program can be checked by virtue of termination of execution of Pinaka itself. If Pinaka returns ``VERIFICATION SUCCESSFUL`` it also implies that the program terminates.

If the program is non-terminating (infinite loop or recursion), Pinaka will return if on some path there is a property violation, it will not terminate otherwise. 


