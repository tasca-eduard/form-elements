import { Option } from "./Dropdown"

interface Props {
  value: string,
  text: string,
  onClick: () => void,
  selectedDefault: Option,
  disabled?: boolean
}

export default function DropdownItem({
  value,
  text,
  onClick,
  selectedDefault,
  disabled
}: Props) {
  return (
    <li>
      <button 
        className={[
          "dropdown-option",
          value === selectedDefault.value ? "selected" : ""
        ].join(" ")}
        value={value}
        onClick={onClick}
        type="button"
        disabled={disabled}
      >
        <span>{text}</span>
      </button>
    </li>
  )
}