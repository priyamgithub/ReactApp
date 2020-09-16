import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'moment';
import { render } from '@testing-library/react';


  


   

    function RenderDish({dish}) {
       
        
        if(dish != null) {   
                    
            return (
                
                <Card>
                    
                    <div class="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </div>
                    
                    
                </Card>
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
                    <div className="col-12 col-md-5 m-1">
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{renderComments ? renderComments:''}</CardText>
                    </CardBody>
                    </div>
        )
        } 
    }

    const DishDetail = (props) => {
        if(props.dish !=null)
        return (
            <div className="container">
              <div className="row">
                  <RenderDish dish={props.dish} />
                  <RenderComments comments={props.dish.comments} />
              </div>
             </div>
         );

    }


export default DishDetail;