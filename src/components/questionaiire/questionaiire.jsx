import { useState } from "react";
import QUESTIONS from "../../assets/etf-questions";
import Question from "./question/question";
const questions = QUESTIONS;

export default function Questionnaire() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState({
        'question': null,
        'answer': null
    });

    function answerSelected(event) {
        const [currentQuestion, selectedAnswer] = event.target.value.split('-');

        setSelectedAnswer({
            'question': currentQuestion,
            'answer': selectedAnswer
        });
    }

    function moveToNextQuestion() {
        setAnswers((prevAnswers => {
            const newAnswers = prevAnswers.map((answer, question) => {
                if (question === selectedAnswer['question']) {
                    return selectedAnswer['answer'];
                }
                return answer;
            });

            return newAnswers;
        }));

        setCurrentQuestion((oldQuestion) => {
            return oldQuestion + 1;
        });

        setSelectedAnswer({
            'question': null,
            'answer': null
        });
    }

    function moveToPreviousQuestion() {
        setCurrentQuestion((oldQuestion) => {
            return oldQuestion - 1;
        });
    }

    return (
        <section>
            <div className="px-5 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ 'width': `${Math.floor((currentQuestion / questions.length) * 100)}%` }} ></div>
                </div>
            </div>
            {
                questions.map((question, questionIndex) => {
                    return (
                        <Question
                            key={`question-${questionIndex}`}
                            question={question}
                            questionIndex={questionIndex}
                            currentQuestionIndex={currentQuestion}
                            onChange={answerSelected}
                        />
                    )
                })
            }
            <div className="flex pb-4">
                <button className="mx-5 py-5 px-16 bg-white text-black rounded-full shadow-lg shadow-indigo-500/50 font-bold" onClick={moveToPreviousQuestion} disabled={currentQuestion === 0}>Back</button>
                <button className="mx-5 py-5 px-16 bg-black text-white border-solid border-3 border-black rounded-full shadow-lg shadow-indigo-500/50 font-bold" onClick={moveToNextQuestion} disabled={selectedAnswer['answer'] === null}>Next</button>
            </div>
        </section >
    )
}