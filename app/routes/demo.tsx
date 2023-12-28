import CodeBlock from '~/components/gist'

const c = `export default function Demo () {
  return (
    <div>
      <h2>
        <a id="Welcome" href="#1">
          Welcome to Remix
        </a>
      </h2>
      <CodeBlock code={'let a = 1;'} lang={'javascript'}/>
      <CodeBlock code={\`var a = 1;\\nconst b = \\'hallo\\'\`} lang={'javascript'}/>
      <CodeBlock code={c} lang={'javascript'}/>
    </div>
  )
};
`

export default function Demo () {
  return (
    <div>
      <h2>
        <a id="Welcome" href="#1">
          Welcome to Remix
        </a>
      </h2>
      <CodeBlock code={'let a = 1;'} lang={'javascript'}/>
      <CodeBlock code={`var a = 1;\nconst b = \'hallo\'`} lang={'javascript'}/>
      <CodeBlock code={c} lang={'javascript'}/>
      <p>你好</p>
    </div>
  )
};
