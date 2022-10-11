import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopicsDetail from "../QuizTopicsDetail/QuizTopicsDetail";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Home = () => {
  const quizTopics = useLoaderData();
  //   console.log(quizTopics.data);
  const { data } = quizTopics;
  return (
    <div className="mx-0 my-12 md:mx-12">
      <div>
      <h1 className="text-xl font-sans">
            Madina Academy is basically an It training center. We believe that
            in this contemporary epoch, IT sector is one of the most promising
            sector for our country.Our goal is to train adolescent sothat they
            can be a great prospect for our country.{" "}
          </h1>
        <div className="flex flex-col md:flex-row mb-12 items-center justify-between">
          {/* <img
            className="mr-4 rounded-3xl w-[500px] h-[200px]"
            src="https://kinsta.com/wp-content/uploads/2021/11/front-end-developer-1024x512.png"
            alt=""
          /> */}
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_ayopewsc.json"
            style={{ height: "400px", width: "400px" }}
          >
            {/* <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            /> */}
          </Player>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_inti4oxf.json"
            style={{ height: "400px", width: "400px" }}
          >
            {/* <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            /> */}
          </Player>
         
        </div> 
        <h1 className="text-center text-3xl font-bold mb-6">Quiz yourself… <br /> How well do you know the basics of Web Development</h1>
      </div>

      <div  className=" grid grid-cols-1 md:grid-cols-2 mb-2 gap-6 mx-8 md:mx-32">
        {data.map((topic) => (
          <QuizTopicsDetail key={topic.id} topic={topic}></QuizTopicsDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
