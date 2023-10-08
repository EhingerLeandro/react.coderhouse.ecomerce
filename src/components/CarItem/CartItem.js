import './CartItem.css'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'


const CartItem = ({item, cantidad})=>{
    const {eliminarProducto} = useContext(CartContext)
    return(
        <div className='CartItem'>
            
            <div className='CartItemBlock'>{item.name}</div>
            <div className='CartItemBlock'>${item.price}</div>
            <div className='CartItemBlock'>{cantidad} Unidades</div>
            <button className='btn btn-warning' onClick={()=>eliminarProducto(item.id)}> Borrar Item</button>
        </div>
    )
}

export default CartItem;