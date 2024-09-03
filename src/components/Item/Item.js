import { Link } from "react-router-dom";
import './itemStyle.css';
import fallbackImage from "../../assets/no_disponible.jpg";

const Item = ({id, name, price, description, img, stock, category}) =>{
    return(
        <article className='card col-md-4 m-3'>
            <header className=''>
                <h2 className=''>{name}</h2>
            </header>
            <picture className='imgContainer'>
                    <img className='imgObjectFit' 
                    alt={name} 
                    src={img}
                    onError={(e)=> e.target.src=fallbackImage}/>
            </picture>
            <section className=''>
                <p>Precio: ${price}</p>
            </section>
            <footer className=''>
                <Link to={`/item/${id}`}><button type='button' className='btn btn-success'>Ver detalle</button></Link>
            </footer>
        </article>
    )
}

export default Item