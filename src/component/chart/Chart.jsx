import { LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,Legend } from "recharts";
import './Chart.css'
function Chart({ title, data, dataKey }) {
    return (
        <div className="chart">
            <h3>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4} >
                <LineChart width={500} data={data}
                    margin={{ top: 30, right: 30, left: 30, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Chart;