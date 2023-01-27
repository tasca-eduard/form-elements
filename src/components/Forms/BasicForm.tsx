import Button from "../FormElements/Button/Button";
import Checkbox from "../FormElements/Checkbox/Checkbox";
import Field from "../FormElements/Field/Field";
import Fieldset from "../FormElements/Field/Fieldset";
import Form from "../FormElements/Form/Form";
import Input from "../FormElements/Input/Input";
import Radio from "../FormElements/Radio/Radio";

export default function BasicForm() {
  return (
    <Form
      title="Basic Form"
    >
      <Field>
        <Input
          id="textInput"
          name="textInput"
          type="text"
          label="Text Input Field"
          placeholder="Text input field placeholder"
        />
      </Field>
      <Field>
        <Input
          id="emailInput"
          name="emailInput"
          type="email"
          label="Email Input Field"
          placeholder="Email input field placeholder"
        />
      </Field>
      <Field>
        <Input
          id="passWordInput"
          name="passWordInput"
          type="password"
          label="Password Input Field"
          placeholder="Password input field placeholder"
        />
      </Field>
      <Field>
        <small>Additional information: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laborum!</small>
      </Field>
      <Fieldset
        title="Checkboxes"
      >
        <Field>
          <Checkbox 
            id="checkbox1"
            name="checkbox1"
            label="Checkbox Example 1"
          />
        </Field>
        <Field>
          <Checkbox 
            id="checkbox2"
            name="checkbox2"
            label="Checkbox Example 2"
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
          />
        </Field>
        <Field>
          <Radio 
            id="radio2"
            name="radio"
            label="Radio Example 2"
          />
        </Field>
      </Fieldset>
      <Field>
        <Button
          type="submit"
          text="submit"
        />
      </Field>
      <Field>
        <small>Additional information: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laborum!</small>
      </Field>
    </Form>

  )
}