import React, { useState } from 'react';

import {
    Button,
    Form,
    Input,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardText
  } from "reactstrap";


function JoinSession(props) {
    const [ room, setRoom ] = useState('')

    const handleChange = e => setRoom(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        props.history.push({
            pathname: '/student',
            state: { room: room }
        })
    }

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

                    <Card className="card d-block  "  style={{width: '50rem'}}>

                                <img  src="/assets/js.png" alt="..." style={{margin:"auto", height:"100px",width:"auto"}}/>
  
                         <CardBody>

                                <CardTitle>JavaScript Session </CardTitle>
                                <Form>
                                <Input
                                    required
                                    className="input"
                                    type="text"
                                    name="room"
                                    id="room"
                                    placeholder="insert room here"
                                    value={room}
                                    onChange={handleChange}
                                    />
                                    <Button onClick={handleSubmit} color="primary">Join the lesson</Button>
                                </Form>



                        </CardBody>
                    </Card>
                </Col>
                
           
        </div>  

   
    )
}

export default JoinSession
