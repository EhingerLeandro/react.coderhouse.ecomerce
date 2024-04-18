import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
/*import {mockFetch, mockCategory}  from "../AsyncMock/AsyncMock";*/
import {useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import{getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer=(props)=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(()=>{
        setLoading(true);
        // Antes en la siguiente linea estaba asyncFunction en vez de collectionRef
        // Antes en la linea con el simbolo '?' estaba 'mockCategory' .
        let collectionRef = (
            //Aquí se hace una busqueda dentro de todo la colección con y sin category.
            categoryId ? query( collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
            // Antes en la anterior línea estaba 'mockFetch'.
        );
        // Antes en la siguiente línea se había puesto 'asyncFunction(categoryId)'
        getDocs(collectionRef)
            .then(response =>{ 
                const productsAdapted = response.docs.map(doc=>{
                    const data = doc.data();
                    // .map() junto con el return del objeto funciona como .push()
                    /* La estructura {id: doc.id, ...data} sirve para agregar el
                    id generado de manera automática por firebase, de lo contrario
                    no sería posible ubicar cada objeto al interior del arreglo
                    generado en el respectivo useState*/ 
                    return {id: doc.id, ...data};
                })
                setProducts(productsAdapted);
            })
            .catch(error => console.log('Error: ', error))
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    return(
        <div >
            <h1 style={{padding:'5px', fontFamily:'fantasy', color:'#33a', marginTop:'5px'}}>{props.greeting}</h1>
            {
                loading
                ? <div style={{ height:'50vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <TailSpin/>
                  </div>
                :<ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer;