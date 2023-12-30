import QuestionLine from '~/components/question-line';
import DivideLine from '~/components/divide-line';

export default function Questions() {
  return (
    <>
      <QuestionLine to="/demo" content="Demo" />
      <DivideLine text="JavaScript" />
      <QuestionLine
        to="/how-to-write-comments-in-javascript"
        content="What is comments? How to write comments in JavaScript?"
      />
      <QuestionLine
        to="/what-are-the-primitive-data-types-in-javascript"
        content="What are the primitive data types in JavaScript? How to declare variables of respective types separately?"
        list={[
          'How to declare a variable of type Boolean?',
          'How to declare a variable of type Null?',
          'How to declare a variable of type Undefined?',
          'How to declare a variable of type Number?',
          'How to declare a variable of type BigInt?',
          'How to declare a variable of type String?',
          'How to declare a variable of type Symbol?',
        ]}
      />
      <QuestionLine
        to="/what-is-an-object-type-in-javascript"
        content="What is an Object Type in JavaScript? How to declare variable of types Object?"
      />
      <DivideLine text="TypeScript" />
      <QuestionLine to="/why-we-use-typescript" content="Why we use TypeScript?" />
      <DivideLine text="Node.js" />
      <QuestionLine to="/what-is-nodejs" content="What is Node.js?" />
      <DivideLine text="English" />
      <QuestionLine to="/english-sentences" content="English Sentences" />
    </>
  );
}
