import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizeEnd from './QuizEnd';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    render() {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
        
        return (
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                {isQuizEnd ? <QuizEnd /> : null}
            </div>
        );
    }
}

export default Quiz;