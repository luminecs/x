import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ code, lang = 'text', style = oneDark, hideCopyButton = false }: {
  code: string,
  lang?: string,
  style?: { [key: string]: React.CSSProperties },
  hideCopyButton?: boolean
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <>
      <SyntaxHighlighter language={lang} style={style} showLineNumbers={false}>
        {code}
      </SyntaxHighlighter>
      {!hideCopyButton &&
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button style={{
            backgroundColor: 'dodgerblue',
            borderRadius: '0.25rem',
            borderColor: 'dodgerblue',
            border: 'none',
            color: 'white',
            padding: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}>{isCopied ? 'Copied!' : 'Copy the above code'}</button>
        </CopyToClipboard>
      }
    </>
  )
}

export default CodeBlock