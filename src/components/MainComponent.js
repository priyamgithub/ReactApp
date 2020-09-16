import React, {Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent' ; 
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import {DISHES} from '../shared/dishes';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    }  

  render() {
    const clickedState = this.state.selectedDish;
    return (
      <div >
        <Header />
        <Menu dishes ={this.state.dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)} />    
        {clickedState != null ? <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  : ''}   
        <Footer />
         </div>
        
    );
  }
}

export default Main;
