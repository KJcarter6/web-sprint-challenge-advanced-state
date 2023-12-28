import React from 'react'
import { connect } from 'react-redux'

function Message(props) {
  return (
   props.messageState.length > 0 ?
   <div id="message">{props.messageState}</div> :
   null
  )
}

const mapState = state => ({
 ...state,
 messageState: state.messageState
})

export default connect(mapState)(Message);