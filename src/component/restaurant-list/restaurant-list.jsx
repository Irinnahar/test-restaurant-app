
import React, { Component} from 'react'
import { connect } from "react-redux";
import { fetchRestaurants } from "../../redux/restaurant/restaurant-action";

import './restaurant-list.css'

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Toronto',
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {
      this.props.dispatch(fetchRestaurants({city: this.state.city, name: ''}));
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.dispatch(fetchRestaurants({city: this.state.city, name: this.state.name}));

      // this.setState({value: ''});
    }
    render() {
      const { error, loading, restaurants } = this.props;
              if (error) {
        return <div>Error! {error.message}</div>;
      }
  
      if (loading || !restaurants) {
        return <div>Loading...</div>;
      }
  
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input name="city" type="text" id="defaultinput"  value={this.state.city} onChange={this.handleChange } />
            </label>
            <label>
              <input name="name" type="text" id="defaultinput" value={this.state.name} onChange={this.handleChange } />
            </label>
            <input type="submit" value="Submit" id="submitBtn"/>
          </form>
          <ul>
            {restaurants.restaurants.length > 0 ? 
              restaurants.restaurants.map(restaurant => {
                return (
                  <li key={restaurant.id} id="restaurant-list">
                      <h3>{restaurant.name}</h3>
                      <h5>{restaurant.address} </h5>
                      <p> {restaurant.price}</p>
                  </li>
                )
              }) 
             : <h3 id="notfound">Restaurant not available</h3>}
          </ul>
        </div>
        
      );
    }
  }
  
  const mapStateToProps = state => ({
    restaurants: state.restaurants.items,
    loading: state.restaurants.loading,
    error: state.restaurants.error
  });
  
  export default connect(mapStateToProps)(RestaurantList);