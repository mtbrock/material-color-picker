export default function CodePreview(props) {
  const palette = props.palette
  return (
    <div className="code-preview-container">
      <pre className="code-preview">
        <code>
          {
`$primary-color: ${palette.primary.main};
$primary-dark-color: ${palette.primary.dark};
$primary-light-color: ${palette.primary.light};
$primary-contrast-color: ${palette.primary.contrastText};

$secondary-color: ${palette.secondary.main};
$secondary-dark-color: ${palette.secondary.dark};
$secondary-light-color: ${palette.secondary.light};
$secondary-contrast-color: ${palette.secondary.contrastText};

$accent-color: ${palette.accent.main};
$accent-dark-color: ${palette.accent.dark};
$accent-light-color: ${palette.accent.light};
$accent-contrast-color: ${palette.accent.contrastText};

$error-color: ${palette.error.main};
$error-dark-color: ${palette.error.dark};
$error-light-color: ${palette.error.light};
$error-contrast-color: ${palette.error.contrastText};`
          }
        </code>
      </pre>
    </div>
  )
}
