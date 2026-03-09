---
tags: Concept
aliases:
  - m(p)
  - pseudo pressure
  - pseudo time
---

Two main assumptions: slightly compressible fluid and constant viscosity are typically used to simplify the diffusivity equation in order to find closed form analytical solutions. These assumptions do not hold true for gas reservoirs. Fortunately, there is a simple work around by replacing pressures in the diffusivity equation with pseudo-pressures.

# Pseudo pressure

$$
m(p) = \int_0^p{\frac{2p'}{\mu(p') Z(p')}dp'} \tag{1}
$$

Note that the computation of $m(p)$ vs $p$ table is not dependent on the flowing pressures or reservoir pressures.

## Normalized pseudo pressure

The field unit for pseudo pressures is psi²/cp, and the order of magnitude is $10^9$, which makes
them unintuitive to manipulate. An alternative is to use normalized pseudo pressures whose dimension is pressure. Below are two versions of normalized pseudo pressure.

### KAPPA

Apply a factor related to a reference pressure at which the normalized pseudo pressure equals
the pressure. The normalized pseudo pressure has the dimension of pressure.

$$
\tilde{m}(p) = m(p) \frac{p_{ref}}{m(p_{ref})}
$$

### Mattar-Anderson / Blasingame normalization

$$
\tilde{m}(p) = \frac{m(p)}{(p/\mu_gZ)_i}= \frac{\int_0^p{\frac{2p'}{\mu(p') Z(p')}dp'}}{(p/\mu_gZ)_i}
$$

# Pseudo time

Pseudo time integrand is given by:

$$
I(p) = \frac{1}{\mu (p)c_t (p)}
$$

And the pseudo time is given by:

$$
t_{ps}(t) = \int_0^tI(p(\tau))d\tau
$$

The choice of $p(\tau)$ depends on the problem at hand. If one desires to correct the wellbore effect, wellbore pressure $p_{wf}(t)$ needs to be used. If the goal is to do a late time material balance correction, average reservoir pressure $\bar{p}$ needs to be used.

## Normalized pseudo time

Normalized pseudo time whose units is same as time is given by

$$
\tilde{t}_{ps}(t) =\mu_{ref}c_{t, ref} \int_0^tI(p(\tau))d\tau
$$

# Pseudo time computation in practice

As $\bar{p}$ cannot be measured it needs to estimated, often involving iterative loops. The typical process involves

1.  Start with an initial estimate of reservoir initial pressure $p_i$ and volume. Compute initial gas in place $G_i$ using these two parameters.
2.  At each time step cumulative production is calculated and subtracted from $G_i$
3.  Use $\bar{p}/Z$ equation from [[Material Balance Analysis (Gas)]] to compute $\bar{p}(t)$
4.  Use this $\bar{p}(t)$ to compute pseudo time for use in diagnostic plots

# Derivation

Gas diffusion equation in an isotropic dry gas reservoir is given by

$$
\frac{p}{\mu Z}\frac{\partial p}{\partial t} = \frac{k}{\phi \mu c_t} \nabla\cdot \frac{p}{\mu Z}\nabla p
$$

Applying partial time derivative and gradient to $m(p)$ from Eq. (1) shows,

$$
\frac{\partial m(p)}{\partial t} = \frac{\partial m(p)}{\partial p} \frac{\partial p}{\partial t} = \frac{2p}{\mu Z}\frac{\partial p}{\partial t}
$$

$$
\nabla m(p) = \frac{\partial m(p)}{\partial p} \nabla p = \frac{2p}{\mu Z} \nabla p
$$

Thus, the gas diffusion equation in terms of $m(p)$ becomes same as the formulation of a slightly compressible fluid.

$$
\frac{\partial m(p)}{\partial t} = \frac{k}{\phi \mu c_t} \nabla^2m(p) \tag{A.1}
$$

One may notice that we still have viscosity and compressibility in the RHS which are pressure dependent. These terms can be absorbed into a pseudo time variable that replaces time.

Replacing $t$ with normalized pseudo-time $\tilde{t}_{ps}$ yields

$$
\frac{\partial m(p)}{\partial \tilde{t}_{ps}} = \frac{k}{\phi (\mu c_t)_{ref}} \nabla^2m(p) \tag{A.2}
$$
