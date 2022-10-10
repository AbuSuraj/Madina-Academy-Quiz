import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataPlotting from '../DataPlotitng/DataPlotting';

const Statistics = () => {
    const quizTopics = useLoaderData();
//   console.log(quizTopics.data);
  const { data } = quizTopics;
  console.log(data)
    return (
        <div>
            <h1>statistics:</h1>
            <div>
                {data.map(topic=><DataPlotting
                key={topic.id}
                topic = {topic}
                ></DataPlotting>)}
            </div>
        </div>
    );
};

export default Statistics;