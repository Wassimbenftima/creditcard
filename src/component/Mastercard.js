import React, { Component } from "react";
import Logo from "../img/Mastercardlogo.png";
import Logo2 from "../img/Logo2.png";
import { Form } from "react-bootstrap";

export default class Mastercard extends Component {
  state = {
    name: "Name",
    number: "****************",
    date: "MM/YY"
  };
  nameChange = i => {
    // let Regex=/^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/g
    // let Regex= /^[a-zA-Z ]*$/g
    i.target.value = i.target.value.replace(/[^a-zA-Z ]*$/g, "");
    // if (i.target.value){
    return this.setState({ name: i.target.value.toUpperCase() });
  };
  // else{
  //   return alert("this name is invalid")
  //   }
  // }

  numberChange = a => {
    //let regex=/^(\(?\+?[0-9]*\)?)?[0-9]*$/g
    a.target.value = a.target.value.replace(/[^0-9]/g, "");
    //if(regex.test(a.target.value)){
    return this.setState({ number: a.target.value });
  };
  // else{
  //alert("this number is invalid")
  //}
  //}

  dateChange = b => {
    if (b.target.value.slice(0, 2) > 12) return alert("month is invalid");
    else if (b.target.value >= 3) return (b.target.value =
        b.target.value.replace(/[^0-9]/g, "").slice(0, 2) + "/" + b.target.value.replace(/[^0-9]/g, "").slice(2, 4));
    // b.target.value =
   
    this.setState({
      date :b.target.value
    });
  };

  render() {
    return (
      <div className="master_card">
        <div className="col-24 col-sm-12" className="master">
          <h1 className="title">Company Name</h1>
          <span>
            <img className="puce" src={Logo2} alt="puce" />
          </span>
          <p className="Numbers">{this.state.number}</p>
          <p className="jour">{this.state.date}</p>
          <img className="logo" src={Logo} alt="logo" />
          <p className="Nom">{this.state.name}</p>
          <p className="company">Master Card</p>
        </div>
        <div>
          <Form>
            <Form.Control
              className="card_Number"
              placeholder="Enter Your card Number"
              maxLength="16"
              onChange={this.numberChange}
            />
          </Form>
          <Form>
            <Form.Control
              className="Date_user"
              placeholder="MM/YY"
              maxLength="5"
              onChange={this.dateChange}
            />
          </Form>
          <Form>
            <Form.Control
              className="Name_user"
              placeholder="Enter your Name"
              maxLength="20"
              onChange={this.nameChange}
            />
          </Form>
        </div>
      </div>
    );
  }
}
