// ❗ You don't need to add extra reducers to achieve MVP
import { 
  // WHEEL
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  // QUIZ
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  // FORM
  INPUT_CHANGE,
  RESET_FORM
 } from './action-types';
 
 const initialState = {
  wheelState: 0,
  quizState: false,
  selectedAnswerState: null,
  messageState: '',
  formState: {
   question_text: '',
   true_answer_text: '',
   false_answer_text: ''
  }
 }
 
 const reducer = (state=initialState,action) => {
  switch(action.type) {
   // WHEEL
   case MOVE_CLOCKWISE:
    if (state.wheelState < 5) {
     return {
      ...state,
      wheelState: state.wheelState + 1
     }
    } else {
     return {
      ...state,
      wheelState: 0
     }
    }
 
   case MOVE_COUNTERCLOCKWISE:
    if (state.wheelState > 0) {
     return {
      ...state,
      wheelState: state.wheelState - 1
     }
    } else {
     return {
      ...state,
      wheelState: 5
     }
    }
 
   // QUIZ
   case SET_QUIZ_INTO_STATE:
    return {
     ...state,
     quizState: action.payload
    };
 
   case SET_SELECTED_ANSWER:
    return {
     ...state,
     selectedAnswerState: action.payload
    };
 
   case SET_INFO_MESSAGE:
    return {
     state,
     messageState: action.payload
    };
 
   // FORM
   case INPUT_CHANGE:
    return {
     ...state,
     formState: {
      ...state.formState,
      [action.payload.id]: action.payload.value
     },
     messageState: ''
    };
 
    case RESET_FORM:
     return {
      ...state,
      formState: {
       question_text: '',
       true_answer_text: '',
       false_answer_text: ''
      }
     }
 
   default:
    return state;
  }
 }
 
 export default reducer;
