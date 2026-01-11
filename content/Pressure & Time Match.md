---
tags:
  - KAPPA
aliases:
  - PM
  - TM
---

Pressure match (units = 1/Pressure) and time match (units = 1/Time) are used to express the solutions to diffusivity equation in a dimensionless form .

They are used as multiplication factors to calculate results from Specialized analysis plots. 

## Equations

For single phase oil or water, the pressure match is given by
$$
PM = \frac{2\pi kh}{q_{ref}B\mu}
$$

The time match is given by
$$
TM = \frac{3600*k}{\phi\mu c_t r_w^2}
$$
The factor 3600 is because the internal default unit for time in KAPPA software is hours and not seconds, where as the other quantities are expressed in their SI unit.


![[Test parameters#Definitions]]


> [!tip]  $k$ from LogLog plot is used in the equations above when there is no model. When, there is a model $k$ from the model is used
