import AnswerButton from "../components/AnswerButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const questions = [
  {
    question: "What is your age?",
    answers: ["18-23", "24-35", "36-49", "50+"]
  },
  {
    question: "Are you a university student?",
    answers: ["Yes", "No"]
  },
  {
    question: "What are your financial goals?",
    answers: ["Retire early", "Maintain wealth", "Grow wealth"]
  },
  {
    question: "Do you currently invest?",
    answers: ["Yes", "No"]
  },
  {
    question: "Do you have any loans?",
    answers: ["Yes", "No"]
  }
];

const Survey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    // Store the answer in the selectedAnswers array
    setSelectedAnswers((prev) => [...prev, answer]); // Append the new answer
    console.log("Selected Answers: ", answer); // Log selected answers with the current answer

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Log selected answers when done answering questions
      console.log("Selected Answers: ", [...selectedAnswers, answer]); // Log selected answers with the current answer

      // JUST USE: [...selectedAnswers, answer] for the array with all the answers
      navigate("/pickChallenge");
    }
  };

  const { question, answers } = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-lg font-bold mb-6">{question}</h1>
      <div className="grid gap-4 w-[85%]">
        {answers.map((answer, index) => (
          <AnswerButton
            key={index}
            text={answer}
            onClick={() => handleAnswerClick(answer)}
            className="px-6 py-10 text-lg font-semibold border-2 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Survey;