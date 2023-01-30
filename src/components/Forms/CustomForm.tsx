import Dropdown, { Option } from "../FormElements/Dropdown/Dropdown";
import Field from "../FormElements/Field/Field";
import Form from "../FormElements/Form/Form";
import { useState } from "react";
import Button from "../FormElements/Button/Button";
import Input from "../FormElements/Input/Input";
import { faAt, faChartBar, faEyeSlash, faFont } from "@fortawesome/free-solid-svg-icons";

export default function CustomForm() {
  const OPTIONS: Option[] = [
    {
      value: "first",
    },
    {
      value: "second",
      text: ""
    },
    {
      value: "third",
      text: "third Value"
    },
    {
      value: "fourth",
      text: "fourth Value"
    },
    {
      value: "fifth",
      text: "fifth Value"
    },
    {
      value: "sixth",
      text: "sixth Value"
    },
    {
      value: "seventh",
      text: "seventh Value"
    },
  ];
  const [dropdownValue, setDropdownValue] = useState<Option>(OPTIONS[0]);

  return (
    <Form
      title="Custom form"
    > 
      <Field>
        <Dropdown 
          label="Dropdown Field"
          id="dropdown"
          name="dropdown"
          options={OPTIONS}
          selectedDefault={dropdownValue}
          onSelect={setDropdownValue}
        />
      </Field>
      <Field>
        <Input
          id="textInputCustom"
          name="textInputCustom"
          type="text"
          label="Text Input Field"
          placeholder="Addon Text input field placeholder"
          addon={faFont}
        />
      </Field>
      <Field>
        <Input
          id="emailInputCustom"
          name="emailInputCustom"
          type="email"
          label="Email Input Field"
          placeholder="Addon Email input field placeholder"
          addon={faAt}
        />
      </Field>
      <Field>
        <Input
          id="passWordInputCustom"
          name="passWordInputCustom"
          type="password"
          label="Password Input Field"
          placeholder="Addon Password input field placeholder"
          addon={faEyeSlash}
        />
      </Field>
      <Field>
        <Button
          type="submit"
          text="submit"
        />
      </Field>
    </Form>
  )
}