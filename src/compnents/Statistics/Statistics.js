import React from "react";
import { useLoaderData } from "react-router-dom";
import DataPlotting from "../DataPlotitng/DataPlotting";
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
const Statistics = () => {
  const quizTopics = useLoaderData();
  //   console.log(quizTopics.data);
  const { data } = quizTopics;
  console.log(data);
  return (
    <div className="text-center">
      <h1>statistics:</h1>
      <div className="mx-auto" style={{ width: 400 }}>
        
        <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
