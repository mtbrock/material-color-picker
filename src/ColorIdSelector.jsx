import '@app/styles/ColorIdSelector.scss'

function createColorIdButtons(props) {
  const { palette } = props;
  return Object.entries(palette).map((entry, index) => {
    const colorId = entry[0]
    const color = entry[1]
    const onClick = event => {
      props.onClick(`${colorId}`)
    }
    const colorPreview = (
      <div className="color-id-button-preview">
        <div
          className="color-id-button-preview-top"
          style={{
            background: color.main,
            color: color.contrastText.main,
          }}
        >
          <p>
            {colorId}
          </p>
        </div>
        <div className="color-id-button-preview-bottom">
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
    let containerClass = 'color-id-button-container'
    let textClass = 'color-id-button-text'
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

function ColorIdSelector(props) {
  return (
    <div className="color-id-selector-container">
      {createColorIdButtons(props)}
    </div>
  )
}

export default ColorIdSelector
