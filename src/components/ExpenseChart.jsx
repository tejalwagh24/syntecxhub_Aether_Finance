import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ExpenseChart = ({ expenses = [] }) => {
  const data = expenses.map((e, i) => ({
    name: `T${i + 1}`,
    amount: Number(e.amount || 0)
  }));

  return (
    <div style={{ height: 300, marginTop: 20 }}>
      {data.length === 0 ? (
        <p style={{ color: "#aaa" }}>
          No data available
        </p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#00ffd5"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ExpenseChart;