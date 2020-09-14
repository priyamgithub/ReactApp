import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'moment';

class DishDetail extends Component {
   
    constructor(props) {
        super(props);
      }
    


    render() {

        const clickedDish = this.props.dish && this.props.dish[0]
       
        
        if(clickedDish != null) {   
            const comments = clickedDish.comments.map(
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
                    <CardImg width="100%" src={clickedDish.image} alt={clickedDish.name} />
                    <CardBody>
                        <CardTitle>{clickedDish.name}</CardTitle>
                        <CardText>{clickedDish.description}</CardText>
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