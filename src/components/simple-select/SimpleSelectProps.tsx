import { TextFieldProps } from "@mui/material";
import OptionsProps from "../../interfaces/OptionsProps";

interface SimpleSelectProps extends TextFieldProps {
  options: OptionsProps[];
}

export default SimpleSelectProps;
