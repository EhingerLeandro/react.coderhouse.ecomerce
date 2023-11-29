//La siguiente línea de código se utilizaba para importar una función donde existía 
//una promesa, la cual era parte del AsyncMock.
/* import {mockFetchId} from '../AsyncMock/AsyncMock';*/

import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import{useParams} from 'react-router-dom';

import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig';
import { TailSpin } from 'react-loader-spinner';

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const {id} = useParams();
    
    //La siguiente línea de código se utilizaba para convertir un string proveniente de
    //useParams, donde dicho string tiene forma númerica, pero necesita ser convertido
    //en un verdadero número.
    /*let idAsNumber = parseInt(id,  10);*/

    useEffect( ()=>{
        setLoading(true);

        const docRef = doc(db, 'products', id)

        //antes de la siguiente línea estaba: 'mockFetchId(idAsNumber)'
        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = {id: data.id, ...data}
                setProduct(productAdapted)
            })
            .catch( error =>console.log('Error: ', error))
            .finally(()=>{
                setLoading(false)
            })
    },[id])

    console.log(product)
    
    return(
        <div className='row justify-content-center' >
                { 
                    loading
                    ?<div style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <TailSpin />
                     </div>
                    :<ItemDetail  {...product}/>
                }
        </div>
    )

}

export default ItemDetailContainer;