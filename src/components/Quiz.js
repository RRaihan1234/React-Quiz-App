import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const { score, setScore,setGameState } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
        
        <button className="b1" onClick={() => {chooseOption("optionA")}}> {Questions[currentQuestion].optionA} </button>
        <button className="b1" onClick={() => {chooseOption("optionB")}}> {Questions[currentQuestion].optionB} </button>
        <button className="b1" onClick={() => {chooseOption("optionC")}}> {Questions[currentQuestion].optionC} </button>
        <button className="b1" onClick={() => {chooseOption("optionD")}}> {Questions[currentQuestion].optionD} </button>
      

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;