---
tags: Concept
aliases:
  - Rate normalized pressure
  - Integral of normalized pressure
---

## Rate Normalized Pressure

**Rate normalized pressure** (units = Pressure/Rate):

$$
\frac{p_i-p_w(t)}{q(t)}
$$
When the rate normalized pressure is directly used, the noise levels on the Bourdet derivative is quite high. A smoothened version (given below) is typically used.

**Integral of normalized pressure** (units = Pressure/Rate):

$$
I(t) = \frac{1}{t} \int_{0}^{t_e} \frac{p_i - p_w(\tau)}{q(\tau)}d\tau
$$

**Bourdet derivative of Integral normalized pressure** (units = Pressure/Rate):

$$
I^{'}(t) = \frac{\partial I(t)}{\partial ln(t)}
$$
## Pressure Normalized Rate

**Normalized rate** is same as productivity index

$$
PI(t) = \frac{q(t)}{p_i - p_{wf}(t)}
$$
As in the case of pressure, it is a general practice to use **normalized rate integral** to suppress noise.
$$
PI.Int = \frac{1}{t_{e}}\int_{0}^{t_e} \frac{q(\tau)}{p_i - p_w(\tau)}d\tau
$$
**Normalized rate integral derivative** is given by

$$
PI.Int.Derivative = \frac{\partial(PI.Int)}{\partial ln(t_e)}
$$
## Use

Normalized pressures or 1/Normalized pressures are commonly plotted in the y-axis of RTA diagnostic plots. 
The several variations with subtle name changes which make them slightly difficult to follow compared to their cousin $\Delta P$ in PTA.