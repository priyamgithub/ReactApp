import React, { useState } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Col, Row, Label, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Moment from 'moment';
import { LocalForm, Control, Errors } from "react-redux-form";
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  handleSubmit = (values) => {
   
   console.log("Current State is: " + JSON.stringify(values));
   alert("Current State is: " + JSON.stringify(values));
   this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  };

  render() {
    return (
      <React.Fragment>
        <Button className="bg-white text-dark" onClick={this.handleToggle}>
          <i className="fa fa-pencil fa-lg"></i> Submit Comment
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.handleToggle}>
          <ModalHeader toggle={this.handleToggle}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={4}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={4}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={4}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    className="form-control"
                    validators={{
                      required
                    }}
                    rows="6"
                  />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: "Comment Required"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
 

    function RenderDish({dish}) {
       
        
        if(dish != null) {   
                    
            return (
                <div className='col-12 col-md-5 m-1'>
                <Card>
                    
                    
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                    
                    
                </Card>
                </div>
            )
            } else {
                return (
                    <div></div>
                );
            }

        
    }
    function RenderComments({comments, addComment, dishId}) {

        if(comments != null) { 
        const renderComments = comments.map(
            (comment) => {
                return (
                    <div key={comment.id} className="my-3">
                        <p className="m-0">{comment.comment}</p>
                        <p className="m-0">-- {comment.author}, {Moment(comment.date).format(' MMM DD, YYYY')}</p>
                    </div>
                )
            }
        )  
        return(
                    <Card className='col-12 col-md-5 m-1'>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{renderComments ? renderComments:''}</CardText>
                    
                        <CommentForm dishID={dishId} addComment={addComment}/>
                    </CardBody>
                    </Card>
        )
        } 
    }

    const DishDetail = (props) => {
             
      if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                
                    <RenderDish dish={props.dish} />
                
                    <RenderComments comments={props.comments} 
                          addComment={props.addComment}
                          dishId={props.dish.id}
                          />
                
            </div>
            </div>
         );

    }


export default DishDetail;