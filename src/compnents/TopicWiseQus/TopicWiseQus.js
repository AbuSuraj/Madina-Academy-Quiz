import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qustions from '../Qustions/Qustions';
import {   EyeIcon } from '@heroicons/react/24/solid'

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
           
             <ol className='list-decimal shadow-xl p-4 mt-5'>

                {
                    questions.map(questionAndOption=><div className='flex items-baseline justify-between'>
                        <li className='m-4  '>
                        <Qustions
                       key={questionAndOption.id}
                       data = {data}
                       questionAndOption = {questionAndOption}
                       ></Qustions>
                       </li>
                       <EyeIcon className="h-6 w-6  "/>
                    </div>
                       
                       ) 
                }
             </ol>
            
        </div>
    );
};

export default TopicWiseQus;