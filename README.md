# DewesoftAnalyze
Used to load and peform basic analysis on Dewesoft Files

Back end code located at: https://github.com/chalmejd-TEAM/dewesoft-analyze-server

### Current Functions:
---

#### Exponentially Weighted Mean:

Calculates the expoentially weighted mean of a load using the following formula:

$$ \overline{x}\_{ewm} = \sqrt[k]{\frac{1}{n}\sum_{i=1}^n x^k_i} = \sqrt[k]{\frac{x^k_1+x^k_2+...+x^k_i}{n}} $$

where:
$x = load$, $k = exponent$, and $n = cycles$

When running the program, select a .dxd file to load. This will then allow you to select a load channel and a cycle counter channel as well as list the exponents you wish to use. You can enter a list of exponents to use for the calculation as a comma separated list (i.e. 1, 2, 3, 4). Once you press submit the program will execute and return the calculate values in a table with their coresponding exponent.

**Warning: Large data files can result in long processing times.**

