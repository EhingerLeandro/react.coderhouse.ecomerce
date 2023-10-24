import {useState, useEffect} from 'react';
import {mockFetchId} from '../AsyncMock/AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import{useParams} from 'react-router-dom';

import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const {id} = useParams();
    
    let idAsNumber = parseInt(id,  10);

    useEffect( ()=>{
        setLoading(true);

        const docRef = doc(db, 'products', id)

        //antes de la siguiente línea estaba 'mockFetchId(idAsNumber)'
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
            <ItemDetail  {...product}/>
        </div>
    )

}

export default ItemDetailContainer;