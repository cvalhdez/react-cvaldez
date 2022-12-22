import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {
  return(
  <header className="header">
    <nav className="nav">
      <a href="#" className="logo">
        LOGO     
      </a>
      <ul className="navMenu">
        <li className="navMenuItem">
          <a href="#" className="navMenuLink">INICIO</a>
        </li>
        <li className="navMenuItem">
          <a href="#" className="navMenuLink">NOSOTROS</a>
        </li>
        <li className="navMenuItem">
          <a href="#" className="navMenuLink">COMPRA EN LINEA</a>
        </li>
        <li className="navMenuItem">
          <a href="#" className="navMenuLink">PUNTOS DE VENTA</a>
        </li>
        <li className="navMenuItem">
          <a href="#" className="navMenuLink">CONTACTO</a>
        </li>
        <li className="navMenuItem">
          <a href="#" className="navMenuLink">
            <CartWidget/>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}