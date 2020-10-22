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
        
         <Col lg="3"  >

         <Card className="card "  style={{width: '17rem'}}>
      
          

                <img top src="/assets/js.png" alt="100x100" sm="12" md={{ size: 6, offset: 3 }} classeName="rounded-circle z-depth-2" data-holder-rendered="true"/>
           
                <CardBody>

                    <CardTitle>JavaScript</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to='/teacher'><Button color="primary">Go somewhere</Button></Link>

                </CardBody>
        </Card>
        </Col>

        <Col lg="3">
        <Card className="card" style={{width: '17rem'}}>
                <CardImg top src="/assets/react.png" alt="..." sm="12" md={{ size: 6, offset: 3 }} classeName="rounded-circle z-depth-2" data-holder-rendered="true"/>
               
                <CardBody>

                    <CardTitle>React.js</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col>
        <Col lg="3">
        <Card className="card"  style={{width: '17rem'}}>

                {/* <CardImg > */}
                <img top src="/assets/vue.png" alt="..." md={{ size: 6, offset: 3 }}  classeName="rounded-circle  z-depth-2" data-holder-rendered="true"/>
                {/* </CardImg> */}

                <CardBody>

                    <CardTitle>Vue.js</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >New Session</Button>

                </CardBody>
        </Card>
        </Col>

        <Col lg="3">
           <Card className="card"  style={{width: '17rem'}}>

           <img src="/assets/angular.png" alt="..."md={{ size: 6, offset: 3 }}  classeName="rounded-circle  z-depth-2"/>

                <CardBody>

                    <CardTitle className="text-center">Angular</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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
