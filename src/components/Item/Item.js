import { Link } from "react-router-dom";
import './itemStyle.css';

const Item = ({id, name, price, description, img, stock, category}) =>{
    return(
        <article className='card col-md-4 m-3'>
            <header className=''>
                <h2 className=''>{name}</h2>
            </header>
            <picture className='imgContainer'>
                    <img className='imgObjectFit' alt={name} src={img}/>
            </picture>
            <section className=''>
                <p>Precio: ${price}</p>
            </section>
            {/* <section className=''>
                <p>Stock: {stock}</p>
            </section> */}
            <footer className=''>
                <Link to={`/item/${id}`}><button type='button' className='btn btn-success'>Ver detalle</button></Link>
            </footer>
        </article>
    )
}

export default Item