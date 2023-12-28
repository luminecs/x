import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'Why we use TypeScript' }, { name: 'description', content: 'Why we use TypeScript' }]
}

export default function WhyWeUseTypeScript () {
  return (
    <>
      <h2>Why we use TypeScript?</h2>
      <p>TypeScript is a static type check system for JavaScript.</p>
    </>
  )
}