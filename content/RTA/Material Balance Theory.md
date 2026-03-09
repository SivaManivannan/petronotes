---
tags:
  - Concept
aliases:
---

## Use

Material balance analysis is an interpretation method used to estimate original fluids in place ( [[Volumetrics|STOIP]], [[Volumetrics|STGIP]]) based on measured production data and estimated reservoir static pressures.

## Assumptions

- The reservoir has same pressure everywhere
- Fluid properties are constant everywhere in the reservoir

## Theory

Considering a control volume that includes the reservoir and all the wells in it, the general form of the mass balance can be stated as:
_Fluids withdrawn - Fluids injected (@ reservoir conditions) = Oil & dissolved gas expansion + Gas expansion in Gas cap + Water influx + Rock compression adding to production_

Note that the volumes are often measured only at surface conditions and needs to be converted to reservoir conditions.

### Oil + solution gas expansion

After a pressure drop in the reservoir, oil volume factor changes from its initial value $B_{oi}$ to $B_o$. Oil expansion due to this pressure drop is given by $N(B_o - B_{oi})$.

$NR_{si}$ is the scf of gas initially dissolved in oil. As a result of the pressure drop in the reservoir, the reservoir oil can only dissolve $R_s \:(< R_{si})$.

Total oil expansion is given by:

$$
NE_o = N [B_o - B_{oi}+(R_{si}-R_s)B_g]
$$

When pressure drops below the bubble point $(B_o - B_{oi})$ becomes negative but it is more than compensated by term: $(R_{si}-R_s)B_g$.

### Gas cap expansion

As there is no dissolved oil in Gas cap, the gas cap expansion is simply $G(B_g-B_{gi})$. This expansion can be expressed using other terms as:

$$
G(B_g-B_{gi}) = mN\frac{B_{oi}}{B_{gi}} (B_g - B_{gi}) = mN\frac{B_{oi}}{B_{gi}} E_g
$$

> [!Tip] The presence of a gas cap implies that the initial pressure in the oil column must be equal to the bubble point pressure.

### Water Influx from Aquifer

Using a pot aquifer model, the volume of water crossing into oil zone can be expressed as:

$$
W_e = Wc\Delta P
$$

Water expansion from the aquifer into the reservoir is $W_eB_w$

### Connate water expansion & water compression

Pore volume available for hydrocarbon is given by

$$
V_h = V_t N_G \phi (1-S_{wi}) = V_t N_G \phi - V_w
$$

$$
 \frac{\partial V_h}{\partial P} = V_t N_G \frac{\partial \phi}{\partial P} - \frac{\partial V_w}{\partial P}
$$

Compressibility terms are given by

$$
 c_w = -\frac{1}{V_w} \frac{\partial V_w}{\partial P} \quad and \quad c_{\phi} = \frac{1}{\phi} \frac{\partial \phi}{\partial P}
$$

Combining the two yields

$$
\frac{\partial V_h}{\partial P} = V_t N_G C_\phi \phi + V_w c_w = \frac{V_h}{1-S_{wi}}(c_{\phi} \:+c_wS_{wi})
$$

> [!tip] $\frac{\partial V_h}{\partial P}$ is positive because the compression of rock is adding to production

Note that initial hydrocarbon volume was $V_h = NB_{oi}\:+GB_{gi}\:=(1+m)NB_{oi}$. Combining the two equations, we get,

$$
\Delta V_h = (1+m)NB_{oi}\Big[\frac{c_{\phi} \:+c_wS_{wi}}{1-S_{wi}}\Big]\Delta P
$$

## Nomenclature

![[Volumetrics#Nomenclature (Volumes)]]

### Material balance terms

| Variable     | Equation                                                   | Definition                                             |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------------ |
| $m$          | $\frac{GB_{gi}}{NB_{oi}}$                                  | Ratio of gas cap to original oil in place              |
| $E_o$        | $B_o - B_{oi} + B_g(R_{si}-R_{s})$                         | Oil expansion coefficient                              |
| $E_g$        | $B_g-B_{gi}$                                               | Gas expansion coefficient                              |
| $E_{\phi w}$ | $\Big[\frac{c_{\phi} \:+c_wS_{wi}}{1-S_{wi}}\Big]\Delta P$ | Connate water expansion + rock compression coefficient |

The material balance terms above are all dimensionless.

![[PVT Parameters]]
