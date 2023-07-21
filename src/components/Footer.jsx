function Footer(){
    return(
        <div>
            <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Dirección</h5>
                            <p className="grey-text text-lighten-4">1717 Harrison St, San Francisco, CA 94103, USA</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Contacto</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons inline-icon">email</i> Oscar93@nube.unadmexico.mx</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons inline-icon">phone</i> xx-xxx-xxx-xx</a></li>                                
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2023 Your Company.  All rights reserved.                        
                        </div>
                    </div>
            </footer>          
        </div>
    );
}

export default Footer;