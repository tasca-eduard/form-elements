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
      <input
        id={id}
        type="radio"
        name={name}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
    </div>
  )
}