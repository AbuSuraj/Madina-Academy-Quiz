import React from 'react';

const Qustions = ({questionAndOption}) => {
    console.log(questionAndOption);
    const i =0;
    const {options,correctAnswer,question} = questionAndOption;
    return (
              <div>
                 
                        {question.slice(3,question.length-4)}
                        {options.map(option=>
                        <p type="radio" class="appearance-none indeterminate:bg-gray-300">{option}</p>
                        )}
                    
              </div>
              
             
               
             
         
    );
};

export default Qustions;