import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { inputChange, postForm } from '../state/action-creators';

export function Form(props) {
 const { inputChange, postForm, formState } = props;
 const [ disabled, setDisabled] = useState(true);

 useEffect(() => {
   if (formState.question_text.trim() && formState.true_answer_text.trim() && formState.false_answer_text.trim()) {setDisabled(false)}
   else {setDisabled(true)}
 },[formState])

 const onChange = evt => {
  if (evt.target.id === "newQuestion") {
   inputChange({id: "question_text", value: evt.target.value})
  }
  else if (evt.target.id === "newTrueAnswer") {
   inputChange({id: "true_answer_text", value: evt.target.value})
  }
  else {
   inputChange({id: "false_answer_text", value: evt.target.value})
  }
 }

 const onSubmit = evt => {
  evt.preventDefault();
  postForm(formState);
  setDisabled(true);
 }

  return (
  <form id="form" onSubmit={onSubmit}>
   <h2>Create New Quiz</h2>
   <input maxLength={50} value={formState.question_text} onChange={onChange} id='newQuestion' placeholder="Enter question" />
   <input maxLength={50} value={formState.true_answer_text} onChange={onChange} id='newTrueAnswer' placeholder="Enter true answer" />
   <input maxLength={50} value={formState.false_answer_text} onChange={onChange} id='newFalseAnswer' placeholder="Enter false answer" />
   <button id="submitNewQuizBtn" disabled={disabled} >Submit new quiz</button>
  </form>
 )
}

const mapState = state => ({
 ...state,
 formState: state.formState
})

export default connect(mapState, { inputChange, postForm })(Form);