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

        // Iterate over each category in useranswerscategory
        useranswerscategory.forEach((category) => {
            const totalCategoryCount = questionset.filter((question) => question.category === category).length;        
            const incorrectCategoryCount = useranswerscategory.filter((answerCategory) => answerCategory === category).length;

            const percentageIncorrect = (incorrectCategoryCount / totalCategoryCount) * 100;

            // Store the result in the categoryCounts object
            categoryCounts[category] = {
                total: totalCategoryCount,
                incorrect: incorrectCategoryCount,
                percentage: percentageIncorrect.toFixed(2)  // Display as percentage with 2 decimal places
            };
        });

        return categoryCounts;  // Return the summary to be saved in categorySummary state
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
                    <h2>Congratulations! You've completed the quiz.</h2>
                    <h3>Your final score is: {score} out of {questionset.length}</h3>
                    <button onClick={displayResults} className='answeringBtns'>See Answer Summary</button>
                </div>
            )}

            {quizCompleted && (
                <div>
                    <h2>Answer Summary</h2>
                    <ul>
                        {questionset.map((question, index) => {
                            const isCorrect = userAnswers[index] === question.answer;
                            return (
                                <li key={index}>
                                    <strong>{question.question}</strong><br />
                                    Your answer: {userAnswers[index]} <br />
                                    Correct answer: {question.answer} <br />
                                    <span style={{ color: isCorrect ? 'green' : 'red' }}>
                                        {isCorrect ? 'Correct' : 'Incorrect'}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>

                    <h3>Category Summary:</h3>
                    <ul>
                        {Object.keys(categorySummary).map((category) => (
                            <li key={category}>
                                <strong>{category}</strong>: 
                                Total questions: {categorySummary[category].total}, 
                                Incorrect answers: {categorySummary[category].incorrect}, 
                                Incorrect percentage: {categorySummary[category].percentage}%
                            </li>
                        ))}
                    </ul>

                    <button onClick={restart} className='answeringBtns'>Play Again?</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
