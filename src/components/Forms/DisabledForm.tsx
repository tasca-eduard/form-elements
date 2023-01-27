import { useState } from "react";
import Button from "../FormElements/Button/Button";
import Checkbox from "../FormElements/Checkbox/Checkbox";
import Dropdown, { Option } from "../FormElements/Dropdown/Dropdown";
import Field from "../FormElements/Field/Field";
import Fieldset from "../FormElements/Field/Fieldset";
import Form from "../FormElements/Form/Form";
import Input from "../FormElements/Input/Input";
import Radio from "../FormElements/Radio/Radio";

export default function DisabledForm() {
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
      title="Disabled Form"
    >
      <Field>
        <Input
          id="textInput"
          name="textInput"
          type="text"
          label="Text Input Field"
          placeholder="Text input field placeholder disabled"
          disabled={true}
        />
      </Field>
      <Field>
      <Dropdown 
          label="Dropdown Field"
          id="dropdown-1"
          name="dropdown-1"
          options={OPTIONS}
          selectedDefault={dropdownValue}
          onSelect={setDropdownValue}
          disabled={true}
        />
      </Field>
      <Fieldset
        title="Checkboxes"
      >
        <Field>
          <Checkbox 
            id="checkbox1"
            name="checkbox1"
            label="Checkbox Example 1"
            disabled={true}
          />
        </Field>
        <Field>
          <Checkbox 
            id="checkbox2"
            name="checkbox2"
            label="Checkbox Example 2"
            disabled={true}
          />
        </Field>
      </Fieldset>
      <Fieldset
        title="Radios"
      >
        <Field>
          <Radio 
            id="radio1"
            name="radio"
            label="Radio Example 1"
            disabled={true}
          />
        </Field>
        <Field>
          <Radio 
            id="radio2"
            name="radio"
            label="Radio Example 2"
            disabled={true}
          />
        </Field>
      </Fieldset>
      <Field>
        <small>Additional information: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laborum!</small>
      </Field>
      <Field>
        <Button
          type="submit"
          text="submit"
          disabled={true}
        />
      </Field>
    </Form>
  )
}