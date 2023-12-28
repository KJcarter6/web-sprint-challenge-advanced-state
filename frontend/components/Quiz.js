import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, postAnswer, selectAnswer } from '../state/action-creators';

const Quiz = (props) => {
 const { 
  quizState, 
  selectedAnswerState, 
  fetchQuiz, 
  postAnswer,
  selectAnswer
 } = props;

 const [ disabled, setDisabled] = useState(true);

 useEffect(() => {
  selectedAnswerState ? setDisabled(false) : setDisabled(true);
 },[selectedAnswerState]);

 const onClick = e => {
  selectAnswer(e.target.id);
 }

 const onSubmit = e => {
  e.preventDefault();
  postAnswer({
   "quiz_id": quizState.quiz_id, 
   "answer_id": selectedAnswerState
  });
  fetchQuiz();
 }

 useEffect(() => {
  quizState ? null : fetchQuiz();
 },[])

  return (
    <div id="wrapper">
      {
        quizState ? (
          <>
            <h2>{quizState.question}</h2>

            <div id="quizAnswers">
              <div className={`${quizState.answers[0].answer_id === selectedAnswerState ? " answer selected" : "answer"}`}>
                {quizState.answers[0].text}
                <button id={quizState.answers[0].answer_id} onClick={onClick}>
                  {quizState.answers[0].answer_id === selectedAnswerState ? "SELECTED" : "select"}
                </button>
              </div>

              <div className={`${quizState.answers[1].answer_id === selectedAnswerState ? "answer selected" : "answer"}`}>
              {quizState.answers[1].text}
                <button id={quizState.answers[1].answer_id} onClick={onClick}>
                  {quizState.answers[1].answer_id === selectedAnswerState ? "SELECTED" : "select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={disabled} onClick={onSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapState = state => ({
 ...state,
 quizState: state.quizState,
 selectedAnswerState: state.selectedAnswerState
})

export default connect(mapState,{ fetchQuiz, selectAnswer, postAnswer })(Quiz);