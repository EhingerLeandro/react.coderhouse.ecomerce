import {useState} from 'react'

const Counter =({initial, stock, onAdd})=>{

    const [count, setCount] = useState(initial)

    const countSubtract = ()=>{
        if(count > 0 ){
            setCount( count - 1);
        }
    }

    const countAdd = () =>{
        if( count < stock ){
            setCount( count + 1);
        }
    }

    return(
        <di>
            <button onClick={countAdd}>+</button>
            <span>Cantidad: {count}</span>
            <button onClick={countSubtract}>-</button>
            <button onClick = {()=>onAdd(count)}>Agregar al Carrito </button>
        </di>
    )
} 

export default Counter