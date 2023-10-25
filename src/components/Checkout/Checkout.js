import React from 'react';
import { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {db} from '../../services/firebase/firebaseConfig';
import {collection, addDoc} from 'firebase/firestore'; 
import './checkout.css'

const Checkout = () =>{

    const [nombre, setNombre] = useState ('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const {cart, vaciarCarrito, total, cantidadTotal} = useContext(CartContext);
    console.log(cart)
    

    const manejadorFormulario = (event) =>{

        // Evitando la recarga
        event.preventDefault()
        // Validacion solicitando que se hayan diligenciado los campos
        if(!nombre || !apellido || !telefono || !email || !emailConfirmation){
            setError('Por favor completa todos los campos.');
            return;
        }

        // Validación confirmando que los email coincidan
        if(email !== emailConfirmation){
            setError('Los campos del Email no coinciden, por favor corrige.');
            return
        }

        const orden = {
            items: cart.map( producto =>({
                id: producto.item.id,
                name: producto.item.name,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }
        
        console.log(orden)

        if(orden.items.length === 0){
            setError('No tienes productos para comprar!')
            return
        }

        addDoc(collection(db, 'ordenes'), orden)
        .then( docRef =>{
            setOrdenId(docRef.id);
            vaciarCarrito();
            setNombre('');
            setApellido('');
            setTelefono('');
            setEmail('');
            setEmailConfirmation('');
            setError('');
            
        })
        .catch(
            error=> {
                console.log('Error al crear la orden', error)
                setError('Se produjo un error al crear la orden!')
            }
        )
}

    return(
        <div>
            <h2>Checkout</h2>
            <form className='form' onSubmit={manejadorFormulario}>
                {
                    cart.map( producto =>(
                        <div key ={producto.item.id}>
                            <p>{producto.item.name} x {producto.cantidad}</p>
                            <p>{producto.item.price} </p>
                        </div>
                    ))
                }
                <p className='form-total'>TOTAL: ${total}</p>
                <hr/>
                <div className='form-group'>
                    <label className='form-label' htmlFor=''>Nombre</label>
                    <input type='text' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor=''>Apellido</label>
                    <input type='text' value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor=''>Telefono</label>
                    <input type='text' value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor=''> Email confirm</label>
                    <input type='email' value={emailConfirmation} onChange={(e)=> setEmailConfirmation(e.target.value)}/>
                </div>
                {
                    error && <p style={{color:'red'}}>{error}</p>
                }
                <button type={'submit'}>Subir Formulario</button>

            </form>
            
            {
                ordenId && (<p className='form-strong'>¡Gracias por tu compra! Tu número es: {ordenId}</p>)    
            }
        </div>
    )
}

export default Checkout