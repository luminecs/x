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
      <CodeBlock
        code={`let a = true;
const b = false;
`}
        lang="javascript"
      />
      <h3>How to declare a variable of type Null?</h3>
      <CodeBlock code="let a = null;" lang="javascript" />
      <h3>How to declare a variable of type Undefined?</h3>
      <CodeBlock code="let a = undefined;" lang="javascript" />
      <h3>How to declare a variable of type Number?</h3>
      <p>The basic number type is used for both floating point numbers (doubles) and integers.</p>
      <CodeBlock code={`let a = 1.234;\nconst b = -0.03;`} lang="javascript" />
      <h3>How to declare a variable of type BigInt?</h3>
      <CodeBlock
        code={`let a = 1234567890123456789012345678901234567890n; // ends with 'n'
const b = BigInt("1234567890123456789012345678901234567890");
`}
        lang="javascript"
      />
      <h3>How to declare a variable of type String?</h3>
      <p>JavaScript has no extra type for characters. It uses strings to represent them.</p>
      <CodeBlock
        code={`let a = 'Hello';\nconst b = "World";\nlet c = \`${123}\` // string literal`}
        lang="javascript"
      />
      <h3>How to declare a variable of type Symbol?</h3>
      <CodeBlock code={`let a = Symbol("description");`} lang="javascript" />
    </>
  );
}
