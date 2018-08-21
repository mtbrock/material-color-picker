import { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import TouchRipple from '@material-ui/core/ButtonBase'
import { red } from '@material-ui/core/colors'

function ColorIdSelector(props) {
  const { palette } = props;
  return Object.entries(palette).map((entry, index) => {
    const colorId = entry[0]
    const color = entry[1]
    const onClick = event => {
      props.onClick(`${colorId}`)
    }
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
            {props.colorId}
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
    if (props.activeId === colorId) {
      containerClass += ' activated'
      textClass += ' activated'
    }
    return (
      <div onClick={onClick} className={containerClass} key={index}>
        <p className={textClass}>{props.children}</p>
        {colorPreview}
      </div>
    )
  })
}

export default ColorIdSelector
