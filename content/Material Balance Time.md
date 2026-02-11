---
tags: Concept
aliases:
  - te
---

## Oil

Material balance time for oil is simply cumulative volume divided by rate

$$
 t_e = \frac{Q(t)}{q(t)} = \frac{\int_0^t q(\tau)d\tau}{q(t)}
$$

## Gas (pseudo-time)
Using the [[Pseudo functions (Gas)|pseudo time]] definition to correct for changes in PVT properties, the material balance pseudo-time for gas (normalized) is given by

$$
\tilde{t}_{a}(t) =\frac{\mu_{ref}c_{t, ref}}{q(t)} \int_0^t\frac{q(\tau)}{\mu (\bar{p})c_t (\bar{p})}d\tau
$$
## Use

Material balance time in RTA is the equivalent of superposition time in PTA and is used in almost all diagnostic plots

$Q(t)$ is always monotonically increasing but the same cannot be said about $q(t)$ and as extension $t_{M}$. Sorting is performed in the diagnostic plots in RTA to have a monotonically increasing $t_{M}$.


## Equations