import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
// import {mockFetch, mockCategory}  from "../AsyncMock/AsyncMock";
import {useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import{getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer=(props)=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    console.log(categoryId)
    console.log(typeof(categoryId));

    useEffect(()=>{
        setLoading(true);
        // antes en la siguiente linea estaba asyncFunction en vez de collectionRef
        // antes en la linea con el simbolo '?' estaba 'mockCategory' 
        let collectionRef = categoryId 
        ? query( collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products');
        // antes de la anterior línea estaba 'mockFetch'

        // antes en la siguiente línea se había puesto 'asyncFunction(categoryId)'
        getDocs(collectionRef)
            .then(response =>{ 
                const productsAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
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