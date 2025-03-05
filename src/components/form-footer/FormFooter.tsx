import Grid from "@mui/material/Grid2";
import FormFooterProps from "./FormFooterProps";

/**
 * Renders a Form Footer of auto adujusting Grid items and Elements to control the Form
 *
 * @param props
 * @returns
 */
const FormFooter = (props: FormFooterProps) => {
  const { spacing, leftFooterElements, rightFooterElements } = props;
  return (
    <Grid size={12}>
      <Grid container justifyContent={"space-between"} spacing={spacing}>
        <Grid size={{ xs: 12, sm: "auto" }}>
          {leftFooterElements?.map((e, i) => (
            <Grid size={{ xs: 12, sm: "auto" }} textAlign={"center"} key={i}>
              {e}
            </Grid>
          ))}
        </Grid>
        <Grid size={{ xs: 12, sm: "auto" }}>
          {rightFooterElements?.map((e, i) => (
            <Grid size={{ xs: 12, sm: "auto" }} textAlign={"center"} key={i}>
              {e}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormFooter;
