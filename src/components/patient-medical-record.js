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
            <div className="ui search">
               <div className="ui icon input">
                  <input type="text" style={{width: '250px', border: '2px solid powderblue', fontFamily:'times new roman'}} placeholder="Search" className="prompt" />
                  <i className="search icon"></i>

               </div>
            </div>
            </header>    
          </div>
        );
      }







}