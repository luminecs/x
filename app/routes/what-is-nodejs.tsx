import type { MetaFunction } from '@remix-run/cloudflare'
import Header from '~/components/header'

export const meta: MetaFunction = () => {
  return [{ title: 'What is Node.js?' }, { name: 'description', content: 'What is Node.js?' }];
};

export default function WhatIsNodejs () {
  return (
    <>
      <Header />
      <h2>What is Node.js?</h2>
    </>
  )
}