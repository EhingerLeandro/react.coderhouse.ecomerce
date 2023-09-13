import { Link } from "react-router-dom"

const Item = ({id, name, price, description, img, stock, category}) =>{
    return(
        <article className=''>
            <header className=''>
                <h2 className=''>{name}</h2>
            </header>
            <picture className=''>
                <img className='' alt={name} src={img}/>
            </picture>
            <section className=''>
                <p>Precio: {price}</p>
            </section>
            <footer className=''>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item