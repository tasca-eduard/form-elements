interface Props {
  title: string,
  children: React.ReactNode
}

export default function Fieldset({
  title,
  children
}: Props) {
  return (
    <fieldset className="fieldset">
      <legend>{title}</legend>
      {children}
    </fieldset>
  )
}