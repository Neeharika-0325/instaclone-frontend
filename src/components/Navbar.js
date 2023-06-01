import instalogo from '../images/circleicon.png';
import camera from '../images/cameralogo.jpg';


export default function Navbar(){
    return <header>
        <nav id="page-nav">
            <div className="img-container">
                <img src={instalogo} type='png' alt="site-logo"/>
                
            </div>
            <div className="img-container">
                <img src={camera} type="png" alt="camera-logo"/>
            </div>
        </nav>
    </header>

}