import Header from '../component/header';
import Footer from '../component/footer';

function Landingpage() {
    return(
      <div>
        <Header/>
        <center><p className ="title is-2">Chocolate Lava</p>
            <p className="subtitle is-6">Chocolate lava adalah makanan dessert yang menjamin anda  ingin mencobanya karena lumer dari coklat.</p>
            <img src="/images/awal.jpg"/>
            </center>
        <Footer/>
      </div>
    );
  }

export default Landingpage;

