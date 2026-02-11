---
tags:
  - Model
aliases:
---

# Equations

The solutions given by Wattenbarger et al.[^1] for a horizontal fractured well with two inner boundary conditions (constant rate and constant $p_{wf}$) and closed reservoir outer boundary condition are below.

$$
p_{wD} = \frac{\pi}{2}\Big(\frac{y_e}{X_f}\Big)\Big[\frac{1}{3}+\Big(\frac{X_f}{y_e}\Big)^2 t_{Dx_f}\Big]-\frac{2}{\pi^2}\Big(\frac{y_e}{X_f}\Big)\sum_{n=1}^\infty \Big(\frac{1}{n^2}\Big) exp\Big[-n^2 \pi^2 \Big(\frac{X_f}{y_e}\Big)^2 t_{Dx_f}\Big] 
$$
$$
\frac{1}{q_D} = \frac{\frac{\pi}{4}\big(\frac{y_e}{X_f}\big)}{\sum_{n_{odd}}^\infty  exp\Big[-\frac{n^2 \pi^2}{4} \Big(\frac{X_f}{y_e}\Big)^2 t_{Dx_f}\Big]}
$$
where 
$$
p_{wD}=\frac{kh(p_i-p_{wf})}{qB\mu},
$$
$$
\frac{1}{q_D} = \frac{kh(p_i-p_{wf})}{qB\mu}
$$
and
$$
t_{Dx_f} = \frac{kt}{\phi \mu c_t X_f^2}
$$

## Early-time approximations

$$
p_{wD} = \sqrt{\pi t_{Dx_f}}
$$
$$
\frac{1}{q_D} = \frac{\pi}{2}\sqrt{\pi t_{Dx_f}}
$$

## Late-time approximations

$$
p_{wD} = \frac{\pi}{2}\Big(\frac{X_f}{y_e}\Big)t_{Dx_f}+\frac{\pi}{6}\Big(\frac{y_e}{X_f}\Big)
$$

$$
\frac{1}{q_D} = \frac{\pi}{4}\big(\frac{y_e}{X_f}\big) exp\Big[\frac{\pi^2}{4} \Big(\frac{X_f}{y_e}\Big)^2 t_{Dx_f}\Big]
$$
      
# Hypothesis

The general assumptions to an SRVB model are
- A vertical fracture of **half-length** $X_f$ lies along the $x$-direction.
- Flow is **perpendicular to the fracture**, i.e. along $y$.
- - Reservoir is symmetric about the fracture plane.
- Distance from the fracture to the no-flow boundary is $y_e$​.
- Fracture is **infinite conductivity**, so pressure is uniform along the fracture face and the fracture behaves like a **line sink at $y = 0$**.
- Because the fracture extends to (or effectively drains to) the lateral ends in $x$, the pressure does **not** vary with $x$ in the model used for the linear-flow solutions in the paper. Thus pressure varies only with $y$ and $t$.

![[Pasted image 20260110143659.png]]

# Governing Equations

For 1D flow in y:
$$
\frac{\partial p}{\partial t} = \frac{k}{\phi \mu c_t} \frac{\partial^2p}{\partial y^2}
$$
Initial condition:
$$
p(y,0) = p_i \;\;\; 0\leq y \leq y_e
$$
Outer boundary condition (closed boundary):
$$
\left. \frac{\partial p}{\partial y}\right|_{y=y_e} = 0
$$

[^1]: Wattenbarger, Robert A., et al. "Production analysis of linear flow into fractured tight gas wells." _SPE Rocky Mountain Petroleum Technology Conference/Low-Permeability Reservoirs Symposium_. SPE, 1998.
