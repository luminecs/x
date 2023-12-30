import type { MetaFunction } from '@remix-run/cloudflare';
import Header from '~/components/header';
import CodeBlock from '~/components/code-block';

export const meta: MetaFunction = () => {
  return [
    { title: 'What is comments? How to write comments in JavaScript?' },
    { name: 'description', content: 'What is comments? How to write comments in JavaScript?' },
  ];
};

const code = `// This is a single line comment

/*
This is a multi-line comment
*/

/**
 * This is a JSDoc comment
 * @param {string} name
 * @returns {string}
 */
`;

export default function HowToWriteCommentsInJavaScript() {
  return (
    <>
      <Header />
      <h2>What is comments? How to write comments in JavaScript?</h2>
      <p>Comments in code refer to text that will be ignored by the compiler or interpreter.</p>
      <CodeBlock code={code} lang="javascript" />
    </>
  );
}
