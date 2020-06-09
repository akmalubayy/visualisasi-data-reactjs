import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

export class WordCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: {},
      count: {},
      wordcloud_data: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/wordcount`).then(res => {
      console.log("1---cek data");
      console.log(res);
      const resdat = res.data;
      const wordcloudstck = [];
      resdat.forEach(rows => {
        wordcloudstck.push({ value: rows.word, count: parseInt(rows.total) });
      });
      this.setState({ wordcloud_data: wordcloudstck });
    });
  }

  render() {
    return (
      // const WordCloud = (props) => (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Word Cloud</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <TagCloud
            minSize={12}
            maxSize={35}
            tags={this.state.wordcloud_data}
            // onClick={tag => alert(`'${tag.value}' was selected!`)}
          />
        </CardBody>
      </Card>
    );
  }
}

// const SimpleCloud = (props) => (

export default WordCloud;
