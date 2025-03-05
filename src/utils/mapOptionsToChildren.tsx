import { MenuItem } from "@mui/material";
import OptionsProps from "../interfaces/OptionsProps";

/**
 * Utility function to map options (ex. [{value, label}]) to MenuItems
 *
 * @param options
 * @returns
 */
export const mapOptionsToChildren = (options: Array<OptionsProps>) => {
  return {
    children: options.map(({ value, label }) => (
      <MenuItem value={value} key={value}>
        {label}
      </MenuItem>
    )),
  };
};
