import { useState, useEffect } from "react";
import {mockFetch, mockCategory}  from "../AsyncMock/AsyncMock";
import {useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer=(props)=>{

    const [products, setProducts] = useState([]);
    
    const {categoryId} = useParams();

    console.log(categoryId)
    console.log(typeof(categoryId));

    let asyncFunction = categoryId ? mockCategory : mockFetch;

    useEffect(()=>{
        asyncFunction(categoryId)
            .then(response => setProducts(response))
            .catch(error => console.log('Error: ', error))
    }, [categoryId])

    return(
        <div >
            <h1 style={{padding:'5px', fontFamily:'fantasy', color:'#33a', marginTop:'5px'}}>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;