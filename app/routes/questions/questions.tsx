import QuestionLine from '~/components/question-line'
import DivideLine from '~/components/divide-line'

export default function Questions () {
  return (
    <>
      <QuestionLine to="/demo" content="Demo"/>
      <DivideLine text="JavaScript"/>
      <DivideLine text="TypeScript"/>
      <DivideLine text="English"/>
    </>
  )
}