import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
} from "shards-react";

import { Table } from 'reactstrap';

// import PageTitle from "../components/common/PageTitle";


import axios from 'axios';  


class TopSites extends React.Component {
    constructor(props){
        super(props)
            this.state = {
              portal: [],
              keyword_input:'',
              showMore: false
            }
    }
    
    handleClick() {
        this.setState({showMore: true})
    }
         componentDidMount() {

           axios.get(`http://localhost:8080/api/portal`)
             .then(res => {
               const portal = res.data;
               console.log('1----- Data Siap amnil portal');
               console.log(res.data);
               this.setState({
                 portal
               });
             });
         }

    

  render() {
    return (
        <Card small>
            <CardHeader className="border-bottom">
            <h6 className="m-0">Sites</h6>
            {/* <div className="block-handle" /> */}
            </CardHeader>
            <CardBody className="p-0">
                <ListGroup small flush className="list-group-small">
                    <Table borderless size="sm" style={{fontSize:14}}>
                    {/* <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead> */}
                <tbody>
                {this.state.portal.map(portal =>
                  <tr>
                    {/* <td>{keyword.user_id}</td> */}
                    <td>{portal.portal}</td>
                    <td>{portal.total}</td>
                  </tr>
                )
                }
                </tbody>
                </Table>
                {/* <button onClick={()=> this.handleClick()}>Show more</button> */}
            </ListGroup>
        </CardBody>
    </Card>
          );
  }
}

  

export default TopSites;
