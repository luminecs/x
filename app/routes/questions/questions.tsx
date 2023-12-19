import { Link } from '@remix-run/react'

export default function Questions() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
    </div>
  );
}