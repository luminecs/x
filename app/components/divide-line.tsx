export default function DivideLine ({ text }: { text: string }) {
  return (
    <div className="divide-line">
      <span className="divide-line-text">{text}</span>
    </div>
  )
}