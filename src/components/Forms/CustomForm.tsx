import Dropdown, { Option } from "../FormElements/Dropdown/Dropdown";
import Field from "../FormElements/Field/Field";
import Form from "../FormElements/Form/Form";
import { useState } from "react";
import Button from "../FormElements/Button/Button";
import Input from "../FormElements/Input/Input";
import { faAt, faChartBar, faEyeSlash, faFont } from "@fortawesome/free-solid-svg-icons";
import Fieldset from "../FormElements/Field/Fieldset";
import Checkbox from "../FormElements/Checkbox/Checkbox";
import Radio from "../FormElements/Radio/Radio";
import MultiDropdown from "../FormElements/MultiDropdown/MultiDropdown";
import File from "../FormElements/File/File";

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
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum incidunt beatae repudiandae temporibus error!"
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
  const [multiDropdownValue, setMultiDropdownValue] = useState<Option[]>([]);

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
        <MultiDropdown 
          label="Multiselect Field"
          id="multiselect"
          name="multiselect"
          options={OPTIONS}
          selectedDefault={multiDropdownValue}
          onSelect={setMultiDropdownValue}
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
      <Fieldset
        title="Custom Checkboxes"
      >
        <Field>
          <Checkbox 
            id="checkboxCustom1"
            name="checkboxCustom2"
            label="Custom Checkbox Example 1"
            custom="card-like"
          />
        </Field>
        <Field>
          <Checkbox 
            id="checkboxCustom2"
            name="checkboxCusto2"
            label="Custom Checkbox Example 2"
            custom="card-like"
          />
        </Field>
      </Fieldset>
      <Fieldset
        title="Custom Radios"
      >
        <Field>
          <Radio 
            id="radioCustom1"
            name="radioCustom"
            label="Custom Radio Example 1"
            custom="card-like"
          />
        </Field>
        <Field>
          <Radio 
            id="radioCustom2"
            name="radioCustom"
            label="Custom Radio Example 2"
            custom="card-like"
          />
        </Field>
      </Fieldset>
      <Field>
        <File 
          id="file"
          name="file"
          label="Choose a file"
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