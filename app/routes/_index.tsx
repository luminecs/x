import type { MetaFunction } from '@remix-run/cloudflare'
import Questions from '~/routes/questions/questions'

export const meta: MetaFunction = () => {
  return [{ title: 'X' }, { name: 'description', content: 'Welcome to X!' }];
};

export default function Index() {
  return (
    <div>
      <Questions />
    </div>
  );
}
