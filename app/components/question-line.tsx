import { Link } from '@remix-run/react'

export default function QuestionLine ({ to, content }: { to: string, content: string }) {
  return (
    <h3 style={{ fontSize: '1.5rem', marginTop: "1.5rem" }}>
      <Link to={to}>{content}</Link>
    </h3>
  )
}