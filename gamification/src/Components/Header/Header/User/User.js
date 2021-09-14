import './User.css';
import { useHistory } from 'react-router-dom';
import React from 'react'

function User({username, profile_url,onClickPath}) {
    
    const history = useHistory();
    if (username=="Pana"){
        onClickPath = "/Login"
    }
    return (
        <div className="Usuario" onClick={() => { history.push(onClickPath, [username, profile_url]) }}>
            <img className="img-perfil" src={profile_url} alt="Profile pic"></img>
            <h3 className="id-perfil">{username}</h3>
        </div>
    );
}
export default User;