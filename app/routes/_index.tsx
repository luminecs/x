import type { MetaFunction } from '@remix-run/cloudflare'
import Questions from '~/routes/questions/questions'
import CodeBlock from '~/components/code-block'
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Header from '~/components/header'

export const meta: MetaFunction = () => {
  return [{ title: 'luminecs notes' }, { name: 'description', content: 'Welcome to luminecs notes!' }]
}

export default function Index () {
  return (
    <>
      <Header/>
      <div style={{ marginTop: '4rem'}}>
        <CodeBlock code={'No questions, no answers.'} theme={theme} hideCopyButton={true}/>
      </div>
      <>
        <Questions/>
      </>
    </>
  )
}
