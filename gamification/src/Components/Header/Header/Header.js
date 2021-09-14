import './Header.css';
import User from './User/User';
import Titulo from './Titulo/Titulo';
import SearchBar from './SearchBar/SearchBar'
import BotonSignOut from './BotonSignOut/BotonSignOut';
import React, {Component} from 'react';
//@bobby
class header extends Component {
  constructor () {
		super();
		this.state = {
       loggedInUser : localStorage.getItem("isloggedIn")
		};
    
    if(this.state.loggedInUser){
      this.state.user = localStorage.getItem("user")
      this.state.img = localStorage.getItem("img")
      this.state.path = "/Profile"
    }else{
      this.state.user = "Anon"
      this.state.img = "https://sd2.ugr.es/wp-content/uploads/2019/08/avatar-anonimo.png"
      this.state.path = "/Login"
    }
	}

  render() {
    console.log(typeof(this.state.loggedInUser))
    return(
      <div className="header">
        <Titulo/>
        <User username={this.state.user} profile_url={this.state.img} onClickPath={this.state.path}/>
        <SearchBar/>
        {this.state.loggedInUser === "true" && <BotonSignOut props_val={this.state.loggedInUser}/>}
      </div>
      );
    }
}

export default header;
