import React from 'react'

import {
  
    Card,
    CardBody,
    CardText,
    Col,
    
  } from "reactstrap";

const UserCard = (props) =>{

    
   

        
        return (
            <div>

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
                                <h5 className="title">{props.firstName}</h5>
                              </a>
                              <p className="description">{props.lastName}</p>
                            </div>
                            <div className="card-description">
                            {props.description}
                            </div>
                          </CardBody>
                        
                        </Card>
                      </Col>
                
            </div>
        );
  };


export default UserCard

