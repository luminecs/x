import type { MetaFunction } from '@remix-run/cloudflare'
import Questions from '~/routes/questions/questions'
import CodeBlock from '~/components/code-block'
import { base16AteliersulphurpoolLight as style } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const meta: MetaFunction = () => {
  return [{ title: 'luminecs notes' }, { name: 'description', content: 'Welcome to luminecs notes!' }];
};

export default function Index() {
  return (
    <>
      <CodeBlock code={'No questions, no answers.'} style={style} hideCopyButton={true}/>
      <>
        <Questions />
      </>
    </>
  );
}
