import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const QuizTopicsDetail = ({ topic }) => {
  useEffect(()=>{
    AOS.init();
  },[])
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div data-aos="flip-up" className="card bg-base-200 shadow-xl">
        <figure>
          <img src= {logo} alt="topic" style={{width:'200px'}}/>
        </figure>
        <div className="card-body bg-slate-100">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">Number of Qustions: {total}</p>
          <div className="card-actions justify-end">
            <Link to={`/quiz/${id}`}>
            <button className="btn btn-primary">Start Quiz</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopicsDetail;
