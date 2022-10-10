import React from "react";
import { Link } from "react-router-dom";

const QuizTopicsDetail = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <figure>
          <img src= {logo} alt="topic" />
        </figure>
        <div className="card-body bg-slate-100">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">Number of Qustions: {total}</p>
          <div className="card-actions justify-end">
            <Link >
            </Link>
            <button className="btn btn-primary">Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopicsDetail;
