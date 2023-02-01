import { useEffect, useRef, useState } from "react";
import { IBaseInput } from "../../../common/interfaces";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

export interface Option {
  value: string,
  text?: string
}

interface Props extends IBaseInput {
  options: Option[],
  selectedDefault: Option,
  onSelect: (value: any) => void,
}

export default function Dropdown({
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
    onSelect(option)
    toggleShow();
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
    onSelect({});
    toggleShow();
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
        selected={{
          value: selectedDefault.value,
          text: getText(selectedDefault)
        }}
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