import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Qustions = ({ questionAndOption }) => {
  console.log(questionAndOption);
   
  const { options, correctAnswer, question } = questionAndOption;
  const showAns = () =>{
    {Swal.fire(`${correctAnswer}`)}
}
const showCorrectAnsMsg = ()=>{
    {Swal.fire("Your answer is correct.")}
}
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
      <div className="flex items-baseline justify-between">
      <p className="font-bold text-lg mb-3">
        {question.slice(3, question.length - 4)}
      </p>
      <EyeIcon onClick={showAns} className="h-6 w-6 cursor-pointer">
                       </EyeIcon>
      </div>
      {options.map((option) => (
        <ul className="list-disc">
          <button className="ml-4 mb-2">
            <li onClick={()=>handleOption(option) } className="hover:bg-green-500 active:bg-green-500">  {option} </li>
          </button>
          {/* <input   type="radio"/>
                           <label for="html">{option}</label> */}
        </ul>
      ))}
    </div>
  );
};

export default Qustions;
