import Header from '../component/header';
import Footer from '../component/footer';
import Head from 'next/head';

const Layout = (props) =>(
    <div>
        <Head>
            <meta name="viewport"content="width-device-width, initialscale=1.0"/>
            <link rel="stylesheet"href="/css/bulma.css"/>
            </Head>
            <Header/>
                {props.Children}
            <Footer />
    </div>
);
export default Layout;