import React from 'react'

import Grid from '@material-ui/core/Grid'

import UploadForm from './UploadForm'
import ChooseTestBox from './ChooseTestBox'

export default function AppBody() {
  return (
    <div className="App-body">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid
          container
          sm={6}
          direction="col"
          justify="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <ChooseTestBox />
        </Grid>
        <Grid container item sm={6} justify="center">
          <UploadForm />
        </Grid>
      </Grid>
    </div>
  )
}
