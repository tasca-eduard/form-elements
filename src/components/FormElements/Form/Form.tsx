interface Props {
  children: React.ReactNode,
  title?: string
}

export default function Form({
  children,
  title
}: Props) {
  return (
    <form className="form">
      {title && (
        <span className="title">{title}</span>
      )} 
      {children}
    </form>
  )
}