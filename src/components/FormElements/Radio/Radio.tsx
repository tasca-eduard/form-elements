import { IBaseInput } from "../../../common/interfaces"

interface Props extends IBaseInput {
  custom?: "card-like"
}

export default function Radio({
  id,
  name,
  label,
  disabled,
  custom
}: Props) {
  return (
    <div className={[
      "radio",
      custom
    ].join(" ")}>
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