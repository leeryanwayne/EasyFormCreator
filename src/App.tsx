import { Button, TextField } from "@mui/material";
import "./App.css";
import FormComposer from "./components/FormComposer";
import FormField from "./components/form-field/FormField";
import SimpleAutocomplete from "./components/simple-autocomplete/SimpleAutocomplete";
import SimpleSelect from "./components/simple-select/SimpleSelect";

function App() {
  return (
    <FormComposer
      FormProps={{
        defaultValues: {
          select: 1,
          complexAutocomplete: [
            { value: 1, surName: "Ben", lastName: "Billy" },
          ],
        },
      }}
      onSubmit={(data) => console.log(data)}
      onError={(errors) => console.log(errors)}
      leftFooterElements={[<Button fullWidth>Cancel</Button>]}
      rightFooterElements={[
        <Button type="submit" fullWidth>
          Submit
        </Button>,
      ]}
      spacing={2}
    >
      <FormField
        size={{ xs: 12, sm: 6 }}
        elementType={TextField}
        FieldProps={{ name: "text", label: "Text" }}
      />
      <FormField
        size={{ xs: 12, sm: 6 }}
        elementType={TextField}
        FieldProps={{ name: "numer", label: "Number", type: "number" }}
      />
      <FormField
        size={{ xs: 12, sm: 6 }}
        elementType={SimpleSelect}
        FieldProps={{
          name: "select",
          label: "Select",
          options: [{ value: 1, label: "1" }],
        }}
      />
      <FormField
        size={{ xs: 12, sm: 6 }}
        elementType={SimpleAutocomplete}
        FieldProps={{
          name: "autocomplete",
          label: "Autocomplete",
          options: [{ value: 1, label: "1" }],
        }}
      />
      <FormField
        size={12}
        elementType={SimpleAutocomplete}
        FieldProps={{
          name: "complexAutocomplete",
          label: "Complex Autocomplete",
          multiple: true,
          options: [
            { value: 1, surName: "Ben", lastName: "Billy" },
            { value: 2, surName: "Tom", lastName: "Thunder" },
          ],
          getOptionLabel: (o: { surName: string; lastName: string }) =>
            `${o.surName} ${o.lastName}`,
        }}
      />
    </FormComposer>
  );
}

export default App;
