import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Qustions from "../Qustions/Qustions";
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const TopicWiseQus = () => {
  const topicwiseDetails = useLoaderData();
  const { data } = topicwiseDetails;
  const { questions } = data;
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [inCorrectAnsCount, setInCorrectAnsCount] = useState(0);

  // console.log(data);
  // console.log(id);
  // const showAns = () =>{
  //     {Swal.fire(``)}
  // }
  return (
    <div className="mx-44 mt-10 relative">
      <div>
        <h2 className="text-center text-3xl font-bold">Quiz on: {data.name}</h2>
      </div>

      <ol  className="list-decimal shadow-xl p-4 mt-5 ">
        {questions.map((questionAndOption) => (
          <div className="">
            <p className="m-4 shadow-2xl">
              <Qustions
                key={questionAndOption.id}
                setCorrectAnsCount={setCorrectAnsCount}
                setInCorrectAnsCount={setInCorrectAnsCount}
                data={data}
                questionAndOption={questionAndOption}
              ></Qustions>
            </p>
            {/* <EyeIcon onClick={showAns} className="h-6 w-6  ">
                       </EyeIcon> */}
          </div>
        ))}
      </ol>
      <div className="sticky bottom-0 bg-slate-200 text-center ">
        <h1 className="text-green-500 text-lg">Correct ans: {correctAnsCount}</h1>
        <h1 className="text-red-600 text-lg">Incorrect ans: {inCorrectAnsCount}</h1>
      </div>
    </div>
  );
};

export default TopicWiseQus;
