import React from 'react';
import ImageCard from './ImageCard'

import steps from '../static/steps'
import {
    Button,
    UncontrolledAlert,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
   
    Row,
    Col,
  
    CardImg,
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
                
                <Col lg="3" >

<Card className="card d-block "  style={{width: '17rem'}}>


       <img  src="/assets/js.png" alt="..."  classeName="rounded-circle center" data-holder-rendered="true"/>
  
       <CardBody>

           <CardTitle>Card title</CardTitle>
           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
           <Button color="primary">Go somewhere</Button>

       </CardBody>
</Card>
</Col>
                
                {/* </Card>
            </Col>

         </Row> */}
                </div>  

   
    )
}

export default JoinSession
