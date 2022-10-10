import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qustions from '../Qustions/Qustions';

const TopicWiseQus = () => {
    const topicwiseDetails = useLoaderData();
    const {data} = topicwiseDetails;
    const {questions} = data
    // console.log(data);
    // console.log(questions);
    return (
        <div className='mx-44'>
            <div>
                <h2>Quiz on: {data.name}</h2>
            </div>
           
             <ol className='list-decimal'>
                {
                    questions.map(questionAndOption=><li>
                        <Qustions
                       key={questionAndOption.id}
                       data = {data}
                       questionAndOption = {questionAndOption}
                       ></Qustions>
                       </li>) 
                }
             </ol>
            
        </div>
    );
};

export default TopicWiseQus;