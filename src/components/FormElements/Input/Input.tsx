interface Props {
  id: string,
  name: string,
  type: "text" | "email" | "password",
  label: string,
  placeholder?: string,
  disabled?: boolean
}

export default function Input({
  id,
  name,
  type,
  label,
  placeholder,
  disabled
}: Props) {
  return (
    <>
      <label
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
      <input
        id={id}
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  )
}