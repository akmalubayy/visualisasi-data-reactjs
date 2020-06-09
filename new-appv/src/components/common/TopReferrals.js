import React, { Component } from "react";
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

// class ListView extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       default_keyword:1,
//       total_site: 0,
//       dataTampil: [],
//       site: []
//     }
//   }

//   componentDidMount() {
//     axios.get(
//       `http://localhost:8080/api/news/getTotalNewsByKeyword?keyword=${this.state.default_keyword}`, {
    
//     })
//     .then(res => {
//      //  this.setState({
//      //    total_news: res.data.total
//      //  })
//       const totalSite = [{
//   }



// }

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Sites",
  referralData: [
    {
      title: "Detik",
      value: "3"
    },
    {
      title: "Tribunnews",
      value: "20"
    },
    {
      title: "Okezone",
      value: "30"
    },
    {
      title: "Merdeka",
      value: "10"
    },
    {
      title: "Republika",
      value: "15"
    },
    {
      title: "Kompas",
      value: "7"
    },
    {
      title: "CNN",
      value: "15"
    },
    {
      title: "JPNN",
      value: "20"
    }
  ]
};

export default TopReferrals;
