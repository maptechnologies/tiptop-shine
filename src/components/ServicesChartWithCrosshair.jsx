'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Jul 1', value: 40 },
  { name: 'Jul 2', value: 50 },
  { name: 'Jul 3', value: 65 },
  { name: 'Jul 4', value: 55 },
  { name: 'Jul 5', value: 70 },
  { name: 'Jul 6', value: 68 },
  { name: 'Jul 7', value: 75 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-xs">
        <p className="font-semibold">{label}</p>
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function ServicesChartWithCrosshair() {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-black">Services over time</h3>
        <div className="text-xs text-gray-500">Monthly · Annual</div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
