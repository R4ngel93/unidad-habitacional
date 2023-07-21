import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to={"/"} className="brand-logo">                            
                            <i className="large material-icons icons">apartment</i> Control Habitacional                   
                        </Link>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/"}>Inicio</Link></li>
                        <li><a href="#">Registro de usuarios</a></li>
                        <li><a href="#">Registro de visitas</a></li>
                        <li><a href="#">Consulta pagos</a></li>
                        <li><a href="#">Pago de cuotas</a></li>
                        <li><Link to={"galeria"}>Galería</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;