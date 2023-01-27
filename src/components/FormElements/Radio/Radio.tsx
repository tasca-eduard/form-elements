interface Props {
  id: string,
  name: string,
  label: string,
  disabled?: boolean
}

export default function Radio({
  id,
  name,
  label,
  disabled,
}: Props) {
  return (
    <div className="radio">
      <label
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
      <input
        id={id}
        type="radio"
        name={name}
        disabled={disabled}
      />
    </div>
  )
}