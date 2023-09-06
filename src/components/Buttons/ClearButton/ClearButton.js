import React from 'react'
import classes from './ClearButton.module.scss'

const ClearButton = (props) => {
  return (
    <button style={{
      // borderBottomColor: props.color
    }} className={classes.button}>
      {props.children}
      <div className={classes.button__bg} style={{
        backgroundColor: props.color
      }}></div>
      </button>
  )
}

export default ClearButton