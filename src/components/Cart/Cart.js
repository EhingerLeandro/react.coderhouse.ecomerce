import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import CartItem from '../CarItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = () =>{
    const {vaciarCarrito, cart, cantidadTotal, total}= useContext(CartContext)

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
            {cart.map(produ => <CartItem key={produ.id} {...produ} />)}
            <h3>Total ${total}</h3>
            <button className='btn btn-success m-1' onClick={vaciarCarrito}>Vaciar carrito</button>
            <button className='btn btn-success m-1'>Check Out</button>
        </div>
    )
}
export default Cart