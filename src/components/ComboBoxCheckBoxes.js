import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon color="primary" fontSize="small" />;

export default class CheckboxesTags extends React.Component {
  constructor(props) {
    super(props);
    this.values = [];
  }
  render() {
    return (
      <Autocomplete
        multiple
        id="combobox-checkboxes-tags"
        options={TestSuites}
        disableCloseOnSelect
        style={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </React.Fragment>
        )}
        onInputChange={(input) => {
          this.values.push(input);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Test Suites CheckBoxes"
            placeholder="Choose Tets"
          />
        )}
      />
    );
  }
}

const TestSuites = [
  { title: 'Test 1' },
  { title: 'Test 2' },
  { title: 'Test 3' },
  { title: 'Test 4' },
  { title: 'Test 5' },
  { title: 'Test 6' },
  { title: 'Test 7' },
  { title: 'Test 8' },
  { title: 'Test 9' },
  { title: 'Test 10' },
];
