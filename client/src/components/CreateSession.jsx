import React from 'react'
import classNames from "classnames";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  CardImg,
  CardText,
  CardDeck
} from "reactstrap";


function CreateSession() {
    return (
        <div className="content">
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


       <Card className="card" style={{padding: '3rem'}} >
         <Row>
        
         <Col lg="3">

         <Card className="card"  style={{width: '17rem'}}>

                <CardImg top src="img-src" alt="..."/>

                <CardBody>

                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Go somewhere</Button>

                </CardBody>
        </Card>
        </Col>

        <Col lg="3">
        <Card className="card" style={{width: '17rem'}}>

                <CardImg top src="img-src" alt="..."/>

                <CardBody>

                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Go somewhere</Button>

                </CardBody>
        </Card>
        </Col>
        <Col lg="3">
        <Card className="card"  style={{width: '17rem'}}>

                <CardImg top src="img-src" alt="..."/>

                <CardBody>

                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Go somewhere</Button>

                </CardBody>
        </Card>
        </Col>

        <Col lg="3">
           <Card className="card"  style={{width: '17rem'}}>

                <CardImg top src="img-src" alt="..."/>

                <CardBody>

                    <CardTitle className="text-center">Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Go somewhere</Button>

                </CardBody>
        </Card>
        </Col>
      
         </Row>
         </Card>
        </div>
    )
}

export default CreateSession
