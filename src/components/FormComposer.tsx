import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { muiTheme } from "../theme/muiTheme";
import FormFooter from "./form-footer/FormFooter";
import FormComposerProps from "./FormComposerProps";

/**
 * Renders a Form with setup Provider, MUI Theme (defaulted with Full Width elements), form element, and footer element
 *
 * @param props
 * @returns
 */
const FormComposer = (props: FormComposerProps) => {
  const {
    spacing,
    onSubmit,
    onError,
    children = [],
    FormProps = {},
    theme = muiTheme,
  } = props;
  const form = useForm(FormProps);
  const { handleSubmit } = form;
  return (
    <FormProvider {...form}>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container spacing={spacing}>
            {children}
            <FormFooter {...props} />
          </Grid>
        </form>
      </ThemeProvider>
    </FormProvider>
  );
};

export default FormComposer;
