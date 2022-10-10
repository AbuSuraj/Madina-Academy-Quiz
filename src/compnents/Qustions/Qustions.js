import React from 'react';

const Qustions = ({questionAndOption}) => {
    console.log(questionAndOption);
    const i =0;
    const {options,correctAnswer,question} = questionAndOption;
    return (
              <div>    
                   <p className='font-bold text-lg mb-3'>
                        {question.slice(3,question.length-4)}
                        </p> 
                        {
                        options.map(option=> <ul className='list-disc'>
                            <button className='ml-4 mb-2'>
                               <li> {option}</li>
                                </button>
                             {/* <input   type="radio"/>
                           <label for="html">{option}</label> */}
                         </ul>
                         
                         )
                         
                         }
                    
              </div>
              
             
               
             
         
    );
};

export default Qustions;