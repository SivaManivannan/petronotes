---
tags: Analysis
aliases:
  - FMB
Inputs:
---
# Theory 

Flowing material balance (FMB) is an extension of the [[Material Balance Analysis (Gas)]]. FMB allows the use of  flowing pressures $p_{wf}$ instead of $\bar{p}$  extrapolated from shutin pressures to estimate initial Gas in place.

### Classical Material Balance
![[Material Balance Analysis (Gas)#Theory]]


If the reservoir permeability is infinite, we could place $\bar{p}$ with with well flowing pressure $p_{wf}$. Dynamic material balance accounts for the pressure loss in the reservoir due to permeability and skin by assuming a pseudo steady state flow regime. 

The equations from dynamic material balance are summarized below.
## Dynamic Material Balance

![[Pseudo steady state (Gas)#Equations]]

![[Material Balance Time#Gas (pseudo-time)]]
# Practice

Computing initial gas in place $G$ involves solving Eqs. 2 and 4. The known inputs are $p_{wf}(t)$, $q_g(t)$, $p_i$, $c_{ti}$, and gas PVT properties. The main unknowns are $G$, $b_{pss}$, $\bar{p}(t)$.

Once $\bar{p}(t)$ is computed from these inputs, once can use the classical material balance plot of $\bar{p}/Z$ vs $G_p$ to estimate the gas in place $G$.   
$\bar{p}(t)$ can be computed from Eq. 2 once $b_{pss}$ is computed. Computing $b_{pss}$ using Eq. 4 requires computing $\tilde{t}_a$ which is a function of PVT properties computed at ${\bar{p}}$. An interative approach is typically used to solve this chicken-egg problem.