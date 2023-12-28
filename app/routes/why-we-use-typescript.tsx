import type { MetaFunction } from '@remix-run/cloudflare';
import Header from '~/components/header';
import ReadAloudButton from '~/components/read-aloud-button';

export const meta: MetaFunction = () => {
  return [{ title: 'Why we use TypeScript' }, { name: 'description', content: 'Why we use TypeScript' }];
};

export default function WhyWeUseTypeScript() {
  return (
    <>
      <Header />
      <h2>Why we use TypeScript?</h2>
      <ReadAloudButton />
      <p>TypeScript is a static type check system for JavaScript.</p>
    </>
  );
}
