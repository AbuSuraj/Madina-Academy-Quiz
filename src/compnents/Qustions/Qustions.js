import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Qustions = ({ questionAndOption }) => {
  console.log(questionAndOption);
   
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
       if(option === correctAnswer){
        // console.log("correct");
        showCorrectAnsMsg();
       }
       else{
        showIncorrectMsg();
        // console.log("wrong")
       }
  }
  return (
    <div>
      <div className="flex items-baseline justify-between bg-sky-200 pl-7 pr-2 rounded-2xl">
      <div dangerouslySetInnerHTML={{__html: question}}/>
      {/* <li className="font-bold text-lg mb-3 ">
        {question.slice(3, question.length - 4)}
      </li> */}
      <EyeIcon onClick={showAns} className="h-6 w-6 cursor-pointer">
                       </EyeIcon>
      </div>
      <div className="ml-10 grid grid-cols-2">
      {options.map((option,index) => (
        <ul className=" list-disc pl-2 hover:bg-purple-500 rounded-xl mb-6 mr-12">
          <button className="ml-4  ">
            <li  key={index} onClick={()=>handleOption(option) } className='mr-6'>  {option} </li>
          </button>
          {/* <input   type="radio"/>
                           <label for="html">{option}</label> */}
        </ul>
      ))}
      </div>
    </div>
  );
};

export default Qustions;
