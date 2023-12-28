import React from 'react'
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = (props) => {
 const { wheelState, moveClockwise, moveCounterClockwise } = props;

 const onClick = (e) => {
  e.target.id === "clockwiseBtn" ?
  moveClockwise() :
  moveCounterClockwise()
 }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`${wheelState === 0 ? "cog active" : "cog"}`} style={{ "--i": 0 }}>{wheelState === 0 ? "B" : null}</div>
        <div className={`${wheelState === 1 ? "cog active" : "cog"}`} style={{ "--i": 1 }}>{wheelState === 1 ? "B" : null}</div>
        <div className={`${wheelState === 2 ? "cog active" : "cog"}`} style={{ "--i": 2 }}>{wheelState === 2 ? "B" : null}</div>
        <div className={`${wheelState === 3 ? "cog active" : "cog"}`} style={{ "--i": 3 }}>{wheelState === 3 ? "B" : null}</div>
        <div className={`${wheelState === 4 ? "cog active" : "cog"}`} style={{ "--i": 4 }}>{wheelState === 4 ? "B" : null}</div>
        <div className={`${wheelState === 5 ? "cog active" : "cog"}`} style={{ "--i": 5 }}>{wheelState === 5 ? "B" : null}</div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={onClick} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={onClick} >Clockwise</button>
      </div>
    </div>
  )
}

const mapState = state => ({
 ...state,
 wheelState: state.wheelState
})

export default connect(mapState,{moveClockwise, moveCounterClockwise})(Wheel);