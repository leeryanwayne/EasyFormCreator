import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
});
