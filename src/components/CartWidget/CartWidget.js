import cartImage from './Assets/shopping-cart.png'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext'
import './CartWidget.css'

const CartWidget =()=>{
    const {cart} = useContext(CartContext)
    return(
        <div classNma='d-flex'>
            <img src={cartImage} alt='Cart Widget'/>
            <span className='CartWidget'>{cart.reduce((acc, prod)=> prod.cantidad + acc,0)}</span>
        </div>
    )
}

export default CartWidget;