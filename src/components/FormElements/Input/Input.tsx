import { faAt, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IBaseInput } from "../../../common/interfaces"

interface Props extends IBaseInput {
  type: "text" | "email" | "password",
  placeholder?: string,
  addon?: IconDefinition 
}

export default function Input({
  id,
  name,
  type,
  label,
  placeholder,
  disabled,
  addon
}: Props) {
  return (
    <div className="input-group">
      <label
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
      <div className={addon ? "addon-wrapper" : undefined}>
        <input
          id={id}
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          />    
        {addon && (
          <div className="addon">
            <FontAwesomeIcon 
              className="addon-icon" 
              icon={addon} 
            />
          </div>
        )}
      </div>
    </div>
  )
}