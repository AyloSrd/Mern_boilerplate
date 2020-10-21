import React, { Component } from 'react'
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
  
} from "reactstrap";



class Dashboard extends Component {
  render() {
    return (
    
    
    <div  className="content d-flex justify-content-center">
                      <br/>     
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

              <br/>
                     
                      <Col md="6"  lg="6"  >
                        <Card className="card-user">
                          <CardBody>
                            <CardText />
                            <div className="author">
                            
                              <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="avatar"
                                  
                                />
                                <h5 className="title">Mike Andrew</h5>
                              </a>
                              <p className="description">Ceo/Co-Founder</p>
                            </div>
                            <div className="card-description">
                              Do not be scared of the truth because we need to restart the
                              human foundation in truth And I love you like Kanye loves
                              Kanye I love Rick Owens’ bed design but the back is...
                            </div>
                          </CardBody>
                        
                        </Card>
                      </Col>
                      </Col>
    </div>
    );
  }
}

export default Dashboard