import React, { Component } from 'react'
import UserCard from "./UserCard"
import TableList from "./TableList"

import {
 
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
 
  
} from "reactstrap";




class Dashboard extends Component {
  render() {
    return (
    
    

    <div  className="content ">

             
                    
            <Col>

                   
                            <Col xs="12">
                                <Card className="card">
                                <CardHeader>

                                <Col className="text-center" >
                                    
                                    <CardTitle tag="h3">Your Dashboard</CardTitle>
                                    </Col>

                                </CardHeader>
                                </Card>
                            </Col>
            </Col>

              <br/>

              <div  className="content ">
              <Col xs="12">
                                <Card className="card">
                                <CardHeader>
                    <Row>
                          <UserCard  className="card-user"/>

                          <TableList  className="card-user"/>
                   </Row>
                   </CardHeader>
                                </Card>
                            </Col>
               </div>   
             
    </div>

    );
  }
}

export default Dashboard