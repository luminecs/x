import type { MetaFunction } from '@remix-run/cloudflare';
import Header from '~/components/header';
import CodeBlock from '~/components/code-block';

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'What are the primitive data types in JavaScript? How to declare variables of respective types separately?',
    },
    {
      name: 'description',
      content:
        'What are the primitive data types in JavaScript? How to declare variables of respective types separately?',
    },
  ];
};

const boolCode = `let a = true;
const b = false;
`;

export default function WhatAreThePrimitiveDataTypesInJavaScript() {
  return (
    <>
      <Header />
      <h2>What are the primitive data types in JavaScript? How to declare variables of respective types separately?</h2>
      <p>There are 7 primitive data types in JavaScript:</p>
      <ul>
        <li>Boolean</li>
        <li>Null</li>
        <li>Undefined</li>
        <li>Number</li>
        <li>BigInt</li>
        <li>String</li>
        <li>Symbol</li>
      </ul>
      <hr />
      <h3>How to declare a variable of type Boolean?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
      <h3>How to declare a variable of type Null?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
      <h3>How to declare a variable of type Undefined?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
      <h3>How to declare a variable of type Number?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
      <h3>How to declare a variable of type BigInt?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
      <h3>How to declare a variable of type String?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
      <h3>How to declare a variable of type Symbol?</h3>
      <CodeBlock code={boolCode} lang="javascript" />
    </>
  );
}
