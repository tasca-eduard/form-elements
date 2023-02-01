import { IBaseInput } from "../../../common/interfaces"

interface Props extends IBaseInput {
  custom?: "card-like"
}

export default function Checkbox({
  id,
  name,
  label,
  disabled,
  custom
}: Props) {
  return (
    <div className={[
      "checkbox",
      custom
    ].join(" ")}>
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