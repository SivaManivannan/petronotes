---
tags:
  - PVT
  - BlackOil
aliases:
---
# Molecular Quantities
Mass is the basic quantity for measuring the amount of a substance. The relative atomic mass of all other elements are measured have been determined relative to the carbon-12 element.

## Mole
According to the SI standard, **mole is the amount of substance of a system which contains as many elementary entities as there are atoms in 12g of carbon-12**. 

SI symbol for mole $n$ is mol or g mol. However, SPE SI standard used kmol = 1000 mol or g mol

>[!Tip] The number of atoms (or compounds) in 1 mol of a substance is always equal to Avogadro's number $6.022 \times 10^{23}$
>

# Molar mass
The term molecular weight has been replaced in the SI system by molar mass $M$. It is defined as the mass per mole $m/n$ where the unit mole must be consistent with the unit of mass.

The molar mass of methane is 16.04 which in various units can be written as: 16.04 (kg/kmol or lbm/lbm mol or g/g mol or g/mol)

# Component Fractions and Mixing Rules

For a mixture having $N$ components, $i = 1,...N$, the overall **mole fractions** are given by
$$ z_i = \frac{n_i}{\sum_{j=1}^N n_j} = \frac{m_i/M_i}{\sum_{j=1}^N m_j/M_j}$$
where $n, m, M$  are moles, mass and molecular weight respectively.

**Weight or mass fraction** is given by
$$ w_i = \frac{m_i}{\sum_{j=1}^N m_j} = \frac{n_iM_i}{\sum_{j=1}^N n_jM_j}$$
The relation for **volume fraction** based on component densities at standard conditions $\rho_i$ is given by
$$x_{vi} = \frac{m_i/\rho_i}{\sum_{j=1}^N m_i/\rho_i}$$
# Volumetric Properties

**Density** is defined as the ratio of mass to volume, $\rho = m/V$, expressed in units such as $kg/m^3$

**Molar density**, $\rho_M$, gives the volume per mole.
$$\rho_M = n/V$$
**Specific volume**, $\hat{v}$, is the ratio of volume to mass and is equal to the reciprocal of density.
$$\hat{v} = V/m = 1/\rho$$
**Molar volume** is the inverse of molar density (volume per mole)
$$v = V/n = 1/\rho_M$$
Isothermal compressibility of a fixed mass of materials is defined as,
$$c = -\frac{1}{V}\Big(\frac{\partial V}{\partial p}\Big)_T = -\frac{1}{\hat{v}}\Big(\frac{\partial \hat{v}}{\partial p}\Big)_T$$
In terms of density, $\rho$, and FVF $B$, isothermal compressibility is given by
$$c = \frac{1}{\rho}\Big(\frac{\partial \rho}{\partial p}\Big)_T = \frac{1}{B}\Big(\frac{\partial B}{\partial p}\Big)_T$$
### Specific gravity
According to the SI standard, relative density replaces specific gravity to define the ratio of the density of a specific mixture to the density of a reference material. The densities are usually measured at standard conditions (14.7 psia and 60°F).
$$\gamma = \frac{\rho(p_{sc}, T_{sc})}{\rho_{ref}(p_{sc}, T-{sc})}$$
$$\gamma_o = \frac{(\rho_o)_{sc}}{(\rho_w)_{sc}} \quad and \quad \gamma_o = \frac{(\rho_g)_{sc}}{(\rho_{air})_{sc}}$$

Air is used as the reference material for gas and water is used as the reference material for liquids. The oil gravity, $\gamma_{API}$, in degrees API is sued to classify crude oils on the basis of the following relation.

$$\gamma_{API} = \frac{141.5}{\gamma_o} - 131.5$$

where $\gamma_o$ is the oil specific gravity (water = 1).