import { NavLink, Link } from 'react-router-dom';
import CarWidget from '../CartWidget/CartWidget'

const NavBar = () =>{
    return(
        <nav className=''>
           <Link to='/'> <h1 className=''>Logo Ecomerce</h1> </Link>
            <ul className=''>
                <NavLink to={'/category/smartphone'}>Smartphones</NavLink> 
                <NavLink to={'/category/tablet'}>Tablets</NavLink>
                <NavLink to={'/category/laptop'}>Laptops</NavLink>
            </ul>
            <CarWidget/>
        </nav>
    )
}

export default NavBar;