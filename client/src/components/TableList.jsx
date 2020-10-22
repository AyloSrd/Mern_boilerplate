
import React, { Component } from 'react'
import { withUser } from '../components/Auth/withUser'
import apiHandler from '../api/apiHandler'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

class TableList extends Component {
  state= {
    lessons: null
  }

  componentDidMount() {
    const userId = this.props.context.user._id
    apiHandler
      .getStudentsLesson(userId)
      .then(lessons => this.setState({ lessons }))
      .catch(err => console.error(err))
  }

  handleDelete = lessonId => {
    
    console.log('lessonId', lessonId)
    apiHandler
      .deleteLesson(lessonId)
      .then(lessonDeleted =>{
        this.setState(prevLessons => {
          return {
            lessons: prevLessons.lessons.filter(lesson => lesson._id !== lessonDeleted)
          }
        })
      })
      .catch(err => console.error(err))
  }

  handleOpen = (code) => {
    
    this.props.history.push({
      pathname: '/homework',
      state: { code: code }
    })
  }

  render() {
    console.log('state',this.state.lessons)
    return (
    
      <div className="content">
         <div className="container-fluid">
          <Row>
            <Col  lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Last classrooms </CardTitle>
                   </CardHeader>
                      <CardBody>
                        <Table>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th className="text-right">See notes</th>
                                <th className="text-right">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              this.state.lessons && this.state.lessons.map((lesson, idx) => {
                                return(
                                <tr key={lesson._id}>
                                    <td className="text-center">{idx + 1}</td>
                                    <td>Javascript</td>
                                    <td>{lesson._id}</td>                           
                                    <td className="text-right">
                                      <Button 
                                        name={lesson._id}
                                        className="btn-icon" 
                                        color="primary" 
                                        size="sm"
                                        onClick={()=>this.handleOpen(lesson._id, {html:lesson.html, css:lesson.css, js:lesson.js})}
                                      >
                                        <i className="fa fa-arrow-right" />
                                      </Button>
                                    </td>                           
                                    <td className="text-right">
                                      <Button 
                                        name={lesson._id}
                                        className="btn-icon" 
                                        color="danger" 
                                        size="sm"
                                        onClick={()=>this.handleDelete(lesson._id)}
                                      >
                                        <i className="fa fa-times" />
                                      </Button>
                                    </td>
                                </tr>
                                )
                              })
                            }
                        </tbody>
                    </Table>
                </CardBody>
              </Card>
            </Col>
         
          </Row>
          </div>
      </div>
      
    );
  }
}

export default withUser(TableList)