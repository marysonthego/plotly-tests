import React, {useRef} from 'react';
import Plot from 'react-plotly.js';
//import createPlotlyComponent from "react-plotly.js/factory";
//import Plotly from "plotly.js";
import { useResizeDetector } from 'react-resize-detector';


export function PlotlyChart() {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          marker: {color: 'red'},
        },
      ]}
      layout={{width: 800, height: 350, title: 'A Fancy Plot'}}
    />
  );
}

//const Plot = createPlotlyComponent(Plotly);

export function PlotlyResponsiveChart() {
  const { width, height, ref } = useResizeDetector();
  
  let trace1 = {
    type: 'bar',
    x: [1,2,3,4],
    y: [5,10,2,8],
    marker: {
      color: '#C8A2C8',
      line: {
        width: 2.5
      }
    }
  };
  let data = [trace1];
  let layout={title: 'A Responsive Plot'};
  let config = {responsive: true}
  
  return (
    <div ref={ref} style={{ display: 'flex', height: '100%' }}>
      <Plot
        data={data}
        layout={{
          ...layout, 
          ...{
            width: width, 
            height: height
          }
        }}
        config={config}
      />
    </div>    
  );
}

