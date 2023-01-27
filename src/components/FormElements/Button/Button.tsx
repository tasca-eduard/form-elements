interface Props {
  type: "submit" | "button",
  text: string,
  disabled?: boolean
}

export default function Button({
  type,
  text,
  disabled
}: Props) {
  return (
    <button 
      className="button"
      type={type}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  )
}