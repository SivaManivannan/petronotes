---
tags: Analysis
aliases:
---

Black Oil pseudo-steady state equation is given by
$$\frac{q_o(t)}{p_i - p_{wf}(t)} = \frac{1}{b_{pss}+m_{pss}\bar{t}}$$

Applying Taylors expansion to $(b_{pss} + m_{pss}\bar{t}\;)^{-1}$ and neglecting higher order terms will yield $(b_{pss} - m_{pss}\bar{t}\;)$

Hence, when the pseudo-steady state dominates $q_o/\Delta p$ vs $\bar{t}$ will show a negative unit slope.

In addition to normalized rate, two additional channels are also plotted to facilitate the diagnostic.


![[Rate or Pressure normalizations#Pressure Normalized Rate]]

## Derivation

The [[Pseudo steady state (Liquid)]] equation as a function of $b_{pss}$ is,
$$p_{wf}(t)=  p_i - \frac{qB}{V_p c_t}t- q\times b_{pss}$$
The above equation was derived using a constant rate assumption. To extend it to varying rate let's replace the volume term $qt$ with $\int_0^tqdt$ and subsequently with [[Material Balance Time]] $\bar{t}$.
$$p_{wf}(t)=  p_i - \frac{q(t)B}{V_p c_t}\bar{t}- q(t)\times b_{pss}$$

Rearranging the terms and replacing pore volume $V_p$ with $NB_{oi}$, where $N$ is the initial oil in place measured at surface conditions and $B_{oi}$ is the volume factor at initial conditions gives,
$$\frac{q_o(t)}{p_i - p_{wf}(t)} \Big[\frac{B_o}{Nc_tB_{oi}}\bar{t} + b_{pss}\Big] = 1$$

Using $m_pss = B_o/Nc_tB_{oi}$ this can be rewritten as $$\frac{q_o(t)}{p_i - p_{wf}(t)} = \frac{1}{b_{pss}+m_{pss}\bar{t}}$$