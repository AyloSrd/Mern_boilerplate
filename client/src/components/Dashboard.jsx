import React, { Component } from 'react'
import UserCard from "./UserCard"
import TableList from "./TableList"

import {
 
  Card,
  CardHeader,
  CardTitle,

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

          
             
                
                          <UserCard  className="card-user"/>

                       
                 
            
             
    </div>

    );
  }
}

export default Dashboard