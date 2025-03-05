import { TextField } from "@mui/material";
import { mapOptionsToChildren } from "../../utils/mapOptionsToChildren";
import SimpleSelectProps from "./SimpleSelectProps";

/**
 * Renders a MUI TextField as a select with maped options prop instead of children
 *
 * @param props
 * @returns
 */
const SimpleSelect = (props: SimpleSelectProps) => {
  return (
    <TextField select {...mapOptionsToChildren(props.options)} {...props} />
  );
};

export default SimpleSelect;
