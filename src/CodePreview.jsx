export default function CodePreview(props) {
  const { code } = props
  return (
    <div className="code-preview-container">
      <pre className="code-preview">
        <code>
          {code}
        </code>
      </pre>
    </div>
  )
}
