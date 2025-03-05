import { GridSpacing } from "@mui/material";
import { ReactElement } from "react";

interface FormFooterProps {
  spacing: GridSpacing;
  rightFooterElements: ReactElement[];
  leftFooterElements: ReactElement[];
}

export default FormFooterProps;
