import { Link } from '@remix-run/react';

export default function QuestionLine({ to, content, list }: { to: string; content: string; list?: string[] }) {
  return (
    <>
      <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>
        <Link to={to}>{content}</Link>
      </h3>
      <Link to={to}>
        {list && (
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </Link>
    </>
  );
}
