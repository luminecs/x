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
      <p>六合之外，圣人存而不论；六合之内，圣人论而不议。</p>
    </>
  );
}
