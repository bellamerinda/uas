import Navbar from "./navbar";

import Head from 'next/head'

function Header(){
    return(
        <div>
        <Head>
            <meta name="viewport"content="width-device-width, initialscale=1.0"/>
            <link rel="stylesheet"href="/css/bulma.css"/>
        </Head>
            <Navbar />
        </div>
    );
}
export default Header;