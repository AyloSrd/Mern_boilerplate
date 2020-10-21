import React, { Component } from 'react'
import UserCard from "./UserCard"
import TableList from "./TableList"

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table,
  
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
              
                    <Row>
                          <UserCard  className="card-user"/>

                          <TableList  className="card-user"/>
                   </Row>
            

             
    </div>

    );
  }
}

export default Dashboard