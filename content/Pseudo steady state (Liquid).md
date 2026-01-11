---
tags:
  - Concept
aliases:
  - PSS
results: bpss
---
The flow of fluids through a porous medium can be split into transient and boundary-dominated flow periods. When the sandface rate is held constant long enough, the pressure diffusion eventually reaches the boundary and the flow is governed by pseudo-steady state equations.

![[fmb_pseudosteady_state 1.png]]
(source: fekete.com)

# Equations

Summarized are pseudo-steady state equations derived in the later sections. Pressure in the reservoir $p(r)$ as a function of well flowing pressure $p_{wf}$ and radius $r$ is:
 $$p(r) =p_{wf} + \frac{qB\mu}{2\pi kh} \Big[ \frac{r_e^2}{(r_e^2 - r_w^2)} ln(\frac{r}{r_w}) -\frac{1}{2}\frac{(r^2 - r_w^2)}{(r_e^2 - r_w^2)} + s\Big]$$
 Upon integration from $r_w$ to $r_e$, the average pressure (volumetric) in the reservoir for a well centered in a circular reservoir is given by: $$\bar{p}(r_e) = p_{wf} + \frac{qB\mu}{2\pi kh}\Big[ ln\big( \frac{r_e}{r_w}\big) - \frac{3}{4} + s\Big]$$
 The general formulation that is independent of reservoir shape is given by: $$\bar{p}(r_e) = p_{wf} + \frac{qB\mu}{2\pi kh}\Big[ \frac{1}{2}ln\big( \frac{4A}{e^{\gamma}r_w^2C_A}\big)  + s\Big]$$
 where $\gamma = 0.577216$ is Euler's constant and $C_A$ is Dietz shape factor whose value for a well in a circular reservoir is 31.62.
 The equations above can be simplified using a variable $b_{pss}$, $$b_{pss} = \frac{B\mu}{2\pi kh} \Big[ \frac{1}{2}ln\big( \frac{4A}{e^{\gamma}r_w^2C_A}\big) + s\Big] $$
 Thus, $$\bar{p}(r_e, t) = p_{wf}(t) + q \times b_{pss}$$
 >[!Tip] $b_{pss}$ is infact $1 /PI(p_{avg})$. It represents the pressure loss due to the steady-state inflow of oil. 
 
$p(r_w,t)$ solution for pseudo-steady state flow conditions is: $$\frac{p_i - p_{wf}(t)}{q} = \frac{1}{Nc_t} \frac{N_p}{q} + b_{pss} $$
>[!Tip] On the loglog plot PSS is characterized by a unit slope of the Bourdet derivative. Pressure change, with a slight delay, also merges with the pressure derivative on the same unit slope.

# Derivation

Radial diffusivity equation in a homogeneous, isotropic reservoir is given by
$$  \frac{1}{r}\frac{\partial}{\partial r} (r\frac{\partial p(r,t)}{\partial r}) = \frac{\mu\phi c_t}{k} \frac{\partial p(r,t)}{\partial t}  \tag{1}$$

When pseudo-steady state is reached, pressure everywhere declines at the **same rate** (shape in space is time-invariant; the whole profile shifts downward).
$$\frac{\partial p(r,t)}{\partial t} = \frac{d\bar{p}(t)}{dt} \tag{2}$$
where $\bar{p}(t)$ is the average reservoir pressure. Substituting (2) in (1) makes the RHS constant in space
$$  \frac{1}{r}\frac{\partial}{\partial r} (r\frac{\partial p}{\partial r}) = \frac{\mu\phi c_t}{k} \frac{\partial \bar{p}(t)}{\partial t}  \tag{3}$$

## Determining $d\bar{p}/dt$ from material balance

For a slightly compressible liquid in a closed bounded reservoir, the volume extracted at the reservoir conditions $BN_p(t)$  equals the liquid expansion in the reservoir due to pressure change $V_p c_t (p_i - \bar{p}(t))$, neglecting other effects. 

Hence, reservoir pressure can be expressed as purely as a function of liquid volume produced at the surface $N_p(t)$ and pore volume $V_p$ as,
$$p_i -\bar{p}(t) =  \frac{B}{V_p c_t} N_p(t) \tag{4}$$
Check [[Material Balance Theory]] for nomenclature. For a production rate $q(t)$, $N_p(t)=\int_0^t q(\tau)d\tau$ and
$$ \frac{\partial \bar{p}(t)}{\partial t} = -\frac{q(t)B}{V_pc_t} \tag{5}$$

## Diffusivity Equation

Substituting (5) in (3) makes the RHS constant in both time and space. The partial derivates in the LHS become ordinary derivatives.

$$  \frac{1}{r}\frac{d}{dr} (r\frac{dp}{dr}) = -\frac{\mu\phi}{k} \frac{qB}{V_p}  \tag{6}$$

