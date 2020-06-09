import React, { Component } from 'react'  
import axios from 'axios';  
import { Line, Doughnut } from 'react-chartjs-2';  
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";


export class Linecharts extends Component {  
    constructor(props) {  
    super(props);  
    this.state = { 
        Data: {} 
    };  
}  

componentDidMount() {  
    axios.get(`http://localhost:8080/api/portal`)  
    .then(res => {  
        console.log(res);  
        const listportal = res.data;  
        let portal = [];  
        let total = [];  
        listportal.forEach(record => {  
            portal.push(record.portal);  
            total.push(record.total);  
    });  


        
    this.setState({  
        Data: {  
        labels: portal,  
        datasets: [  
    {  
            data: total,  
            backgroundColor: [  
              "#0000FF",  
              "#808080",  
              "#ff0000",  
              "#4C4CFF",  
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "#3FF1493",
              "#4B0082",
              "#FF8C00",
              "#D2691E",
              "#2F4F4F",
              "#778899"
                        ]  
                    }  
                ]  
            }  
        });  
        console.log('1------persiapan linechart')
        console.log(res.data)
      })  
    }  

    render() {  
    return ( 
        <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Doughnut</h6>
        </CardHeader>  
        <CardBody className="d-flex py-0">
            <Doughnut 
            data={this.state.Data}  
             options={{ maintainAspectRatio: false }} />  
        </CardBody>
        </Card>
        )  
    }  
}  

  

export default Linecharts;