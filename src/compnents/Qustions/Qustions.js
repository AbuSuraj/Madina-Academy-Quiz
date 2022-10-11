import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Qustions = ({ questionAndOption, setCorrectAnsCount, setInCorrectAnsCount }) => {
  // console.log(questionAndOption);
  const [click, setClick] = useState(false);
  
  // let correctAnsCount =0;
  // let inCorrectAnsCount =0;
  const { options, correctAnswer, question } = questionAndOption;
  const showAns = () =>{
    Swal.fire({
      icon: 'info',
      title: 'Correct answer',
      text: ` ${correctAnswer}`,
     
    })
}
const showCorrectAnsMsg = ()=>{
    Swal.fire(
      {
        icon: "success",
        title: "Your answer is correct.",
      }
      )}

const showIncorrectMsg =() =>{
    Swal.fire({
        icon: 'error',
        title: 'Sorry, wrong answer.',
        text: `Correct answer is: ${correctAnswer}`,
       
      })
    // {Swal.fire
    //     ({ icon:'Sorry, wrong answer',
    //     text: `Correct answer is ${correctAnswer}`})
    // }
}

let activeStyle = {
    textDecoration: "",
    backgroundColor: "#5F9DF7"
  };
  const handleOption =(option) =>{
//   console.log(option)
        
        setClick(true);
       if(option === correctAnswer){
        // console.log("correct");
         setCorrectAnsCount((prev) => prev+1);
        showCorrectAnsMsg();
       }
       else{
        showIncorrectMsg();
        setInCorrectAnsCount((prev) => prev+1);
        // console.log("wrong")
       }
  }
  return (
    <div>
      <div>
      <div className="flex items-baseline justify-between bg-sky-200 pl-7 pr-2 rounded-2xl mb-3">
      <li className="font-bold text-lg mb-3" dangerouslySetInnerHTML={{__html: question}}/>
      {/* <li className="font-bold text-lg mb-3 ">
        {question.slice(3, question.length - 4)}
      </li> */}
      <EyeIcon onClick={showAns} className="h-6 w-6 cursor-pointer">
                       </EyeIcon>
      </div>
      <div className= {`ml-10 grid grid-cols-2 ${click ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      {options.map((option,index) => (
        <ul className=" list-disc pl-2 hover:bg-purple-500 rounded-xl mb-6 mr-12 ml-4 ">
          {/* <button className=" "> */}
            {/* <li  key={index} onClick={()=>handleOption(option) } className='mr-6'>  {option} </li> */}
          <input key={index} onClick={()=>handleOption(option) }  type="radio"/>
          <label for="html">{option}</label>
          {/* </button> */}
        </ul>
      ))}
      </div>
      </div>
       
      
    </div>
  );
};

export default Qustions;
