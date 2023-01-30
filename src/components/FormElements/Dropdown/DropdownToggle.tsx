import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string,
  id: string,
  name: string,
  value: string,
  text: string,
  onClick: () => void,
  disabled?: boolean
}

export default function DropdownToggle({
  className,
  id,
  name,
  value,
  text,
  onClick,
  disabled
}: Props) {
  const formattedClassName = ["dropdown-toggle", className].join(" ");

  return (
    <button
      id={id}
      name={name}
      value={value}
      className={formattedClassName}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      <span>{text}</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  )
}