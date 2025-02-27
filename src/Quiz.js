import React, { useState, useEffect } from 'react';
import quizData from './Quizdata'; 

const Quiz = () => {
    const [questionsetIndex, setQuestionsetIndex] = useState(0);  
    const [questionset, setQuestionset] = useState(quizData[questionsetIndex]);
    const [currentquestion, setCurrentquestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Array(questionset.length).fill(false)); // Track answered questions
    const [userAnswers, setUserAnswers] = useState([]); // Store user's answers
    const [useranswerscategory, setUseranswerscategory] = useState([]);
    const [progress, setProgress] = useState('0%');
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [categorySummary, setCategorySummary] = useState(null);  // Store the category summary

    useEffect(() => {
        setQuestionset(quizData[questionsetIndex]);
        setAnsweredQuestions(new Array(quizData[questionsetIndex].length).fill(false)); 
        setCurrentquestion(0); 
    }, [questionsetIndex]);

    const updateQuestionset = () => {
        setQuestionsetIndex((currVal) => (currVal === quizData.length - 1 ? 0 : currVal + 1));
    };

    const goBack = () => {
        setCurrentquestion((prevVal) => (prevVal === 0 ? questionset.length - 1 : prevVal - 1));
    };

    const goNext = () => {
        setCurrentquestion((prevVal) => (prevVal === questionset.length - 1 ? 0 : prevVal + 1));
    };

    const updateProgress = () => {
        var amountAnswered = answeredCount / questionset.length;
        setProgress(`${amountAnswered * 100}%`);
    };

    const handleAnswer = (userAnswer) => {
        if (!answeredQuestions[currentquestion]) {
            if (userAnswer === questionset[currentquestion].answer) {
                setScore((prevVal) => prevVal + 1);
            }
            const updatedUserAnswers = [...userAnswers];
            updatedUserAnswers[currentquestion] = userAnswer;
            setUserAnswers(updatedUserAnswers);

            const updatedAnsweredQuestions = [...answeredQuestions];
            updatedAnsweredQuestions[currentquestion] = true;
            setAnsweredQuestions(updatedAnsweredQuestions);
            
            if (userAnswer !== questionset[currentquestion].answer) {
                const updatedCategory = [...useranswerscategory];
                updatedCategory.push(questionset[currentquestion].category);
                setUseranswerscategory(updatedCategory);
            }

            updateProgress();
            setCurrentquestion((prevVal) => (prevVal === questionset.length - 1 ? 0 : prevVal + 1));            
        }
    };

    const checkIfAllAnswered = () => {
        return answeredQuestions.every((answered) => answered === true);
    };

    const answeredCount = answeredQuestions.filter((answered) => answered === true).length;

    const restart = () => {
        setScore(0);
        setCurrentquestion(0);
        setAnsweredQuestions(new Array(questionset.length).fill(false));
        setUserAnswers([]); 
        setProgress('0%');
        setQuizCompleted(false);
        updateQuestionset();
    };

    const displayResults = () => {
        setQuizCompleted(true);

        // Calculate the category summary and store it in categorySummary
        const summary = getMissedCategoriesPercentage();
        setCategorySummary(summary);  // Save the result to state
    };

    const getMissedCategoriesPercentage = () => {
        let categoryCounts = {};
    
        // Iterate over the questionset to initialize categoryCounts with the correct total counts
        questionset.forEach((question, index) => {
            const category = question.category;
            if (!categoryCounts[category]) {
                categoryCounts[category] = { total: 0, incorrect: 0 };
            }
            categoryCounts[category].total += 1;
    
            // Check if the question was answered incorrectly
            if (userAnswers[index] !== question.answer) {
                categoryCounts[category].incorrect += 1;
            }
        });
    
        // Calculate percentage for each category
        Object.keys(categoryCounts).forEach((category) => {
            const { total, incorrect } = categoryCounts[category];
    
            // Ensure we don't divide by zero
            if (total === 0) {
                categoryCounts[category].percentage = "No questions in this category";
            } else {
                categoryCounts[category].percentage = ((incorrect / total) * 100).toFixed(1);
            }
        });
    
        return categoryCounts;
    };
    

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

            <span>{questionset[currentquestion].question} - Category: {questionset[currentquestion].category}</span>

            <div className='buttonsForAnswer'>
                {questionset[currentquestion].options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={answeredQuestions[currentquestion]} 
                        className='answeringBtns'
                    >
                        {option}
                    </button>
                ))}
            </div>

            {checkIfAllAnswered() && !quizCompleted && (
                <div>
                    <h2>You've completed the quiz.</h2>
                    <h3>Your final score is: {score} out of {questionset.length}</h3>
                    <button onClick={displayResults} className='answeringBtns'>See Answer Summary</button>
                </div>
            )}

            {quizCompleted && (
                <div className='quiz-summary'>
                    <h2>Answer Summary</h2>
                    <ul>
                        {questionset.map((question, index) => {
                            const isCorrect = userAnswers[index] === question.answer;
                            return (
                                <div key={index}>
                                    <strong>{question.question}</strong><br />
                                    Your answer: {userAnswers[index]} <br />
                                    Correct answer: {question.answer} <br />
                                    <span style={{ color: isCorrect ? 'green' : 'red' }}>
                                        {isCorrect ? 'Correct' : 'Incorrect'}
                                    </span>
                                </div>
                            );
                        })}
                    </ul>

                    <h3>Focus Areas for Improvement:</h3>
                    <ul>
                        {Object.keys(categorySummary)
                            .filter(category => categorySummary[category].total > 0 && categorySummary[category].incorrect !== 0.0) // Filter categories tested in the quiz and categories where user had incorrect answers
                            .map((category) => (
                                <div key={category}>

                                    <strong>{category}</strong>: 
                                    <span style={{ color: 
                                    categorySummary[category].percentage === '0.0' ? 'green' :
                                    categorySummary[category].percentage > 60 ? 'red' : 
                                    'black' 
                                }}>
                                    {categorySummary[category].percentage === '0.0' ? ' Well done!' :
                                    categorySummary[category].percentage > 60 ? ' Needs improvement' : 
                                    ` Incorrect percentage: ${categorySummary[category].percentage}%`}
                                </span>


                                </div>
                            ))}
                    </ul>



                    <button onClick={restart} className='answeringBtns'>Play Again?</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
