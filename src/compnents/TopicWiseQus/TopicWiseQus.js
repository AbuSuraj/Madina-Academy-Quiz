import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qustions from '../Qustions/Qustions';
import {   EyeIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';

const TopicWiseQus = () => {
    const topicwiseDetails = useLoaderData();
    const {data} = topicwiseDetails;
    const {questions} = data
    // console.log(data);
    // console.log(questions);
    // const showAns = () =>{
    //     {Swal.fire(``)}
    // }
    return (
        <div className='mx-44 mt-10'>
            <div>
                <h2 className='text-center text-3xl font-bold'>Quiz on: {data.name}</h2>
            </div>
           
             <ol className='list-decimal shadow-xl p-4 mt-5'>

                {
                    questions.map(questionAndOption=><div className=''>
                        <li className='m-4  '>
                        <Qustions
                       key={questionAndOption.id}
                       data = {data}
                       questionAndOption = {questionAndOption}
                       ></Qustions>
                       </li>
                       {/* <EyeIcon onClick={showAns} className="h-6 w-6  ">
                       </EyeIcon> */}
                    </div>
                       
                       ) 
                }
             </ol>
            
        </div>
    );
};

export default TopicWiseQus;