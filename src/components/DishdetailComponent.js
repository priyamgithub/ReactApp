import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Moment from 'moment';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';


  


   

    function RenderDish({dish}) {
       
        
        if(dish != null) {   
                    
            return (
                <div className='col-12 col-md-5 m-1'>
                <Card>
                    
                    
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
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
    function RenderComments({comments}) {
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
                    </CardBody>
                    </Card>
        )
        } 
    }

    const DishDetail = (props) => {
        if(props.dish !=null)
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
                
                    <RenderComments comments={props.comments} />
                
            </div>
            </div>
         );

    }


export default DishDetail;