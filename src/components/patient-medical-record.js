import React, { Component } from "react";

export default class PatientMedicalRecord extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        content: ""
      };
    }





    render() {
        return (
          <div className="container">
            <header className="jumbotron">
              <h3>{this.state.content}</h3>
            </header>
          </div>
        );
      }







}