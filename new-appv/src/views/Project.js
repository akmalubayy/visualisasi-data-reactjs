import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
} from "shards-react";

import { Table, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PageTitle from "../components/common/PageTitle";


import axios from 'axios';  


class Project extends React.Component {

  state = {
    keyword: [],
    keyword_input:''
  }
 
  componentDidMount() {
    this.getkeyword();
  }
  
   getkeyword() {
    axios.get(`http://localhost:8080/api/keyword/`)
      .then(res => {
        const keyword = res.data;
        console.log('1----- Data Siap');
        console.log(res.data);
        this.setState({
          keyword
        });
      });
  }
  
  handleChange = event => {
    this.setState({ keyword_input: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();

     axios.post(`http://localhost:8080/api/keyword/`, {
         'keyword': this.state.keyword_input
       })
       .then(res => {
        this.getkeyword();
       })
      }

  render() {
    return (
          <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle/>
          </Row>
            <Row>
              <Col lg="12" className="mb-4" md="12">
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                  <form onSubmit={this.handleSubmit}>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <div style={{ display: "flex" }}>
                    <h6 className="m-0">Projects</h6>
                      <input type="text" name="keyword" placeholder="keyword" onChange={this.handleChange} style={{marginLeft:'auto'}} />
                      <input type="submit" value="Submit" />
                          {/* <Button color="primary" style={{
                            marginLeft: "auto" }}>
                            + Add New Keyword
                          </Button> */}
                      </div>
                        </FormGroup>
                    </form>
                      </CardHeader>
                      <row>
                      <Table striped style={{marginRight:7}}>
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.keyword.map(keyword =>
                  <tr>
                    {/* <td>{keyword.user_id}</td> */}
                    <td>{keyword.keyword}</td>
                    <td>{keyword.status}</td>
                  </tr>
                )
              }
                </tbody>
              </Table>
                      </row>
                </Card>
              </Col>
            </Row>
          </Container>
          );
  }
}

  

export default Project;
