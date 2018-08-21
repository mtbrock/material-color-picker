import { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import TouchRipple from '@material-ui/core/ButtonBase'
import { red } from '@material-ui/core/colors'

function ColorLabel(props) {
  const onClick = event => {
    props.onClick(props.colorKey)
  }
  const color = props.color
  const colorPreview = (
    <div className="color-label-preview">
      <div
        className="color-label-preview-top"
        style={{
          background: color.main,
          color: color.contrastText.main,
          textAlign: 'center',
        }}
      >
        <p>
          {props.colorKey}
        </p>
      </div>
      <div className="color-label-preview-bottom">
        <div
          style={{
            background: color.light,
            color: color.contrastText.light,
          }}
        >
          Light
        </div>
        <div
          style={{
            background: color.dark,
            color: color.contrastText.dark,
          }}
        >
          Dark
        </div>
      </div>
    </div>
  )
  let containerClass = 'color-label-container'
  let textClass = 'color-label-text'
  if (props.active) {
    containerClass += ' activated'
    textClass += ' activated'
  }
  return (
    <div onClick={onClick} className={containerClass}>
      <p className={textClass}>{props.children}</p>
      {colorPreview}
    </div>
  )
}

export default ColorLabel
