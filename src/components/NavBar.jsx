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
                        <li><Link to={"/"}>Registro de usuarios</Link></li>
                        <li><Link to={"/"}>Registro de visitas</Link></li>
                        <li><Link to={"/"}>Consulta pagos</Link></li>
                        <li><Link to={"/"}>Pago de cuotas</Link></li>
                        <li><Link to={"galeria"}>Galería</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;