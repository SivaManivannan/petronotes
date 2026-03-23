---
tags:
  - Concept
  - PVT
  - OilGas
aliases:
---
## Phase Equilibrium

Phase equilibrium describes the condition where two or more phases (oil, gas, water and/or solid) can coexist without any further change over time.

Following conditions needs to be satisfied to attain equilibrium.

- No net Interphase Mass Transfer
- Equal Temperature and Pressure
- Equality of Chemical Potential
- Other forces like gravity and capillarity in addition to chemical potential

## No net Interphase Mass Transfer

Molecules may move between phases, for example gas molecules dissolving into oil and oil components vaporizing as gas, but the rate going one way is equal to the rate going another. As a result, there is no overall change in phase compositions.

## Equal Temperature and Pressure

- If temperature differed: heat would flow
- If pressure differed: fluid would move
  Either case would disturb equilibrium.

## Equality of Chemical Potential

The chemical potential of a component is essentially its escaping tendency of thermodynamic driving force. For component $i$
$$\mu_i^{(oil)} = \mu_i^{(gas)}$$

This means each component has the **same chemical potential in every phase**. Otherwise, mass transfer would occur and the system would adjust until equality is reached.

In practical PVT modeling, fugacity $f_i$ equality is used instead of chemical potential. The equation fugacity is enforced using an Equation of State like Peng-Robinson.

This determines: bubble point, dew point, flash calculations, phase compositions.

## Other Forces (more stringent definition)

### Gravity

In a tall reservoir column, pressure increases with depth and this composition can vary with depth. Strict equilibrium requires gravitational potential energy to be included in chemical potential. The modified condition thus becomes:
$$\mu_i + M_igz = constant$$
where $M_i$ is molecular weight of the component.
This explains **gas-oil contacts** and **compositional grading** of the reservoirs.

### Capillarity

In porous media, curved fluid interfaces inside pores can cause pressure differences and this is called capillary pressure $P_c$
$$P_c = P_g - P_o$$
So in a strict sense, pressure of the phases may not be equal at a microscopic scale. And equilibrium must account for interfacial energy effects.
