import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const image_1 = require('../assets/DJI_0057.jpg');
const image_2 = require('../assets/destacada-el-rosario.jpg');
const image_3 = require('../assets/hola.jpg');

const image_4 = require('../assets/images.jpeg');
const image_5 = require('../assets/IMG-20200830-WA0027.jpg');
const image_6 = require('../assets/IMG-20200830-WA0029.jpg');

function Galeria(){
    return(
        <div className='body'>
            <header>
                <NavBar />
            </header>
            <main className='main'>
                <div className="container">
                    <div className="row">

                        <div className="col s4">
                            <div class="card">
                                <div class="card-image">
                                    <img src={image_1} alt='A building'/>                                    
                                </div>
                                <div class="card-action">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col s4">
                            <div class="card">
                                <div class="card-image">
                                    <img src={image_2} alt='A building'/>                                    
                                </div>
                                <div class="card-action">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>                            
                        </div>
                        <div className="col s4">
                            <div class="card">
                                <div class="card-image">
                                    <img src={image_3} alt='A building'/>                                    
                                </div>
                                <div class="card-action">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>                            
                        </div>

                        <div className="col s4">
                            <div class="card">
                                <div class="card-image">
                                    <img src={image_4} alt='A building'/>                                    
                                </div>
                                <div class="card-action">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>                            
                        </div>
                        <div className="col s4">
                            <div class="card">
                                <div class="card-image">
                                    <img src={image_5} alt='A building'/>                                    
                                </div>
                                <div class="card-action">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>                            
                        </div>
                        <div className="col s4">
                            <div class="card">
                                <div class="card-image">
                                    <img src={image_6} alt='A building'/>                                    
                                </div>
                                <div class="card-action">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
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

export default Galeria;