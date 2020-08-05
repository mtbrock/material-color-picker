import '@app/styles/ColorIdSelector.scss'

function previewStyle(color, variety) {
    return {
        background: color[variety],
        color: color.contrastText[variety],
    }
}

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
                    style={previewStyle(color, 'main')}>
                    <p>{colorId}</p>
                </div>
                <div className="color-id-button-preview-bottom">
                    <div style={previewStyle(color, 'light')}>Light</div>
                    <div style={previewStyle(color, 'dark')}>Dark</div>
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
