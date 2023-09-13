import {useState, useEffect} from 'react';
import {mockFetchId} from '../AsyncMock/AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import{useParams} from 'react-router-dom';

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState(null);
    
    const {id} = useParams();
    
    let idAsNumber = parseInt(id,  10);

    useEffect( ()=>{
        mockFetchId(idAsNumber)
            .then(response => {
                setProduct(response)
            })
            .catch( error =>console.log('Error: ', error))

    },[id])
    console.log(product)
    return(
        <div>
            <ItemDetail className='' {...product}/>
        </div>
    )

}

export default ItemDetailContainer;