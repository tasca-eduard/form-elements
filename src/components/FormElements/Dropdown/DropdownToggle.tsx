import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Option } from "./Dropdown";

interface Props {
  className?: string,
  id: string,
  name: string,
  selected: Option | Option[],
  onClick: () => void,
  disabled?: boolean
}

export default function DropdownToggle({
  className,
  id,
  name,
  selected,
  onClick,
  disabled
}: Props) {
  const formattedClassName = ["dropdown-toggle", className].join(" ");

  function getValue() {
    if (Array.isArray(selected)) {
      let formattedValues: string[] = [];

      selected.forEach((option: Option) => {
        formattedValues.push(option.value);
      })

      return formattedValues.join("|");
    } 

    return selected.value;
  }

  function getText(): string | string[] {
    if (Array.isArray(selected)) {
      let textList: string[] = [];

      selected.forEach((option: Option) => {
        textList.push(option.text || option.value);
      })

      return textList;
    }

    return selected.text || selected.value || "None";
  }

  function renderText() {
    if (Array.isArray(getText())) {
      if (getText().length === 0) {
        return (
          <span>None</span>
        )
      }

      return (
        <span className="tag-list">
          {
            (getText() as string[]).map((text, index) => {
              return (
                <span
                  key={text + index} 
                  className="tag"
                >
                  {text}
                </span>
              )
            })
          }
        </span>
      )
    }

    return <span>{getText()}</span>
  }

  return (
    <button
      id={id}
      name={name}
      value={getValue()}
      className={formattedClassName}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      <>
        {renderText()}
      </>
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  )
}