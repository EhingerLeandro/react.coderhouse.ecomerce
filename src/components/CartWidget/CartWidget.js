import cart from './Assets/shopping-cart.png'

const CartWidget =()=>{
    return(
        <div>
            <img src={cart} alt='Cart Widget'/><br/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;