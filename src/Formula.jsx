import React from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

  // MathJax configuration
  const mathJaxConfig = {
    loader: { load: ["input/tex", "output/chtml"] },
    tex: { inlineMath: [["\\(", "\\)"], ["$", "$"]] },
  };

const Formula = () => {
  return (
    <MathJaxContext config={mathJaxConfig}>
        <p>Calculates the exponentially weighted mean of a load using the following formula:</p>
        <MathJax>{"\\(\\overline{x}\_{ewm} = \\sqrt[k]{\\frac{1}{n}\\sum_{i=1}^n x^k_i} = \\sqrt[k]{\\frac{x^k_1+x^k_2+...+x^k_i}{n}} \\)"}</MathJax>
        <p>Where: x = load, k = exponenent, n = cycles</p>
    </MathJaxContext>
  );
};

export default Formula;
