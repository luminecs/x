import type { MetaFunction } from '@remix-run/cloudflare';
import { Demo } from '~/routes/demo';

export const meta: MetaFunction = () => {
  return [{ title: 'X' }, { name: 'description', content: 'Welcome to X!' }];
};

export default function Index() {
  return (
    <div>
      <ul>
        <li>你好</li>
        <li>你好</li>
        <li>你好</li>
      </ul>
    </div>
  );
}
