import React, { useState, useEffect } from 'react';
import quizData from './Quizdata';  

const Quiz = () => {

    const [questionsetIndex, setQuestionsetIndex] = useState(0);  
    const [questionset, setQuestionset] = useState(quizData[questionsetIndex]);
    const [currentquestion, setCurrentquestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Array(questionset.length).fill(false)); // Track answered questions
    const [progress, setProgress] = useState('0%');

    // Update questionset based on the index
    const updateQuestionset = () => {
        setQuestionsetIndex((currVal) => (currVal === quizData.length - 1 ? 0 : currVal + 1));
    }

    // Go back to the previous question
    const goBack = () => {
        setCurrentquestion((prevVal) => (prevVal === 0 ? questionset.length - 1 : prevVal - 1));
    }

    // Go to the next question
    const goNext = () => {
        setCurrentquestion((prevVal) => (prevVal === questionset.length - 1 ? 0 : prevVal + 1));
    }

   
    const updateProgress = () => {
        var amountAnswered = answeredCount / questionset.length;
        setProgress(`${amountAnswered * 100}%`);
    }

   
    const handleAnswer = (userAnswer) => {
        // Check if the question has been answered before
        if (!answeredQuestions[currentquestion]) {
            // If the answer is correct, increase the score
            if (userAnswer === questionset[currentquestion].answer) {
                setScore((prevVal) => prevVal + 1);
            }
         
            const updatedAnsweredQuestions = [...answeredQuestions];
            updatedAnsweredQuestions[currentquestion] = true;
            setAnsweredQuestions(updatedAnsweredQuestions);
            updateProgress();
            setCurrentquestion((prevVal) => (prevVal === questionset.length - 1 ? 0 : prevVal + 1));            
        }
    }

    // Check if all questions have been answered
    const checkIfAllAnswered = () => {
        return answeredQuestions.every((answered) => answered === true);
    }

    // Calculate how many questions have been answered
    const answeredCount = answeredQuestions.filter((answered) => answered === true).length;

    // Restart the quiz
    const restart = () => {
        setScore(0);
        setCurrentquestion(0);
        setAnsweredQuestions(new Array(questionset.length).fill(false));
        setProgress('0%');
        updateQuestionset();        
    }

    
    useEffect(() => {
        setQuestionset(quizData[questionsetIndex]);
        setAnsweredQuestions(new Array(quizData[questionsetIndex].length).fill(false)); 
        setCurrentquestion(0); 
    }, [questionsetIndex]);

    return (
        <div className='quizContainer'>
            <h1>QUIZ</h1>
            <div className='buttonsClass'>            
                <button onClick={goBack}>Go Back</button>
                <button onClick={goNext}>Next Question</button>
            </div>
            <strong>Question # {currentquestion + 1} / {questionset.length} - Current Score: {score}</strong>

            <div className='progressBar'>
                <div className='innerBar' style={{ width: progress, height: "100%", backgroundColor: "yellowgreen" }}></div>
            </div>

            <span>{questionset[currentquestion].question}</span>

            <div className='buttonsForAnswer'>
                {questionset[currentquestion].options.map((option, index) => (
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
                    <h3>Your final score is: {score} out of {questionset.length}</h3>
                    <button onClick={restart} className='answeringBtns'>Play Again?</button>
                </div>
            )}
        </div>
    )
}

export default Quiz;
