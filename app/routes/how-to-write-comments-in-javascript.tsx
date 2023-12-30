import type { MetaFunction } from '@remix-run/cloudflare';
import Header from '~/components/header';
import CodeBlock from '~/components/code-block';

export const meta: MetaFunction = () => {
  return [
    { title: 'How to write comments in JavaScript?' },
    { name: 'description', content: 'How to write comments in JavaScript?' },
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
      <h2>How to write comments in JavaScript?</h2>
      <CodeBlock code={code} lang="javascript" />
    </>
  );
}
