import React from 'react'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

export default class UploadForm extends React.Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] })
  }

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    // Details of the uploaded file
    console.log(this.state.selectedFile)
  }

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{' '}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div style={{ margin: 'auto' }}>
        <h2>Upload Form</h2>
        <div>
          {/* 
                    <Button variant="contained" component="label">
                        Upload File
                        <Input type="file" style={{ display: "none" }} />
                    </Button>
                
                */}
          <Input type="file" onChange={this.onFileChange} />
          <Button
            style={{
              marginLeft: '10px',
              backgroundColor: '#001a4d',
              color: 'white',
            }}
            onClick={this.onFileUpload}
          >
            Upload!
          </Button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}
