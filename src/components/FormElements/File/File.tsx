import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IBaseInput } from "../../../common/interfaces";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { ChangeEvent, useState } from "react";
import { getConvertedBytes } from "../../../common/utils";

interface Props extends IBaseInput {};

export default function File({
  id,
  name,
  label,
  disabled,
}: Props) {
  const [file, setFile] = useState<File>();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const tempFile = (e.target.files as FileList)[0];
    setFile(tempFile);
  }

  return (
    <div className="file">
      <input
        id={id}
        type="file"
        name={name}
        disabled={disabled}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="label"
      >
        <FontAwesomeIcon 
          className={file ? "active" : ""}
          icon={faFile} 
        />
        {label}
        <small>
          {file ? (
            <>
              Name: {file.name}
              <br />
              Size: {getConvertedBytes(String(file.size))}
              <br />
              Type: {file.type}
            </>
          ): (
            <>
              No file selected
            </>
          )}
        </small>
      </label>
    </div>
  )
}