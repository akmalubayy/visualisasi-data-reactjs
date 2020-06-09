import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { Link, Redirect } from 'react-router-dom';

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";
import Sliders from "../components/components-overview/Sliders";
import WordCount from "../components/blog/WordCount";
import Table from "./Tables";


import axios from 'axios';
import Linecharts from "../components/blog/LineChart";
import SimpleCloud from "../components/WordCloud/WordCloud";
import Doughnut from "../components/blog/Doughnut";
import DiscussionsNeg from "../components/blog/DisussionsNeg";
import BarChart from "../components/blog/BarChart";
import TopSites from "../components/common/TopSites";

class BlogOverview extends React.Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem('token')

        let loggedIn= true
        if(token == null){
            loggedIn = false
        }

  // propTypes = {
  //   /**
  //    * The small stats dataset.
  //    */
  //   smallStats: PropTypes.array
  // };
  // defaultProps = {
  // };
 this.state = {
   default_keyword:3,
   total_news: 0,
   dataTampil: [],
   keyword: [],
   loggedIn
 }
}

 componentDidMount() {
   axios.get(
       `http://localhost:8080/api/news/getTotalNewsByKeyword?keyword=${this.state.default_keyword}`, {
     
     })
     .then(res => {
      //  this.setState({
      //    total_news: res.data.total
      //  })
       const dataTotal = [{
           label: "Posts",
           value: res.data.total_news.total,
           attrs: {
             md: "6",
             sm: "6"
           },
         },
         {
           label: "Sites",
           value: res.data.total_news_persite.total_site,
           attrs: {
             md: "6",
             sm: "6"
           },

         },
         {
           label: "Positif",
           value: res.data.total_news_positive.total_post_positive,
           attrs: {
             md: "4",
             sm: "6"
           },
         },
         {
           label: "Netral",
           value: res.data.total_news_netral.total_post_netral,
           attrs: {
             md: "4",
             sm: "6"
           },
         },
         {
          label: "Negative",
          value: res.data.total_news_negative.total_post_negative,
          attrs: {
            md: "4",
            sm: "6"
          },
         }];


       console.log('2----- ini sedang dipasang')
       this.setState({
         dataTampil: dataTotal,
         total_news: res.data.total,
         keyword: res.data.total_news
       })

       console.log('1------ liat isi')
       console.log(this.state.keyword.keyword)


       console.log('4--- Data total')
       console.log(dataTotal)

       console.log('3-----Pasang keyword')

       console.log(this.state.total_news)

     })

 }
 
 render() {
   setTimeout(() => {
    if(this.state.loggedIn === false){
      return <Redirect to="/"/>
  }    
   }, 100);
 
  // console.log(this.state.keyword.total_news.keyword)
    console.log('6--- Sedang mau di pasang setelah render')
    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle judul={this.state.keyword.keyword} subtitle="PROJECT" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {this.state.dataTampil.map((stats, index) => (
        <Col className="col-lg mb-4" key={index} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${index}`}
            variation="1"
            // chartData={stats.datasets}
            // chartLabels={stats.chartLabels}
            judulatas={stats.label}
            value={stats.value}
            // percentage={stats.percentage}
            // increase={stats.increase}
            // decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>

    <Row>
      {/* Users Overview */}
      <Col lg="10" md="12" sm="12" className="mb-4">
        {/* <UsersOverview /> */}
        <BarChart/>
      </Col>

      {/* Top Referrals */}
      <Col lg="2" md="12" sm="12" className="mb-4">
        {/* <TopReferrals /> */}
        <TopSites />
      </Col>

      {/* Users by Device
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col> */}


      {/* Discussions */}
    <Col lg="4" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>

        {/* Discussions Neg */}
    <Col lg="4" md="12" sm="12" className="mb-4">
        <DiscussionsNeg />
      </Col>

      {/* Dough Count */}
    <Col lg="4" md="12" sm="12" className="mb-4">
    <Doughnut/>
      </Col>
      
       {/* Bar Count */}
    <Col lg="8" md="12" sm="12" className="mb-4">
        {/* <WordCount/> */}
        <Linecharts/>
      </Col>

      {/* New Component */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <SimpleCloud/>
      </Col>

    {/* New Component */}
      {/* <Col lg="12" md="12" sm="12" className="mb-4">
        <Linecharts/>
      </Col> */}

      {/* Table */}
      {/* <Col lg="12" md="12" sm="12" className="mb-4">
        <Table/>
      </Col> */}
    </Row>
  </Container>
      );
    }
  }

  export default BlogOverview;