import React from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DataPlotting = ({ topic }) => {
  const { id, name, logo, total } = topic;
  console.log(topic);
  return (
    <div className="text-center">
      <h1>{total}</h1>
     
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <BarChart width={150} height={40} data={topic}>
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        {/* </ResponsiveContainer> */}
      
    </div>
  );
};

export default DataPlotting;
