import Header from '../../component/header'
import Footer from '../../component/footer'
import Data from '../../dataset/data.json'

const Artikel = (props) => {
    return (
        <div>
            <Header/>
            <center><p class ="title is-2">Chocolate Lava</p>
            <p class="subtitle is-6">Chocolate lava adalah makanan dessert yang menjamin anda  ingin mencobanya karena lumer dari coklat.</p>
            {}
            <div class="columns is-mobile">
                    <div class ="column"><p class="bd-notification is-info"><img src={props.img} width="250"/></p>
                    </div>
                    </div>
            </center>
            <Footer/>
            </div>
    )
}

export default Artikel;

export async function getStaticProps(context){
    let kode = context.params.kode;
    let data = Data.find(x => x.id == kode);

    let {img} = data;

    return {
        props:{
            img
        }
    }
}

export async function getStaticPaths(){
    return {
        paths:[
            {params : {kode : '1'}},
            {params : {kode : '2'}},
            {params : {kode : '3'}},
            {params : {kode : '4'}},
            {params : {kode : '5'}},
            {params : {kode : '6'}},
            {params : {kode : '7'}},
            {params : {kode : '8'}},
            {params : {kode : '9'}},
            {params : {kode : '10'}},
            {params : {kode : '11'}},
            {params : {kode : '12'}}
        ],
        fallback : false
    }
}