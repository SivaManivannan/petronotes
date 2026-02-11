---
tags: Analysis
aliases:
---
## Theory

The classical material balance expresses a relationship between the average pressure in the reservoir and the amount of gas produced. This assumes that the reservoir is a **dry gas** with no external pressure support.
$$
\frac{\bar{p}}{Z(\bar{p})} = -\Big(\frac{p_i}{G_iZ_i}\Big)G_p+\frac{p_i}{Z_i}
$$
$G_p$ is the volume of gas produced at the surface where as $G_i$ is the volume of gas initially in place.

The material balance plot of $\bar{p}/z$ (y-axis) vs $G_p$ (x-axis) is a straight line going from initial pressure $p_i/Z_i$ (y-intercept) to initial gas in place $G_i$ (x-intercept).

>[!info] In order to generate a $\bar{p}/z$ plot, the well is shut-in at several points along its producing life, and its average reservoir pressure is obtained from the interpretation of the pressure buildups. Often, the duration of the shutin is not long enough and the buildup data needs to be extrapolated to compute average pressures which could affect the validity of $\bar{p}$ computed.

>[!warning] It is assumed here that gas compressibility $c_g$ is constant at initial condition. This can be a significant source of error as depletion progresses.
## Derivation

In a dry gas reservoir, [[Material Balance Theory]] states volume of gas produced at the surface $G_p$ when converted to reservoir conditions should be equal to gas expansion in the reservoir. 
$$
Gi(B_g-B_{gi}) = G_pB_g
$$
or,
$$
\Big(1-\frac{B_{gi}}{B_{g}}\Big) = \frac{G_p}{G_i}\tag{1}
$$
The state equation for real gas is $PV = ZnRT$

Gas formation volume factor is the ratio of gas volume at reservoir condition to the gas volume at standard condition, that is,
$$
B_g = \frac{V}{V_{sc}} = \frac{P_{sc}}{T_{sc} Z_{sc}} \frac{ZT}{p}
$$
Assuming that the reservoir temperature remains constant during the entire production period, 
$$
\frac{B_{gi}}{B_g} = \frac{Z_i}{p_i} \frac{\bar{p}}{Z} \tag{2}
$$

Substituting (2) in (1), multiplying with $p_i/Z_i$ and rearranging the terms yields,
$$
\frac{\bar{p}}{Z} = -\Big(\frac{p_i}{G_iZ_i}\Big)G_p+\frac{p_i}{Z_i} \tag{3}
$$