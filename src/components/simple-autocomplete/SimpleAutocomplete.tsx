import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

/**
 * Renders a MUI Autocomplete integrated with React Hook Form
 *
 * @param props
 * @returns
 */
const SimpleAutocomplete = (props: AutocompleteProps) => {
  const { label, name } = props;
  const { setValue } = useFormContext();
  return (
    <Autocomplete
      renderInput={(params) => <TextField label={label} {...params} />}
      {...props}
      onChange={(_, v) => setValue(name, v)}
    />
  );
};

export default SimpleAutocomplete;
