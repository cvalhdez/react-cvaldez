import './CartWidget.scss'

export const CartWidget = () => {
  return (
    <div className='cart' >
      <i className="bi bi-cart"></i>
      <p className="cantidadCarrito"> 10 </p>
    </div>
  )
}

export default CartWidget
