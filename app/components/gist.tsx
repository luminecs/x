import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ code, lang }: { code: string, lang: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <>
      <SyntaxHighlighter language={lang} style={oneDark} showLineNumbers={false}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button>{isCopied ? 'Copied!' : 'Copy'}</button>
      </CopyToClipboard>
    </>
  )
}

export default CodeBlock