Equations (7) and (8) represent no-flow condition at the outer boundary and constant rate at the well, respectively.
$$\left. \frac{dp}{dr} \right |_{r=r_e} = 0 \tag{7}$$
$$\left.-\frac{2\pi kh}{B\mu} r_w\frac{dp}{dr} \right |_{r=r_w} = q \tag{8}$$

Solving (6) & (7) and using $V_p =\phi h \pi (r_e^2 - r_w^2)$ yields (9). 
$$ \frac{dp}{dr} = \frac{qB\mu\phi}{kV_p} \big(\frac{r_e^2}{r}-r \big) = \frac{qB\mu}{2\pi kh(r_e^2 - r_w^2)} \big(\frac{r_e^2}{r}-r \big) \tag{9}$$ 
>[!Note] For an elliptic equation like Poisson/Laplace (which is what the PSS spatial problem becomes), if you prescribe Neumann boundary conditions everywhere (flux/derivative), the solution is determined only up to an arbitrary additive constant. $p_{wf} (= p(r_w))$ is chosen here as the additive constant

Integration Eq. (9) between from $r_w$ to $r$ (Eq. 10), gives the pressure at any given radius in the reservoir as a function of $r$ and $p_{wf}$ in Eq. (11).
$$p(r) - p(r_w) =\frac{qB\mu}{2\pi kh(r_e^2 - r_w^2)} \int_{r_w}^{r}{\big(\frac{r_e^2}{\rho}-\rho \big)d\rho} \tag{10}$$ $$p(r) - p_{wf} =\frac{qB\mu}{2\pi kh} \Big[ \frac{r_e^2}{(r_e^2 - r_w^2)} ln(\frac{r}{r_w}) -\frac{1}{2}\frac{(r^2 - r_w^2)}{(r_e^2 - r_w^2)}\Big] \tag{11}$$

For a cylindrical reservoir, volume $V = \phi h \pi (r^2-r_w^2)$ and $dV=\phi h \pi (2r)dr$. The average pressure inside a cylinder of radius $r$ is 
$$ \bar{p}(r) = \frac{\int_{r_w}^{r}{pdV}}{\int_{r_w}^{r}dV} = \frac{2}{(r_e^2 - r_w^2)}\int_{r_w}^{r}p(\rho)\rho d\rho$$
whose solution using Eq. (11) is,
$$\bar{p}(r) = p_{wf} + \frac{qB\mu}{2\pi kh}\Big[\frac{r_e^2}{(r_e^2 - r_w^2)}\big[ \frac{r^2}{(r^2 - r_w^2)} ln(\frac{r}{r_w})- \frac{1}{2} \big] - \frac{r^2 +r_w^2}{4(r_e^2 - r_w^2)}+\frac{r_w^2}{2(r_e^2-r_w^2)} \Big] \tag{12}$$

The average reservoir pressure at at any radius $r$ is of little use for diagnostics. What is useful to perform material balance analysis is average pressure in the entire reservoir volume, i.e. $\bar{p}(r_e)$.

When $r_e >> r_w$, applying the simplifications below, the equation linking $\bar{p}(r_e)$ and $p_{wf}$ is given in Eq. (13)
$$ \frac{r_e^2}{(r_e^2-r_w^2)} \approx 1 \; ; \; \frac{r_e^2 + r_w^2}{(r_e^2-r_w^2)}\approx 1 \; ; \; \frac{r_w^2}{(r_e^2-r_w^2)} \approx 0 $$

$$\bar{p}(r_e) = p_{wf} + \frac{qB\mu}{2\pi kh}\Big[ ln\big( \frac{r_e}{r_w}\big) - \frac{3}{4}\Big] \tag{13}$$

## Connecting Material balance and Diffusion 

Replacing $\bar{p}(r_e)$ in Eq. (13) with $\bar{p}(t)$ from Eq. (4) yields, $$ p_{wf}(t)=  p_i - \frac{B}{V_p c_t}N_p- \frac{qB\mu}{2\pi kh}\Big[ ln\big( \frac{r_e}{r_w}\big) - \frac{3}{4}\Big] \tag{14}$$
If the pores can be considered to be completed saturated with oil, $V_p/B$ can be replaced with $N$ (initial oil in place). The equations terms can be rearranged to write,
$$\frac{p_i - p_{wf}(t)}{q} = \frac{1}{Nc_t}\frac{N_p}{q} +\frac{B\mu}{2\pi kh}\Big[ ln\big( \frac{r_e}{r_w}\big) -\frac{3}{4}\Big] \tag{15}$$

>[!warning] Equation (15) is strictly valid only when rate $q$ is constant as this assumption has been used in the derivation of the second term in the RHS. The first term in the RHS is a purely material balance term with a tank type model and is not affected by varying rate. In practice, during late times, i.e. when $N_p/q$ is large enough, Eq. (14) is considered to be a reasonable approximation even for varying rates.

[^1]

[^1]: https://blasingame.engr.tamu.edu/z_zCourse_Archive/P324_06A/P324_06A_w_Work/Prob_06_P324_06A_Course_Work_(Lec_PSS).pdf
