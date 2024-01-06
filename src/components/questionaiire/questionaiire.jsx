import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QUESTIONS from "../../assets/etf-questions";
import Question from "./question/Question";
const questions = QUESTIONS;

export default function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const navigate = useNavigate();

  function handleAnswerChange(events, questionIndex) {
    const selectedAnswer = events.target.value;
    setAnswers((prevAnswers) => {
      const newAnswers = prevAnswers.map((answer, question) => {
        if (question === questionIndex) {
          return selectedAnswer;
        }
        return answer;
      });

      return newAnswers;
    });
  }

  function moveNext(nextQuestion) {
    if (nextQuestion) {
      if (currentQuestionIndex === questions.length - 1) {
        navigate("/questionnaire/result");
        return;
      }
      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    } else {
      if (currentQuestionIndex === 0) return;
      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
    }
  }

  return (
    <section>
      <div className="px-5 py-3">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{
              width: `${Math.floor(
                (currentQuestionIndex / questions.length) * 100,
              )}%`,
            }}
          ></div>
        </div>
      </div>
      {answers.map((answer, answerIndex) => {
        return (
          <Question
            key={`question-${answerIndex}`}
            answer={answer}
            question={questions[answerIndex]}
            questionIndex={answerIndex}
            onChange={handleAnswerChange}
            currentQuestionIndex={currentQuestionIndex}
          />
        );
      })}
      <div className="flex pb-4">
        <button
          onClick={() => moveNext(false)}
          disabled={currentQuestionIndex === 0}
          className="mx-5 py-5 px-16 bg-white text-black rounded-full shadow-lg shadow-indigo-500/50 font-bold"
        >
          Back
        </button>
        <button
          onClick={() => moveNext(true)}
          className="mx-5 py-5 px-16 bg-black text-white border-solid border-3 border-black rounded-full shadow-lg shadow-indigo-500/50 font-bold"
        >
          Next
        </button>
      </div>
    </section>
  );
}
