import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'moment';

class DishDetail extends Component {
   
    constructor(props) {
        super(props);
      }
 



    render() {

        const dish = this.props.selectedDish    
             
        if(dish != null) {   
            const comments = this.props.selectedDish.comments.map(
                (comment) => {
                    return (
                        <div key={comment.id} className="my-3">
                            <p className="m-0">{comment.comment}</p>
                            <p className="m-0">-- {comment.author}, {Moment(comment.date).format(' MMM DD, YYYY')}</p>
                        </div>
                    )
                }
            )            
            return (
                
                <Card>
                    <div className="row">
                    <div class="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                    </div>
                </Card>
            )
            } else {
                return (
                    <div></div>
                );
            }

        return (
           <div className="container">
             <div className="row">
                 {DishDetail}
             </div>
            </div>
        );
    }
}

export default DishDetail;