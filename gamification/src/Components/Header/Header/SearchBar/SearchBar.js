import './SearchBar.css';
import ReturnHome from '../../Body/ReturnHome/ReturnHome'

import React, {Component} from 'react';
class SearchBar extends Component {

    constructor () {
		super();
		this.state = {
            searchTerm : "",
            search : false
		};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}


    handleChange(event){
        this.setState({searchTerm: event.target.value});
        
      }

    handleSubmit(event){
        if  (event.code === 'Enter') {
            this.setState({search: true});
        }
        
    }

    render(){
    return (
        <div className="searchbar">
            <input type="text" onChange={this.handleChange} onKeyDown={this.handleSubmit} placeholder="Buscar videos.."/> 
            {this.state.search && <ReturnHome path={"/search?search="+this.state.searchTerm}/>}
        </div>
    );
    }
}
export default SearchBar;