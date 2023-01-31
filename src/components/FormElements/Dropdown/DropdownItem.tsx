import { Option } from "./Dropdown"

interface Props {
  value: string,
  text: string,
  onClick: () => void,
  selectedDefault: Option | Option[],
  disabled?: boolean
}

export default function DropdownItem({
  value,
  text,
  onClick,
  selectedDefault,
  disabled
}: Props) {
  function checkIsSelected() {
    if (Array.isArray(selectedDefault)) {
      return selectedDefault.some(option => {
        return option.value === value;
      })
    }

    return (selectedDefault as Option).value === value;
  }

  return (
    <li>
      <button 
        className={[
          "dropdown-option",
          checkIsSelected() ? "selected" : ""
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