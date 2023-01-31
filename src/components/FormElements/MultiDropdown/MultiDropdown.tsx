import { useEffect, useRef, useState } from "react";
import DropdownItem from "../Dropdown/DropdownItem";
import DropdownMenu from "../Dropdown/DropdownMenu";
import DropdownToggle from "../Dropdown/DropdownToggle";

export interface Option {
  value: string,
  text?: string
}

interface Props {
  id: string,
  label: string,
  name: string,
  options: Option[],
  selectedDefault: Option[],
  onSelect: (value: any) => void,
  disabled?: boolean
}

export default function MultiDropdown({
  id,
  label,
  name,
  options,
  selectedDefault,
  onSelect,
  disabled
}: Props) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function toggleShow() {
    setShow(prev => !prev);
  }

  function handleChange(option: Option) {
    let tempSelected = [...selectedDefault];
    const alreadySelectedCb = (selected: Option) => selected.value === option.value;

    if (selectedDefault.find(alreadySelectedCb)) {
      const alreadySelectedIndex = tempSelected.findIndex(alreadySelectedCb);
      tempSelected.splice(alreadySelectedIndex, 1);
    }  else {
      tempSelected.push(option);
    }

    onSelect(tempSelected)
  }

  function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShow(false)
    }
  }

  function getText(option: Option) {
    return option.text || option.value;
  }

  function handleClear() {
    onSelect([]);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    } 
  }, [])

  return (
    <div 
      className="dropdown"
      ref={dropdownRef}
    >
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <DropdownToggle
        id={id}
        name={name}
        selected={selectedDefault}
        onClick={toggleShow}
        disabled={disabled}
      />
      <DropdownMenu
        show={show}
      >
        {
          <li>
            <button 
              className="dropdown-option"
              onClick={handleClear}
            >
              <span>None</span>
            </button>
          </li>
        }
        {options.map(option => {
          return (
            <DropdownItem
              key={option.value}
              text={getText(option)} 
              value={option.value} 
              selectedDefault={selectedDefault}
              onClick={() => handleChange(option)}
              disabled={disabled}
            />
          )
        })}
      </DropdownMenu>
    </div>
  )
}