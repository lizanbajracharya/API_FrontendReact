import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import Axios from 'axios'

export default class PDF extends Component {
  componentDidMount(){
  Axios.get(`localhost:3000/load/`+(this.props.match.params.bookcontent), {
})
.then(response => {
//Create a Blob from the PDF Stream
    const file = new Blob(
      [response.data], 
      {type: 'application/pdf'});
//Build a URL from the file
    const fileURL = URL.createObjectURL(file);
//Open the URL on new Window
    window.open(fileURL);
})
.catch(error => {
    console.log(error);
});
}
}
