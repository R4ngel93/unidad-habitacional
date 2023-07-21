import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const image = require('../assets/DJI_0057.jpg');

function Inicio(){
    return(
        <div className='body'>
            <header>
                <NavBar />
            </header>
            <main className='main'>
                <div className="container">
                    <div className='row'>

                        <div className="col s4 center-align">
                            <div className="card-panel teal">
                                <i className="material-icons logotipo white-text">apartment</i>
                            </div>
                        </div>

                        <div className="col s4">
                            <div className="card-panel teal">
                                <h5 className="white-text">Descripción</h5>
                                <span className="white-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Vero quam minima distinctio cupiditate laborum voluptas ad, tempore at id, facilis vel? 
                                    Debitis optio, beatae accusantium saepe ab quidem blanditiis culpa!
                                </span>
                            </div>
                        </div>

                        <div className="col s4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={image} alt='A building'/>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />                
            </footer>
        </div>
    );
}

export default Inicio;