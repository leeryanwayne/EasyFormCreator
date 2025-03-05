import { ElementType } from "react";
import FieldProps from "../../interfaces/FieldProps";
import { BreakpointOverrides, GridSize } from "@mui/system";

interface FormFieldProps {
  size: GridSize | BreakpointOverrides;
  elementType: ElementType;
  FieldProps: FieldProps;
}

export default FormFieldProps;
