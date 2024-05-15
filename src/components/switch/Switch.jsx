import { FormGroup, Label, Input } from "reactstrap";

function Switch({ label, value, onChange }) {
  return (
    <FormGroup switch>
      <Input type="switch" checked={value} onChange={onChange} />
      <Label check>{label}</Label>
    </FormGroup>
  );
}

export default Switch;
