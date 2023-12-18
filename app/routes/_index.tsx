import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [{ title: 'X' }, { name: 'description', content: 'Welcome to X!' }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <h2>
        <a id="Welcome" href="#">
          Welcome to Remix
        </a>
      </h2>
      <p>
        Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello
        World! Hello World! Hello World! Hello World! Hello World! Hello World! World! Hello World! Hello World! Hello
        World! Hello World! Hello World! World! Hello World! Hello World! Hello World! Hello World! Hello World! World!
        Hello World! Hello World! Hello World! Hello World! Hello World! World! Hello World! Hello World! Hello World!
        Hello World! Hello World! World! Hello World! Hello World! Hello World! Hello World! Hello World!
      </p>
      <p>
        Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello
        World! Hello World! Hello World! Hello World! Hello World! Hello World! World! Hello World! Hello World! Hello
        World! Hello World! Hello World! World! Hello World! Hello World! Hello World! Hello World! Hello World! World!
        Hello World! Hello World! Hello World! Hello World! Hello World! World! Hello World! Hello World! Hello World!
        Hello World! Hello World! World! Hello World! Hello World! Hello World! Hello World! Hello World!
      </p>
      <pre>{`${'var a = 1; ' + "const b = 'hallo'"}`}</pre>
    </div>
  );
}
