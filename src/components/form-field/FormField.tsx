import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Controller, useFormContext } from "react-hook-form";
import FormFieldProps from "./FormFieldProps";

/**
 * Renders a Grid item with a registered Controlled Form Field
 *
 * @param props {FormFieldProps}
 * @returns
 */
const FormField = (props: FormFieldProps) => {
  const { elementType, size, FieldProps } = props;
  const { register, control } = useFormContext();
  return (
    <Grid size={size}>
      <Controller
        name={FieldProps.name}
        control={control}
        render={({ field: { value } }) => (
          <>
            <Box
              component={elementType}
              value={value}
              {...register(FieldProps.name)}
              {...FieldProps}
            />
          </>
        )}
      />
    </Grid>
  );
};

export default FormField;
