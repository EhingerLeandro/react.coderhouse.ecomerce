import {useState, createContext} from 'react';

//Cantidad inicial determinada desde el context.
export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
})

//Componente donde se generan las funcionalidades aplicadas desde el context a otros componentes.
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal]= useState(0);

    console.log(cart);
    console.log(total);
    console.log(cantidadTotal)

    //función que agrega un producto, si ya existe no crea un nuevo objeto, solo añade más cantidades.
    const agregarProducto =(item, cantidad)=>{
        const productoExistente= cart.find(prod => prod.item.id === item.id);
        if(!productoExistente){
            setCart(prev=>[...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev=> prev + (item.price * cantidad));
            // La sintaxis prev =>[...prev, {item, cantidad}] se utiliza
            // para crear un array a partir del estado anterior del carrito (prev),
            // agregar un nuevo objeto que representa el nuevo producto.
            // Se parece a .push() pero en react no se usa porque push trae problemas.
        } else{
             const carritoActualizado = cart.map( produ => {
                if(produ.item.id=== item.id){
                    return {...produ, cantidad: produ.cantidad + cantidad};
                }else {
                    return produ;
                }
             })
             setCart(carritoActualizado);
             setCantidadTotal( prev => prev + cantidad);
             setTotal (prev => prev + (item.price * cantidad));
        }
    }   
    //función que elimina un producto del carrito.
    const eliminarProducto = (id) =>{
        const productoEliminado =  cart.find(produ => produ.item.id === id);
        const carritoActualizado = cart.filter(prod => prod.item.id !== id);

        setCart(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.price * productoEliminado.cantidad))
    }
    //función que vacia el carrito y lo deja como al principio.
     const vaciarCarrito = () =>{
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
     }

     return(
        <CartContext.Provider value={{ cart, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal }}>
            {children}
        </CartContext.Provider>
     )
}

//children, se usa esta propiedad especial para representar a todos aquellos componenetes
// que puedan representar el carrito y sus métodos.

