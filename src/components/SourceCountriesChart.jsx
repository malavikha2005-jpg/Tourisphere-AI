import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { country: "USA", tourists: 450 },
  { country: "India", tourists: 440 },
  { country: "UK", tourists: 435 },
  { country: "Germany", tourists: 430 },
  { country: "Japan", tourists: 425 },
];

export default function SourceCountriesChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-[350px]">
      <h3 className="text-xl font-semibold mb-4">
        Top Source Countries
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="tourists"
            fill="#2F4F4F"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}