import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  lineElementClasses,
} from '@mui/x-charts/LineChart';
import { ChartsGrid, ChartsText } from '@mui/x-charts';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function TinyLineChart() {
  const maxY = Math.max(...pData);

  const numLines = 3;
  const yInterval = Math.ceil(maxY / (numLines + 1) / 1000) * 1000;
  const yTicks = Array.from({ length: numLines }, (_, i) => (i + 1) * yInterval);

  // Y-coordinate for the bottom horizontal line
  const yPos = 140 - ((yInterval / maxY) * 140);

  return (
    <ChartContainer
      width={400}
      height={140}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels, axis: 'none', tick: null }]}
      yAxis={[{ scaleType: 'linear', data: yTicks, min: 0, max: maxY, axis: 'none', tick: null }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#00bcd4',
          strokeWidth: 2,
        },
        '& .MuiChartsGrid-line': {
          stroke: '#2a2a2a',
          strokeDasharray: 'none',
        },
      }}
      disableAxisListener
    >
      <ChartsGrid horizontal />
      <LinePlot />

      {/* Blue box + "NIFTY" label */}
      <g transform={`translate(8, ${yPos - 6})`}>
        <rect width={10} height={10} fill="#00bcd4" rx={2} />
        <ChartsText
          text="NIFTY"
          x={14}
          y={9}
          style={{ fill: '#2a2a2a', fontSize: 12, fontWeight: 'bold' }}
          textAnchor="start"
        />
      </g>
    </ChartContainer>
  );
}
