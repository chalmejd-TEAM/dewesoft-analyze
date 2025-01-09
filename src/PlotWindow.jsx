import React from 'react';
import Plot from 'react-plotly.js';

function PlotWindow() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            y: [0, 6, 3, 7, 6, 8, 2, 6, 4, 2, 6, 4, 2, 1, 8, 2, 9, 3, 2, 3, 1],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 900, height: 600} }
      />
    );
}

export default PlotWindow