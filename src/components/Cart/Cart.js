import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import CartItem from '../CarItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () =>{
    const {vaciarCarrito, cart, cantidadTotal, total}= useContext(CartContext)
    /*Este es un renderizado condicional, si NO hay nada se renderiza el 
    primer return 'no hay nada en el carrito', en caso de que sí hay algo 
    se renderiza los items agregados en el segund return.*/
    if(cantidadTotal === 0){
        return(
            <div>
                <h4 style={{padding:'5px', fontFamily:'fantasy', color:'#33a', marginTop:'5px'}} >No hay productos agregados al carrito!</h4>
                <Link to='/'><button className='btn btn-success'>Volver a Tienda</button></Link>
            </div>
        )
    }
    return(
        <div>
            {/*Here cart comes from cartContext, it only has two properties*/}
            {cart.map(produ => <CartItem key={produ.item} {...produ} />)}
            <h3>Total ${total}</h3>
            {/*VaciarCarrito also comes from cartContext*/}
            <button className='btn btn-success m-1' onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link to='/checkout'><button className='btn btn-success m-1'>Checkout</button></Link>
        </div>
    )
}
export default Cart