import Dropdown, { Option } from "../FormElements/Dropdown/Dropdown";
import Field from "../FormElements/Field/Field";
import Form from "../FormElements/Form/Form";
import { useState } from "react";
import Button from "../FormElements/Button/Button";

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
        <Button
          type="submit"
          text="submit"
        />
      </Field>
    </Form>
  )
}