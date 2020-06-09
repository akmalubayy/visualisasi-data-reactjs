import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';
import Pagination from '../components/Pagination/Pagination';


const Table = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
// export default class Table extends React.Component {
  
//  state = {
//    news: []
//  }
 

//  componentDidMount() {
//    axios.get(`http://localhost:8080/api/news/`)
//      .then(res => {
//        console.log('1--- cek data')
//        const news = res.data;
//        this.setState({
//          news
//        });
//      });

useEffect(() => {
  const fetchPost = async () => {
    setLoading(true);
    const res = await axios.get('http://localhost:8080/api/news/');
    setPosts(res.data);
    setLoading(false);
  }
  fetchPost();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);


    //  Change page
    const paginate = pageNumber =>  setCurrentPage(pageNumber);

    
    console.log('1-----Memasang Data')
    console.log(posts)
    
//     axios.post(`http://localhost:8080/api/keyword/`, {
//         'keyword': 'banjir'
//       })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })

//  }

  // render() {
    return (
       <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="NEWS SECTION" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">List News</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    ID
                  </th>
                  <th scope="col" className="border-0">
                    Judul
                  </th>
                  <th scope="col" className="border-0">
                    Kategori
                  </th>
                  {/* <th scope="col" className="border-0">
                    Country
                  </th> */}
                  <th scope="col" className="border-0">
                    Site
                  </th>
                  <th scope="col" className="border-0">
                    Link
                  </th>
                  <th scope="col" className="border-0">
                    Polarity
                  </th>
                  <th scope="col" className="border-0">
                    Sentiment
                  </th>
                </tr>
              </thead>
              <tbody>
              {currentPost.map(post => (
                      <tr>
                        <td>{post.id}</td>
                        <td>{post.title_full}</td>
                        <td>{post.kategori}</td>
                        {/* <td>{newslist.site_country}</td> */}
                        <td>{post.site_full}</td>
                        < td > <a href={post.link} target="_blank">Site</a></td>
                        <td>{post.presensi}</td>
                        <td>{post.sentiment}</td>
                      </tr>
                  )
              )
                }
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}/>
      </Col>
    </Row>
  </Container>
    );
  };

export default Table;

