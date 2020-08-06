import Link from 'next/link';

function Navbar(){    
  return (         
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/er.png" width="60" height="60"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
     <Link href="/"><a class="navbar-item" ><i className="fas fa-home fa-fw"></i>
        Beranda
      </a></Link>

      <Link href="/"><a class="navbar-item">
      Pembayaran
      </a></Link>

      <div class="navbar-item has-dropdown is-hoverable">
       <Link href="/makanan" ><a class="navbar-link">
          makanan
        </a></Link>
        </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-link">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
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