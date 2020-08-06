import Link from 'next/link';

function Navbar(){    
  return (         
<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="/images/er.png" width="60" height="60"/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
     <Link href="/"><a className="navbar-item" ><i classNameName="fas fa-home fa-fw"></i>
        Beranda
      </a></Link>

      <Link href="/"><a className="navbar-item">
      Pembayaran
      </a></Link>

      <div className="navbar-item has-dropdown is-hoverable">
       <Link href="/makanan" ><a className="navbar-link">
          makanan
        </a></Link>
        </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-link">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>    
    );
}
export default Navbar;