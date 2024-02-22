import Item from '../Item/Item'

const ItemList =(prop)=>{
    
    return(
        /*Esta parte sirve como puente de unión entre el container y los items
        aquí se genera la lista donde aparecen todos los productos.*/
        <div className='row justify-content-center'>
           {prop.products.map((produ) =><Item key={produ.id} {...produ} />)}
        </div>
    )
}

export default ItemList;