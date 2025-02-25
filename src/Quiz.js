import React, { useState } from 'react';
import quizData from './Quizdata';

const Quiz = () => {

    const [currentquestion, setCurrentquestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Array(quizData.length).fill(false)); // Track answered questions
    const [progress, setProgress] = useState('0%');

    const goBack = () => {
        setCurrentquestion((prevVal) => (prevVal === 0 ? quizData.length - 1 : prevVal - 1));
    }

    const goNext = () => {
        setCurrentquestion((prevVal) => (prevVal === quizData.length - 1 ? 0 : prevVal + 1));
    }

    const updateProgress = () => {

        var amountAnswered = answeredCount / quizData.length;

        setProgress(`${amountAnswered * 100}%`);
    }

    const handleAnswer = (userAnswer) => {
        // Check if the question has been answered before
        if (!answeredQuestions[currentquestion]) {
            if (userAnswer === quizData[currentquestion].answer) {
                setScore((prevVal) => prevVal + 1);
            }
            // Mark the question as answered
            const updatedAnsweredQuestions = [...answeredQuestions];
            updatedAnsweredQuestions[currentquestion] = true;
            setAnsweredQuestions(updatedAnsweredQuestions);
            updateProgress();
            setCurrentquestion((prevVal) => (prevVal === quizData.length - 1 ? 0 : prevVal + 1));            
            
        }
    }

   
    const checkIfAllAnswered = () => {
        return answeredQuestions.every((answered) => answered === true);
    }

    const answeredCount = answeredQuestions.filter((answered) => answered === true).length;

    const restart = () => {
        setScore(0);
        setCurrentquestion(0);
        setAnsweredQuestions(new Array(quizData.length).fill(false));
        setProgress('0%');

    }

  return (
    <div className='quizContainer'>
        <h1>QUIZ</h1>
        <div className='buttonsClass'>            
           <button onClick={goBack}>Go Back</button>
           <button onClick={goNext}>Next Question</button>
        </div>
        <strong>Question # {currentquestion + 1} / {quizData.length} - Current Score: {score}</strong>

        <div className='progressBar'><div className='innerBar' style={{ width: progress, height: "100%", backgroundColor: "yellowgreen" }}
        ></div></div>

        <span>{quizData[currentquestion].question}</span>

        <div className='buttonsForAnswer'>
        {quizData[currentquestion].options.map((option, index) => (
            <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={answeredQuestions[currentquestion]}  // Disable if the question has been answered
                className='answeringBtns'
            >
                {option}
            </button>
        ))}
        </div>

        {/* Show message when all questions have been answered */}
        {checkIfAllAnswered() && (
            <div>
                <h2>Congratulations! You've completed the quiz.</h2>
                <h3>Your final score is: {score} out of {quizData.length}</h3>
                <button onClick={restart} className='answeringBtns'>Play Again?</button>
            </div>
        )}
    </div>
  )
}

export default Quiz;

