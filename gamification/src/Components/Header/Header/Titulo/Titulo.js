import './Titulo.css';
import { useHistory } from 'react-router-dom';
function Titulo(){
    const history = useHistory();
    return(
        <div className="tituloHeaderPermanent" onClick={() => { history.push("/about") }}>
            <img className="logo" src="ramenai.png"
            alt="logo"></img>
            <h1 className="h1Titulo">Ramenai</h1>
        </div>
        );
}
export default Titulo;
