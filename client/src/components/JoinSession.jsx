import React from 'react';

import {
    Button,

    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardText,
  
  }from "reactstrap";


function JoinSession() {
  
    return (
   
             <div className="content">

                        <Row>
                            <Col xs="12">
                                <Card className="card">
                                <CardHeader>

                                <Col className="text-center" >
                                    
                                    <CardTitle tag="h3">Join New Live Session</CardTitle>
                                    </Col>

                                </CardHeader>
                                </Card>
                            </Col>

                        </Row>
                
                <Col lg="3" className=" d-flex justify-content-center" >

                    <Card className="card d-block  "  style={{width: '17rem'}}>

                                <img  src="/assets/js.png" alt="..."  classeName="rounded-circle center " data-holder-rendered="true"/>
  
                         <CardBody>

                                <CardTitle>JavaScript Session </CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button color="primary">Go somewhere</Button>


                        </CardBody>
                    </Card>
                </Col>
                
           
        </div>  

   
    )
}

export default JoinSession
