import QuestionLine from '~/components/question-line'
import DivideLine from '~/components/divide-line'

export default function Questions () {
  return (
    <>
      <QuestionLine to="/demo" content="Demo"/>
      <DivideLine text="JavaScript"/>
      <DivideLine text="TypeScript"/>
      <QuestionLine to="/why-we-use-typescript" content="Why we use TypeScript?"/>
      <DivideLine text="Node.js"/>
      <QuestionLine to="/what-is-nodejs" content="What is Node.js?"/>
      <DivideLine text="English"/>
      <QuestionLine to="/english-sentences" content="English Sentences"/>
    </>
  )
}