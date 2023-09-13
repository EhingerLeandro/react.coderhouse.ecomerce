import Counter from '../Counter/Counter'

const ItemDetail =({id, name, category, stock, description, price, img}) =>{
    console.log(img)
    return(
        <article className=''>
            <header className=''>
                <h2>{name}</h2>
            </header>
            <picture className=''>
                <img className='' alt={name} src={img}/>
            </picture >
            <section className=''>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
            </section >
            <footer className=''>
                <p>{description}</p>
                <Counter initial={0}  stock={10} onAdd={(quantity)=>console.log('Cantidad agregada ', quantity)}/>

            </footer>

        </article>
        )
}

export default ItemDetail;