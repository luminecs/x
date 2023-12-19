import type { MetaFunction } from '@remix-run/cloudflare';
import Questions from '~/routes/questions/questions'
import Answers from '~/routes/answers/answers'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'X' }, { name: 'description', content: 'Welcome to X!' }];
};

export default function Index() {
  return (
    <div>
      <Questions />
      <li>
        <Link to="/answers/answers">Answers</Link>
      </li>
    </div>
  );
}
