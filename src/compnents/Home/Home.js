import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopicsDetail from "../QuizTopicsDetail/QuizTopicsDetail";

const Home = () => {
  const quizTopics = useLoaderData();
  console.log(quizTopics.data);
  const { data } = quizTopics;
  return (
    <div className="mx-12 my-12">
      <div>
        <div className="flex flex-col md:flex-row mb-12">
          <img
            className="mr-4 rounded-3xl w-[500px] h-[200px]"
            src="https://kinsta.com/wp-content/uploads/2021/11/front-end-developer-1024x512.png"
            alt=""
          />
          <h1 className="text-xl font-sans">
            Madina Academy is basically an It training center. We believe that
            in this contemporary epoch, IT sector is one of the most promising
            sector for our country.Our goal is to train adolescent sothat they
            can be a great prospect for our country.{" "}
          </h1>
        </div>
      </div>

      <div className="mx-40 grid grid-cols-1 md:grid-cols-2 mb-2 gap-6">
        {data.map((topic) => (
          <QuizTopicsDetail key={topic.id} topic={topic}></QuizTopicsDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
