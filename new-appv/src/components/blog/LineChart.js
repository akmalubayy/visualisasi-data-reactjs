import React, { Component } from 'react'  
import axios from 'axios';  
import { Line, HorizontalBar } from 'react-chartjs-2';  
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
    axios.get(`http://localhost:8080/api/wordcount`)  
    .then(res => {  
        console.log(res);  
        const wordcloud = res.data;  
        let word = [];  
        let total = [];  
        wordcloud.forEach(record => {  
            word.push(record.word);  
            total.push(record.total);  
    });  


        
    this.setState({  
        Data: {  
        labels: word,  
        datasets: [  
    {  
       label: 'Populer Keyword',  
            data: total,  
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",  
              "#4C4CFF",  
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "Blue",  
              "Red",
              "#00FF00",
              "#008000",
              "#800080",
              "#000080",
              "#008080",
              "#808000",
              "#FFFF00",
              "#8B0000",
              "#FF4500",
              "#FFD700",
              "#FF8C00",
              "#D2691E",
              "#2F4F4F",
              "#778899",
              "#3FF1493",
              "#4B0082",
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
          <h6 className="m-0">Keyord Stats</h6>
        </CardHeader>  
        <CardBody className="d-flex py-0">
            <HorizontalBar
            height="250"  
            data={this.state.Data}  
             options={{ maintainAspectRatio: false }} />  
        </CardBody>
        </Card>
        )  
    }  
}  

  

export default Linecharts;