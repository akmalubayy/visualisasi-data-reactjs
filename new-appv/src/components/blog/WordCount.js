import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";
import { TagCloud } from 'react-tagcloud'

import Chart from "../../utils/chart";

class WordCount extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  // const data = [
  //   { value: 'jQuery', count: 25 },
  //   { value: 'MongoDB', count: 18 },
  //   { value: 'JavaScript', count: 38 },
  //   { value: 'React', count: 30 },
  //   { value: 'Nodejs', count: 28 },
  //   { value: 'Express.js', count: 25 },
  //   { value: 'HTML5', count: 33 },
  //   { value: 'CSS3', count: 20 },
  //   { value: 'Webpack', count: 22 },
  //   { value: 'Babel.js', count: 7 },
  //   { value: 'ECMAScript', count: 25 },
  //   { value: 'Jest', count: 15 },
  //   { value: 'Mocha', count: 17 },
  //   { value: 'React Native', count: 27 },
  //   { value: 'Angular.js', count: 30 },
  //   { value: 'TypeScript', count: 15 },
  //   { value: 'Flow', count: 30 },
  //   { value: 'NPM', count: 11 },
  // ]

  componentDidMount() {
    const chartConfig = {
      type: "bar",
      data: this.props.dataAing,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Bar</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
          {/* <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            className="simple-cloud"
            onClick={tag => alert(`'${tag.value}' was selected!`)}
          /> */}
        </CardBody>
      </Card>
    );
  }
}

WordCount.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  dataAing: PropTypes.object
};

WordCount.defaultProps = {
  title: "Users by device",
  dataAing: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [3, 20, 30,10, 15, 7, 15, 20],
        backgroundColor: [
          "#FF0000",
          "#0000FF",
          "#00FF00",
          "#808080",
          "#FFFF00",
          "#6495ED",
          "#8B008B",
          "#DB7093"
        ]
      }
    ],
    labels: ["Detik", "Tribunnews", "Okezone", "Merdeka", "Republika", "Kompas", "CNN", "JPNN"]
  }
};

export default WordCount;
