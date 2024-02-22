import Counter from '../Counter/Counter'
import './itemDetail.css'
// import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import {CartContext} from '../../context/CartContext';
import {useContext} from 'react'

const ItemDetail =({id, name, category, stock, description, price, img}) =>{
    
    const [quantityAdded, setAddQuantity] = useState(0)

    //Se trae la función agregarProducto con useContext.
    const {agregarProducto} =useContext(CartContext)

    const handleAddOn = (quantity)=>{
        setAddQuantity(quantity)

        //Ahora se crea objeto con item y cantidad
        const item= {id, name, price}
        agregarProducto(item, quantity)
    }

    return(
        <article className='card col-md-4 m-3'>
            <header className=''>
                <h2>{name}</h2>
            </header>
            <picture className='imgContainer'>
                <img className='imgObjectFit' alt={name} src={img}/>
            </picture >
            <section className=''>
                <p>Price: ${price}</p>
                <p>Stock: {stock} Unidades</p>
            </section >
            <footer className='card-foot'>
                <p>{description}</p>
                {
                    quantityAdded > 0 ?
                    <Link to='/cart'><button className='btn btn-warning'>Terminar Compra</button> </Link>:
                    <Counter initial={0}  stock={10} onAdd={handleAddOn}/> 
                }
            </footer>
        </article>
    )
}

export default ItemDetail;