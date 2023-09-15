import Item from '../Item/Item'

const ItemList =(prop)=>{
    
    return(
        <div className='row justify-content-center'>
           {prop.products.map((produ) =><Item key={produ.id} {...produ} />)}
        </div>
    )
}

export default ItemList;