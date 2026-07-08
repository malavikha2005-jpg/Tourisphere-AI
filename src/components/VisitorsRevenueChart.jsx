import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", visitors: 100, revenue: 80 },
  { month: "Feb", visitors: 120, revenue: 90 },
  { month: "Mar", visitors: 110, revenue: 85 },
  { month: "Apr", visitors: 140, revenue: 100 },
  { month: "May", visitors: 130, revenue: 95 },
  { month: "Jun", visitors: 150, revenue: 120 },
];

export default function VisitorsRevenueChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-[400px]">
      <h3 className="font-semibold text-xl mb-4">
        Visitors & Revenue
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#2F4F4F"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#C15C3D"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}