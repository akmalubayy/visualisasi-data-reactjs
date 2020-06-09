import React, { Component } from 'react'  
import axios from 'axios';  
import { Line, Doughnut, HorizontalBar } from 'react-chartjs-2';  
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


export class BarChart extends Component {  
    constructor(props) {  
    super(props);  
    this.state = { 
        Data: {} 
    };  
}  

componentDidMount() {  
    axios.get(`http://localhost:8080/api/sentiment`)  
    .then(res => {  
        console.log(res);  
        const wordcloud = res.data;  
        let sentiment = [];  
        let jumlah = [];  
        wordcloud.forEach(record => {  
            sentiment.push(record.sentiment);  
            jumlah.push(record.jumlah);  
    });  


        
    this.setState({  
        Data: {  
        labels: sentiment,  
        datasets: [  
    {  
       label: 'Sentiment',  
            data: jumlah,  
            backgroundColor: [  
                'rgba(30,144,255, 0.2)',  
              'rgba(128,128,128,0.2)',  
              'rgba(255,0,0,0.2)',    
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
          <h6 className="m-0">Sentiment</h6>
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

  

export default BarChart;