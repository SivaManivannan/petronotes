---
tags:
  - PVT
  - BlackOil
aliases:
---
# Free Volume Fraction (FVF)

FVF or B is defined as the volume of the mixture at specific condition divided by the volume of the product phase at standard conditions. The surface product phase may consist of all or part of the original mixture.
$$
B = \frac{V_{mixture}(p,T)}{V_{product}(p_{sc}, T_{sc})}
$$
The units of $B$ are bbl/STB for oil and water, and $ft^3/scf$ or bbl/Mscf for gas.

Primarily four volume factors are used in Petroleum engineering.
$$B_o\;(Oil \; FVF) = \frac{V_o}{(V_o)_{sc}}$$
$$B_g\;(Gas \; FVF) = \frac{V_g}{(V_g)_{sc}}$$
$$B_w\;(Water \; FVF) = \frac{V_w}{(V_w)_{sc}}$$
$$B_t\;(total \; FVF \; gas/oil \; system) = \frac{V_o +V_g}{(V_o)_{sc}}$$
$$B_{tw}\;(total \; FVF \; gas/water \; system) = \frac{V_w +V_g}{(V_w)_{sc}}$$
## Wet/condensate gas
 For [[Classification of Oil Field Systems|Wet gas]] and [[Classification of Oil Field Systems|Gas condensate]] systems that produce liquids at the surface, the surface gas product consists of only a part of the reservoir gas mixture. Two gas FVFs are used for these systems.
 - $B_{gd}$ or **dry FVF** is the ratio of the reservoir gas to the actual surface separator gas
 - $B_{gw}$ or **wet FVF** is the ratio of the reservoir gas to a hypothetical "wet" surface-gas volume in which actual surface gas volume and surface condensate volume are combined into an equivalent surface gas volume. 

>[!Important] The standard definition $Bg$ represents the wet gas FVF

# Gas-Oil Ratios

When reservoir mixture produces both oil and gas at the surface, **Gas oil ratio (GOR)** is defined as the ratio of gas volume at surface conditions to oil volume at surface or separator conditions. The typical units are scf/STB and scf/bbl, respectively. The separator conditions should be reported when separator GOR is used. 

**Solution gas/oil ratio**, $R_s$, (units scf/STB) is the volume of gas (at standard conditions) that was dissolved in the reservoir oil at liberated at the surface conditions divided by the result stock tank oil volume.

- Above bubble point pressure: oil is single phase in reservoir (no free gas), therefore $R_s$ = constant (maximum value).
- Below bubble point pressure: gas comes out of oil in the reservoir conditions so naturally there is less dissolved gas in the reservoir oil to be released at the surface and hence $R_s$ decreases.

**Producing gas/oil ratio**, $R_p$, is the instantaneous ratio of total surface gas volume produced to the total stock tank oil volume. This gas volume includes both free gas flowing in the reservoir and the dissolved gas released at the surface.
- Above bubble point pressure, there is no gas in reservoir and $R_p = R_s$
- Below bubble point pressure, there is free gas in the reservoir. In addition, gas in the reservoir typically has higher mobility than oil. As a result, $R_p$ can be 10 or 20 times that of $R_s$.

>[!Note] $R_s$ is a property of the reservoir fluid (thermodynamic equilibrium) and does not depend on the flow effect (mobilities) like $R_p$

## Condensate gas

The surface volume ratio is usually expressed as an **oil/gas ratio (OGR)** which is simply the inverse of GOR with both oil and gas volumes measured at surface conditions. The more common unit is "barrels per million" STB/MMscf. 
To avoid misinterpretation, it should be clearly specified whether OGR includes natural gas liquids (propane, butane etc.) in addition to stock tank condensate. In most petroleum engineering calculations, NGL's are not included in the OGR.

**Solution oil/gas ratio $r_s$** the ratio of surface oil to surface gas produced from a single phase reservoir gas. 
- At pressures above the dew point, **producing OGR $r_p$**, is equal to $r_s$
- At pressures below the dew point, $r_p$ is typically equal or just slightly greater than $r_s$ because oil is almost immobile in a condensate gas reservoir. 

# Viscosity

Dynamic viscosity $\mu$ for Newtonian flow, which most petroleum mixture follows is usually expressed in centipoise (cp) or in SI units mPa.s, where 1 cp = 1 mPa.s.

# Diffusion coefficients

In the absence of bulk flow, components in a single phase mixture are transported according to gradients in concentration. Fick's law or 1D molecular diffusion in a binary system is given by,
$$u_i = -D_{ij} \frac{dC_i}{dx}$$
where $u_i$ is the the velocity of component $i$, $C_i$ its concentration and $D_{ij}$ is the binary diffusion coefficient. 

>[!Important] Molecular diffusion is particularly important in naturally fractured reservoirs due to strong concentration variations over short distances (small matrix blocks)

At low pressures, binary diffusion coefficient of gases $D_{ij}^o$ can be accurately calculated from gas theory. At high pressures, a correction is required, usually in the form of $D_{ij}^o f(T_r, p_r)$ or $D_{ij}^o f(\rho_r)$, but there is no well accepted method. 

>[!Note] At low pressures, diffusion coefficients of liquids is several orders of magnitude smaller than the gases. At reservoir pressures, this difference may be less than one order of magnitude.

# Interfacial forces
Interfacial forces act between equilibrium gas, oil and water phases coexisting in pores of the reservoir rock. The units of interfacial tension, $\sigma$, is dynes (= mN/m). Gas/oil capillary pressure $P_c$ is directly proportional to interfacial tension according to Young-Laplace equation $P_c = 2\sigma/r$, where $r$ is the average pore radius.



