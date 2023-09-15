import cart from './Assets/shopping-cart.png'

const CartWidget =()=>{
    return(
        <div classNma='d-flex'>
            <img src={cart} alt='Cart Widget'/>
            <span>(0)</span>
        </div>
    )
}

export default CartWidget;