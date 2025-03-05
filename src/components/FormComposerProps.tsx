import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import FormFooterProps from "./form-footer/FormFooterProps";
import { ReactElement } from "react";
import { Theme } from "@mui/material";

interface FormComposerProps extends FormFooterProps {
  FormProps: Object;
  children: ReactElement[];
  onSubmit: (data: any) => SubmitHandler<any>;
  onError: (errors: any) => SubmitErrorHandler<any>;
  theme: Theme;
}

export default FormComposerProps;
