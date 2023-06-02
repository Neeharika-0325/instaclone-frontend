import instalogo from '../images/circleicon.png';
import camera from '../images/cameralogo.jpg';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return <header>
        <nav id="page-nav">
            <div className="img-container">
                <Link to='/all'><img src={instalogo} type='png' alt="site-logo"/></Link>  
            </div>
            <div className="img-container">
                <Link to='/new'><img src={camera} type="png" alt="camera-logo"/></Link>
            </div>
        </nav>
    </header>

}
