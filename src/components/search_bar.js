import React, { Component } from 'react';

//Functional Component
//const SearchBar = () =>{
//  return <input />;//JSX O/P
//};

//Class component. Every class must have a render method. Only class components
//has State & every class component has state.

class SearchBar extends Component{
  constructor(props){
    super(props);//Calling the function props in parent class Component

    this.state={ term:''};//State is updated in this fashion only inside the constructor, otherwise use setState().
  }

  render(){
      return(
        <div className="search-bar">
      <input
      value= {this.state.term}//Controlled component, receive value from State.
      onChange= {event => this.onInputChange(event.target.value)} />
        </div>
      );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTemChange(term);
  }
}
 export default SearchBar;
