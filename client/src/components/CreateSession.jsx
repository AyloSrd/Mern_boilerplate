import React from 'react'
import NotificationAlert from "react-notification-alert"
import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardImg,
  CardText,

} from "reactstrap";

class CreateSession extends React.Component
 {notify = place => {
  
  
  
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Work in progress <b>New live coding languages</b> coming soon ... 
          </div>
        </div>
      ),
      type: "danger",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    
    return (
        <div className="content">
         <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
         <Row>
            <Col xs="12">
                <Card className="card">
                <CardHeader>

                <Col className="text-center" >
                     
                      <CardTitle tag="h3">Create New Live Session</CardTitle>
                    </Col>

                </CardHeader>
             
                
                </Card>
            </Col>

         </Row>


     
         <Row>
        
         <Col lg="3"  style={{marginRight:"20px"}}>

         <Card className="card "  style={{width: '17rem'}}>
      
          

                <img top src="/assets/js.png" alt="..." style={{margin:"auto", height:"100px",width:"auto"}}/>
           
                <CardBody>

                    <CardTitle>JavaScript</CardTitle>
                    <CardText>Teach the basis of the web, in this new VanillaJS lesson</CardText>
                    <Link to='/teacher'><Button color="primary">Go somewhere</Button></Link>

                </CardBody>
        </Card>
        </Col>

        <Col lg="3" style={{marginRight:"20px"}}>
        <Card className="card" style={{width: '17rem'}}>
                <CardImg top src="/assets/react.png" alt="..." style={{margin:"auto", height:"100px",width:"auto"}}/>
               
                <CardBody>

                    <CardTitle>React</CardTitle>
                    <CardText>Teach modern and efficient React, the most loved JS framework</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col>
        <Col lg="3" style={{marginRight:"20px"}}>
        <Card className="card"  style={{width: '17rem'}}>

                {/* <CardImg > */}
                <img top src="/assets/vue.png" alt="..." style={{margin:"auto", height:"100px",width:"auto"}}/>
                {/* </CardImg> */}

                <CardBody>

                    <CardTitle>Vue</CardTitle>
                    <CardText>Teach the main framework for startup apps, with Vue</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col>

        <Col lg="3" style={{marginRight:"20px"}}>
           <Card className="card"  style={{width: '17rem'}}>

           <img src="/assets/angular.png" alt="..."style={{margin:"auto", height:"100px",width:"auto"}}/>

                <CardBody>

                    <CardTitle className="text-center">Angular</CardTitle>
                    <CardText>Build the next big scalable project with Angular</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col>
        <Col lg="3" style={{marginRight:"20px"}}>
           <Card className="card"  style={{width: '17rem'}}>

           <img src="/assets/ts.png" alt="..."style={{margin:"auto", height:"100px",width:"auto"}}/>

                <CardBody>

                    <CardTitle className="text-center">TypeScript</CardTitle>
                    <CardText>Add static type definitions to your lessons, with TypeScript</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col>
        <Col lg="3" style={{marginRight:"20px"}}>
           <Card className="card"  style={{width: '17rem'}}>

           <img src="/assets/python.png" alt="..." style={{margin:"auto", height:"100px",width:"auto"}}/>

                <CardBody>

                    <CardTitle className="text-center">Python</CardTitle>
                    <CardText>Teach Data Science and Pythonicness with this lesson</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col> 
         </Row>
        
        </div>
    )
  }  
}


export default CreateSession
