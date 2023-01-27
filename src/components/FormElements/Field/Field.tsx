interface Props {
  children: React.ReactNode
}

export default function Field({
  children
}: Props) {
  return (
    <div className="field">
      {children}
    </div>
  )
}