import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dropdown from 'react-dropdown';  
import {Card, Col, Container, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Form} from "react-bootstrap";
import home from './home.js';
import './home.css';

class Add extends React.Component {

constructor(props) {
    super(props);
//this.getType();
this.getContinuous();
//    let data= home.getType();
    this.state = {
        data:[],
        list:[],
        selected:"",
       
    };
}

/*
getType(){
    const {type} = home.props;
    console.log(type);
}
*/

getContinuous() {
  let list = [];
  let data;
    axios.get(`http://127.0.0.1:8000/api-dist/get_cont`).then(response => {
            data = response.data;
            list.length = data.length;
            for (let i = 0; i < data.length; i++) {
                list[i] = data[i]
            }
            this.setState({list: list});
        })
}

getDiscrete() {
    let list = [];
    let data;
    axios.get(`http://127.0.0.1:8000/api-dist/get_disc`).then(response => {
            data = response.data;
            list.length = data.length;
            for (let i = 0; i < data.length; i++) {
                list[i] = data[i]
            }
            this.setState({list: list});
        })
}


 onSelect = (value) =>{
    const {handleSelectedDistributions} = this.props;
    handleSelectedDistributions(value);
    this.setState({selected:value})
}

  
//Genera una fila que contiene los inputs 
 Row() {
    const {selected} = this.props;
     return (
    <div className="select-display">
        
            <Dropdown options={this.state.list} onChange={this.onSelect}  value={selected} placeholder="Select a probability distribution" class="dropdown-menu"/>
        </div>
     )
  }


  render() {   
    return (<div>
       {this.Row()}
       </div>
    );
    }
}
    export default Add;
  