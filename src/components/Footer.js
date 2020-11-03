import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function Footer() {
  return (
    <footer
      style={{
        minHeight: '40px',
        backgroundColor: ' #282c34',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        padding: '10px',
      }}
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Grid style={{ margin: 'auto' }} item>
            &copy; Copyright 2020 - Alten Italia
          </Grid>
          <Grid item>
            <img alt="" src="Logo_Alten_Couleurs_White.png" height="60px" />
          </Grid>
        </Grid>
      </Grid>

      {/*
            <Grid container item direction="row" justify="center">
                <Grid style={{ margin: "auto" }} item xs>
                    &copy; Copyright 2020 - Alten Italia
                </Grid>
                <Grid style={{ margin: "auto" }} item xs>
                    <img
                        alt=""
                        src="Logo_Alten_Couleurs_White.png"
                        height="60px"
                    />
                </Grid>
            </Grid>
            */}
    </footer>
  )
}
