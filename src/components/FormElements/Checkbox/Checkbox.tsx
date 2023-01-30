interface Props {
  id: string,
  name: string,
  label: string,
  disabled?: boolean
}

export default function Checkbox({
  id,
  name,
  label,
  disabled,
}: Props) {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
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