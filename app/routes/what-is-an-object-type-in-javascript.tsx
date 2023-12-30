import CodeBlock from '~/components/code-block';
import type { MetaFunction } from '@remix-run/cloudflare';
import Header from '~/components/header';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'What is an Object Type in JavaScript? How to declare variable of Object type?',
    },
    {
      name: 'description',
      content: 'What is an Object Type in JavaScript? How to declare variable of Object type?',
    },
  ];
};

export default function WhatIsAnObjectTypeInJavascriptRoute() {
  return (
    <>
      <Header />
      <h2>What is an Object Type in JavaScript? How to declare variable of Object type?</h2>
      <p>Everything is an object in JavaScript. Functions or arrays are object.</p>
      <p>
        You can also declare an new object like <strong>person</strong> below:{' '}
      </p>
      <CodeBlock
        code={`const person = {
  name: "John",
  age: 30,
  isMarried: true
};`}
        lang="javascript"
      />
    </>
  );
}
