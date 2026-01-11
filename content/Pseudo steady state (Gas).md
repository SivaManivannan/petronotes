---
tags: Concept
aliases:
  - PSS (gas)
---

# Equations

[^1]Palacio and Blasingame derived the analytical equations extending [[Pseudo steady state (Liquid)]] equations to gas (shown in the derivative section). $\tilde{m}$ is normalized pseudo pressure and $\tilde{t}_a$ is normalized material balance pseudo-time.

$$\frac{\tilde{m}(p_i)-\tilde{m}(\bar{p})}{q_g(t)} = \frac{1}{Gc_{ti}}\tilde{t}_a \tag{1}$$

The pseudo steady state flow equation for real gas[^1][^2] in terms of normalized pseudo-pressure is

$$ \tilde{m}(\bar{p})-\tilde{m}(p_{wf}) = q_g(t)b_{a,pss} \tag{2}$$

where,
$$b_{a,pss} = \frac{B_{gi}\mu_{gi}}{2\pi kh} \Big[ \frac{1}{2}ln\big( \frac{4A}{e^{\gamma}r_w^2C_A}\big) + s\Big] \tag{3}$$
Combining the two yields,
$$\frac{\tilde{m}(p_i)-\tilde{m}(p_{wf})}{q_g(t)} = \frac{1}{Gc_{ti}}\tilde{t}_a + b_{a,pss} \tag{4}$$

# Derivation

## Material balance

Using $P\times M = \rho ZRT$, where $M$ is the molar weight of gas, the compressibility of gas can be expressed as,
$$c_g = \frac{1}{\rho} \frac{d\rho}{dp} = \frac{ZRT}{PM}\frac{d}{dp}\Big( \frac{p}{Z}\times \frac{M}{RT}\Big)$$

Eliminating the constants and evaluating the $c_g$ at average reservoir pressure $\bar{p}$ yields
$$ \left. \frac{d}{dp} \big(\frac{p}{Z}\big)\right |_{p=\bar{p}} = \frac{\bar{p}}{\bar{Z}}\bar{c}_g \tag{A.1}$$

where $\bar{Z} = Z(\bar{p})$ and $\bar{c}_t = c_t(\bar{p})$.

From [[Material Balance Analysis (Gas)]] for cumulative production, we have
$$\frac{\bar{p}}{\bar{Z}} = \frac{p_i}{Z_i}\Big(1-\frac{G_p}{G}\Big)$$
Differentiating w.r.t time and applying chain rule to RHS yields

$$\left. \frac{d}{dp} \big(\frac{p}{Z}\big)\right |_{p=\bar{p}} \frac{d\bar{p}}{dt} = -\frac{p_i}{GZ_i}q_g(t)$$
Substituting from (A.1) and rearranging yields
$$q_g(t) = -\frac{GZ_i}{p_i}\frac{\bar{p}}{\bar{Z}}\bar{c}_g\frac{d\bar{p}}{dt} \tag{A.2}$$

![[Material Balance Time#Gas (pseudo-time)]]

Using $\mu_{gi}$ and $c_{ti}$ as reference properties for normalization and substituting (A.2) in the equation above yields,
$$\tilde{t}_{a} = \frac{\mu_{gi}c_{ti}}{q_g(t)} \big(-\frac{GZ_i}{p_i}\big)  \int_0^t \frac{\bar{p}}{\bar{Z}}\bar{c}_g \frac{1}{\bar{\mu}_g\bar{c}_t} \frac{d\bar{p}}{d\tau}d\tau$$

Assuming that formation compressibility is negligible compared to the gas compressibility, $c_t \cong c_g$, and changing the variable of integration from time to pressure,
$$\tilde{t}_{a} = -\frac{G c_{ti}}{q_g(t)} \big(\frac{\mu_{gi}z_i}{p_i}\big) \int_{p_i}^{\bar{p}}\frac{p}{\mu_gZ}dp$$
The RHS can be further simplified using
![[Pseudo functions (Gas)#Normalized pseudo pressure#Mattar-Anderson / Blasingame normalization]]

$$\tilde{t}_a =G c_{ti} \frac{\tilde{m}(p_i)-\tilde{m}(\bar{p})}{q_g(t)}$$

which can be rearranged to yield 
$$\frac{\tilde{m}(p_i)-\tilde{m}(\bar{p})}{q_g(t)} = \frac{1}{Gc_{ti}}\tilde{t}_a \tag{A.3}$$

## References

[^1]: Palacio J.C., Blasingame T.A. (1993) Decline Curves Analysis Using Type Curves: Analysis of Gas Well Production Data, SPE 25909, presented at the 1993 SPE Rocky Mountain Regional/Low Permeability Reservoirs Symposium, Denver, CO, 12-14 April.

[^2]:Al-Hussainy, R., and H.J. Ramey. "Application of Real Gas Flow Theory to Well Testing and Deliverability Forecasting." _J Pet Technol_ 18 (1966): 637–642. doi: [https://doi.org/10.2118/1243-B-PA](https://doi.org/10.2118/1243-B-PA)
