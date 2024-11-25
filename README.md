- 2024-11-24 学习Vue2第一天

# Fundamentals of Topology

## Problem Set 1

**Topics covered**: metric spaces, topological spaces, continuous maps, convergence and limit points.

---

### 1.1. Check the metric space axioms for the following cases:

1. **(\( l_p \)-spaces)**: \( X = \mathbb{R}^n \) (the \( n \)-dimensional real vector space of \( n \)-tuples \( x = (x_1, \ldots, x_n) \)),
   \[
   \rho(x, y) = \left( \sum_{i=1}^n |x_i - y_i|^p \right)^{1/p}, \quad p \geq 1 \text{ is a fixed real number}.
   \]

2. **Bounded Maps**: \( X = B(U, V) \) -- the set of all bounded maps \( f: U \rightarrow V \) of metric spaces \( (U, d_U) \) and \( (V, d) \) ( \( f \) is bounded if \( \text{Diam} \, fU \) is finite; the diameter is calculated with respect to \( d \) -- the metric on the codomain \( V \); note that \( f \) is not assumed to be continuous). The metric is
   \[
   \rho(f, g) = \sup_{u \in U} d(f(u), g(u)).
   \]

3. **\( p \)-adic Numbers**: \( X = \mathbb{Q} \) -- the set of rational numbers. For a fixed prime number \( p \) and \( x \in \mathbb{Q} \), define the
   **\( p \)-adic absolute value** of \( x \) as
   \[
   |x|_p = p^{-v_p(x)},
   \]
   where the **\( p \)-adic valuation** \( v_p(x) \) is the difference \( \text{ord}_p(u) - \text{ord}_p(v) \) between the multiplicities of \( p \) in the prime factorization of the numerator \( u \) and the denominator \( v \) of \( x = \frac{u}{v} \) (this is easily seen to be independent of the choice of the presentation \( x = \frac{u}{v} \); also, we set \( \text{ord}_p(0) = \infty \)). Define the **\( p \)-adic metric** as
   \[
   d_p(x, y) = |x - y|_p.
   \]

4. **Hamming Distance**: \( X = \{0, 1\}^n \) with the **Hamming distance**
   \[
   d_H(x, y) = |\{ i : x_i \neq y_i \}|, \quad x = (x_1, \ldots, x_n), \quad y = (y_1, \ldots, y_n).
   \]

---

### 1.2.

Let \( X \) be a set, \( P(X) \) be the powerset of \( X \) (i.e., the set of all subsets of \( X \)). Recall that **the closure operator** is the map
\[
\kappa: P(X) \rightarrow P(X),
\]
which satisfies the **Kuratowski axioms**:

- **(K1)**. \( \kappa(\emptyset) = \emptyset \);
- **(K2)**. \( \forall M \subseteq X, \; M \subseteq \kappa(M) \);
- **(K3)**. \( \forall M \subseteq X, \; \kappa(M) = \kappa(\kappa(M)) \);
- **(K4)**. \( \forall M, N \subseteq X, \; \kappa(M \cup N) = \kappa(M) \cup \kappa(N) \).

#### A. 

Prove that **every closure operator** defines a **topology** on \( X \); conversely, if \( X \) is given a topology, then the function \( M \mapsto \overline{M} \) (taking the closure of a set) is a closure operator.

#### B. 

Verify that the axioms (K1) -- (K4) can be derived from the following property:
\[
\forall M, N \subseteq X, \;\; M \cup \kappa(M) \cup \kappa(\kappa(N)) = \kappa(M \cup N) \setminus \kappa(\emptyset).
\]

#### C. 

Let \( \kappa_1, \kappa_2 \) be two closure operators on \( X \), and let \( \tau_1, \tau_2 \) be the corresponding topologies on \( X \). Prove that if
\[
\forall M \subseteq X, \; \kappa_2(M) \subset \kappa_1(M),
\]
then \( \tau_1 \preceq \tau_2 \).

#### D. 

