import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Leisure", value: 45 },
  { name: "Business", value: 20 },
  { name: "Adventure", value: 15 },
  { name: "Cultural", value: 10 },
  { name: "Medical", value: 10 },
];

const COLORS = [
  "#2F4F4F",
  "#C15C3D",
  "#8B9A8B",
  "#D6D3D1",
  "#A34A2E",
];

export default function TravelPurposeChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-[350px]">
      <h3 className="text-xl font-semibold mb-4">
        Travel Purpose Distribution
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}