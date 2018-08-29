import { rgbToHex } from '../colorUtils'

export default function CodePreview(props) {
  const colorIds = [
    'primary',
    'secondary',
    'accent',
    'error',
  ]
  const palette = props.palette
  const formatColor = color => rgbToHex(color)
  return (
    <div className="code-preview-container">
      <pre className="code-preview">
        <code>
          {colorIds.map((colorId) =>
              {
return `$${colorId)}-color: ${rgbToHex(palette[colorId].main)};
$${colorId)}-dark-color: ${rgbToHex(palette[colorId].dark)};
$${colorId)}-light-color: ${rgbToHex(palette[colorId].light)};
$${colorId)}-contrast-color: ${rgbToHex(palette[colorId].contrastText.main)};

`
              }
          )}
        </code>
      </pre>
    </div>
  )
}
