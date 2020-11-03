//const exec = require('child_process').exec;
//const path = require('path');

//const startUrl = `file://${path.join(__dirname, '../build/index.html')}`;

document.querySelector('#btn-continue').addEventListener('click', () => {
  createBrowserWindow();
});
function createBrowserWindow() {
  console.log('yoyo');
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({
    height: 600,
    width: 800,
  });

  win.loadURL('http://localhost:3000/hello');
}
