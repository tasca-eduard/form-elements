import { FormEvent } from "react";

interface Props {
  children: React.ReactNode,
  title?: string
}

export default function Form({
  children,
  title
}: Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="form"
    >
      {title && (
        <span className="title">{title}</span>
      )} 
      {children}
    </form>
  )
}