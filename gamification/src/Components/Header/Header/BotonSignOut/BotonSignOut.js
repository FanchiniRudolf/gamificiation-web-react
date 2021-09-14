import './BotonSignOut.css';
import { useHistory } from 'react-router-dom';

function BotonRegresar(isloggedIn){
    const history = useHistory();
    if (localStorage.getItem("user")!="Pana"){
        return(
            <button className='regresar' onClick={() => { 
                localStorage.setItem("isloggedIn",false); 
                localStorage.setItem("user","Pana"); 
                localStorage.setItem("img","https://sd2.ugr.es/wp-content/uploads/2019/08/avatar-anonimo.png"); 
                history.push("/login");
                window.location.reload(false);
                }}>SignOut
            </button>
        );
    }else{
        return(
        <button className='regresar' onClick={() => { 
           history.push("/login");
            window.location.reload(false);
            }}>Log in
        </button>
        );
    }      
}

export default BotonRegresar;