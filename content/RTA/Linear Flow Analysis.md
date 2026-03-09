---
tags: Analysis
aliases:
  - LFP
---

# Theory

The early time solutions for fractured horizontal well is a function of square root of time. The equations below have derived by Wattenbarger et al.[^1] for constant rate and constant pressure inner boundary conditions respectively.

![[Wattenbarger solution#Early-time approximations]]

where

$$
t_{Dx_f} = \frac{kt}{\phi \mu c_t X_f^2}
$$

and

$$
p_{wD}=\frac{kh(p_i-p_{wf})}{qB\mu}
$$

> [!Warning] Wattenbarger et al., assumed that a connected multi fractured system can be modelled as a single fracture with an equivalent fracture half length. Fracture interference is ignored in this assumption.

Using $X_{mf}$ for total fracture half length, the constant rate solution in dimensional form is given by

$$
\frac{kh}{B\mu}\frac{(P_i -P_{wf})}{q} = \sqrt{\frac{\pi kt}{\phi \mu c_t X_{mf}^2}}
$$

$$
\frac{P_i-P_{wf}}{q} = \frac{B}{h}\sqrt{\frac{\pi \mu}{\phi c_t}} \frac{1}{X_{mf} \sqrt{k}} \sqrt{t}
$$

The slope of [[Rate or Pressure normalizations|Rate normalized pressure]] vs sqrt of time can be used to estimate the invariants $X_{mf} \sqrt{k}$ and $A\sqrt{k} \;(= 4X_{mf}h\sqrt{k})$.

Estimating these quantities do not require the estimation of permeability which is often difficult to obtain in tight oil & gas due to the very late (or non) development of radial flow regime.

# Material Balance Time (applicability)

As rate transient analysis has historically focused on late-time pseudo-steady steady state regime, the general practice is to use [[Material Balance Time]] instead of time for the x-axis in diagnostic plots.

> [!Warning] Using material balance time, which is strictly valid only when pseudo-steady state is reached, could result in an over-estimation of $X_{mf}\sqrt{k}$, about 14% for constant pressure drawdown.

## Proof

Using the early time approximate solution for for constant pressure drawdown (see theory section above), material balance time $t_e = Q/q$ is given by,

$$
t_e = \frac{\int_0^t d\tau/\sqrt{\tau}}{1/\sqrt{\tau}}=2t
$$

Hence, plotting $\sqrt{t_e}$ instead of $\sqrt{t}$ will decrease the slope of the straight and by consequence increase the estimated value of $X_{mf}\sqrt{k}$ by a factor of $\sqrt{2}$.
