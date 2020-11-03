import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

//import ComboBoxMultipleChoice from './ComboBoxMultipleChoice'
import ComboBoxCheckBoxes from './ComboBoxCheckBoxes';

export default function ChooseTestBox() {
  return (
    <React.Fragment>
      <Grid
        style={{ justifyContent: 'center', margin: 'auto' }}
        container
        item
        justify="space-evenly"
        alignItems="center"
        xs={12}
      >
        <Container>
          <h2>Choose a Test Here</h2>
          <p style={{ fontSize: '15px', textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </Grid>
      {/*<Grid style={{ justifyContent: 'center' }} container item>
        <ComboBoxMultipleChoice />
      </Grid>*/}
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
        <ComboBoxCheckBoxes />
      </Grid>
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
        <Button
          id="btn-continue"
          variant="contained"
          color="primary"
          onClick={() => {
            console.log('yoyo');
            const remote = require('electron').remote;
            const BrowserWindow = remote.BrowserWindow;
            const win = new BrowserWindow({
              height: 600,
              width: 800,
            });

            win.loadURL('/hello');
          }}
        >
          Continue
        </Button>
      </Grid>
    </React.Fragment>
  );
}
