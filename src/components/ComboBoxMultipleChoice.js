import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export default function ComboBoxMultipleChoice() {
  return (
    <Autocomplete
      multiple
      id="combobox-multiple-choice"
      options={TestSuites}
      getOptionLabel={(option) => option.title}
      filterSelectedOptions
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Test Suites Multiple Choice"
          placeholder="Choose Tests"
        />
      )}
    />
  )
}

const TestSuites = [
  { title: 'Test 1' },
  { title: 'Test 2' },
  { title: 'Test 3' },
  { title: 'Test 4' },
]
