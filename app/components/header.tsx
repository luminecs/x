import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="home-link">
        Home
      </Link>
      {/* <button className="reader">Read</button> */}
    </div>
  );
}
