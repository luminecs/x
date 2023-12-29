import Header from '~/components/header'
import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'English Sentences' }, { name: 'description', content: 'English Sentences' }];
};

export default function EnglishSentences() {
  return (
    <>
      <Header />
      <h2>English Sentences</h2>
      <ul>
        <li>
          This chapter helps you decide whether or not this book is of interest to you.
        </li>
        <li>
          How its works.
        </li>
      </ul>
    </>
  )
}