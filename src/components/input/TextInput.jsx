import Input from "./Input";
import { forwardRef } from "react";

const ForwardedTextInput = forwardRef(function TextInput(props, ref) {
  return <Input {...props} type="text" ref={ref} />;
});

export default ForwardedTextInput;