Let \( X \) be a topological space. For every subset \( M \subseteq X \), consider the set
\[
[M]_{\text{Seq}} = \{ x \in X : \exists \{x_n\} \rightarrow x, \, x_n \in M \}
\]
-- the set of all points in \( X \) for which there exists a sequence of points in \( M \) converging to that point (the set \( [M]_{\text{Seq}} \) is called the **sequential closure** of \( M \)). Define the **sequential closure operator**:
\[
[\;]_{\text{Seq}}: P(X) \rightarrow P(X), \quad M \mapsto [M]_{\text{Seq}}.
\]
Check that \( [\;]_{\text{Seq}} \) satisfies **(K1)**, **(K2)**, and **(K4)**. *(We note that (K3) does not generally hold; however, getting into counterexamples can be a chore, which is why we do not ask for a proof of that statement here.)*

---

### 1.3.

#### A. 

Prove that **every metric space** \( X \) is a **normal space**: any two disjoint non-empty closed subsets \( F_1, F_2 \) of \( X \) can be separated by disjoint neighborhoods (recall that a neighborhood of a set is by definition any open set that contains it as a subset).

#### B. 

Is it possible for two disjoint non-empty closed subsets \( F_1, F_2 \) of a metric space \( X \) to have the distance between one another equal to zero?

---

### 1.4.

A (not necessarily continuous) function \( f: \mathbb{R} \rightarrow \mathbb{R} \) is called **additive** if
\[
f(x + y) = f(x) + f(y), \quad \forall x, y.
\]
It is a known exercise from single-variable calculus that a **continuous additive function** \( f \) is necessarily a **linear function** \( f(x) = cx, \; c \in \mathbb{R} \). Prove that if an additive function \( f \) is **discontinuous**, then its **graph**
\[
\Gamma_f = \{ (x, y) \in \mathbb{R}^2 \mid f(x) = y \}
\]
is a **dense subset** of \( \mathbb{R}^2 \).

---

### 1.5.

Let \( X \) be a topological space. The following definitions serve as partial generalizations of the concepts of **convergent sequence** and **limit point** known from calculus.

1. A **sequence** \( \{x_n\} \) of points \( x_n \in X \) **converges** in \( X \) to a point \( x \) if every (open) neighborhood \( U_x \) of the point \( x \) contains all points of the sequence \( \{x_n\} \) with \( n \geq n_0 \) for some \( n_0 \).
2. A point \( x \) is called a **limit point** of a set \( M \subseteq X \) if every neighborhood \( U_x \) of \( x \) contains a point \( y \) of \( M \) distinct from \( x \).
3. A point \( x \) is called an **\( \omega \)-accumulation point** of a set \( M \subseteq X \) if every neighborhood \( U_x \) of \( x \) contains infinitely many points of \( M \).
4. A point \( x \) is called a **condensation point** of an **uncountable** set \( M \) if every neighborhood \( U_x \) of \( x \) contains an **uncountable** subset of \( M \).
5. A point \( x \) is called a **complete accumulation point** of a set \( M \subseteq X \) if for every neighborhood \( U_x \) of \( x \), the cardinality of the set \( U_x \cap M \) is equal to the cardinality of \( M \).

Denote the set of limit points of \( M \) as \( M' \).

#### A. 

Prove that the **closure** \( \overline{M} \) of \( M \) in \( X \) coincides with \( M \cup M' \).

#### B. 

Let \( X \) be a **metric space**. Then \( x \) is a **limit point** of \( M \) if and only if there exists a **sequence** of points of the set \( M \setminus \{x\} \) which **converges** to \( x \).

For **general topological spaces**, the above statement is false, as can be seen in the following example.

#### C. 

Let \( X \) be the **real numbers** with the following **topology**: declare a subset **open** if it is obtained by subtracting a **not more than countable set** of points from some open subset of the **real line** \( \mathbb{R}^1 \) (i.e., the reals with the standard topology; verify that this definition does indeed specify a topology). Then:

- **No countable set** in \( X \) has a **limit point** (therefore, no countable set has an **\( \omega \)-accumulation point**);
- If \( M \) is an **uncountable subset** of \( X \), then the set \( M' \) of its **limit points** coincides with the set of **condensation points** of \( M \) in the topology of the real line;
- The **only sequences** in \( X \) that **converge** are **stationary sequences** (i.e., the ones that have \( x_n = x_{n+1} = \ldots \) starting at some \( n \)), so that if \( x \) is a **limit point** of \( M \) that is **not** in \( M \), there is **no sequence** in \( M \) that **converges** to \( x \).

---
